import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import { staffFetch, fetchStaffFailed, setStaffData } from '../ducks/divStaff';

export default function* onFetchStaff() {
  yield takeLatest(staffFetch, function* fetchRecords() {
    try {
      const staff = {};
      const responseUS1 = yield call(axios.get, 'https://api.vatusa.net/v2/users/roles/ZHQ/US1');
      const responseUS2 = yield call(axios.get, 'https://api.vatusa.net/v2/users/roles/ZHQ/US2');
      const responseUS3 = yield call(axios.get, 'https://api.vatusa.net/v2/users/roles/ZHQ/US3');
      const responseUS4 = yield call(axios.get, 'https://api.vatusa.net/v2/users/roles/ZHQ/US4');
      const responseUS5 = yield call(axios.get, 'https://api.vatusa.net/v2/users/roles/ZHQ/US5');
      const responseUS6 = yield call(axios.get, 'https://api.vatusa.net/v2/users/roles/ZHQ/US6');
      const responseUS7 = yield call(axios.get, 'https://api.vatusa.net/v2/users/roles/ZHQ/US7');
      const responseUS8 = yield call(axios.get, 'https://api.vatusa.net/v2/users/roles/ZHQ/US8');
      const responseUS9 = yield call(axios.get, 'https://api.vatusa.net/v2/users/roles/ZHQ/US9');
      const responseUS11 = yield call(axios.get, 'https://api.vatusa.net/v2/users/roles/ZHQ/US11');
      const responseUS12 = yield call(axios.get, 'https://api.vatusa.net/v2/users/roles/ZHQ/US12');
      staff.push({ us1: responseUS1[0] });
      staff.push({ us2: responseUS2[0] });
      staff.push({ us3: responseUS3[0] });
      staff.push({ us4: responseUS4[0] });
      staff.push({ us5: responseUS5[0] });
      staff.push({ us6: responseUS6[0] });
      staff.push({ us7: responseUS7[0] });
      staff.push({ us8: responseUS8[0] });
      staff.push({ us9: responseUS9[0] });
      staff.push({ us11: responseUS11[0] });
      staff.push({ us12: responseUS12[0] });
      yield put(setStaffData(staff));
    } catch (e) {
      yield put(fetchStaffFailed(e));
    }
  });
}
