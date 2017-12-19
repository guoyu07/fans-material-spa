import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../theme';

class Theme extends Component {
  render() {
    const { children } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        { children }
      </MuiThemeProvider>
    );
  }
}

export default Theme;
