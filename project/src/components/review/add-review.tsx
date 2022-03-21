import { Film } from '../../types/films';
import FormAddComments from '../comments/add-comments';

type AddReviewProps = {
  film: Film,
}

export default function AddReview({
  film,
}: AddReviewProps): JSX.Element {
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.src} alt={film.name} width="218" height="327" />
        </div>
      </div>

      <FormAddComments onReview={() => {
        throw new Error('Not work');
      }}
      />
    </section>
  );
}


