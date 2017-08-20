// React
import React, { Component } from 'react';

// Material-UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from './themes/default';
console.log(theme);

// Route
import RouteProvider from './RouteProvider';

class ThemeProvider extends Component {
  render() {
    const { children } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <RouteProvider />
      </MuiThemeProvider>
    );
  }
}

export default ThemeProvider;
