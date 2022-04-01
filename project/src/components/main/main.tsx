import { useState } from 'react';
import { COUNT_LOADED_CARD } from '../../const';
import { useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../const';
import { getAllGenres, getFilmsByGenre } from '../../utils';
import { SelectedFilm } from '../../types/films';
import { AppRoute } from '../../const';
import { useNavigate } from 'react-router-dom';
import FilmsList from '../films-list/films-list';
import Footer from '../footer/footer';
import GenresItemList from '../genres-list/genres-list';
import Header from '../header/header';
import ShowMoreButtron from '../show-more-button/show-more-button';

type WelcomeMainProps = {
  selectedFilm: SelectedFilm
};

export default function Main({
  selectedFilm,
}: WelcomeMainProps): JSX.Element {
  const navigate = useNavigate();
  const {films} = useAppSelector((state) => state);
  const [countCardShow, setCountCardShow] = useState(COUNT_LOADED_CARD);
  const currentFilms = useAppSelector(getFilmsByGenre).slice(0, countCardShow);
  const allGenres = getAllGenres(films);
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header
          authorizationStatus={AuthorizationStatus.Auth}
        />

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={selectedFilm.srcPoster} alt={`${selectedFilm.title} poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{selectedFilm.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{selectedFilm.genre}</span>
                <span className="film-card__year">{selectedFilm.year}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button" onClick={() => navigate(AppRoute.Player)}>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresItemList allGenres={allGenres} setCountCardShow={setCountCardShow}/>

          <FilmsList films={currentFilms}/>

          {countCardShow <= currentFilms.length ? <ShowMoreButtron countCardShow={countCardShow} setCountCardShow={setCountCardShow}/> : ''}
        </section>

        <Footer />
      </div>
    </>
  );
}
