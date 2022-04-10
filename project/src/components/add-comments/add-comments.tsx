import { FormEvent, useState, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { MAX_RATING, MAX_USER_COMMENT_SYMBOLS_COUNT, MIN_USER_COMMENT_SYMBOLS_COUNT } from '../../const';
import { addCommentAction } from '../../store/actions/api-actions';

type AddCommentsProps = {
  filmId: number,
}

export default function AddComments({filmId}: AddCommentsProps): JSX.Element {

  const [rating, setRatings] = useState(0);
  const [comment, setComment] = useState('');
  const [disabledForm, setDisabledForm] = useState(false);
  const [disabledSubmitButton, setDisabledSubmitButton] = useState(true);
  const dispatch = useDispatch();

  const checkValidationFormData = () => {
    if(rating > 0 && comment.length >= 50){
      setDisabledSubmitButton(false);
    }
  };
  const handleRatingChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setRatings(Number(evt.target.value));
    checkValidationFormData();
  };

  const ratingStars = new Array(MAX_RATING)
    .fill(null)
    .map((value, index) => (index + 1))
    .reverse();

  const handleCommentFieldChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = evt.target;
    setComment(value);
    checkValidationFormData();
  };

  const handleSubmitFormComment = (evt: FormEvent) => {
    evt.preventDefault();
    setDisabledForm(true);
    dispatch(addCommentAction({filmId, comment, rating}));
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleSubmitFormComment}>
        <div className="rating">
          <div className="rating__stars">
            {ratingStars.map((value) => (
              <Fragment key={value}>
                <input className="rating__input"
                  id={`star-${value}`}
                  type="radio"
                  name="rating"
                  value={value}
                  checked={rating === value}
                  onChange={handleRatingChange}
                  disabled={disabledForm && true}
                />
                <label
                  className="rating__label"
                  htmlFor={`star-${value}`}
                > Rating {`star-${value}`}
                </label>
              </Fragment>
            ))}
          </div>
        </div>
        <div className="add-review__text">
          <textarea onChange={handleCommentFieldChange} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={comment} required
            minLength={MIN_USER_COMMENT_SYMBOLS_COUNT}
            maxLength={MAX_USER_COMMENT_SYMBOLS_COUNT}
            disabled={disabledForm && true}
          >
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" disabled={(disabledSubmitButton || disabledForm) && true} >Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}
