import {fork, all} from 'redux-saga/effects';

import userSaga from './userSaga';

export default function* run() {
  const tasks = yield all([
    fork(userSaga),
  ]);
}
