import request from 'axios';
import { HTTP_CODE } from '../const';
import { setError } from '../store/film-processor/film-processor';
import { clearErrorAction } from '../store/actions/api-actions';
import { store } from '../store/store';
import { Error } from '../types/error';

export const errorHandle = (error: Error): void => {
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
      case HTTP_CODE.BAD_REQUEST:
      case HTTP_CODE.UNAUTHORIZED:
      case HTTP_CODE.NOT_FOUND:
        handleError(response.data.error);
        break;
    }
  }
};
