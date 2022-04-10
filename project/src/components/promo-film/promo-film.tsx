import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthorizationStatus, TypeFavoriteFetch } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addFavoriteAction } from '../../store/actions/api-actions';
import { Film } from '../../types/films';
import { checkFilmInFavoriteList } from '../../utils';

type PromoFilmProps = {
  promoFilm: Film,
}

function PromoFilm({promoFilm}: PromoFilmProps): JSX.Element {
  const navigate = useNavigate();
  const {name, genre, released, posterImage} = promoFilm;
  const {favoriteList} = useAppSelector((state) => state.DATA);
  const {requireAuthorization} = useAppSelector((state) => state.USER);
  const [typeFavoriteAction, setTypeFavoriteAction] = useState<TypeFavoriteFetch>(TypeFavoriteFetch.Add);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if(checkFilmInFavoriteList(promoFilm, favoriteList)) {
      setTypeFavoriteAction(TypeFavoriteFetch.Remove);
    } else {
      setTypeFavoriteAction(TypeFavoriteFetch.Add);
    }
  }, [favoriteList, promoFilm]);

  return (
    <div className="film-card__wrap">
      <div className="film-card__info">
        <div className="film-card__poster">
          <img src={posterImage} alt={name} width="218" height="327" />
        </div>

        <div className="film-card__desc">
          <h2 className="film-card__title">{name}</h2>
          <p className="film-card__meta">
            <span className="film-card__genre">{genre}</span>
            <span className="film-card__year">{released}</span>
          </p>

          <div className="film-card__buttons">
            <button className="btn btn--play film-card__button" type="button" onClick={() => navigate(`/player/${promoFilm.id}`)}>
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            {AuthorizationStatus.Auth === requireAuthorization && (
              <button className="btn btn--list film-card__button" type="button" onClick={() => dispatch(addFavoriteAction({filmId: promoFilm.id, type: typeFavoriteAction}))}>
                {
                  typeFavoriteAction
                    ?
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                    :
                    <svg viewBox="0 0 18 14" width="18" height="14">
                      <use xlinkHref="#in-list"></use>
                    </svg>
                }
                <span>My list</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PromoFilm;
