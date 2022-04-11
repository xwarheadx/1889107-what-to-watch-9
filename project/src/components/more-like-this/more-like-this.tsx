import { useEffect, useState } from 'react';
import { MAX_SIMILAR_FILMS } from '../../const';
import { getSimilarFilms } from '../../services/create-api';
import { Film } from '../../types/films';
import FilmsList from '../films-list/films-list';
import LoadingScreen from '../loading-screen/loading-screen';

type MoreLikeThisProps = {
  filmId: number
}

function MoreLikeThis({filmId}: MoreLikeThisProps): JSX.Element {
  const [sameFilms, setSameFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSimilarFilms(filmId).then((data) => {
      setSameFilms(data);
      setLoading(false);
    });
  }, [filmId]);

  if (loading) {
    return (
      <LoadingScreen/>
    );
  }

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <FilmsList films={sameFilms.filter((film) => film.id !== filmId).slice(0, MAX_SIMILAR_FILMS)}/>
    </section>
  );
}
export default MoreLikeThis;
