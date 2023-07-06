import { animeSlice, fetchAnime, searchAnime } from '../src/redux/anime/animeSlice';

describe('animeSlice', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      anime: [],
      loading: false,
      error: null,
    };
  });

  test('should handle searchAnime', () => {
    const searchTerm = 'Saiki K.';
    const state = {
      anime: {
        data: [],
      },
      loading: false,
      error: null,
    };

    const newState = animeSlice.reducer(state, searchAnime(searchTerm));

    expect(newState.anime).toEqual({ data: [] });
    expect(newState.loading).toBe(false);
    expect(newState.error).toBe(null);
  });

  test('should handle fetchAnime.fulfilled', () => {
    const animeData = [
      { id: 1, title: 'The Disastrous Life of Saiki K.' },
    ];

    const newState = animeSlice.reducer(initialState, fetchAnime.fulfilled(animeData));

    expect(newState.anime).toEqual(animeData);
    expect(newState.loading).toBe(false);
    expect(newState.error).toBe(null);
  });

  test('should handle fetchAnime.rejected', () => {
    const errorMessage = 'An error occurred.';

    const newState = animeSlice.reducer(initialState, fetchAnime.rejected(errorMessage));

    expect(newState.anime).toEqual([]);
    expect(newState.loading).toBe(false);
    expect(newState.error).toEqual(errorMessage);
  });
});
