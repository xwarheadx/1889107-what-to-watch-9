import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Film } from '../../types/films';
import { useAppSelector } from '../../hooks';
import { getFilmById } from '../../services/create-api';
import PageNotFound404 from '../../components/page-not-found-404/page-not-found-404';
import AddComments from '../../components/add-comments/add-comments';
import AddBreadcrumbs from '../../components/add-breadcrumbs/add-breadcrumbs';
import Header from '../../components/header/header';
import LoadingScreen from '../../components/loading-screen/loading-screen';

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
    return (<PageNotFound404 />);
  }
  if (film === undefined) {
    return (<PageNotFound404 />);
  }
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header>
          <AddBreadcrumbs film={film}/>
        </Header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={film.name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <AddComments filmId={film.id}/>
      </div>

    </section>
  );
}
