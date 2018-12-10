/**
 *
 * ProfileBarContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import ProfileBar from 'components/ProfileBar';
import { makeSelectUser, makeSelectLogin, makeSelectLoading } from 'containers/LoginPage/selectors';
import loginReducer from 'containers/LoginPage/reducer';
import { fetchUserData } from 'containers/LoginPage/actions';
import loginSaga from 'containers/LoginPage/saga';
import reducer from './reducer';
import saga from './saga';

export class ProfileBarContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    const { user, fetchUserDataAction } = this.props;
    if (user.username === '') fetchUserDataAction();
  }

  componentWillUpdate(nextProps) {
    const { loading, fetchUserDataAction } = nextProps;
    if (loading) fetchUserDataAction();
  }

  render() {
    const { user, login, loading, goToPath } = this.props;
    return (
      <ProfileBar user={user} login={login} loading={loading} goToPath={goToPath} />
    );
  }
}

ProfileBarContainer.propTypes = {
  fetchUserDataAction: PropTypes.func,
  loading: PropTypes.bool,
  login: PropTypes.bool,
  user: PropTypes.object,
  goToPath: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  login: makeSelectLogin(),
  loading: makeSelectLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchUserDataAction: () => {
      dispatch(fetchUserData());
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'profileBarContainer', reducer });
const withLoginReducer = injectReducer({ key: 'loginPage', reducer: loginReducer });
const withSaga = injectSaga({ key: 'profileBarContainer', saga });
const withLoginSaga = injectSaga({ key: 'loginPage', saga: loginSaga });

export default compose(
  withReducer,
  withLoginReducer,
  withSaga,
  withLoginSaga,
  withConnect,
)(ProfileBarContainer);
