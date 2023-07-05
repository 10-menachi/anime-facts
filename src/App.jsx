import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AnimeListView from './components/AnimeListView';
import AnimeView from './components/AnimeView';
import SearchBar from './components/SearchBar';

const App = () => (
  <div>
    <SearchBar />
    <Routes>
      <Route path="/" element={<AnimeListView />} />
      <Route path="/anime/:id" element={<AnimeView />} />
    </Routes>
  </div>
);

export default App;
