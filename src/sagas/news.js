import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import { newsFetch, fetchNewsFailed, setNewsData } from '../ducks/news';

export default function* onFetchNews() {
  yield takeLatest(newsFetch, function* fetchRecords() {
    try {
      const response = yield call(axios.get, 'https://api.dev.vatusa.net/news,10');
      yield put(setNewsData(response.data));
    } catch (e) {
      yield put(fetchNewsFailed(e));
    }
  });
}
