export type Film = {
    id: string,
    name: string,
    src: string,
    previewVideo:string,
  };

export type SelectedFilm = {
    title: string,
    genre: string,
    year: number,
    srcPoster: string,
  };

export type Films = Film[];
