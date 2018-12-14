/*
 *
 * GameRoomPage actions
 *
 */

import {
  FETCH_GAME_ROOM_DATA,
  UPDATE_GAME_ROOM_DATA,
  LOADING,
  ERROR,
} from './constants';

export function updateGameRoomData(gameroom) {
  return {
    type: UPDATE_GAME_ROOM_DATA,
    payload: gameroom,
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

export function fetchGameRoomData(gameroomId) {
  return {
    type: FETCH_GAME_ROOM_DATA,
    payload: gameroomId,
  };
}
