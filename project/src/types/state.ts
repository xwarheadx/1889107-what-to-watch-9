import { AuthorizationStatus } from '../const';
import { store } from '../store/store';
import { Film } from './films';
import { UserData } from './user.js';

export type UserProcess = {
  requireAuthorization: AuthorizationStatus,
  user: UserData | null,
};

export type FilmProcess = {
  error: string,
};

export type FilmData = {
  films: Film[],
  promoFilm: Film | null,
  isDataLoaded: boolean,
};
export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
