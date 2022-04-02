import {createAction} from '@reduxjs/toolkit';
import { Film } from '../../types/films';

export const setGenre = createAction('film/setGenre', (genre: string) => ({payload: genre}));
export const loadFilms = createAction('data/loadFilms', (films: Film[]) => ({payload: films}));
export const loadPromoFilm = createAction('data/loadPromoFilm', (promoFilm: Film) => ({payload: promoFilm}));
export const setError = createAction<string>('game/setError');
