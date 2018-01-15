import { all, spawn } from 'redux-saga/effects';
import eventSaga from './events';
import newsSaga from './news';
import facilitiesSaga from './facilities';

export default function* rootSaga() {
  yield all([
    spawn(eventSaga),
    spawn(newsSaga),
    spawn(facilitiesSaga),
  ]);
}
