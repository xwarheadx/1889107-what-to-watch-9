export enum AppRoute {
Main = '/',
MyList = '/mylist',
SignIn = '/login',
Film = '/films/:id',
AddReview = '/films/:id/review',
Player = '/player/:id',
Error404 = '*'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const DEFAULT_GENRE = 'All genres';
