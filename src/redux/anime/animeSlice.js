import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  anime: [],
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
const animeSlice = createSlice({
  name: 'anime',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAnime.pending]: (state) => {
      state.loading = true;
    },
    [fetchAnime.fulfilled]: (state, { payload }) => {
      state.anime = payload;
      state.loading = false;
      state.error = null;
    },
    [fetchAnime.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

const animeReducer = animeSlice.reducer;
export { fetchAnime };
export default animeReducer;
