import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppRoute } from '../../const';
import { getFilmById } from '../../services/api';
import { Film } from '../../types/films';
import PageNotFound404 from '../404/404';
import LoadingScreen from '../loading-screen/loading-screen';

export default function Player(): JSX.Element {
  const navigate = useNavigate();
  const {id} = useParams<{id: string}>();
  const [film, setFilm] = useState<Film | null>(null);
  const [loading, setLoading]= useState(true);
  useEffect(() => {
    getFilmById(Number(id)).then((data) => {
      setFilm(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
      <LoadingScreen/>
    );
  }

  if (film === null) {
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
