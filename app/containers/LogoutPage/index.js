/**
 *
 * LogoutPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import Logout from 'components/Logout';
import { fetchUserData, logouted } from 'containers/LoginPage/actions';
import makeSelectLogoutPage from './selectors';
import reducer from './reducer';
import saga from './saga';

export class LogoutPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { history, fetchUserDataAction, logoutedAction } = this.props;
    return (
      <Logout history={history} fetchUserData={fetchUserDataAction} logouted={logoutedAction} />
    );
  }
}

LogoutPage.propTypes = {
  history: PropTypes.object.isRequired,
  fetchUserDataAction: PropTypes.func,
  logoutedAction: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  logoutpage: makeSelectLogoutPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchUserDataAction: () => {
      dispatch(fetchUserData());
    },
    logoutedAction: () => {
      dispatch(logouted());
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'logoutPage', reducer });
const withSaga = injectSaga({ key: 'logoutPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LogoutPage);
