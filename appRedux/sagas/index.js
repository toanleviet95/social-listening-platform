import {all} from "redux-saga/effects";
import authSagas from "./Auth";
import notesSagas from "./Notes";

export default function* rootSaga() {
  yield all([
    // authSagas(),
    // notesSagas()
  ]);
}
