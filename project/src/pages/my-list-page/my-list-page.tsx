import { useAppSelector } from '../../hooks';
import Header from '../../components/header/header';
import FilmsList from '../../components/films-list/films-list';

export default function MyList(): JSX.Element {
  const {favoriteList} = useAppSelector((state) => state.DATA);
  return (
    <div className="user-page">
      <Header
        title="My list"
        isTypeUserPage
      />
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        {
          favoriteList.length === 0 ?
            <p>There are no any favorite films in your list.</p> :
            ''
        }
        <FilmsList films={favoriteList} />
      </section>
    </div>
  );
}
