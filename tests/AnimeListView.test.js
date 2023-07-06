import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import AnimeCard from '../src/components/AnimeCard';

describe('AnimeCard', () => {
  const anime = {
    malId: 1,
    image: 'anime-image.jpg',
    title: 'Example Anime',
    episodes: 12,
  };

  test('renders AnimeCard component with correct props', () => {
    const { getByText, getByAltText } = render(
      <MemoryRouter>
        <AnimeCard
          malId={anime.malId}
          image={anime.image}
          title={anime.title}
          episodes={anime.episodes}
        />
      </MemoryRouter>,
    );

    const animeTitle = getByText('Example Anime');
    const animeEpisodes = getByText('12 episodes');
    const animeImage = getByAltText('Example Anime');

    expect(animeTitle).toBeInTheDocument();
    expect(animeEpisodes).toBeInTheDocument();
    expect(animeImage).toBeInTheDocument();
    expect(animeImage.getAttribute('src')).toBe('anime-image.jpg');
  });
});
