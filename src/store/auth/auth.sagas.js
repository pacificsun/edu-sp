import { takeLatest, call, put, select } from "redux-saga/effects";

import * as AuthType from "./auth.types";

// worker saga

export function* onSignupAsync() {}

// watcher saga

export function* watchSignIn() {
  yield takeLatest(AuthType.SIGN_IN_START, onSignupAsync);
}

export function* authSagas() {
  yield all([watchSignIn]);
}
