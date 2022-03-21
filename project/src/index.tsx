import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { films, genres, selectedFilm, video } from './mocks/films';

ReactDOM.render(
  <React.StrictMode>
    <App
      genres={genres}
      films={films}
      selectedFilm={selectedFilm}
      video={video}
    />
  </React.StrictMode>,
  document.getElementById('root'));
