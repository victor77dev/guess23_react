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
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import Grid from '@material-ui/core/Grid';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

const styles = {
  mainApp: {
    marginRight: 'auto',
    marginLeft: 'auto',
    display: 'block',
    paddingTop: 68,
  },
};

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Guess 2/3"
        defaultTitle="Guess 2/3"
      >
        <meta name="description" content="Guess 2/3 - Guess 2/3 of average" />
      </Helmet>
      <Route component={Header} />
      <Grid container justify="center" style={styles.mainApp}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Grid>
      <Route component={Footer} />
    </AppWrapper>
  );
}
