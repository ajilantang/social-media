import { put, takeLatest, all } from "redux-saga/effects";

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
function* getPostWatcher() {
  yield takeLatest("POST_REQUESTED", fetchPost);
}
function* addPostWatcher() {
  yield takeLatest("ADD_POST_REQUESTED", addPost);
}
export default function* rootSaga() {
  yield all([getPostWatcher(), addPostWatcher()]);
}
