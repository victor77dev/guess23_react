/*
 *
 * LoginPage actions
 *
 */

import {
  LOGIN,
  LOGOUT,
  LOADING,
  ERROR,
  FETCH_USER_DATA,
} from './constants';

export function logined(user) {
  return {
    type: LOGIN,
    payload: user,
  };
}

export function logouted(error = '') {
  return {
    type: LOGOUT,
    payload: error,
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

export function fetchUserData() {
  return {
    type: FETCH_USER_DATA,
  };
}
