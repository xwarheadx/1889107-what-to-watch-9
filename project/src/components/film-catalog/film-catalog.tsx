import { useState } from 'react';
import { COUNT_LOADED_CARD, DEFAULT_GENRE } from '../../const';
import { Film } from '../../types/films';
import { getAllGenres, getFilmsByGenre } from '../../utils';
import { FilmCard } from '../film-card/film-card';
import GenresList from '../genres-list/genres-list';
import ShowMoreButton from '../show-more-button/show-more-button';

type FilmsCatalogProps = {
  films: Film[]
}
export default function FilmsCatalog({
  films,
}: FilmsCatalogProps): JSX.Element {
  const allGenres = getAllGenres(films);
  const [genre, setGenre] = useState(DEFAULT_GENRE);
  const [countCardShow, setCountCardShow] = useState(COUNT_LOADED_CARD);
  const currentFilms = getFilmsByGenre(films, genre).slice(0, countCardShow);

  return (
    <>
      <GenresList currentGenre={genre} setGenre={setGenre} allGenres={allGenres} setCountCardShow={setCountCardShow}/>
      <div className="catalog__films-list">
        {currentFilms.map((film) => (<FilmCard key={film.id} film={film}/>))}
      </div>
      {countCardShow <= currentFilms.length ? <ShowMoreButton countCardShow={countCardShow} setCountCardShow={setCountCardShow}/> : ''}
    </>);
}
