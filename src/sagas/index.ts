import { put, takeLatest, all } from "redux-saga/effects";

import { get } from "../helpers/fetch";
import { Posts } from "../types/post";
function* fetchNews() {
  const { parsedBody } = yield get<Posts>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  yield put({ type: "POST_RECEIVED", payload: parsedBody });
}
function* actionWatcher() {
  yield takeLatest("POST_REQUESTED", fetchNews);
}
export default function* rootSaga() {
  yield all([actionWatcher()]);
}
