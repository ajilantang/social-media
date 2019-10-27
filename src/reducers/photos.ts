import { Photos } from "../types/photos";
import { number } from "prop-types";
type Action = {
  type:
    | "PHOTO_REQUESTED"
    | "PHOTO_RECEIVED"
    | "PHOTO_FILTERED_BY_ALBUM_ID"
    | "PHOTO_REQUESTED_BY_ID";
  payload: Photos;
  albumId?: number;
};
const defaultState: { loading: boolean; photos: Photos; albumId?: number } = {
  loading: false,
  photos: []
};
const reducer = (state = defaultState, action: Action) => {
  switch (action.type) {
    case "PHOTO_REQUESTED":
      return { ...state, loading: true };
    case "PHOTO_RECEIVED":
      return { ...state, photos: action.payload, loading: false };
    case "PHOTO_REQUESTED_BY_ID":
      return { ...state, loading: true };
    default:
      return state;
  }
};
export default reducer;
