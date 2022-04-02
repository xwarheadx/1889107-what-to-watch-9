import { AppRoute, TIMEOUT_SHOW_ERROR } from '../../const';
import { store, api } from '../store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Film } from '../../types/films';
import { loadFilms, loadPromoFilm, setError } from './actions';
import { errorHandle } from '../../services/error-handler';

export const clearErrorAction = createAsyncThunk(
  'game/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError('')),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchFilmsAction = createAsyncThunk(
  'data/fetchFilms',
  async () => {
    try {
      const {data} = await api.get<Film[]>(AppRoute.Films);
      store.dispatch(loadFilms(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchPromoFilmAction = createAsyncThunk(
  'data/fetchPromoFilm',
  async () => {
    try {
      const {data} = await api.get<Film>(AppRoute.PromoFilm);
      store.dispatch(loadPromoFilm(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);
