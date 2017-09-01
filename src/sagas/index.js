import { fork } from 'redux-saga/effects';

/**
 * rootSaga
 */
export default function* root() {
  yield fork();
}
