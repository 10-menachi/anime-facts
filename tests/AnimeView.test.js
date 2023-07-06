import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AnimeView from '../src/components/AnimeView';
import { fetchAnime } from '../src/redux/anime/animeSlice';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));
jest.mock('react-router-dom', () => ({
  useParams: jest.fn(),
}));

jest.mock('../src/redux/anime/animeSlice', () => ({
  fetchAnime: jest.fn(),
}));

describe('AnimeView', () => {
  beforeEach(() => {
    useSelector.mockReturnValue({
      anime: {
        data: [
          {
            mal_id: 1,
            title: 'Naruto',
            images: {
              jpg: {
                image_url: 'naruto.jpg',
              },
            },
            synopsis: 'A story about a young ninja.',
            airing: true,
            episodes: 500,
          },
        ],
      },
    });
    useDispatch.mockReturnValue(jest.fn());
    useParams.mockReturnValue({ id: '1' });
  });

  afterEach(() => {
    useSelector.mockClear();
    useDispatch.mockClear();
    useParams.mockClear();
    fetchAnime.mockClear();
  });

  test('navigates back when the back icon is clicked', () => {
    const { getByTestId } = render(<AnimeView />);

    const backIcon = getByTestId('back-icon');
    const backSpy = jest.spyOn(window.history, 'back');

    fireEvent.click(backIcon);

    expect(backSpy).toHaveBeenCalled();
    backSpy.mockRestore();
  });
});
