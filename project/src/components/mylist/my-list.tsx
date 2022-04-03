import { AuthorizationStatus } from '../../const';
import { Films } from '../../types/films';
import Header from '../header/header';
import FilmsList from '../films-list/films-list';
type MyListProps = {
  films: Films,
}

export default function MyList({
  films,
}: MyListProps): JSX.Element {
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
