import { createSelector } from 'reselect';

/**
 * Direct selector to the loginPage state domain
 */
const selectLoginPageDomain = (state) => state.get('loginPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by LoginPage
 */

const makeSelectErrorMsg = () => createSelector(
  selectLoginPageDomain,
  (loginState) => loginState.get('errorMsg')
);

const makeSelectLogin = () => createSelector(
  selectLoginPageDomain,
  (loginState) => loginState.get('login')
);

const makeSelectLoading = () => createSelector(
  selectLoginPageDomain,
  (loginState) => loginState.get('loading')
);

const makeSelectUser = () => createSelector(
  selectLoginPageDomain,
  (loginState) => loginState.get('user').toJS()
);

export {
  selectLoginPageDomain,
  makeSelectErrorMsg,
  makeSelectLogin,
  makeSelectLoading,
  makeSelectUser,
};
