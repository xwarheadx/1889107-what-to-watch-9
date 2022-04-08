import { Middleware } from '@reduxjs/toolkit';
import { mainReducer } from '../reducers/main-reducer';
import browserHistory from '../../browse-history';

type Reducer = ReturnType<typeof mainReducer>;

export const redirect: Middleware<unknown, Reducer> = (_store) => (next) => (action) => {
  if (action.type === 'user/redirectToRoute') {
    browserHistory.push(action.payload);
  }

  return next(action);
};
