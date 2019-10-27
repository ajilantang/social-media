import { Users } from "../types/users";
type Action = {
  type: "USER_REQUESTED" | "USER_RECEIVED";
  payload: Users;
};
const defaultState: { loading: boolean; users: Users } = {
  loading: false,
  users: []
};
const reducer = (state = defaultState, action: Action) => {
  switch (action.type) {
    case "USER_REQUESTED":
      return { ...state, loading: true };
    case "USER_RECEIVED":
      return { ...state, users: action.payload, loading: false };
    default:
      return state;
  }
};
export default reducer;
