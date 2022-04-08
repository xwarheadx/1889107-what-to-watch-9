import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import Header from '../header/header';
import FilmsList from '../films-list/films-list';

export default function MyList(): JSX.Element {
  const {films} = useAppSelector((state) => state.DATA);
  return (
    <div className="user-page">
      <Header
        authorizationStatus={AuthorizationStatus.Auth}
        title="My list"
        isTypeUserPage
      />
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList films={films} />
      </section>
    </div>
  );
}
