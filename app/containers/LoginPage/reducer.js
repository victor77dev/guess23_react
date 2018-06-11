/*
 *
 * LoginPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOGIN,
  LOGOUT,
  LOADING,
  ERROR,
} from './constants';

const initialState = fromJS({
  user: {
    email: '',
    username: '',
  },
  login: false,
  errorMsg: '',
  loading: true,
});

function loginPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return state
        .set('user', fromJS(action.payload))
        .set('login', true)
        .set('errorMsg', '')
        .set('loading', false);
    case LOGOUT:
      return state
        .set('user', initialState.get('user'))
        .set('login', false)
        .set('errorMsg', action.payload)
        .set('loading', false);
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

export default loginPageReducer;
