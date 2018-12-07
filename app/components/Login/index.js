/**
*
* Login
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { Field } from 'redux-form/immutable';

const RenderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="form-group">
    <label htmlFor={label} />
    <input {...input} placeholder={label} className="form-control" type={type} />
    {touched && error && <span>{error}</span>}
  </div>
);

RenderField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object,
};

class Login extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { error, handleSubmit, submitting, loginSubmit, msg, errorMsg } = this.props;
    return (
      <div className="container">
        <h2 className="page-header">Login</h2>
        {msg && <div className="alert alert-success">{msg}</div>}
        {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
        <p>Please login</p>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit(loginSubmit)}>
          <Field
            name="username"
            type="text"
            component={RenderField}
            label="Username"
          />
          <Field
            name="password"
            type="password"
            component={RenderField}
            label="Password"
          />
          <div>
            <button className="btn btn-primary" type="submit" disabled={submitting}>
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  errorMsg: PropTypes.string,
  error: PropTypes.array,
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  loginSubmit: PropTypes.func,
  msg: PropTypes.string,
};

export default Login;
