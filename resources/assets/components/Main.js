import React, { Component } from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import NotFound from '../pages/NotFound';

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Main;
