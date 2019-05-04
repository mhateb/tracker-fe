import {put, call, all, takeLatest} from 'redux-saga/effects';

import api from '../utils/api';

export default function* userSaga() {
  yield all([
    takeLatest("LOGIN_REQUEST", fetchLogin),
    takeLatest("REGISTER_REQUEST", fetchRegister)
  ]);
}

function* fetchLogin(action) {
    const payload = { user: action.payload }

    try {
        const response = yield call(api.users.login, payload);
        yield put({type: "LOGIN_SUCCESS", payload: response.user});
    } catch (e) {
        yield put({type: "LOGIN_FAIL"});
    }
}

function* fetchRegister(action) {
    const payload = { user: action.payload }

    try {
        const response = yield call(api.users.register, payload);
        yield put({type: "REGISTER_SUCCESS", payload: response.user})
    } catch (e) {
        yield put({type: "REGISTER_FAIL"})
    }
}