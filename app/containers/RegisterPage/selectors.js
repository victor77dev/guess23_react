import { createSelector } from 'reselect';

/**
 * Direct selector to the registerPage state domain
 */
const selectRegisterPageDomain = (state) => state.get('registerPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by RegisterPage
 */

const makeSelectRegisterMsg = () => createSelector(
  selectRegisterPageDomain,
  (registerState) => registerState.get('msg')
);

export {
  selectRegisterPageDomain,
  makeSelectRegisterMsg,
};
