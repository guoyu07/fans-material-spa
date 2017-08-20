// React.
import React, { Component } from 'react';

// Redux.
import { Provider } from 'react-redux';
import store from './store';

// Application
import ThemeProvider from './ThemeProvider';
import RouteProvider from './RouteProvider';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider />
      </Provider>
    );
  }
}

export default App;
