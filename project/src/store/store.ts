import { createAPI } from '../services/create-api';
import { configureStore } from '@reduxjs/toolkit';
import { mainReducer } from './reducers/main-reducer';
import { redirect } from './middlewares/redirect';

export const api = createAPI();
export const store = configureStore({
  reducer: mainReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});
