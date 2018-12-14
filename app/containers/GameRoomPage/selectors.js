import { createSelector } from 'reselect';

/**
 * Direct selector to the gameRoomPage state domain
 */
const selectGameRoomPageDomain = (state) => state.get('gameRoomPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by GameRoomPage
 */

const makeSelectGameRoom = () => createSelector(
  selectGameRoomPageDomain,
  (gameRoomState) => gameRoomState.get('gameroom').toJS()
);

const makeSelectErrorMsg = () => createSelector(
  selectGameRoomPageDomain,
  (gameRoomState) => gameRoomState.get('errorMsg')
);

const makeSelectLoading = () => createSelector(
  selectGameRoomPageDomain,
  (gameRoomState) => gameRoomState.get('loading')
);

export {
  selectGameRoomPageDomain,
  makeSelectGameRoom,
  makeSelectErrorMsg,
  makeSelectLoading,
};
