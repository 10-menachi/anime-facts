import PropTypes from 'prop-types';
import React from 'react';
import { PiArrowCircleRight } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const AnimeCard = ({
  malId, image, title, episodes,
}) => (
  <>
    <div className="anime-card">
      <div className="card-image">
        <img className="anime-image" src={image} alt={title} />
      </div>
      <div className="anime-details">
        <Link to={`/anime/${malId}`}>
          <PiArrowCircleRight className="icon arrow-right" />
        </Link>
        <p className="anime-title">{title}</p>
        <p className="anime-episodes">
          {episodes}
          {' '}
          episodes
        </p>
      </div>
    </div>
  </>
);

AnimeCard.propTypes = {
  malId: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  episodes: PropTypes.number.isRequired,
};

export default AnimeCard;
