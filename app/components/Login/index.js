/**
*
* Login
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { withStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

import { Field } from 'redux-form/immutable';

const styles = (theme) => ({
  container: {
    marginRight: 'auto',
    marginLeft: 'auto',
    display: 'block',
    width: '60%',
  },
  textCen: {
    textAlign: 'center',
    color: grey['500'],
    display: 'block',
    margin: theme.spacing.unit,
    width: '100%',
  },
  textLef: {
    textAlign: 'left',
    color: grey['700'],
    margin: theme.spacing.unit,
    width: '100%',
  },
  buttonDiv: {
    display: 'flex',
  },
  button: {
    margin: theme.spacing.unit,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
});


const RenderField = ({ input, label, type, meta: { touched, error }, classes }) => (
  <div>
    <Typography variant="headline" component="h4" className={classes.textLef}>{label}</Typography>
    <TextField {...input} placeholder={label} type={type} className={classes.textLef} />
    {touched && error && <span>{error}</span>}
  </div>
);

RenderField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object,
  classes: PropTypes.object,
};

const StyledRenderField = withStyles(styles)(RenderField);

class Login extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { classes, error, handleSubmit, submitting, loginSubmit, msg, errorMsg } = this.props;
    return (
      <Grid container justify="center" className={classes.container}>
        <Typography variant="display1" component="h3" className={classes.textCen}>Please Login</Typography>
        {msg && <div className="alert alert-success">{msg}</div>}
        {errorMsg &&
          <SnackbarContent
            aria-describedby="client-snackbar"
            message={
              <span id="client-snackbar" className={classes.message}>
                {errorMsg}
              </span>
            }
          />
        }
        {error &&
          <SnackbarContent
            aria-describedby="client-snackbar"
            message={
              <span id="client-snackbar" className={classes.message}>
                {error}
              </span>
            }
          />
        }
        <form onSubmit={handleSubmit(loginSubmit)}>
          <Field
            name="username"
            type="text"
            component={StyledRenderField}
            label="Username"
          />
          <Field
            name="password"
            type="password"
            component={StyledRenderField}
            label="Password"
          />
          <div className={classes.buttonDiv}>
            <Button variant="contained" className={classes.button} color="primary" type="submit" disabled={submitting}>
              Login
            </Button>
          </div>
        </form>
      </Grid>
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
  classes: PropTypes.object,
};

export default withStyles(styles)(Login);
