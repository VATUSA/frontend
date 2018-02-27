import { all, spawn } from 'redux-saga/effects';
import eventSaga from './events';
import newsSaga from './news';
import facilitiesSaga from './facilities';
import tokenSaga from './auth';

export default function* rootSaga() {
  yield all([
    spawn(tokenSaga),
    spawn(eventSaga),
    spawn(newsSaga),
    spawn(facilitiesSaga),
  ]);
}
