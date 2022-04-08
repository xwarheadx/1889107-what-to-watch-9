import { useMemo, useState } from 'react';
import { COUNT_LOADED_CARD, DEFAULT_GENRE } from '../../const';
import { Film } from '../../types/films';
import { getAllGenres, getFilmsByGenre } from '../../utils';
import FilmCard from '../film-card/film-card';
import GenresItemList from '../genres-list/genres-list';
import ShowMoreButton from '../show-more-button/show-more-button';

type FilmsListProps = {
  films: Film[]
}
export default function FilmsList({
  films,
}: FilmsListProps): JSX.Element {
  const allGenres = getAllGenres(films);
  const [genre, setGenre] = useState(DEFAULT_GENRE);
  const [countCardShow, setCountCardShow] = useState(COUNT_LOADED_CARD);
  const currentFilms = getFilmsByGenre(films, genre).slice(0, countCardShow);
  const FilmCards = useMemo(() => currentFilms.map((film) => (<FilmCard key={film.id} film={film}/>)), [currentFilms]);
  return (
    <>
      <GenresItemList currentGenre={genre} setGenre={setGenre} allGenres={allGenres} setCountCardShow={setCountCardShow}/>
      <div className="catalog__films-list">
        {FilmCards}
      </div>
      {countCardShow <= currentFilms.length ? <ShowMoreButton countCardShow={countCardShow} setCountCardShow={setCountCardShow}/> : ''}
    </>);
}
