/*
 *
 * RegisterPage actions
 *
 */

import {
  REGISTERED,
} from './constants';

export function registered(msg) {
  return {
    type: REGISTERED,
    payload: msg,
  };
}
