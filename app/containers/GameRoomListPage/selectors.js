import { createSelector } from 'reselect';

/**
 * Direct selector to the gameRoomListPage state domain
 */
const selectGameRoomListPageDomain = (state) => state.get('gameRoomListPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by GameRoomListPage
 */

const makeSelectGameRooms = () => createSelector(
  selectGameRoomListPageDomain,
  (gameRoomListState) => gameRoomListState.get('gamerooms').toJS()
);

const makeSelectErrorMsg = () => createSelector(
  selectGameRoomListPageDomain,
  (gameRoomListState) => gameRoomListState.get('errorMsg')
);

const makeSelectLoading = () => createSelector(
  selectGameRoomListPageDomain,
  (gameRoomListState) => gameRoomListState.get('loading')
);

export {
  selectGameRoomListPageDomain,
  makeSelectGameRooms,
  makeSelectErrorMsg,
  makeSelectLoading,
};
