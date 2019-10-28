import { put, takeLatest, all, takeEvery } from "redux-saga/effects";

import { get, post } from "../helpers/fetch";
import { Posts } from "../types/post";
function* fetchPost() {
  const { parsedBody } = yield get<Posts>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  yield put({ type: "POST_RECEIVED", payload: parsedBody });
}
function* addPost(action: any) {
  try {
    let { parsedBody } = yield post<Posts>(
      "https://jsonplaceholder.typicode.com/posts",
      action.body
    );
    yield put({
      type: "ADD_POST_RECEIVED",
      newPost: { ...parsedBody, ...action.body }
    });
  } catch (error) {
    console.log("errror", error);
  }
}
function* removePost(action: any) {
  try {
    yield fetch("https://jsonplaceholder.typicode.com/posts/" + action.id, {
      method: "DELETE"
    });
    yield put({
      type: "REMOVED_POST_RECEIVED",
      id: action.id
    });
  } catch (error) {
    console.log("errror", error);
  }
}
function* getPostWatcher() {
  yield takeLatest("POST_REQUESTED", fetchPost);
}
function* addPostWatcher() {
  yield takeLatest("ADD_POST_REQUESTED", addPost);
}
function* removePostWatcher() {
  yield takeLatest("REMOVED_POST_REQUESTED", removePost);
}
export default function* rootSaga() {
  yield all([removePostWatcher(), getPostWatcher(), addPostWatcher()]);
}
