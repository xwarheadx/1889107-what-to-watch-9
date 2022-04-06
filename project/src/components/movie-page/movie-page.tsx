import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AuthorizationStatus, AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import { getFilmById } from '../../services/api';
import { Film } from '../../types/films';
import PageNotFound404 from '../404/404';
import Footer from '../footer/footer';
import Header from '../header/header';
import LoadingScreen from '../loading-screen/loading-screen';
import MoreLikeThis from '../more-like-this/more-like-this';
import MovieNavigation from '../navigation/movie-navigation';

export default function MoviePage(): JSX.Element {
  const navigate = useNavigate();
  const {id} = useParams();
  const [film, setFilm] = useState<Film | null>(null);
  const [loading, setLoading]= useState(true);
  const {requireAuthorization} = useAppSelector((state) => state);

  useEffect(() => {
    getFilmById(Number(id)).then((data) => {
      setFilm(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
      <LoadingScreen/>
    );
  }
  if (film === null) {
    return <PageNotFound404 />;
  }
  return (
    <React.Fragment>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <Header
            authorizationStatus={AuthorizationStatus.Auth}
          />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button"
                  onClick={() => navigate(`/player/${film.id}`)}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button" onClick={() => navigate(AppRoute.MyList)}>
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                {
                  requireAuthorization === AuthorizationStatus.Auth  &&  <Link to={`/films/${film.id}/review`} className="btn film-card__button">Add review</Link>
                }
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={film.name} width="218" height="327" />
            </div>
            <MovieNavigation film={film}/>
          </div>
        </div>
      </section>

      <div className="page-content">
        <MoreLikeThis filmId={film.id}/>
        <Footer />
      </div>
    </React.Fragment>
  );
}
