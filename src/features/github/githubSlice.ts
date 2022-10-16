import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface GithubState {
  favorites: string[];
}

const LS_FAV_REPO = 'fav';

const initialState: GithubState = {
  favorites: JSON.parse(localStorage.getItem(LS_FAV_REPO) ?? '[]'),
};

export const githubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<string>) => {
      state.favorites.push(action.payload);
      localStorage.setItem(LS_FAV_REPO, JSON.stringify(state.favorites));
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter((f) => f !== action.payload);
      localStorage.setItem(LS_FAV_REPO, JSON.stringify(state.favorites));
    },
  },
});

export const selectFavorites = (state: RootState) => state.github.favorites;
export const { addFavorite, removeFavorite } = githubSlice.actions;

export default githubSlice.reducer;
