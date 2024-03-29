import { createSlice } from "@reduxjs/toolkit";

export interface Photo {
  url: string;
  user: number;
  title: string;
  id: number;
  description: string;
  isLike?: boolean;
}

export interface Store {
  photos: Photo[];
  isShowCard: boolean;
  showCard?: Photo;
  isLikedShow: boolean;
}

const initialState: Store = {
  photos: [],
  isShowCard: false,
  showCard: undefined,
  isLikedShow: false,
};

export const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    setPhotos: (state, action) => {
      state.photos = action.payload;
    },
    deletePhoto: (state, action) => {
      state.photos = state.photos.filter(
        (photo) => photo.id !== action.payload
      );
    },
    likePhotos: (state, action) => {
      const likedPhoto = state.photos.find(
        (photo) => photo.id === action.payload
      );
      if (likedPhoto) {
        if (likedPhoto?.isLike) {
          likedPhoto["isLike"] = false;
        } else {
          likedPhoto["isLike"] = true;
        }
      }
    },
    setShowCard: (state, action) => {
      state.isShowCard = true;
      state.showCard = state.photos.find(
        (photo) => photo.id === action.payload
      );
    },
    unShowCard: (state) => {
      state.isShowCard = false;
    },
    showLiked: (state) => {
      state.isLikedShow = true;
    },
    unShowLiked: (state) => {
      state.isLikedShow = false;
    },
  },
});

export const {
  setPhotos,
  deletePhoto,
  likePhotos,
  setShowCard,
  unShowCard,
  showLiked,
  unShowLiked,
} = photosSlice.actions;

export default photosSlice.reducer;
