import { FilmProcess } from '../../types/state';
import { createSlice } from '@reduxjs/toolkit';
import { TypeNames } from '../../const';

const initialState: FilmProcess = {
  error: '',
};

export const filmProcessor = createSlice({
  name: TypeNames.film,
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {setError} = filmProcessor.actions;
