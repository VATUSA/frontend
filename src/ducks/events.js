import { takeLatest, put } from 'redux-saga/effects';

const fetchFailed = 'EVENTS/FETCH_FAILED';
const setRecords = 'EVENTS/FETCH_SET';

export function* onFetchRecords() {
  yield takeLatest('RECORDS/FETCH', async function* fetchRecords() {
    let responseBody;
    try {
      const response = await fetch('https://api.dev.vatusa.net/events');
      responseBody = response.json();
    } catch (e) {
      yield put(fetchFailed(e));
      return;
    }

    yield put(setRecords(responseBody.records));
  });
}

export default (state = { data: [], loading: false }, action = {}) => {
  switch (action.type) {
    case 'EVENTS/FETCH':
    case 'EVENTS/FETCH_FAILED':
      return {
        ...state,
        loading: true,
        data: [],
      };
    case 'EVENTS/FETCH_SET':
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    default:
      return state;
  }
};
