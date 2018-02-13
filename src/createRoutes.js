// @flow

import asyncComponent from './utils/asyncComponent';

const asyncHome = asyncComponent(() => import('./pages/home'));
const asyncForum = asyncComponent(() => import('./pages/forum'));
const asyncTag = asyncComponent(() => import('./pages/tag'));
const asyncPerson = asyncComponent(() => import('./pages/person'));
const asyncLogin = asyncComponent(() => import('./pages/login'));

const routes = [
  { path: '/', exact: true, component: asyncHome },
  { path: '/forums', exact: true, component: asyncForum },
  { path: '/tags', exact: true, component: asyncTag },
  { path: '/person', exact: true, component: asyncPerson },
  { path: '/login', component: asyncLogin },

  // Finally, catch all unmatched routes
  { component: asyncComponent(() => import('./pages/not-found')) },
];

export default routes;
