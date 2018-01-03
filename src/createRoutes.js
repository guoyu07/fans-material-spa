// @flow

// 先注释，暂时不用切分代码
import asyncComponent from './utils/asyncComponent';

import HomePage from './pages/Home'; // asyncComponent(() => import('./pages/Home'))
import ForumPage from './pages/Forum'; // asyncComponent(() => import('./pages/Forum'))
import TagPage from './pages/Tag'; // asyncComponent(() => import('./pages/Tag'))
import PersonPage from './pages/Person'; // asyncComponent(() => import('./pages/Person'))

const routes = [
  { path: '/', exact: true, component: HomePage },
  { path: '/forums', exact: true, component: ForumPage },
  { path: '/tags', exact: true, component: TagPage },
  { path: '/person', exact: true, component: PersonPage },

  // Finally, catch all unmatched routes
  { component: asyncComponent(() => import('./pages/NotFound')) },
];

export default routes;
