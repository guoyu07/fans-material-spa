// @flow

import Main from './components/Main';
import MainWrapper from './components/main/MainWrapper';
import Home from './components/main/Home';

/**
 * routes.
 *
 * @type {Object}
 */
const routes: Object = {
  component: Main,
  routes: [
    {component: MainWrapper, routes: [
      { path: '/', exact: true, component: Home },
    ]},
  ]
};

export default [routes];
