import React, { Component } from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import MainPage from '../pages/Main';
import style from './Main.style';

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={MainPage} />
      </Switch>
    );
  }
}

export default style(Main);
