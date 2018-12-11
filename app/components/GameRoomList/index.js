/**
*
* GameRoomList
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { compose } from 'redux';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import InfoIcon from '@material-ui/icons/Info';

const styles = (theme) => ({
  gridList: {
    width: '100%',
  },
  infoIcon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  gameroomGrid: {
    minWidth: 150,
    margin: theme.spacing.unit,
    display: 'flex',
  },
  avatar: {
    margin: 'auto',
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    backgroundColor: theme.palette.primary.dark,
    width: 150,
    height: 150,
  },
  addGame: {
    margin: 'auto',
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    color: theme.palette.secondary.light,
    width: 150,
    height: 150,
  },
  ratio: {
    display: 'flex',
    flexDirection: 'column',
  },
  number: {
    textAlign: 'center',
  },
});

const GameRoomGrid = (props) => {
  const { room, classes, goToPath } = props;
  const { name, gameroomId, latestGame } = room;
  const goToGameRoom = goToPath.bind(this, `/gameroom/${gameroomId}`);
  if (!latestGame) {
    return (
      <Paper className={classes.gameroomGrid} onClick={goToGameRoom}>
        <AddCircleIcon className={classes.addGame} />
        <GridListTileBar
          title={name || 'Empty Game Room'}
          subtitle={<span>No Game in Room</span>}
          actionIcon={
            <IconButton className={classes.infoIcon} disabled>
              <InfoIcon />
            </IconButton>
          }
        />
      </Paper>
    );
  }
  const { gameMul, gameDiv, gameEnd } = latestGame;
  const gameEndDate = new Date(gameEnd);
  return (
    <Paper className={classes.gameroomGrid} onClick={goToGameRoom}>
      <Avatar className={classes.avatar}>
        <div className={classes.ratio}>
          <Typography variant="headline" color="inherit" className={classes.number}>{gameMul}</Typography>
          <Typography variant="headline" color="inherit" className={classes.number}>—</Typography>
          <Typography variant="headline" color="inherit" className={classes.number}>{gameDiv}</Typography>
        </div>
      </Avatar>
      <GridListTileBar
        title={name || `Guess ${gameMul}/${gameDiv}`}
        subtitle={<span>Game ends at {gameEndDate.toString()}</span>}
        actionIcon={
          <IconButton className={classes.infoIcon} disabled>
            <InfoIcon />
          </IconButton>
        }
      />
    </Paper>
  );
};

GameRoomGrid.propTypes = {
  classes: PropTypes.object.isRequired,
  goToPath: PropTypes.func,
  room: PropTypes.object,
};

class GameRoomList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { classes, gamerooms, width, goToPath } = this.props;
    const colsList = { xs: 1, sm: 2, md: 3, lg: 4, xl: 4 };
    const colsSelect = colsList[width];
    return (
      <GridList className={classes.gridList} cols={colsSelect}>
        {gamerooms.map((room) => (
          <GridListTile key={room.gameroomId}>
            <GameRoomGrid room={room} classes={classes} goToPath={goToPath} />
          </GridListTile>
        ))}
      </GridList>
    );
  }
}

GameRoomList.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string,
  goToPath: PropTypes.func,
  gamerooms: PropTypes.array,
};

export default compose(
  withStyles(styles),
  withWidth(),
)(GameRoomList);
