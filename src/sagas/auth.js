import { call } from 'redux-saga/effects';
import request from 'utils/request';

export default function* fetchToken() {
  try {
    const response = yield call(request.get, '/v2/auth/token');
    window.sessionStorage.setItem('token', response.data.token);

    yield call(request.get, '/v2/auth/info');

    window.sessionStorage.setItem('info', response.data);
  } catch (e) {
    // TODO: Do something on failure maybe?
  }
}
