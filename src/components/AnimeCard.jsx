import PropTypes from 'prop-types';
import React from 'react';
import { PiArrowCircleRight } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const AnimeCard = ({
  styleId, malId, image, title, episodes,
}) => {
  const ids = [1, 4, 5, 8, 9, 12, 13, 16, 17, 20, 21, 24, 25];
  const style = {
    backgroundBlendMode: 'darken',
    backgroundColor: ids.includes(styleId) ? '#d2668e' : null,
  };
  return (
    <>
      <div
        className="anime-card"
        style={style}
      >
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
};

AnimeCard.propTypes = {
  malId: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  episodes: PropTypes.number.isRequired,
  styleId: PropTypes.number.isRequired,
};

export default AnimeCard;
