import { createSelector } from 'reselect';

/**
 * Direct selector to the profileBarContainer state domain
 */
const selectProfileBarContainerDomain = (state) => state.get('profileBarContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ProfileBarContainer
 */

const makeSelectProfileBarContainer = () => createSelector(
  selectProfileBarContainerDomain,
  (substate) => substate.toJS()
);

export default makeSelectProfileBarContainer;
export {
  selectProfileBarContainerDomain,
};
