/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

import messages from './messages';

const styles = (theme) => ({
  title: {
    textAlign: 'center',
    color: grey['900'],
    margin: theme.spacing.unit,
  },
  subheading: {
    textAlign: 'center',
    color: grey['500'],
    margin: theme.spacing.unit,
  },
});

export class NotFound extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography variant="display2" component="title" className={classes.title}>
          <FormattedMessage {...messages.header} />
        </Typography>
        <Typography variant="title" className={classes.subheading}>
          <FormattedMessage {...messages.message} />
        </Typography>
      </div>
    );
  }
}

NotFound.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NotFound);
