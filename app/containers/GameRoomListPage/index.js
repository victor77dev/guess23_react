/**
 *
 * GameRoomListPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import GameRoomList from 'components/GameRoomList';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import { fetchGameRoomData } from './actions';
import { makeSelectGameRooms, makeSelectLoading } from './selectors';
import reducer from './reducer';
import saga from './saga';

const styles = () => ({
  div: {
    display: 'flex',
  },
  progress: {
    margin: 'auto',
  },
});

export class GameRoomListPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.fetchGameRoomDataAction();
  }

  render() {
    const { gamerooms, loading, classes, goToPath } = this.props;
    return (
      <div className={classes.div}>
        <Helmet>
          <title>GameRooms</title>
          <meta name="description" content="Welcome to GameRooms of Guess 2/3" />
        </Helmet>
        {(loading && <CircularProgress size={70} className={classes.progress} />) ||
          <GameRoomList gamerooms={gamerooms} goToPath={goToPath} />
        }
      </div>
    );
  }
}

GameRoomListPage.propTypes = {
  classes: PropTypes.object.isRequired,
  fetchGameRoomDataAction: PropTypes.func,
  goToPath: PropTypes.func,
  gamerooms: PropTypes.array,
  loading: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  gamerooms: makeSelectGameRooms(),
  loading: makeSelectLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchGameRoomDataAction: () => {
      dispatch(fetchGameRoomData());
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'gameRoomListPage', reducer });
const withSaga = injectSaga({ key: 'gameRoomListPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyles(styles),
)(GameRoomListPage);
