import { Films } from '../../types/films';
import FilmsList from '../films-list/films-list';

type MoreLikeThisProps = {
  films: Films,
  genre: string,
}

function MoreLikeThis({films, genre}: MoreLikeThisProps): JSX.Element {
  const likeFilms = films.filter((film) => film.genre === genre);

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <FilmsList films={likeFilms}/>
    </section>
  );
}
export default MoreLikeThis;
