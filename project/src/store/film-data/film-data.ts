import { createSlice } from '@reduxjs/toolkit';
import { FilmData } from '../../types/state';
import { Names } from '../../const';

const initialState: FilmData = {
  films: [],
  promoFilm: null,
  isFilmDataLoaded: false,
  favoriteList: [],
};

export const filmData = createSlice({
  name: Names.data,
  initialState,
  reducers: {
    loadPromoFilm: (state, action) => {
      state.promoFilm = action.payload;
      state.isFilmDataLoaded = true;
    },
    dataIsLoading: (state) => {
      state.isFilmDataLoaded = false;
    },
    loadFilms: (state, action) => {
      state.films = action.payload;
      state.isFilmDataLoaded = true;
    },
    loadFavoriteList: (state, action) => {
      state.favoriteList = action.payload;
      state.isFilmDataLoaded = true;
    },
  },
});

export const {loadPromoFilm, dataIsLoading, loadFilms, loadFavoriteList} = filmData.actions;
