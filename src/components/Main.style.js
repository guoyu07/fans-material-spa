// @flow
import withStyles from 'material-ui/styles/withStyles';

export default withStyles((theme: Object) => ({
  '@global': {
    html: {
      background: theme.palette.background.default,
      WebkitFontSmoothing: 'antialiased', // Antialiasing.
      MozOsxFontSmoothing: 'grayscale', // Antialiasing.
      boxSizing: 'border-box',
      '@media print': {
        background: theme.palette.common.white,
      },
    },
    body: {
      margin: 0,
      padding: 0,
    },
    '*, *:before, *:after': {
      boxSizing: 'inherit',
    },
    '#root': {
      minHeight: '100vh',
    }
  },
  root: {
    width: '100%',
    minHeight: '100vh',
    boxSizing: 'border-box',
    paddingTop: 64,
  },
  main: {
    marginLeft: 100,
  }
}));
