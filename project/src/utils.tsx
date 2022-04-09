import { Film } from './types/films';
import { DEFAULT_GENRE, TYPE_RATING_TEXT, TYPE_RATING_VALUE} from './const';

export const getAllGenres = (films: Film[]) => ([...new Set([DEFAULT_GENRE, ...films.map((film) => film.genre)])]);

export const getFilmsByGenre = (films: Film[], genre: string) => {
  if(genre === DEFAULT_GENRE) {
    return films;
  }
  return films.filter((film) => film.genre === genre);
};


export const getTextRatingDescription = (rating: number): TYPE_RATING_TEXT => {
  if(rating < TYPE_RATING_VALUE.Bad) {
    return TYPE_RATING_TEXT.Bad;
  } else if(rating > TYPE_RATING_VALUE.Bad && rating < TYPE_RATING_VALUE.Normal) {
    return TYPE_RATING_TEXT.Normal;
  } else if(rating > TYPE_RATING_VALUE.Normal && rating < TYPE_RATING_VALUE.Good) {
    return TYPE_RATING_TEXT.Good;
  } else if(rating > TYPE_RATING_VALUE.Good && rating < TYPE_RATING_VALUE.VeryGood) {
    return TYPE_RATING_TEXT.VeryGood;
  }

  return TYPE_RATING_TEXT.Awesome;
};

export const formatFilmRunTime = (time: number) => {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;

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
