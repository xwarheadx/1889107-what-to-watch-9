import { useNavigate, useParams } from 'react-router-dom';
import { AppRoute } from '../../const';
import { getFilmById } from '../../utils';
import { Film } from '../../types/films';
import PageNotFound404 from '../404/404';

type PlayerProps = {
  films: Film[]
}

export default function Player({
  films,
}: PlayerProps): JSX.Element {
  const navigate = useNavigate();
  const {id} = useParams<{id: string}>();
  const film: Film | undefined = getFilmById(films, id);
  if (film === undefined) {
    return <PageNotFound404 />;
  }
  return (
    <div className="player">
      <video src={film.videoLink} className="player__video" poster={film.previewImage}></video>

      <button type="button" className="player__exit" onClick={() => navigate(AppRoute.Main)}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
          </div>
          <div className="player__time-value">{film.runTime}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{film.name}</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}
