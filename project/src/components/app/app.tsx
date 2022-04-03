import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import Main from '../main/main';
import PageNotFound404 from '../404/404';
import MyList from '../mylist/my-list';
import SignIn from '../login/sign-in';
import MoviePage from '../films/movie-page';
import LoadingScreen from '../loading-screen/loading-screen';
import AddReview from '../review/add-review';
import Player from '../player/player';
import PrivateRoute from '../private-route/private-route';


function App(): JSX.Element {
  const {isDataLoaded} = useAppSelector((state) => state);
  const {films, promoFilm} = useAppSelector((state) => state);

  if (!isDataLoaded || promoFilm === null) {
    return (
      <LoadingScreen/>
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main films={films} promoFilm={promoFilm}/>}/>
        <Route
          path={AppRoute.MyList}
          element={(
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <MyList films={films} />
            </PrivateRoute>
          )}
        />
        <Route
          path={AppRoute.SignIn}
          element={(
            <SignIn />
          )}
        />
        <Route
          path={AppRoute.Film}
          element={(
            <MoviePage films={films} />
          )}
        />
        <Route
          path={AppRoute.AddReview}
          element={(
            <AddReview films={films} />
          )}
        />
        <Route
          path={AppRoute.Player}
          element={<Player films={films} />}
        />
        <Route
          path={AppRoute.Error404}
          element={<PageNotFound404 />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
