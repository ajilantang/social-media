import { Comments, Comment } from "../types/comment";
type Action = {
  type: "COMMENT_REQUESTED" | "COMMENT_RECEIVED" | "ADD_COMMENT_RECEIVED";
  payload: Comments;
  newPost: Comment;
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
    case "ADD_COMMENT_RECEIVED": {
      let newPost = { ...action.newPost, ...{ id: state.comments.length + 1 } };
      return {
        ...state,
        comments: state.comments.concat(newPost),
        loading: false
      };
    }
    default:
      return state;
  }
};
export default reducer;
