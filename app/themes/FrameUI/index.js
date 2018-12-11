import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import blueGrey from '@material-ui/core/colors/blueGrey';

// Creating theme with following colors
// https://material.io/tools/color/#!/?view.left=0&view.right=0&secondary.color=455A64&primary.color=212121
const FrameUITheme = createMuiTheme({
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

export default FrameUITheme;
