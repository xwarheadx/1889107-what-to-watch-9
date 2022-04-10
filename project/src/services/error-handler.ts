import request from 'axios';
import { HttpCode } from '../const';
import { setError } from '../store/film-processor/film-processor';
import { clearErrorAction } from '../store/actions/api-actions';
import { store } from '../store/store';
import { Error } from '../types/error';

export const errorHandler = (error: Error): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const handleError = (message: string) => {
    store.dispatch(setError(message));
    store.dispatch(clearErrorAction());
  };

  const {response} = error;

  if (response) {
    switch (response.status) {
      case HttpCode.BAD_REQUEST:
      case HttpCode.UNAUTHORIZED:
      case HttpCode.NOT_FOUND:
        handleError(response.data.error);
        break;
    }
  }
};
