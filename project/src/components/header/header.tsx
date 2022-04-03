import { Link, useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/actions/api-actions';
import Logo from '../logo/logo';

type HeaderProps = {
  authorizationStatus: AuthorizationStatus,
  title?: string,
  isTypeUserPage?: boolean,
}

export default function Header({
  authorizationStatus,
  title,
  isTypeUserPage,
}: HeaderProps): JSX.Element {
  const userHeadType: string = isTypeUserPage ? 'user-page__head' : 'film-card__head';
  const navigate = useNavigate();
  const { requireAuthorization, user } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  return (
    <header className={`page-header ${userHeadType}`}>
      <Logo />

      { title && (
        <h1 className="page-title user-page__title">{title}</h1>
      )}

      {
        requireAuthorization === AuthorizationStatus.Auth
          ? (
            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar" onClick={() => navigate('/mylist')}>
                  <img src={user?.avatarUrl} alt="User avatar" width="63" height="63" />
                </div>
              </li>
              <li className="user-block__item">
                <Link
                  className="user-block__link"
                  to="/"
                  onClick={(evt) => {
                    evt.preventDefault();
                    dispatch(logoutAction());
                  }}
                >
            Sign out
                </Link>
              </li>
            </ul>
          )
          : (
            <div className="user-block">
              <Link to={AppRoute.SignIn} className="user-block__link">Sign in</Link>
            </div>
          )
      }
    </header>
  );
}
