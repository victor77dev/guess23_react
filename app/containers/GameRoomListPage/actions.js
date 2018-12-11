/*
 *
 * GameRoomListPage actions
 *
 */

import {
  FETCH_GAME_ROOM_DATA,
  UPDATE_GAME_ROOM_DATA,
  LOADING,
  ERROR,
} from './constants';

export function updateGameRoomData(gamerooms) {
  return {
    type: UPDATE_GAME_ROOM_DATA,
    payload: gamerooms,
  };
}

export function loading() {
  return {
    type: LOADING,
  };
}

export function getError(error) {
  return {
    type: ERROR,
    payload: error,
  };
}

export function fetchGameRoomData() {
  return {
    type: FETCH_GAME_ROOM_DATA,
  };
}
