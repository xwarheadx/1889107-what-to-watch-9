import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainPage from '../pages/main-page/main-page';
import PageNotFound404 from '../page-not-found-404/page-not-found-404';
import MyListPage from '../pages/my-list-page/my-list-page';
import SignInPage from '../pages/sign-in-page/sign-in-page';
import MoviePage from '../pages/movie-page/movie-page';
import AddReviewPage from '../pages/add-review-page/add-review-page';
import PlayerPage from '../pages/player-page/player-page';
import PrivateRoute from '../private-route/private-route';
import HistoryRoute from '../history-route/history-route';
import browserHistory from '../../browse-history';
import InternalServerError from '../internal-server-error/internal-server-error';

function App(): JSX.Element {
  return (
    <HistoryRoute history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage/>}/>
        <Route
          path={AppRoute.MyList}
          element={<PrivateRoute><MyListPage/></PrivateRoute>}
        />
        <Route
          path={AppRoute.SignIn}
          element={(
            <SignInPage/>
          )}
        />
        <Route
          path={AppRoute.Film}
          element={(
            <MoviePage/>
          )}
        />
        <Route
          path={AppRoute.AddReview}
          element={(
            <PrivateRoute><AddReviewPage/></PrivateRoute>
          )}
        />
        <Route
          path={AppRoute.Player}
          element={<PlayerPage/>}
        />
        <Route
          path={AppRoute.ServerError}
          element={<InternalServerError /> }
        />
        <Route
          path="*"
          element={<PageNotFound404/>}
        />
      </Routes>
    </HistoryRoute>
  );
}

export default App;
