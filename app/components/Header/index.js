import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const styles = {
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  menu: {
    top: 38,
  },
};


class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    anchorEl: null,
  };

  handleMenuClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  goToPage = (page) => {
    this.props.history.push(page);
  }

  goToPage = this.goToPage('/');

  addButtons = (list) => {
    const buttonList = list.map((button) => {
      if (button === 'Home') {
        return <MenuItem key="Home" onClick={this.goToHome}>Home</MenuItem>;
      }
      return <MenuItem key={button} onClick={() => console.log(button)}>{button}</MenuItem>;
    });
    return buttonList;
  }

  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props;
    const buttons = ['Home', 'Testing'];
    return (
      <AppBar>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon onClick={this.handleMenuClick} />
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleMenuClose}
              className={classes.menu}
            >
              {this.addButtons(buttons)}
            </Menu>
          </IconButton>
          <Typography variant="title" color="inherit">
            Guess 2/3
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

const StyledHeader = withStyles(styles)(Header);
export default StyledHeader;
