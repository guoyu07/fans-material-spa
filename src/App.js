// React
import React, { Component } from 'react';

// Redux
import { Provider } from 'react-redux';
import store from './createStore';

// Mateial UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from './createTheme';

// Router
import BrowserRouter from 'react-router-dom/BrowserRouter';
import renderRoutes from 'react-router-config/renderRoutes';
import routes from './createRoutes';

class App extends Component {
  render () {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <BrowserRouter>
            { renderRoutes(routes) }
          </BrowserRouter>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;