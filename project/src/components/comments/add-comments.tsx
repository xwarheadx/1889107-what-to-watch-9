import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HTTP_CODE } from '../../const';
import { addNewComment } from '../../services/api';

type FormAddCommentsProps = {
  filmId: number,
}

export default function FormAddComments({filmId}: FormAddCommentsProps): JSX.Element {

  const [ratings, setRatings] = useState(0);
  const [message, setMessage] = useState('');
  const [disabledForm, setDisabledForm] = useState(false);
  const [disabledSubmitButton, setDisabledSubmitButton] = useState(true);
  const navigate = useNavigate();

  const checkValidationFormData = () => {
    if(message.length >= 50) {
      setDisabledSubmitButton(false);
    }
  };

  const handleCommentFieldChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = evt.target;
    setMessage(value);
    checkValidationFormData();
  };

  const submitFormCommentHandler = (evt: FormEvent) => {
    evt.preventDefault();
    setDisabledForm(true);

    addNewComment(message, ratings, filmId).then((res) => {
      if(res?.status === HTTP_CODE.OK) {
        navigate(-1);
      }

      setDisabledForm(false);
    }).catch(() => {
      setDisabledForm(false);
    });
  };
  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={submitFormCommentHandler}>
        <div className="rating">
          <div className="rating__stars">
            {Array.from({length: 10}).map((_, index) => (
              <>
                <input className="rating__input" id={`star-${index}`} type="radio" name="rating" value={index} checked={ratings === + index} onChange={({target}: React.ChangeEvent<HTMLInputElement>) => {setRatings(+target.value);}}/>
                <label className="rating__label" htmlFor={`star-${index}`}>Rating {index}</label>
              </>
            ))}
          </div>
        </div>
        <div className="add-review__text">
          <textarea onChange={handleCommentFieldChange} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={message}  required
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
