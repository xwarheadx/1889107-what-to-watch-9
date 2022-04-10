import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import Main from '../../pages/main-page/main-page';
import PageNotFound404 from '../page-not-found-404/page-not-found-404';
import MyList from '../../pages/my-list-page/my-list-page';
import SignIn from '../../pages/sign-in-page/sign-in-page';
import MoviePage from '../../pages/movie-page/movie-page';
import AddReview from '../../pages/add-review-page/add-review-page';
import Player from '../../pages/player-page/player-page';
import PrivateRoute from '../private-route/private-route';
import HistoryRoute from '../history-route/history-route';
import browserHistory from '../../browse-history';


function App(): JSX.Element {
  return (
    <HistoryRoute history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main} element={<Main/>}/>
        <Route
          path={AppRoute.MyList}
          element={<PrivateRoute><MyList/></PrivateRoute>}
        />
        <Route
          path={AppRoute.SignIn}
          element={(
            <SignIn/>
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
            <PrivateRoute><AddReview/></PrivateRoute>
          )}
        />
        <Route
          path={AppRoute.Player}
          element={<Player/>}
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
