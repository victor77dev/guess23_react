/*
 *
 * RegisterPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REGISTERED,
} from './constants';

const initialState = fromJS({
  msg: '',
});

function registerPageReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTERED:
      return state
        .set('msg', action.payload);
    default:
      return state;
  }
}

export default registerPageReducer;
