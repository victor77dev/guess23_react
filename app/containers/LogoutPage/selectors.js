import { createSelector } from 'reselect';

/**
 * Direct selector to the logoutPage state domain
 */
const selectLogoutPageDomain = (state) => state.get('logoutPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by LogoutPage
 */

const makeSelectLogoutPage = () => createSelector(
  selectLogoutPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectLogoutPage;
export {
  selectLogoutPageDomain,
};
