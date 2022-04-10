import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { AppRoute } from '../const';
import { errorHandler } from './error-handler';
import { getToken } from './token';

const BACKEND_URL = 'https://9.react.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );
  return api;
};
export const getFilmById = async (filmId: number) => {
  const api = createAPI();
  try {
    const {data} = await api.get(`${AppRoute.Films}/${filmId}`);
    return data;
  } catch (error) {
    errorHandler(error);
  }
};

export const getSimilarFilms = async (filmId: number) => {
  const api = createAPI();
  try {
    const {data} = await api.get(`${AppRoute.Films}/${filmId}/similar`);
    return data;
  } catch (error) {
    errorHandler(error);
  }
};

export const getFilmComments = async (filmId: number) => {
  const api = createAPI();
  try {
    const {data} = await api.get(`${AppRoute.Comment}/${filmId}`);
    return data;
  } catch (error) {
    errorHandler(error);
  }
};

export const addNewComment = async (comment: string,  rating: number, filmId: number) => {
  const api = createAPI();
  try {
    const res = await api.post(`${AppRoute.Comment}/${filmId}`, {comment, rating});
    return res;
  } catch (error) {
    errorHandler(error);
  }
};
