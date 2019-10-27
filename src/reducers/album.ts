import { Albums } from "../types/albums";
type Action = {
  type: "ALBUM_REQUESTED" | "ALBUM_SUCCEED";
  payload: Albums;
};
const defaultState: {
  loading: boolean;
  albums: Albums;
} = {
  loading: false,
  albums: []
};
const reducer = (state = defaultState, action: Action) => {
  switch (action.type) {
    case "ALBUM_REQUESTED":
      return { ...state, loading: true };
    case "ALBUM_SUCCEED":
      return { ...state, albums: action.payload, loading: false };
    default:
      return state;
  }
};
export default reducer;
