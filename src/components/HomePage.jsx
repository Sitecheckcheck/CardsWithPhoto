import { useDispatch, useSelector } from "react-redux";
import Filter from "./Filter";
import Card from "./Card";
import { useEffect } from "react";
import { setPhotos } from "../store/slices/photosSlice";
import CardPage from "./CardPage";

export const HomePage = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photos.photos);
  const isShowCard = useSelector((state) => state.photos.isShowCard);
  const isLikedShow = useSelector((state) => state.photos.isLikedShow);

  useEffect(() => {
    fetch("https://api.slingacademy.com/v1/sample-data/photos")
      .then((res) => res.json())
      .then((data) => {
        dispatch(setPhotos(data.photos));
      });
  }, [dispatch]);

  return !isShowCard ? (
    <>
      <Filter />
      <ul className="app__container">
        {isLikedShow
          ? photos
              ?.filter((photo) => photo.isLike)
              .map((el) => (
                <li key={el.id}>
                  <Card {...el} />
                </li>
              ))
          : photos?.map((el) => (
              <li key={el.id}>
                <Card {...el} />
              </li>
            ))}
      </ul>
    </>
  ) : (
    <CardPage />
  );
};
