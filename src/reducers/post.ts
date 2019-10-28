import { Posts, Post } from "../types/post";
type Action = {
  type: "POST_REQUESTED" | "POST_RECEIVED" | "ADD_POST_RECEIVED";
  payload: Posts;
  newPost: Post;
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
    case "ADD_POST_RECEIVED": {
      let newPost = { ...action.newPost, ...{ id: state.post.length + 1 } };
      return {
        ...state,
        post: [newPost].concat(state.post),
        loading: false
      };
    }
    default:
      return state;
  }
};
export default reducer;
