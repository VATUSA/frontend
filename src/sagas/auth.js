import request from 'utils/request';
import { takeLatest, put, call } from 'redux-saga/effects';
import { authFetch, fetchAuthFailed, setAuthData } from '../ducks/auth';

export default function* onFetchToken() {
  yield takeLatest(authFetch, function* fetchRecords() {
    try {
      const response = yield call(request.get, '/v2/auth/token');
      window.sessionStorage.setItem('token', response.data.token);

      const infoResponse = yield call(request.get, '/v2/auth/info');

      yield put(setAuthData(infoResponse.data));
    } catch (e) {
      yield put(fetchAuthFailed(e));
    }
  });
}
