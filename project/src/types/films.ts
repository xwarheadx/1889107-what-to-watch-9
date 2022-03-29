export type Film = {
    id: string,
    name: string,
    src: string,
    genre: string,
    description: string,
    rating: number,
    scoresCount: number,
    director: string,
    starring: string[],
    runTime: number,
    released: number,
    previewVideo:string,
  };

export type SelectedFilm = {
    title: string,
    genre: string,
    year: number,
    srcPoster: string,
  };

export type Films = Film[];
