/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import HomePage from 'containers/HomePage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import LogoutPage from 'containers/LogoutPage';
import RegisterPage from 'containers/RegisterPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import Grid from '@material-ui/core/Grid';

const styles = {
  wrapper: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  dummy: {
    flexGrow: 1,
  },
  mainApp: {
    maxWidth: 'calc(768px + 16px * 2)',
    flexGrow: 3,
    margin: '0 auto',
    padding: '0 16px',
    display: 'block',
    paddingTop: 68,
  },
};

const App = (props) => {
  const { classes } = props;
  return (
    <div className={classes.wrapper}>
      <Helmet
        titleTemplate="%s - Guess 2/3"
        defaultTitle="Guess 2/3"
      >
        <meta name="description" content="Guess 2/3 - Guess 2/3 of average" />
      </Helmet>
      <div className={classes.dummy}> </div>
      <Route component={Header} />
      <Grid container justify="center" className={classes.mainApp}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/logout" component={LogoutPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Grid>
    </div>
  );
};

App.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(App);
