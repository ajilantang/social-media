import { put, takeEvery, takeLatest, all } from "redux-saga/effects";

import { get } from "../helpers/fetch";
import { Users } from "../types/users";
function* fetchUsers() {
  const { parsedBody } = yield get<Users>(
    "https://jsonplaceholder.typicode.com/users"
  );
  yield put({ type: "USER_RECEIVED", payload: parsedBody });
}
function* actionWatcher() {
  yield takeEvery("USER_REQUESTED", fetchUsers);
}
export default function* rootSaga() {
  yield all([actionWatcher()]);
}
