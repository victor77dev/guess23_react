/**
 *
 * LoginPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { reduxForm, reducer as formReducer } from 'redux-form/immutable';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import Login from 'components/Login';
import registerReducer from 'containers/RegisterPage/reducer';
import { makeSelectRegisterMsg } from 'containers/RegisterPage/selectors';
import { makeSelectErrorMsg, makeSelectLogin, makeSelectLoading } from './selectors';
import loginReducer from './reducer';
import saga from './saga';
import loginSubmit from './reduxFormFunc/loginSubmit';

export class LoginPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidUpdate() {
    if (!this.props.loading && this.props.login) {
      this.props.history.push('/');
    }
  }

  render() {
    const { error, handleSubmit, submitting, msg, errorMsg } = this.props;
    return (
      <Login error={error} handleSubmit={handleSubmit} submitting={submitting} loginSubmit={loginSubmit} msg={msg} errorMsg={errorMsg} />
    );
  }
}

LoginPage.propTypes = {
  loading: PropTypes.bool,
  login: PropTypes.bool,
  errorMsg: PropTypes.string,
  history: PropTypes.object,
  error: PropTypes.array,
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  msg: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  msg: makeSelectRegisterMsg(),
  errorMsg: makeSelectErrorMsg(),
  login: makeSelectLogin(),
  loading: makeSelectLoading(),
});

function mapDispatchToProps() {
  return {
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withRegisterReducer = injectReducer({ key: 'registerPage', reducer: registerReducer });
const withLoginReducer = injectReducer({ key: 'loginPage', reducer: loginReducer });
const withFormReducer = injectReducer({ key: 'form', reducer: formReducer });
const withSaga = injectSaga({ key: 'loginPage', saga });

const LoginReduxFormPage = reduxForm({
  form: 'login', // a unique identifier for this form
})(LoginPage);

export default compose(
  withRegisterReducer,
  withLoginReducer,
  withFormReducer,
  withSaga,
  withConnect,
)(LoginReduxFormPage);
