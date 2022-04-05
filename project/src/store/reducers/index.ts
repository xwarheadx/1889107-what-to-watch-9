import { createReducer } from '@reduxjs/toolkit';
import { dataIsLoading, resetUser, setUser } from './../actions/actions';
import { AuthorizationStatus, DEFAULT_GENRE } from '../../const';
import { Film } from '../../types/films';
import { loadFilms, loadPromoFilm, setError, setGenre, requireAuthorization } from '../actions/actions';
import { UserData } from '../../types/user';

type initialStateTypes = {
  genre: string,
  films: Film[],
  promoFilm: Film | null,
  error: string,
  isDataLoaded: boolean,
  requireAuthorization: AuthorizationStatus,
  user: UserData | null,
  currentOpenFilm: Film | null,
  similarFilms: Film[],
}

const initialState: initialStateTypes = {
  genre: DEFAULT_GENRE,
  films: [],
  promoFilm: null,
  error: '',
  isDataLoaded: false,
  requireAuthorization: AuthorizationStatus.Unknown,
  user: null,
  currentOpenFilm: null,
  similarFilms: [],
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
      state.isDataLoaded = true;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.requireAuthorization = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    })
    .addCase(resetUser, (state) => {
      state.user = null;
    })
    .addCase(dataIsLoading, (state) => {
      state.isDataLoaded  = false;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.isDataLoaded = true;
    });
});

export {reducer};
