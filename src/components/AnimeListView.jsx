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
  let styleId = 0;

  return (
    <div className="anime-list-view">
      {state.loading && <Loading />}
      {' '}
      {!state.loading
        && animes
        && animes.map((anime) => {
          styleId += 1;

          if (
            anime.mal_id
            && anime.images.jpg
            && anime.title
            && anime.episodes
          ) {
            return (
              <AnimeCard
                key={anime.mal_id}
                malId={anime.mal_id}
                image={anime.images.jpg.image_url}
                title={anime.title}
                episodes={anime.episodes}
                styleId={styleId}
              />
            );
          }
          return null;
        })}
    </div>
  );
};

export default AnimeListView;
