import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnime } from '../redux/anime/animeSlice';
import AnimeCard from './AnimeCard';
import Loading from './Loading';

const AnimeListView = () => {
  const state = useSelector((state) => state.anime);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAnime());
  }, [dispatch]);
  const animes = state.anime.data;
  return (
    <div className="anime-list-view">
      {!animes && <Loading />}
      {animes && animes.map((anime) => (
        <AnimeCard
          key={anime.mal_id}
          malId={anime.mal_id}
          image={anime.images.jpg.image_url}
          title={anime.title}
          episodes={anime.episodes}
        />
      ))}
    </div>
  );
};

export default AnimeListView;
