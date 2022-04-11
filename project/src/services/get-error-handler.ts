import request from 'axios';
import { HttpCode } from '../const';
import { setError } from '../store/film-processor/film-processor';
import { clearErrorAction } from '../store/actions/api-actions';
import { store } from '../store/store';
import { Error } from '../types/error';

export const getErrorHandler = (error: Error): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const {response} = error;

  if (response) {
    switch (response.status) {
      case HttpCode.BadRequest:
      case HttpCode.Unauthorized:
      case HttpCode.NotFound: {
        store.dispatch(setError(response.data.error));
        store.dispatch(clearErrorAction());
        break;
      }
      default: store.dispatch(setError('Something went wrong. Please try again'));
        store.dispatch(clearErrorAction());
        break;
    }
  }
};
