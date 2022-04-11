import { MouseEvent } from 'react';
import { COUNT_LOADED_CARD, MAX_GENRE_ARRAY } from '../../const';

type GenresListProps = {
  allGenres: string[],
  setCountCardShow: (value: number) => void,
  setGenre: (genre: string) => void,
  currentGenre: string,
}

function GenresList({allGenres, setCountCardShow, setGenre, currentGenre}: GenresListProps): JSX.Element {

  const handleChangeGenreClick = (evt: MouseEvent, genre: string) => {
    evt.preventDefault();
    setGenre(genre);
    setCountCardShow(COUNT_LOADED_CARD);
  };

  return (
    <ul className="catalog__genres-list">
      {allGenres.slice(0, MAX_GENRE_ARRAY).map((genre: string) => (
        <li key={genre} className={`catalog__genres-item ${currentGenre === genre && 'catalog__genres-item--active'}`}>
          <a href="/" className="catalog__genres-link" onClick={(evt) => handleChangeGenreClick(evt, genre)}>
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default GenresList;
