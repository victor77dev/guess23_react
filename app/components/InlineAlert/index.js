/**
*
* InlineAlert
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import styled from 'styled-components';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import WarningIcon from '@material-ui/icons/Warning';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const styles = (theme) => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.dark,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
});

class InlineAlert extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { classes, className, message, onClose, variant, ...other } = this.props;
    const Icon = variantIcon[variant];
    return (
      <SnackbarContent
        square={false}
        className={classNames(classes[variant], className)}
        aria-describedby="inlineAlert"
        message={
          <span id="inlineAlert" className={classes.message}>
            <Icon className={classNames(classes.icon, classes.iconVariant)} />
            {message}
          </span>
        }
        action={onClose &&
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            className={classes.close}
            onClick={onClose}
          >
            <CloseIcon className={classes.icon} />
          </IconButton>
        }
        {...other}
      />
    );
  }
}

InlineAlert.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  message: PropTypes.node,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
};

export default withStyles(styles)(InlineAlert);
