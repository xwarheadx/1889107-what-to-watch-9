import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../const';
import { Film } from '../../types/films';
import { UserData } from '../../types/user';

export const setGenre = createAction<string>('film/setGenre');
export const loadFilms = createAction<Film[]>('data/loadFilms');
export const loadPromoFilm = createAction<Film>('data/loadPromoFilm');
export const setError = createAction<string>('film/setError');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const redirectToRoute = createAction<string>('user/redirectToRoute');
export const setUser = createAction<UserData>('user/setUser');
export const resetUser = createAction('user/resetUser');
export const dataIsLoading = createAction('data/dataIsLoading');
