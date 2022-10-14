import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface CounterState {}

const initialState: CounterState = {};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
});

export const selectCount = (state: RootState) => state;

export default counterSlice.reducer;
