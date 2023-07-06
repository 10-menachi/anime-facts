import React from 'react';
import { useDispatch } from 'react-redux';
import { searchAnime } from '../redux/anime/animeSlice';

const SearchBar = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    if (e.target.value) {
      dispatch(searchAnime(e.target.value));
    } else {
      dispatch(searchAnime(''));
    }
  };
  return (
    <div className="search-div">
      <input
        type="text"
        className="search-input"
        placeholder="Search for an anime..."
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
