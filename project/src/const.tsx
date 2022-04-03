export enum AppRoute {
Main = '/',
MyList = '/mylist',
SignIn = '/login',
Film = '/films/:id',
Films = '/films',
AddReview = '/films/:id/review',
Player = '/player/:id',
PromoFilm = '/promo',
Error404 = '/404'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

export const DEFAULT_GENRE = 'All genres';
export const COUNT_LOADED_CARD = 8;
export const TIMEOUT_SHOW_ERROR = 2000;
