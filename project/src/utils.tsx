import { Film } from './types/films';
import { DEFAULT_GENRE } from './const';
import { State } from './types/state';

export const getFilmById = (films: Film[], id: string | undefined): Film | undefined => films.find((film) => film.id === String(id));

export const formatFilmRunTime = (time: number) => {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;

  return `${hours}h ${minutes}m`;
};
export const getAllGenres = (films: Film[]) => ([...new Set([DEFAULT_GENRE, ...films.map((film) => film.genre)])]);

export const getFilmsByGenre = (state: State) => {
  if(state.genre === DEFAULT_GENRE) {
    return state.films;
  }

  return state.films.filter((film) => film.genre === state.genre);
};
