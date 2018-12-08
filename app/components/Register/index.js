/**
*
* Register
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Field } from 'redux-form/immutable';

const RenderField = ({ input, label, type, meta: { touched, error, asyncValidating } }) => (
  <div className="form-group">
    <label htmlFor={label}>{label}</label>
    <input {...input} placeholder={label} className="form-control" type={type} />
    {asyncValidating && <div>Checking availability<div className="loader"></div></div>}
    {touched && error && <span>{error}</span>}
  </div>
);

RenderField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object,
};

class Register extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { error, handleSubmit, submitting, registerSubmit } = this.props;
    return (
      <div className="container">
        <h2 className="page-header">Register</h2>
        <p>Please register below</p>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit(registerSubmit)}>
          <Field
            name="email"
            type="email"
            component={RenderField}
            label="Email"
          />
          <Field
            name="username"
            type="text"
            component={RenderField}
            label="Username"
          />
          <Field
            name="password1"
            type="password"
            component={RenderField}
            label="Password"
          />
          <Field
            name="password2"
            type="password"
            component={RenderField}
            label="Confirm Password"
          />
          <div>
            <button className="btn btn-primary" type="submit" disabled={submitting}>
              Register
            </button>
          </div>
        </form>
      </div>
    );
  }
}

Register.propTypes = {
  error: PropTypes.array,
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  registerSubmit: PropTypes.func,
};

export default Register;
