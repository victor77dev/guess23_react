import React from 'react';

import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import InfoIcon from '@material-ui/icons/Info';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import grey from '@material-ui/core/colors/grey';
import blueGrey from '@material-ui/core/colors/blueGrey';
import ProfileBarContainer from 'containers/ProfileBarContainer';

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
  dummy: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
};


class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    open: false,
  };

  handleMenuClick = () => {
    this.setState({ open: true });
  };

  handleMenuClose = () => {
    this.setState({ open: false });
  };

  handleMenuOpen = () => {
    this.setState({ open: true });
  };

  goToPath = (path) => {
    this.handleMenuClose();
    this.props.history.push(path);
  }

  goToHome = this.goToPath.bind(this, '/');
  goToRegister = this.goToPath.bind(this, '/register');

  addButtons = (list) => {
    const buttonFuncIconList = {
      Home: {
        onClick: this.goToHome,
        icon: <HomeIcon />,
      },
      Register: {
        onClick: this.goToRegister,
        icon: <PersonAddIcon />,
      },
      About: {
        onClick: this.handleMenuClose,
        icon: <InfoIcon />,
      },
    };
    const buttonList = list.map((button) => {
      if (button === '---divider---') {
        return <Divider key={button} />;
      }
      if (button in buttonFuncIconList) {
        return (
          <ListItem button key={button} onClick={buttonFuncIconList[button].onClick}>
            {buttonFuncIconList[button].icon &&
              <ListItemIcon>
                {buttonFuncIconList[button].icon}
              </ListItemIcon>
            }
            <ListItemText primary={button} />
          </ListItem>
        );
      }
      return <ListItem button key={button} onClick={() => { this.handleMenuClose(); }}>{button}</ListItem>;
    });
    return buttonList;
  }

  render() {
    const { open } = this.state;
    const { classes } = this.props;
    const buttons = ['Home', 'Register', '---divider---', 'About'];
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
            <SwipeableDrawer
              anchor="left"
              open={open}
              onClose={this.handleMenuClose}
              onOpen={this.handleMenuOpen}
              className={classes.menu}
            >
              <List className={classes.list}>
                {this.addButtons(buttons)}
              </List>
            </SwipeableDrawer>
            <Typography variant="title" color="inherit" onClick={this.goToHome}>
              Guess 2/3
            </Typography>
            <div className={classes.dummy}></div>
            <ProfileBarContainer goToPath={this.goToPath} />
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
