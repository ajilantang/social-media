import { Photos } from "../types/photos";
type Action = {
  type: "PHOTO_REQUESTED" | "PHOTO_RECEIVED";
  payload: Photos;
};
const defaultState: { loading: boolean; photos: Photos } = {
  loading: false,
  photos: []
};
const reducer = (state = defaultState, action: Action) => {
  switch (action.type) {
    case "PHOTO_REQUESTED":
      return { ...state, loading: true };
    case "PHOTO_RECEIVED":
      return { ...state, photos: action.payload, loading: false };
    default:
      return state;
  }
};
export default reducer;
