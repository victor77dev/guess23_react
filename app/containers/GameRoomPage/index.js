/**
 *
 * GameRoomPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';
import GameList from 'components/GameList';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { fetchGameRoomData } from './actions';
import { makeSelectGameRoom, makeSelectLoading } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const styles = (theme) => ({
  title: {
    textAlign: 'center',
    color: grey['900'],
    margin: theme.spacing.unit,
  },
  div: {
    display: 'flex',
    margin: theme.spacing.unit,
    flexDirection: 'column',
  },
  progress: {
    margin: 'auto',
    marginTop: 5 * theme.spacing.unit,
    marginBottom: 5 * theme.spacing.unit,
  },
});

export class GameRoomPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    const { match, fetchGameRoomDataAction } = this.props;
    const { params: { gameroomId } } = match;
    fetchGameRoomDataAction(gameroomId);
  }

  goToPath = (path) => {
    this.props.history.push(path);
  }

  render() {
    const { classes, gameroom, loading } = this.props;
    const { name, games } = gameroom;
    return (
      <div className={classes.div}>
        <Helmet>
          <title>{name || 'GameRoom'}</title>
          <meta name="description" content={`GameRoom - ${name}`} />
        </Helmet>
        <Typography variant="display2" component="title" className={classes.title}>
          <FormattedMessage {...messages.header} values={{ room: `${name || 'GameRoom'}` }} />
        </Typography>
        {(loading && <CircularProgress size={70} className={classes.progress} />) ||
          <GameList games={games} goToPath={this.goToPath} />
        }
      </div>
    );
  }
}

GameRoomPage.propTypes = {
  fetchGameRoomDataAction: PropTypes.func,
  history: PropTypes.object,
  match: PropTypes.object,
  classes: PropTypes.object,
  gameroom: PropTypes.object,
  loading: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  gameroom: makeSelectGameRoom(),
  loading: makeSelectLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchGameRoomDataAction: (gameroomId) => {
      dispatch(fetchGameRoomData(gameroomId));
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'gameRoomPage', reducer });
const withSaga = injectSaga({ key: 'gameRoomPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyles(styles),
)(GameRoomPage);
