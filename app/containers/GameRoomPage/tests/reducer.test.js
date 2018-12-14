
import { fromJS } from 'immutable';
import gameRoomPageReducer from '../reducer';

describe('gameRoomPageReducer', () => {
  it('returns the initial state', () => {
    expect(gameRoomPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
