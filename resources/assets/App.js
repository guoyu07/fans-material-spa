// React.
import React, { Component } from 'react';

// Redux.
import { Provider } from 'react-redux';
import store from './store';

// Application
import ThemeProvider from './components/Theme';
import RouteProvider from './components/Router';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider>
          <RouteProvider>
            <Main></Main>
          </RouteProvider>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
