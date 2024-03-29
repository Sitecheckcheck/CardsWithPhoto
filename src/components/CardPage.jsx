import { useDispatch, useSelector } from "react-redux";
import { unShowCard } from "../store/slices/photosSlice";

const CardPage = () => {
  const card = useSelector((state) => state.photos.showCard);
  const dispatch = useDispatch();

  return (
    <div className="cardPage-container">
      <button
        className="return-link"
        onClick={() => {
          dispatch(unShowCard());
        }}
      >
        Вернуться к списку карточек
      </button>

      <img className="image" src={card ? card.url : undefined} alt="pic" />

      <h2>{card?.description}</h2>
    </div>
  );
};

export default CardPage;
