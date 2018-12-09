
import { fromJS } from 'immutable';
import logoutPageReducer from '../reducer';

describe('logoutPageReducer', () => {
  it('returns the initial state', () => {
    expect(logoutPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
