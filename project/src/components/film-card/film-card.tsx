import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AppRoute } from '../../const';
import { Film } from '../../types/films';
import VideoPreview from '../video-preview/video-preview';

type FilmCardProps = {
  film: Film,
  isActive: boolean,
  activateFilm: (id: string) => void,
  }

export default function FilmCard({
  film,
  isActive,
  activateFilm,
}: FilmCardProps): JSX.Element {
  const [autoPlay, setAutoPlay] = useState(false);
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={() => {
        setAutoPlay(true);
        return activateFilm(film.id);
      }}
      onMouseOut={() => setAutoPlay(false)}
    >
      <div className="small-film-card__image">
        <VideoPreview
          previewVideo={film.previewVideo}
          poster={film.src}
          isPlaying={autoPlay}
          muted
        />
      </div>
      <h3 className="small-film-card__title">
        <Link
          to={AppRoute.Film.replace(':id', film.id)}
          className="small-film-card__link"
        >
          {film.name}
        </Link>
      </h3>
    </article>
  );
}
