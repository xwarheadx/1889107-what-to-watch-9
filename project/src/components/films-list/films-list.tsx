import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import { Films } from '../../types/films';
import { getFilmsByGenre } from '../../utils';
import FilmCard from '../film-card/film-card';

type FilmsListProps = {
  films: Films
}
export default function FilmsList({
  films,
}: FilmsListProps): JSX.Element {
  const [activeFilmId, setActiveFilmId] = useState('');
  const genre = useAppSelector((state) => state.genre);
  const currentFilms = getFilmsByGenre(films, genre);
  return (
    <div className="catalog__films-list">
      {
        currentFilms.map((film) => (
          <FilmCard
            key={film.id}
            film={film}
            activateFilm={setActiveFilmId}
            isActive={film.id === activeFilmId}
          />
        ))
      }
    </div>
  );
}
