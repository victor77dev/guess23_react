import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import config from 'config/config.json';
import { loading, logined, getError } from './actions';
import { FETCH_USER_DATA } from './constants';

const apiUrl = config.server.basePath;

export function* fetchUserData() {
  yield put(loading());
  const token = localStorage.getItem('token');
  if (token) {
    const authHeader = {
      Authorization: `JWT ${token}`,
    };
    try {
      const login = yield call(axios.get, `${apiUrl}/api/v1/users/`, { headers: authHeader });
      yield put(logined(login.data));
    } catch (err) {
      localStorage.removeItem('token');
      yield put(getError(err.toString()));
    }
  }
}

export default function* loginPageSaga() {
  yield takeLatest(FETCH_USER_DATA, fetchUserData);
}
