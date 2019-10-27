import post from "./post";
import user from "./user";
import comment from "./comments";
import album from "./albums";
import photo from "./photos";

import { fork } from "redux-saga/effects";
export default function* rootSaga() {
  yield fork(post);
  yield fork(user);
  yield fork(comment);
  yield fork(photo);
  yield fork(album);
}
