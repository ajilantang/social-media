import { put, takeLatest, all } from "redux-saga/effects";

import { get } from "../helpers/fetch";
import { Albums } from "./../types/albums";

function* fetchAlbum() {
  const { parsedBody } = yield get<Albums>(
    "https://jsonplaceholder.typicode.com/albums"
  );
  yield put({ type: "ALBUM_SUCCEED", payload: parsedBody });
}

function* actionWatcher() {
  yield takeLatest("ALBUM_REQUESTED", fetchAlbum);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
