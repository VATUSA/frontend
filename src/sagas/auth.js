import { call } from 'redux-saga/effects';
import request from 'utils/request';

export default function* fetchToken() {
  try {
    const response = yield call(request.get, '/v2/auth/token');
    yield window.sessionStorage.setItem(response.data.token);
  } catch (e) {
    // TODO: Do something on failure maybe?
  }
}
