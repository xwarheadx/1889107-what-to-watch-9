import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MINUTES_IN_HOUR } from '../../../const';
import { getFilmById } from '../../../services/create-api';
import { Film } from '../../../types/films';
import PageNotFound404 from '../../page-not-found-404/page-not-found-404';
import LoadingScreen from '../../loading-screen/loading-screen';

export default function PlayerPage(): JSX.Element {
  const navigate = useNavigate();
  const {id} = useParams<{id: string}>();
  const [film, setFilm] = useState<Film | null>(null);
  const [loading, setLoading]= useState(true);
  const [playing, setPlaying] = useState(false);
  const [videoFullTime, setVideoTime] = useState(0);
  const [videoCurrentTime, setVideoCurrentTime] = useState(0);
  const [videoProgress, setVideoProgress] = useState(0);
  const player = useRef() as MutableRefObject<HTMLVideoElement>;

  useEffect(() => {
    getFilmById(Number(id)).then((data) => {
      setFilm(data);
      setLoading(false);
    });
  }, [id]);
  const handleClickPause = () => {
    player.current.pause();
    setPlaying(false);
  };

  const handleClickPlay = () => {
    player.current.play();
    setPlaying(true);
  };

  if(player.current) {
    player.current.ontimeupdate = () => {
      setVideoCurrentTime(player.current?.currentTime);
      setVideoProgress((player.current?.currentTime / videoFullTime) * 100);
    };
  }

  useEffect(() => {
    if(player.current) {
      setVideoTime(player.current.duration);
    }
  }, [playing]);

  const getVideoTimeLeft = (fullTime: number, currentTime: number) => {
    const timeLeft = fullTime - currentTime;
    return `${Math.floor(timeLeft / MINUTES_IN_HOUR)  }:${  (`0${  Math.floor(timeLeft % MINUTES_IN_HOUR)}`).slice(-2)}`;
  };

  const handleClickFullScreen = () => {
    player.current.requestFullscreen();
  };

  const exitPlayer = () => {
    navigate(-1);
  };

  if (loading) {
    return (
      <LoadingScreen/>
    );
  }

  if (film === null) {
    return (<PageNotFound404 />);
  }

  if (film === undefined) {
    return (<PageNotFound404 />);
  }
  return (
    <div className="player">
      <video ref={player} autoPlay src={film?.videoLink} id="video" className="player__video" poster={film?.backgroundImage} onPlay={() => setPlaying(true)}></video>

      <button type="button" className="player__exit" onClick={exitPlayer}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={videoProgress} max="100"></progress>
            <div className="player__toggler" style={{left: `${videoProgress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">-{videoFullTime && videoCurrentTime ? getVideoTimeLeft(videoFullTime, videoCurrentTime) : '0:00:00'}</div>
        </div>

        <div className="player__controls-row">
          {playing ? (
            <button type="button" className="player__play" onClick={handleClickPause}>
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use xlinkHref="#pause"></use>
              </svg>
              <span>Pause</span>
            </button>
          ) : (
            <button type="button" className="player__play" onClick={handleClickPlay}>
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
          )}

          <div className="player__name">{film.name}</div>

          <button type="button" className="player__full-screen" onClick={handleClickFullScreen}>
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
