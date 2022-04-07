import { FilmProcess } from '../../types/state';
import { createSlice } from '@reduxjs/toolkit';
import { Names } from '../../const';

const initialState: FilmProcess = {
  error: '',
};

export const filmProcessor = createSlice({
  name: Names.film,
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {setError} = filmProcessor.actions;
