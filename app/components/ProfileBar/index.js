/**
*
* ProfileBar
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import ProfileChip from 'components/ProfileChip/Loadable';

const styles = () => ({
  progress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
});

class ProfileBar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  goToLogin = this.props.goToPath.bind(this, '/login');

  render() {
    const { classes, user, login, loading, goToPath } = this.props;
    if (!login || user.username === '') {
      return (
        <Button color="secondary" variant="contained" onClick={this.goToLogin}>
          Login
          {loading && <CircularProgress className={classes.progress} size={24} color="inherit" />}
        </Button>
      );
    }
    return <ProfileChip user={user} goToPath={goToPath} />;
  }
}

ProfileBar.propTypes = {
  classes: PropTypes.object,
  loading: PropTypes.bool,
  login: PropTypes.bool,
  user: PropTypes.object,
  goToPath: PropTypes.func,
};

export default withStyles(styles)(ProfileBar);
