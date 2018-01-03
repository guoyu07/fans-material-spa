// @flow

import * as React from 'react';
import withStyles from 'material-ui/styles/withStyles';
import withWidth from 'material-ui/utils/withWidth';

// Router
import BrowserRouter from 'react-router-dom/BrowserRouter';
import renderRoutes from 'react-router-config/renderRoutes';
import routes from './createRoutes';

// Modules
import { browserBasename } from './config';

const styles: Function = withStyles((theme: Object) => ({
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
}));

type Props = {
  width: string,
};

class App extends React.Component<Props> {
  render(): React.Node {
    const { width } = this.props;

    return (
      <BrowserRouter basename={browserBasename}>
        { renderRoutes(routes, { width }) }
      </BrowserRouter>
    );
  }
}

export default styles(
  withWidth()(App)
);
