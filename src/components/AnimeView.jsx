import React, { useEffect } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAnime } from '../redux/anime/animeSlice';
import Loading from './Loading';

const AnimeView = () => {
  const { id } = useParams();
  const state = useSelector((state) => state.anime);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAnime());
  }, [dispatch]);

  const animes = state.anime.data;
  const anime = animes && animes.find((anime) => anime.mal_id === Number(id));

  const handleBack = () => {
    window.history.back();
  };

  if (!anime) {
    return <Loading />;
  }

  return (
    <div className="anime-view">
      <BiArrowBack
        id="back-icon"
        data-testid="back-icon"
        className="back-icon"
        onClick={handleBack}
      />
      <h2 className="anime-view-title">{anime.title}</h2>
      <img className="anime-view-image" src={anime.images.jpg.image_url} alt={anime.title} />
      <p className="anime-view-synopsis">{anime.synopsis}</p>
      {anime.airing
        ? <p className="airing">Airing</p>
        : <p className="finished">Finished</p>}
      {anime.episodes === 1
        ? (
          <p className="anime-view-episodes">
            {anime.episodes}
            {' '}
            episode
          </p>
        )
        : (
          <p className="anime-view-episodes">
            {anime.episodes}
            {' '}
            episodes
          </p>
        )}
    </div>
  );
};

export default AnimeView;
