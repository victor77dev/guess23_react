/**
*
* Logout
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import axios from 'axios';
import config from 'config/config.json';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const apiUrl = config.server.basePath;

const styles = (theme) => ({
  textCen: {
    textAlign: 'center',
    color: grey['700'],
    display: 'block',
    margin: theme.spacing.unit,
    width: '100%',
  },
});

class Logout extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    const { logouted, history } = this.props;
    this.logout()
      .then((data) => {
        if (data === 'Not Login') logouted();
        // JWT doesn't really logout. Just delete token in localStorage.
        // Note: Django Rest JWT DO NOT expire token when logout
        localStorage.removeItem('token');
        logouted();
        setTimeout(() => {
          history.push('/');
        }, 5000);
      })
      .catch((err) => {
        throw err;
      });
  }

  logout = () => {
    const token = localStorage.getItem('token');
    if (token) {
      const authHeader = {
        Authorization: `JWT ${token}`,
      };
      return axios.post(`${apiUrl}/api/v1/rest-auth/logout/`, { headers: authHeader });
    }
    return new Promise((resolve) => { resolve('Not Login'); });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography variant="headline" component="h4" className={classes.textCen}>
          <FormattedMessage {...messages.logout} />
        </Typography>
        <Typography variant="headline" component="h4" className={classes.textCen}>
          <FormattedMessage {...messages.redirect} />
        </Typography>
      </div>
    );
  }
}

Logout.propTypes = {
  history: PropTypes.object.isRequired,
  logouted: PropTypes.func,
  classes: PropTypes.object,
};

export default withStyles(styles)(Logout);
