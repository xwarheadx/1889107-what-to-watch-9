import { useParams } from 'react-router-dom';
import { getFilmById } from '../../utils';
import PageNotFound404 from '../404/404';
import { Film } from '../../types/films';
import FormAddComments from '../comments/add-comments';
import Logo from '../logo/logo';
type AddReviewProps = {
  films: Film[],
}

export default function AddReview({
  films,
}: AddReviewProps): JSX.Element {
  const {id} = useParams<{id: string}>();
  const film: Film | undefined = getFilmById(films, id);

  if (film === undefined) {
    return <PageNotFound404 />;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.previewImage} alt={film.name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">

          <Logo />
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="film-page.html" className="breadcrumbs__link">{film.name}</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link" href="/">Add review</a>
              </li>
            </ul>
          </nav>
          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link" href="/">Sign out</a>
            </li>
          </ul>
        </header>
      </div>
      <div className="film-card__poster film-card__poster--small">
        <img src={film.posterImage} alt={film.name} width="218" height="327" />
      </div>
      <FormAddComments />
    </section>
  );
}


