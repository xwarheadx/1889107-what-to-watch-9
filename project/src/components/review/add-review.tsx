import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { getFilmById } from '../../services/api';
import PageNotFound404 from '../404/404';
import { Film } from '../../types/films';
import FormAddComments from '../comments/add-comments';
import Header from '../header/header';
import LoadingScreen from '../loading-screen/loading-screen';

export default function AddReview(): JSX.Element {
  const {id} = useParams<{id: string}>();
  const [film, setFilm] = useState<Film | null>(null);
  const [loading, setLoading]= useState(true);
  const {requireAuthorization} = useAppSelector((state) => state.USER);

  useEffect(() => {
    getFilmById(Number(id)).then((data) => {
      setFilm(data);
      setLoading(false);
    });
  }, [id]);

  if(requireAuthorization !== AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.SignIn}/>;
  }

  if (loading) {
    return (
      <LoadingScreen/>
    );
  }

  if (film === null){
    return <PageNotFound404 />;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.previewImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header
          authorizationStatus={AuthorizationStatus.Auth}
        />

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={film.name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <FormAddComments filmId={film.id}/>
      </div>

    </section>
  );
}
