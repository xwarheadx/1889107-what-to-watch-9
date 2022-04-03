import { Navigate, RouteProps } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';

type PrivateRouteProps = RouteProps & {
  children: JSX.Element,
}

export default function PrivateRoute({
  children,
}: PrivateRouteProps): JSX.Element {
  const {requireAuthorization} = useAppSelector((state) => state);
  return (
    requireAuthorization === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.SignIn} />
  );
}
