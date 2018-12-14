/**
*
* GameList
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import GameCard from 'components/GameCard';

const styles = () => ({
  list: {
    width: '100%',
  },
});

class GameList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { classes, games, goToPath } = this.props;
    return (
      <List className={classes.list}>
        {games && games.map((game) => (
          <ListItem key={game.gameId}>
            <GameCard game={game} goToPath={goToPath} />
          </ListItem>
        ))}
      </List>
    );
  }
}

GameList.propTypes = {
  classes: PropTypes.object.isRequired,
  goToPath: PropTypes.func,
  games: PropTypes.array,
};

export default withStyles(styles)(GameList);
