
import { fromJS } from 'immutable';
import profileBarContainerReducer from '../reducer';

describe('profileBarContainerReducer', () => {
  it('returns the initial state', () => {
    expect(profileBarContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
