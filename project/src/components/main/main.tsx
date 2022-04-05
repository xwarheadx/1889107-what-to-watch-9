import { useState } from 'react';
import { COUNT_LOADED_CARD } from '../../const';
import { useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../const';
import { getAllGenres, getFilmsByGenre } from '../../utils';
import { Film } from '../../types/films';
import FilmsList from '../films-list/films-list';
import Footer from '../footer/footer';
import GenresItemList from '../genres-list/genres-list';
import Header from '../header/header';
import LoadingScreen from '../loading-screen/loading-screen';
import PromoFilm from '../promo-film/promo-film';
import ShowMoreButtron from '../show-more-button/show-more-button';

type WelcomeMainProps = {
  films: Film[],
};

export default function Main({films}: WelcomeMainProps): JSX.Element {

  const {isDataLoaded, promoFilm} = useAppSelector((state) => state);
  const [countCardShow, setCountCardShow] = useState(COUNT_LOADED_CARD);
  const currentFilms = useAppSelector(getFilmsByGenre).slice(0, countCardShow);
  const allGenres = getAllGenres(films);
  if (!isDataLoaded || promoFilm === null) {
    return (
      <LoadingScreen/>
    );
  }
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm.backgroundImage} alt={promoFilm.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header
          authorizationStatus={AuthorizationStatus.Auth}
        />
        <PromoFilm promoFilm={promoFilm}/>
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
