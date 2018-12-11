
import { fromJS } from 'immutable';
import gameRoomListPageReducer from '../reducer';

describe('gameRoomListPageReducer', () => {
  it('returns the initial state', () => {
    expect(gameRoomListPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
