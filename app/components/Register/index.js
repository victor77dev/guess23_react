/**
*
* Register
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

import { Field } from 'redux-form/immutable';
import InlineAlert from 'components/InlineAlert';

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
  textFieldDiv: {
    display: 'flex',
  },
  textField: {
    flex: 3,
    margin: theme.spacing.unit,
    width: '100%',
  },
  alert: {
    flex: 1,
  },
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

const RenderField = ({ input, label, type, meta: { touched, error, asyncValidating }, classes }) => (
  <div>
    <Typography variant="headline" component="h4" className={classes.textLef}>{label}</Typography>
    <div className={classes.textFieldDiv}>
      <TextField
        {...input}
        placeholder={label}
        type={type}
        className={classes.textField}
        InputProps={{
          endAdornment: <InputAdornment position="end">
            {asyncValidating && <CircularProgress size={24} className={classes.progress} />}
          </InputAdornment>,
        }}
      />
      {touched && error && <InlineAlert message={error} variant="error" className={classes.alert} />}
    </div>
  </div>
);

const StyledRenderField = withStyles(styles)(RenderField);

RenderField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object,
  classes: PropTypes.object,
};

class Register extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { classes, error, handleSubmit, submitting, registerSubmit } = this.props;
    return (
      <Grid container justify="center" className={classes.container}>
        <Typography variant="display1" component="h3" className={classes.textCen}>Register Here!</Typography>
        {error && <InlineAlert message={error} variant="error" />}
        <form onSubmit={handleSubmit(registerSubmit)}>
          <Field
            name="email"
            type="email"
            component={StyledRenderField}
            label="Email"
          />
          <Field
            name="username"
            type="text"
            component={StyledRenderField}
            label="Username"
          />
          <Field
            name="password1"
            type="password"
            component={StyledRenderField}
            label="Password"
          />
          <Field
            name="password2"
            type="password"
            component={StyledRenderField}
            label="Confirm Password"
          />
          <div className={classes.buttonDiv}>
            <Button variant="contained" className={classes.button} color="primary" type="submit" disabled={submitting}>
              Register
            </Button>
          </div>
        </form>
      </Grid>
    );
  }
}

Register.propTypes = {
  error: PropTypes.array,
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  registerSubmit: PropTypes.func,
  classes: PropTypes.object,
};

export default withStyles(styles)(Register);
