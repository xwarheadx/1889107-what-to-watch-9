export enum AppRoute {
Main = '/',
MyList = '/mylist',
SignIn = '/login',
Film = '/films/:id',
Films = '/films',
AddReview = '/films/:id/review',
Player = '/player/:id',
PromoFilm = '/promo',
Error404 = '/404',
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

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}
export enum TYPE_RATING_TEXT {
  Bad = 'Bad',
  Normal = 'Normal',
  Good = 'Good',
  VeryGood = 'VeryGood',
  Awesome = 'Awesome'
}

export enum TYPE_RATING_VALUE {
  Bad = 3,
  Normal = 5,
  Good = 8,
  VeryGood = 10
}

export enum Names {
  data = 'DATA',
  film = 'FILM',
  user = 'USER',
}

export enum FavoriteFetchType {
  Add = 1,
  Remove = 0,
}

export const DEFAULT_GENRE = 'All genres';
export const COUNT_LOADED_CARD = 8;
export const TIMEOUT_SHOW_ERROR = 2000;
