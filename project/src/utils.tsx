import { Film } from './types/films';
export const getFilmById = (films: Film[], id: string | undefined): Film | undefined => films.find((film) => film.id === String(id));
export const formatFilmRunTime = (time: number) => {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;

  return `${hours}h ${minutes}m`;
};

