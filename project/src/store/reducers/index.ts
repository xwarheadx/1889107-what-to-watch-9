import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_GENRE } from '../../const';
import { Film } from '../../types/films';
import { loadFilms, loadPromoFilm, setError, setGenre } from '../actions/actions';

type initialStateTypes = {
  genre: string,
  films: Film[],
  promoFilm: Film | null,
  error: string,
  isDataLoaded: boolean,
}

const initialState: initialStateTypes = {
  genre: DEFAULT_GENRE,
  films: [],
  promoFilm: null,
  error: '',
  isDataLoaded: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.isDataLoaded = true;
    });
});

export {reducer};
