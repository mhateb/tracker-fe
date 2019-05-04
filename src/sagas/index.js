import {fork, all} from 'redux-saga/effects';

import userSaga from './userSaga';
import packsSaga from './packsSaga';

export default function* run() {
  const tasks = yield all([
    fork(userSaga),
    fork(packsSaga)
  ]);
}
