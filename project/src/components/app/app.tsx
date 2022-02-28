import Main from '../main/main';

type AppProps = {
  genres: string[],
  films: Array<{
    name: string,
    srcImg: string,
  }>,
  selectedFilm: {
    title: string,
    genre: string,
    year: number,
    srcPoster: string,
  },
};

function App({
  genres,
  films,
  selectedFilm,
}: AppProps): JSX.Element {
  return (
    <Main
      genres={genres}
      films={films}
      selectedFilm={selectedFilm}
    />
  );
}

export default App;
