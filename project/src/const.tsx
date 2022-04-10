export enum AppRoute {
Main = '/',
MyList = '/mylist',
SignIn = '/login',
Film = '/films/:id',
Films = '/films',
AddReview = '/films/:id/review',
Player = '/player/:id',
PromoFilm = '/promo',
Login = '/login',
Logout = '/logout',
Comment = '/comments',
Favorite = '/favorite',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum HttpCode {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}
export enum TypeRatingText {
  Bad = 'Bad',
  Normal = 'Normal',
  Good = 'Good',
  VeryGood = 'VeryGood',
  Awesome = 'Awesome'
}

export enum TypeRatingValue {
  Bad = 3,
  Normal = 5,
  Good = 8,
  VeryGood = 10
}

export enum TypeNames {
  data = 'DATA',
  film = 'FILM',
  user = 'USER',
}

export enum TypeFavoriteFetch {
  Add = 1,
  Remove = 0,
}

export const DEFAULT_GENRE = 'All genres';
export const COUNT_LOADED_CARD = 8;
export const TIMEOUT_SHOW_ERROR = 2000;
export const MAX_RATING = 10;
export const MIN_RATING = 0;
export const PREVIEW_TIMEOUT = 1000;
export const MIN_USER_COMMENT_SYMBOLS_COUNT = 50;
export const MAX_USER_COMMENT_SYMBOLS_COUNT = 400;
export const MINUTES_IN_HOUR = 60;
