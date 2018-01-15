import { all, spawn } from 'redux-saga/effects';
import eventSaga from './events';
import newsSaga from './news';

export default function* rootSaga() {
  yield all([
    spawn(eventSaga),
    spawn(newsSaga),
  ]);
}
