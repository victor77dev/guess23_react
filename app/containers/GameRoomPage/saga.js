import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import config from 'config/config.json';
import { updateGameRoomData, loading, getError } from './actions';
import { FETCH_GAME_ROOM_DATA } from './constants';

const apiUrl = config.server.basePath;

export function* fetchGameRoomData(params) {
  const { payload: gameroomId } = params;
  yield put(loading());
  try {
    const token = localStorage.getItem('token');
    let tokenParam = null;
    if (token) {
      const authHeader = {
        Authorization: `JWT ${token}`,
      };
      tokenParam = { headers: authHeader };
    }
    const gamerooms = yield call(axios.get, `${apiUrl}/api/v1/gamerooms/${gameroomId}`, tokenParam);
    yield put(updateGameRoomData(gamerooms.data));
  } catch (err) {
    yield put(getError(err.toString()));
  }
}

export default function* gameRoomPageSaga() {
  yield takeLatest(FETCH_GAME_ROOM_DATA, fetchGameRoomData);
}
