import { Posts } from "../types/post";
type Action = {
  type: "POST_REQUESTED" | "POST_RECEIVED";
  payload: Posts;
};
const reducer = (state = {}, action: Action) => {
  switch (action.type) {
    case "POST_REQUESTED":
      return { ...state, loading: true };
    case "POST_RECEIVED":
      return { ...state, post: action.payload, loading: true };
    default:
      return state;
  }
};
export default reducer;
