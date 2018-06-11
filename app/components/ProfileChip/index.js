/**
*
* ProfileChip
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const styles = (theme) => ({
  welcomeDiv: {
    display: 'flex',
    flexDirection: 'column',
  },
  profileChip: {
    backgroundColor: theme.palette.secondary.light,
  },
  menu: {
    top: 38,
  },
  welcome: {
    margin: 2 * theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  chip: {
    height: 40,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  chipAvatar: {
    marginLeft: -10,
    height: 40,
    width: 40,
  },
});

const ProfileAvatar = (props) => {
  const { avatarStyle, onClick, user } = props;
  const { username } = user;
  return (
    <Avatar
      onClick={onClick}
      className={avatarStyle}
    >
      {username.substring(0, 1).toUpperCase()}
    </Avatar>
  );
};

ProfileAvatar.propTypes = {
  avatarStyle: PropTypes.string,
  onClick: PropTypes.func,
  user: PropTypes.object,
};

const WelcomeMessage = ({ user: { username }, user, classes }) => (
  <div className={classes.welcomeDiv}>
    <Typography variant="display1" className={classes.welcome}>
      Welcome!
    </Typography>
    <Chip
      avatar={<ProfileAvatar avatarStyle={classes.chipAvatar} user={user} />}
      label={username}
      className={classes.chip}
    />
  </div>
);

WelcomeMessage.propTypes = {
  user: PropTypes.object,
  classes: PropTypes.object,
};

class ProfileChip extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  state = {
    anchorEl: null,
  };

  handleMenuClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  goToLogout = this.props.goToPath.bind(this, '/logout');

  render() {
    const { anchorEl } = this.state;
    const { user, classes } = this.props;
    return (
      <div>
        <ProfileAvatar avatarStyle={classes.profileChip} onClick={this.handleMenuClick} user={user} />
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleMenuClose}
          className={classes.menu}
        >
          <MenuItem disabled component={() => <WelcomeMessage user={user} classes={classes} />}>
          </MenuItem>
          <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
          <MenuItem onClick={this.goToLogout}>Logout</MenuItem>
        </Menu>
      </div>
    );
  }
}

ProfileChip.propTypes = {
  user: PropTypes.object,
  classes: PropTypes.object,
  goToPath: PropTypes.func,
};

export default withStyles(styles)(ProfileChip);
