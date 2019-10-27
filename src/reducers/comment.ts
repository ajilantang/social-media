import { Comments } from "../types/comment";
type Action = {
  type: "COMMENT_REQUESTED" | "COMMENT_RECEIVED";
  payload: Comments;
};
const defaultState: { loading: boolean; comments: Comments } = {
  loading: false,
  comments: []
};
const reducer = (state = defaultState, action: Action) => {
  switch (action.type) {
    case "COMMENT_REQUESTED":
      return { ...state, loading: true };
    case "COMMENT_RECEIVED":
      return { ...state, comments: action.payload, loading: false };
    default:
      return state;
  }
};
export default reducer;
