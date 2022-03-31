import { COUNT_LOADED_CARD } from '../../const';

type ShowMoreButtonProps = {
  countCardShow: number,
  setCountCardShow: (value: number) => void,
}

function ShowMoreButtron({countCardShow, setCountCardShow}: ShowMoreButtonProps): JSX.Element {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={() => setCountCardShow(countCardShow + COUNT_LOADED_CARD)}>Show more</button>
    </div>
  );
}

export default ShowMoreButtron;
