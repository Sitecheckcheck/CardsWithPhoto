import { useDispatch, useSelector } from "react-redux";
import { showLiked, unShowLiked } from "../store/slices/photosSlice";

function Button() {
  const isLikedShow = useSelector((state) => state.photos.isLikedShow);
  const dispatch = useDispatch();

  return (
    <div className="buttons">
      <button
        className={isLikedShow ? "button" : "button button-activ"}
        onClick={() => {
          dispatch(unShowLiked());
        }}
      >
        все карточки
      </button>
      <button
        className={!isLikedShow ? "button" : "button button-activ"}
        onClick={() => {
          dispatch(showLiked());
        }}
      >
        понравившиеся карточки
      </button>
    </div>
  );
}

export default Button;
