/**
 *
 * RegisterPage
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
import Register from 'components/Register';
import { fetchUserData } from 'containers/LoginPage/actions';
import { makeSelectLogin, makeSelectLoading } from 'containers/LoginPage/selectors';
import loginReducer from 'containers/LoginPage/reducer';
import loginSaga from 'containers/LoginPage/saga';
import registerReducer from './reducer';
import registerSubmit from './reduxFormFunc/registerSubmit';
import registerValidate from './reduxFormFunc/registerValidate';
import registerAsyncValidate from './reduxFormFunc/registerAsyncValidate';

export class RegisterPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.fetchUserData();
  }

  componentDidUpdate() {
    if (!this.props.loading && this.props.login) {
      this.props.history.push('/');
    }
  }

  render() {
    const { error, handleSubmit, submitting } = this.props;
    return (
      <Register error={error} handleSubmit={handleSubmit} submitting={submitting} registerSubmit={registerSubmit} />
    );
  }
}

RegisterPage.propTypes = {
  fetchUserData: PropTypes.func,
  loading: PropTypes.bool,
  login: PropTypes.bool,
  history: PropTypes.object,
  error: PropTypes.array,
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
  loading: makeSelectLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchUserData: () => {
      dispatch(fetchUserData());
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withRegisterReducer = injectReducer({ key: 'registerPage', reducer: registerReducer });
const withLoginReducer = injectReducer({ key: 'loginPage', reducer: loginReducer });
const withFormReducer = injectReducer({ key: 'form', reducer: formReducer });
const withLoginSaga = injectSaga({ key: 'loginPage', saga: loginSaga });

const RegisterReduxFormPage = reduxForm({
  form: 'register', // a unique identifier for this form
  validate: registerValidate,
  asyncValidate: registerAsyncValidate,
  asyncBlurFields: ['email', 'username'],
})(RegisterPage);

export default compose(
  withRegisterReducer,
  withLoginReducer,
  withFormReducer,
  withLoginSaga,
  withConnect,
)(RegisterReduxFormPage);
