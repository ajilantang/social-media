import { Posts } from "../types/post";
type Action = {
  type: "POST_REQUESTED" | "POST_RECEIVED";
  payload: Posts;
};
const defaultState: { loading: boolean; post: Posts } = {
  loading: false,
  post: []
};
const reducer = (state = defaultState, action: Action) => {
  switch (action.type) {
    case "POST_REQUESTED":
      return { ...state, loading: true };
    case "POST_RECEIVED":
      return { ...state, post: action.payload, loading: false };
    default:
      return state;
  }
};
export default reducer;
