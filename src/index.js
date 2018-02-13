// React
import * as React from 'react';
import { render } from 'react-dom';
// import registerServiceWorker from './registerServiceWorker';

// Redux
import { Provider as ReduxProvider } from 'react-redux';
import store from './createStore';

// Mateial UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Reboot from 'material-ui/Reboot';
import theme from './createTheme';

// Modules
import App from './App';

/**
 * The application root Node.
 *
 * @return {React.Node}
 * @author Seven Du <shiweidu@outlook.com>
 */
const Root = () => (
  <MuiThemeProvider theme={theme}>
    <Reboot />
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </MuiThemeProvider>
);

render(<Root />, document.getElementById('root'));
// registerServiceWorker();
