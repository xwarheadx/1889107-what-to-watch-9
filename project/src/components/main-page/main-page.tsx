import { useAppSelector } from '../../hooks';
import FilmsList from '../films-list/films-list';
import Footer from '../footer/footer';
import Header from '../header/header';
import LoadingScreen from '../loading-screen/loading-screen';
import PromoFilm from '../promo-film/promo-film';

export default function MainPage(): JSX.Element {

  const {isFilmDataLoaded, promoFilm} = useAppSelector((state) => state.DATA);
  const {films} = useAppSelector((state) => state.DATA);

  if (!isFilmDataLoaded || promoFilm === null) {
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

        <Header/>
        <PromoFilm promoFilm={promoFilm}/>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <FilmsList films={films}/>
        </section>
        <Footer />
      </div>
    </>
  );
}
