import React, { Component } from 'react';
import withStyles from 'material-ui/styles/withStyles';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';

const styles = theme => ({
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
});

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Home} exact />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default withStyles(styles)(Main);
