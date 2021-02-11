import { API } from "aws-amplify";
import { takeLatest, call, put, select } from "redux-saga/effects";

import { createUser } from "../../graphql/mutation";
import { signupFail, signupSuccess } from "./auth.action";
import { openAlert } from "../alert/alert.action";

import * as AuthType from "./auth.types";

// worker saga

export function* onSignupAsync({ payload: { formData, history } }) {
  try {
    yield API.graphql({
      query: createUser,
      variables: { input: formData },
    });
    yield put(signupSuccess(formData));
    yield history.push({ pathname: "/verify-code" });
  } catch (err) {
    yield put(openAlert(err.message, "error"));
    console.error(err);
    yield put(signupFail(err.message));
  }
}

// watcher saga

export function* watchSignIn() {
  yield takeLatest(AuthType.SIGN_IN_START, onSignupAsync);
}

export function* authSagas() {
  yield all([watchSignIn]);
}
