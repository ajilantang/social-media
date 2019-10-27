import { Users } from "../types/users";
type Action = {
  type: "USER_REQUESTED" | "USER_RECEIVED" | "USER_BY_ID";
  payload: Users;
  id?: number;
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
    case "USER_BY_ID": {
      let user = state.users.filter(({ id }) => id === 1);
      return { ...state, users: user, loading: false };
    }
    default:
      return state;
  }
};
export default reducer;
