import React from 'react';

import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import grey from '@material-ui/core/colors/grey';
import blueGrey from '@material-ui/core/colors/blueGrey';

// Creating theme with following colors
// https://material.io/tools/color/#!/?view.left=0&view.right=0&secondary.color=455A64&primary.color=212121
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#484848',
      main: grey[900],
      dark: '#000000',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#718792',
      main: blueGrey[700],
      dark: '#1c313a',
      contrastText: '#ffffff',
    },
  },
});

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

  goToPath = (path) => {
    this.handleMenuClose();
    this.props.history.push(path);
  }

  goToHome = this.goToPath.bind(this, '/');
  goToLogin = this.goToPath.bind(this, '/login');
  goToRegister = this.goToPath.bind(this, '/register');
  goToLogout = this.goToPath.bind(this, '/logout');

  addButtons = (list) => {
    const buttonOnClickList = {
      Home: this.goToHome,
      Login: this.goToLogin,
      Register: this.goToRegister,
      Logout: this.goToLogout,
    };
    const buttonList = list.map((button) => {
      if (button in buttonOnClickList) {
        return <MenuItem key={button} onClick={buttonOnClickList[button]}>{button}</MenuItem>;
      }
      return <MenuItem key={button} onClick={() => { console.log(button); this.handleMenuClose(); }}>{button}</MenuItem>;
    });
    return buttonList;
  }

  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props;
    const buttons = ['Home', 'About', 'Login', 'Register', 'Logout'];
    return (
      <MuiThemeProvider theme={theme}>
        <AppBar>
          <Toolbar>
            <IconButton
              onClick={this.handleMenuClick}
              aria-haspopup="true"
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleMenuClose}
              className={classes.menu}
            >
              {this.addButtons(buttons)}
            </Menu>
            <Typography variant="title" color="inherit" onClick={this.goToHome}>
              Guess 2/3
            </Typography>
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

const StyledHeader = withStyles(styles)(Header);
export default StyledHeader;
