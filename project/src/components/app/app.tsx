import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
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
  const {films} = useAppSelector((state) => state);
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main} element={<Main films={films}/>}/>
        <Route
          path={AppRoute.MyList}
          element={<PrivateRoute><MyList films={films}/></PrivateRoute>}
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
            <MoviePage />
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
          element={<Player films={films} />}
        />
        <Route
          path={AppRoute.Error404}
          element={<PageNotFound404 />}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
