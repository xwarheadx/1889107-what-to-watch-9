import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import Main from '../main/main';
import PageNotFound404 from '../404/404';
import MyList from '../mylist/my-list';
import SignIn from '../login/sign-in';
import MoviePage from '../movie-page/movie-page';
import AddReview from '../review/add-review';
import Player from '../player/player';
import PrivateRoute from '../private-route/private-route';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browse-history';


function App(): JSX.Element {
  return (
    <HistoryRouter history={browserHistory}>
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
            <AddReview/>
          )}
        />
        <Route
          path={AppRoute.Player}
          element={<Player/>}
        />
        <Route
          path={AppRoute.Error404}
          element={<PageNotFound404/>}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
