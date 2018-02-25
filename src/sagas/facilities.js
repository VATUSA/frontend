import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import { facilitiesFetch, fetchFacilitiesFailed, setFacilitiesData } from '../ducks/facilities';

export default function* onFetchFacilities() {
  yield takeLatest(facilitiesFetch, function* fetchRecords() {
    try {
      const response = yield call(axios.get, 'https://api.vatusa.net/v2/facility');
      yield put(setFacilitiesData(response.data));
    } catch (e) {
      yield put(fetchFacilitiesFailed(e));
    }
  });
}
