/*
 *
 * GameRoomListPage actions
 *
 */

import {
  FETCH_GAME_ROOMS_LIST_DATA,
  UPDATE_GAME_ROOMS_LIST_DATA,
  LOADING,
  ERROR,
} from './constants';

export function updateGameRoomsListData(gamerooms) {
  return {
    type: UPDATE_GAME_ROOMS_LIST_DATA,
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

export function fetchGameRoomsListData() {
  return {
    type: FETCH_GAME_ROOMS_LIST_DATA,
  };
}
