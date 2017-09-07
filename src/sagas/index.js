// @flow

/**
 * @module Sagas/User
 * @desc User
 */

import { put, call, fork, takeEvery } from 'redux-saga/effects';

import { ActionTypes } from '../constants';

/**
 * Login
 */
export function* getEvents() {
  try {
    // An API call might be useful here.
    // yield call(delay, 1000);

    const response = yield call(() => fetch('https://apidev.vatusa.net/events'));
    const responseBody = response.json();

    yield put({
      type: ActionTypes.RECEIVE_EVENTS,
      events: responseBody.events,
    });
  } catch (err) {
    // Do error things.
  }
}

function* watchGetEvents() {
  yield takeEvery(ActionTypes.GET_EVENTS, getEvents);
}

/**
 * User Sagas
 */
export default function* app() {
  yield fork(watchGetEvents);
}
