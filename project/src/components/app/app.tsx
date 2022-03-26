import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Main from '../main/main';
import PageNotFound404 from '../404/404';
import MyList from '../mylist/my-list';
import SignIn from '../login/sign-in';
import MoviePage from '../films/movie-page';
import AddReview from '../review/add-review';
import Player from '../player/player';
import PrivateRoute from '../private-route/private-route';
import { Films, SelectedFilm } from '../../types/films';


type AppProps = {
  genres: string[],
  films: Films,
  selectedFilm: SelectedFilm,
  video: string,
};

function App({
  genres,
  films,
  selectedFilm,
  video,
}: AppProps): JSX.Element {
  const myFilms = films.slice(0,5);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={(
            <Main
              genres={genres}
              films={films}
              selectedFilm={selectedFilm}
            />
          )}
        />
        <Route
          path={AppRoute.MyList}
          element={(
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <MyList myFilms={myFilms}/>
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
            <AddReview film={films[0]} />
          )}
        />
        <Route
          path={AppRoute.Player}
          element={<Player video={video} />}
        />
        <Route
          path="*"
          element={<PageNotFound404 />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
