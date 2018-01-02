// @flow

import Main from './components/Main';
import MainWrapper from './components/main/MainWrapper';
import HomePage from './pages/Home';

/**
 * routes.
 *
 * @type {Object}
 */
const routes: Object = {
  component: Main,
  routes: [
    {path: '/', component: MainWrapper, routes: [
      { path: '/', exact: true, component: HomePage },
    ]},
  ]
};

export default [routes];
