import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface GithubState {
  favorites: string[];
}

const initialState: GithubState = {
  favorites: [],
};

export const githubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<string>) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter((f) => f !== action.payload);
    },
  },
});

export const selectFavorites = (state: RootState) => state.github.favorites;
export const { addFavorite, removeFavorite } = githubSlice.actions;

export default githubSlice.reducer;
