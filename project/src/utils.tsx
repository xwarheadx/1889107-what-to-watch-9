import { Film } from './types/films';
import { DEFAULT_GENRE } from './const';

export const getFilmById = (films: Film[], id: string | undefined): Film | undefined => films.find((film) => film.id === String(id));

export const formatFilmRunTime = (time: number) => {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;

  return `${hours}h ${minutes}m`;
};
export const getAllGenres = (films: Film[]) => ([...new Set([DEFAULT_GENRE, ...films.map((film) => film.genre)])]);

export const getFilmsByGenre = (films: Film[], genre: string) => {
  if(genre === DEFAULT_GENRE) {
    return films;
  }

  return films.filter((film) => film.genre === genre);
};
