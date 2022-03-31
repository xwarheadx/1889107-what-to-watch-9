import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { films, genres, selectedFilm, video } from './mocks/films';
import { store } from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        genres={genres}
        films={films}
        selectedFilm={selectedFilm}
        video={video}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
