import { Film } from './types/films';
import { DEFAULT_GENRE, MINUTES_IN_HOUR, TypeRatingText, TypeRatingValue} from './const';

export const getAllGenres = (films: Film[]) => ([...new Set([DEFAULT_GENRE, ...films.map((film) => film.genre)])]);

export const getFilmsByGenre = (films: Film[], genre: string) => {
  if(genre === DEFAULT_GENRE) {
    return films;
  }
  return films.filter((film) => film.genre === genre);
};

export const getTextRatingDescription = (rating: number): TypeRatingText => {
  if(rating < TypeRatingValue.Bad) {
    return TypeRatingText.Bad;
  } else if(rating > TypeRatingValue.Bad && rating < TypeRatingValue.Normal) {
    return TypeRatingText.Normal;
  } else if(rating > TypeRatingValue.Normal && rating < TypeRatingValue.Good) {
    return TypeRatingText.Good;
  } else if(rating > TypeRatingValue.Good && rating < TypeRatingValue.VeryGood) {
    return TypeRatingText.VeryGood;
  }

  return TypeRatingText.Awesome;
};

export const formatFilmRunTime = (time: number) => {
  const hours = Math.floor(time / MINUTES_IN_HOUR);
  const minutes = time % MINUTES_IN_HOUR;

  return `${hours}h ${minutes}m`;
};

export const formatDate = (date: string): string => {
  const newDate = new Date(date);
  return newDate.toLocaleString('en-US', {month: 'long', day: 'numeric', year: 'numeric'});
};
export const checkFilmInFavoriteList = (film: Film, favoritList: Film[]) => {
  const result = favoritList.filter((filmFromList) => filmFromList.id === film.id);

  if(result.length > 0) {
    return true;
  }

  return false;
};

