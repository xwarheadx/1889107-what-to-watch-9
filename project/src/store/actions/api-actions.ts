import { AppRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../../const';
import { store, api } from '../store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Film } from '../../types/films';
import { UserComment } from '../../types/comment';
import { redirectToRoute } from './actions';
import { getErrorHandler } from '../../services/get-error-handler';
import { addNewComment } from '../../services/create-api';
import { AuthData, UserData } from '../../types/user';
import { FavoriteFilmFetch } from '../../types/favorite';
import { dropToken, saveToken } from '../../services/token';
import { loadData, loadFavoriteList, loadFilms, loadPromoFilm } from '../film-data/film-data';
import { requireAuthorization, resetUser, setUser } from '../user-processor/user-processor';
import { setError } from '../film-processor/film-processor';

export const addFavoriteAction = createAsyncThunk(
  'data/addFavorite',
  async ({filmId, type}: FavoriteFilmFetch) => {
    try {
      await api.post<Film>(`${AppRoute.Favorite}/${filmId}/${type}`);
      store.dispatch(fetchFavoriteListAction());
    } catch (error) {
      getErrorHandler(error);
    }
  },
);

export const fetchFavoriteListAction = createAsyncThunk(
  'data/fetchFavoriteList',
  async () => {
    const {data} = await api.get<Film>(`${AppRoute.Favorite}`);
    store.dispatch(loadFavoriteList(data));
  },
);

export const fetchFilmsAction = createAsyncThunk(
  'data/fetchFilms',
  async () => {
    try {
      const {data} = await api.get<Film[]>(AppRoute.Films);
      store.dispatch(loadData());
      store.dispatch(setError(''));
      store.dispatch(loadFilms(data));
    } catch (error) {
      getErrorHandler(error);
      store.dispatch(redirectToRoute('/500'));
    }
  },
);

export const fetchPromoFilmAction = createAsyncThunk(
  'data/fetchPromoFilm',
  async () => {
    try {
      store.dispatch(loadData());
      const {data} = await api.get<Film>(AppRoute.PromoFilm);
      store.dispatch(loadPromoFilm(data));
    } catch (error) {
      getErrorHandler(error);
    }
  },
);
export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try {
      const {data} = await api.get(AppRoute.Login);
      store.dispatch(setUser(data));
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (error) {
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({email, password}: AuthData) => {
    try {
      const {data} = await api.post<UserData>(AppRoute.Login, {email, password});
      saveToken(data.token);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(redirectToRoute(AppRoute.Main));
      store.dispatch(setUser(data));
    } catch (error) {
      getErrorHandler(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    try {
      await api.delete(AppRoute.Logout);
      dropToken();
      store.dispatch(resetUser());
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    } catch (error) {
      getErrorHandler(error);
    }
  },
);

export const addCommentAction = createAsyncThunk(
  'film/addComment',
  async ({filmId, comment, rating}: UserComment) => {
    try {
      await addNewComment(comment,rating,filmId);
      store.dispatch(redirectToRoute(`${AppRoute.Films}/${filmId}`));
    } catch (error) {
      getErrorHandler(error);

    }
  },
);
export const clearErrorAction = createAsyncThunk(
  'film/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError('')),
      TIMEOUT_SHOW_ERROR,
    );
  },
);
