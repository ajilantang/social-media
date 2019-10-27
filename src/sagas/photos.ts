import { put, takeLatest, all } from "redux-saga/effects";

import { get } from "../helpers/fetch";
import { Photos } from "../types/photos";

function* fetchALbumsDetail(action: any) {
  console.log("take lates", action);
  const { parsedBody } = yield get<Photos>(
    `https://jsonplaceholder.typicode.com/photos?albumId=${action.albumId}`
  );
  yield put({ type: "PHOTO_RECEIVED", payload: parsedBody });
}

function* photoRequestWatcherId() {
  yield takeLatest("PHOTO_REQUESTED_BY_ID", fetchALbumsDetail);
}
export default function* rootSaga() {
  yield all([photoRequestWatcherId()]);
}
