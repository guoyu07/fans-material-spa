import React, { Component } from 'react';
import BrowserRouter from 'react-router-dom/BrowserRouter';

class Router extends Component {
  render() {
    const { children } = this.props;

    return (
      <BrowserRouter>
        { children }
      </BrowserRouter>
    );
  }
}

export default Router;
