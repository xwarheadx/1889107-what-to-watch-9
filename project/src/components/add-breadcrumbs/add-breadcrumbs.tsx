import { Link } from 'react-router-dom';
import { Film } from '../../types/films';

type AddBreadcrumbsProps = {
  film: Film,
};

export default function AddBreadcrumbs({film}: AddBreadcrumbsProps): JSX.Element {
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to={`/films/${film.id}`} className="breadcrumbs__link">{film.name}</Link>
        </li>
        <li className="breadcrumbs__item">
          <Link to='' className="breadcrumbs__link">Add review</Link>
        </li>
      </ul>
    </nav>
  );
}

