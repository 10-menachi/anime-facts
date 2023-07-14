import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import SearchBar from '../src/components/SearchBar';
import { searchAnime } from '../src/redux/anime/animeSlice';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

jest.mock('../src/redux/anime/animeSlice', () => ({
  searchAnime: jest.fn(),
}));

describe('SearchBar', () => {
  it('dispatches searchAnime action on input change', () => {
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);
    const { getByPlaceholderText } = render(<SearchBar />);
    const input = getByPlaceholderText('Search for an anime...');

    fireEvent.change(input, { target: { value: 'One Piece' } });

    expect(dispatch).toHaveBeenCalledWith(searchAnime('One Piece'));
  });

  it('dispatches searchAnime action with an empty string when input is cleared', () => {
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);
    const { getByPlaceholderText } = render(<SearchBar />);
    const input = getByPlaceholderText('Search for an anime...');

    fireEvent.change(input, { target: { value: 'Naruto' } });
    fireEvent.change(input, { target: { value: '' } });

    expect(dispatch).toHaveBeenCalledWith(searchAnime(''));
  });
});
