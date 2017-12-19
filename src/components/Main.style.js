import withStyles from 'material-ui/styles/withStyles';

export default withStyles(theme => ({
  '@global': {
    html: {
      background: theme.palette.background.default,
      WebkitFontSmoothing: 'antialiased', // Antialiasing.
      MozOsxFontSmoothing: 'grayscale', // Antialiasing.
    },
    body: {
      margin: 0,
      padding: 0,
    },
  },
  root: {
    minHeight: '100vh',
    boxSizing: 'border-box',
    paddingTop: 64,
  },
  xsWidth: {
    paddingTop: 56,
  }
}));
