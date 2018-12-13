import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import messages from './messages';

const styles = (theme) => ({
  footer: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: theme.palette.secondary.light,
    display: 'flex',
    flexDirection: 'column-reverse',
    minHeight: 40,
  },
  text: {
    bottom: 0,
    position: 'relative',
    textAlign: 'right',
    margin: theme.spacing.unit,
    color: theme.palette.secondary.dark,
  },
  link: {
    color: theme.palette.primary.light,
    textDecoration: 'none',
  },
});

const Footer = (props) => {
  const { classes } = props;
  return (
    <footer className={classes.footer}>
      <Typography variant="title" color="inherit" className={classes.text}>
        <FormattedMessage
          {...messages.authorMessage}
          values={{
            author: <a href="https://victor77dev.github.io" className={classes.link}>Victor</a>,
          }}
        />
      </Typography>
    </footer>
  );
};

Footer.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Footer);
