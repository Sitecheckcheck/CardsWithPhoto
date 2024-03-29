import { useDispatch } from "react-redux";
import {
  Photo,
  deletePhoto,
  likePhotos,
  setShowCard,
} from "../store/slices/photosSlice";
import like from "../images/like.jpg";
import notLike from "../images/notLike.jpg";

const Card: React.FC<Photo> = ({ url, id, isLike, description }) => {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <button
        className="card__like"
        onClick={(e) => {
          e.preventDefault();
          dispatch(likePhotos(id));
        }}
      >
        <img
          className="card__like-img"
          src={!isLike ? notLike : like}
          alt="лайк"
        />
      </button>
      <button
        className="card__delete"
        onClick={(e) => {
          e.preventDefault();
          dispatch(deletePhoto(id));
        }}
      >
        Delete
      </button>
      <img
        className="card__img"
        src={url}
        alt="pic"
        onClick={() => dispatch(setShowCard(id))}
      />
      <p className="card__text">{description}</p>
    </div>
  );
};

export default Card;
