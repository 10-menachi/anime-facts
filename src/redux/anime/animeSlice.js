import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const initialState = {
  anime: {
    data: [],
  },
  loading: false,
  error: null,
};

const baseUrl = 'https://api.jikan.moe/v4/anime';
const fetchAnime = createAsyncThunk('anime/fetchAnime', async () => {
  try {
    const response = await fetch(baseUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
});
export const animeSlice = createSlice({
  name: 'anime',
  initialState,
  reducers: {
    searchAnime: (state, { payload }) => {
      const searchTerm = payload.toLowerCase();
      const search = state.anime.data.filter((anime) => {
        const animeTitle = anime.title.toLowerCase();
        return animeTitle.includes(searchTerm);
      });
      state.anime.data = search.length ? search : state.anime.data;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnime.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAnime.fulfilled, (state, { payload }) => {
        state.anime = payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchAnime.rejected, (state) => {
        state.loading = false;
        state.error = 'An error occurred.';
      });
  },
});

const animeReducer = animeSlice.reducer;
export const { searchAnime } = animeSlice.actions;
export { fetchAnime };
export default animeReducer;
