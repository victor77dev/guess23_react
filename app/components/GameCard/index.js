/**
*
* GameCard
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import TextField from '@material-ui/core/TextField';
import grey from '@material-ui/core/colors/grey';
import Slider from '@material-ui/lab/Slider';

const styles = (theme) => ({
  gameCard: {
    width: '100%',
    margin: theme.spacing.unit,
  },
  gameInfo: {
    display: 'flex',
  },
  gameDetail: {
    textAlign: 'center',
    color: grey['700'],
    margin: theme.spacing.unit,
  },
  gameSelect: {
    display: 'flex',
    flexDirection: 'column',
  },
  slider: {
    padding: '22px 0px',
  },
});

class GameCard extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    const { game } = props;
    let guessDefault = 1;
    if (game) {
      const { gameMin, gameMax } = game;
      guessDefault = Math.floor((gameMin + gameMax) / 2);
    }
    this.state = {
      expanded: false,
      guess: guessDefault,
    };
  }

  handleExpandClick = () => {
    this.setState((state) => ({ expanded: !state.expanded }));
  };

  handleSliderChange = (event, value) => {
    this.setState({ guess: value });
  };

  handleTextChange = (name) => (event) => {
    const { game: { gameMin, gameMax } } = this.props;
    let finalGuess = Math.floor((gameMin + gameMax) / 2);
    const { target: { value: guess } } = event;
    finalGuess = parseInt(guess, 10);
    if (!isNaN(finalGuess)) {
      finalGuess = Math.min(Math.max(gameMin, finalGuess), gameMax);
      this.setState({
        [name]: finalGuess,
      });
    }
  };

  render() {
    const { game, classes } = this.props;
    const { guess } = this.state;
    const { gameMul, gameDiv, gameMin, gameMax, gameEnd } = game;
    const gameEndDate = new Date(gameEnd);
    return (
      <Card className={classes.gameCard}>
        <div className={classes.gameInfo}>
          <CardHeader
            title={`Guess ${gameMul}/${gameDiv} of Average`}
            subheader={`Game ends at ${gameEndDate}`}
          />
          <CardContent>
            <Typography variant="title" className={classes.gameDetail}>
              {`Make a Guess from ${gameMin} to ${gameMax}, for ${gameMul}/${gameDiv} of Average all Guesses.`}
            </Typography>
          </CardContent>
          <CardActions className={classes.actions}>
            <Button variant="raised" color="primary" onClick={this.handleExpandClick}>
              Play
            </Button>
          </CardActions>
        </div>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent className={classes.gameSelect}>
            <Slider
              classes={{ container: classes.slider }}
              value={guess}
              min={gameMin}
              max={gameMax}
              step={1}
              onChange={this.handleSliderChange}
            />
            <TextField
              id="guess"
              label="Guess"
              className={classes.textField}
              value={guess}
              onChange={this.handleTextChange('guess')}
              margin="normal"
            />
            <Button variant="raised" color="secondary">
              Make a Guess
            </Button>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

GameCard.propTypes = {
  classes: PropTypes.object.isRequired,
  game: PropTypes.object,
};

export default withStyles(styles)(GameCard);
