import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Film } from '../../types/films';
import VideoPreview from '../video-preview/video-preview';


type RenderFilmCardProps = {
  film: Film,
  }

function RenderFilmCard({
  film,

}: RenderFilmCardProps): JSX.Element {
  const [autoPlay, setAutoPlay] = useState(false);
  const navigate = useNavigate();
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={() => {
        setAutoPlay(true);
      }}
      onMouseOut={() => setAutoPlay(false)}
    >
      <div className="small-film-card__image" onClick={() => navigate(`/films/${film.id}`)}>
        <VideoPreview
          previewVideo={film.previewVideoLink}
          poster={film.previewImage}
          isPlaying={autoPlay}
          muted
        />
      </div>
      <h3 className="small-film-card__title">
        <Link
          to={`/films/${film.id}`}
          className="small-film-card__link"
        >
          {film.name}
        </Link>
      </h3>
    </article>
  );
}
export const FilmCard = React.memo(RenderFilmCard);
