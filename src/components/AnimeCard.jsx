import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const AnimeCard = ({
  malId, image, title, episodes,
}) => (
  <Link to={`/anime/${malId}`}>
    <div className="anime-card">
      <div className="card-image">
        <img className="anime-image" src={image} alt={title} />
      </div>
      <div className="anime-details">
        <p className="anime-title">{title}</p>
        <p className="anime-episodes">
          {episodes}
          {' '}
          episodes
        </p>
      </div>
    </div>
  </Link>
);

AnimeCard.propTypes = {
  malId: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  episodes: PropTypes.number.isRequired,
};

export default AnimeCard;
