// React.
import React, { Component } from 'react';

// Route
import BrowserRouter from 'react-router-dom/BrowserRouter';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

// App.
import NoMatchPage from 'NoMatchPage';
import Main from './containers/Main';

class RouteProvider extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route component={NoMatchPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default RouteProvider;
