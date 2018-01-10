import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import { eventFetch, fetchEventsFailed, setEventData } from '../ducks/events';

export default function* onFetchRecords() {
  yield takeLatest(eventFetch, function* fetchRecords() {
    try {
      const response = yield call(axios.get, 'https://api.vatusa.net/events');
      yield put(setEventData(response.data));
    } catch (e) {
      yield put(fetchEventsFailed(e));
    }
  });
}
