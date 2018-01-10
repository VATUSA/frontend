import { takeLatest, put } from 'redux-saga/effects';
import { eventFetch, eventFetchFailed, eventFetchSet } from '../ducks/events';

export default function* onFetchRecords() {
  yield takeLatest(eventFetch, async function* fetchRecords() {
    let responseBody;
    try {
      const response = await fetch('https://api.dev.vatusa.net/events');
      responseBody = response.json();
    } catch (e) {
      yield put(eventFetchFailed(e));
      return;
    }

    yield put(eventFetchSet(responseBody.records));
  });
}
