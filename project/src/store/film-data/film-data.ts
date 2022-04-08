import { createSlice } from '@reduxjs/toolkit';
import { FilmData } from '../../types/state';
import { Names } from '../../const';

const initialState: FilmData = {
  films: [],
  promoFilm: null,
  isDataLoaded: false,
};

export const filmData = createSlice({
  name: Names.data,
  initialState,
  reducers: {
    loadPromoFilm: (state, action) => {
      state.promoFilm = action.payload;
      state.isDataLoaded = true;
    },
    dataIsLoading: (state) => {
      state.isDataLoaded  = false;
    },
    loadFilms: (state, action) => {
      state.films = action.payload;
      state.isDataLoaded = true;
    },
  },
});

export const {loadPromoFilm, dataIsLoading, loadFilms} = filmData.actions;
