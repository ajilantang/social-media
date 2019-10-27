import { put, takeLatest, all } from "redux-saga/effects";

import { get } from "../helpers/fetch";
import { Photos } from "../types/photos";
function* fetchAlbums() {
  const { parsedBody } = yield get<Photos>(
    "https://jsonplaceholder.typicode.com/photos"
  );
  yield put({ type: "PHOTO_RECEIVED", payload: parsedBody });
}
function* actionWatcher() {
  yield takeLatest("PHOTO_REQUESTED", fetchAlbums);
}
export default function* rootSaga() {
  yield all([actionWatcher()]);
}
