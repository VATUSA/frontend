import { all, spawn } from 'redux-saga/effects';
import eventSaga from './events';

export default function* rootSaga() {
  yield all([
    spawn(eventSaga),
  ]);
}
