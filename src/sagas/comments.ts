import { put, takeLatest, all } from "redux-saga/effects";

import { get, post } from "../helpers/fetch";
import { Comments, Comment } from "./../types/comment";

function* fetchComment() {
  const { parsedBody } = yield get<Comments>(
    "https://jsonplaceholder.typicode.com/comments"
  );
  yield put({ type: "COMMENT_RECEIVED", payload: parsedBody });
}

function* addComment(action: any) {
  try {
    let { parsedBody } = yield post<Comment>(
      "https://jsonplaceholder.typicode.com/comments",
      action.body
    );
    yield put({
      type: "ADD_COMMENT_RECEIVED",
      newPost: { ...parsedBody, ...action.body }
    });
  } catch (error) {
    console.log("errror", error);
  }
}

function* addCommentWatcher() {
  yield takeLatest("ADD_COMMENT_REQUESTED", addComment);
}
function* actionWatcher() {
  yield takeLatest("COMMENT_REQUESTED", fetchComment);
}

export default function* rootSaga() {
  yield all([actionWatcher(), addCommentWatcher()]);
}
