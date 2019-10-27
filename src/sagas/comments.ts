import { put, takeLatest, all } from "redux-saga/effects";

import { get } from "../helpers/fetch";
import { Comments } from "./../types/comment";

function* fetchComment() {
  const { parsedBody } = yield get<Comments>(
    "https://jsonplaceholder.typicode.com/comments"
  );
  yield put({ type: "COMMENT_RECEIVED", payload: parsedBody });
}

function* actionWatcher() {
  yield takeLatest("COMMENT_REQUESTED", fetchComment);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
