/*
 *
 * GameRoomListPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  UPDATE_GAME_ROOM_DATA,
  LOADING,
  ERROR,
} from './constants';

const initialState = fromJS({
  loading: false,
  errorMsg: '',
  gamerooms: [],
});

function gameRoomListPageReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_GAME_ROOM_DATA:
      return state
        .set('loading', false)
        .set('gamerooms', fromJS(action.payload));
    case LOADING:
      return state
        .set('loading', true);
    case ERROR:
      return state
        .set('errorMsg', action.payload);
    default:
      return state;
  }
}

export default gameRoomListPageReducer;
