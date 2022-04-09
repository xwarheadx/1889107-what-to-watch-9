import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCommentAction } from '../../store/actions/api-actions';
type FormAddCommentsProps = {
  filmId: number,
}

export default function FormAddComments({filmId}: FormAddCommentsProps): JSX.Element {

  const [rating, setRatings] = useState(0);
  const [comment, setComment] = useState('');
  const [disabledForm, setDisabledForm] = useState(false);
  const [disabledSubmitButton, setDisabledSubmitButton] = useState(true);
  const dispatch = useDispatch();


  const checkValidationFormData = () => {
    if(comment.length >= 50) {
      setDisabledSubmitButton(false);
    }
  };

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
            {Array.from({length: 10}).map((_, index) => (
              <>
                <input className="rating__input" id={`star-${index}`} type="radio" name="rating" value={index} checked={rating === + index} onChange={({target}: React.ChangeEvent<HTMLInputElement>) => {setRatings(+target.value);}}/>
                <label className="rating__label" htmlFor={`star-${index}`}>Rating {index}</label>
              </>
            ))}
          </div>
        </div>
        <div className="add-review__text">
          <textarea onChange={handleCommentFieldChange} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={comment} required
            minLength={50}
            maxLength={400}
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
