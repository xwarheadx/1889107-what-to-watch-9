import { MouseEvent } from 'react';
import { COUNT_LOADED_CARD } from '../../const';

type GenresItemProps = {
  allGenres: string[],
  setCountCardShow: (value: number) => void,
  setGenre: (genre: string) => void,
  currentGenre: string,
}

function GenresItemList({allGenres, setCountCardShow, setGenre, currentGenre}: GenresItemProps): JSX.Element {

  const handleChangeGenreClick = (evt: MouseEvent, genre: string) => {
    evt.preventDefault();
    setGenre(genre);
    setCountCardShow(COUNT_LOADED_CARD);
  };

  return (
    <ul className="catalog__genres-list">
      {allGenres.map((genre: string) => (
        <li key={genre} className={`catalog__genres-item ${currentGenre === genre && 'catalog__genres-item--active'}`}>
          <a href="/" className="catalog__genres-link" onClick={(evt) => handleChangeGenreClick(evt, genre)}>
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default GenresItemList;
