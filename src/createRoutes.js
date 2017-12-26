// @flow

import Main from './components/Main';
import MainWrapper from './components/main/MainWrapper';

/**
 * routes.
 *
 * @type {Object}
 */
const routes: Object = {
  component: Main,
  routes: [
    {component: MainWrapper, routes: [
      { path: '/', exact: true }
    ]},
  ]
};

export default [routes];
