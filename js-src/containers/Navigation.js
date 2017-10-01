import React, { Component } from 'react';
import { matchPath } from 'react-router'
import { withRouter } from 'react-router-dom';
import View from '../components/Navigation';

const navigationMap = ['/', '/forum', '/person'];

class Navigation extends Component {
  render() {
    console.log(this.props);

    const { location: { pathname = '/' } } = this.props;
    const matchRoutes = navigationMap.reduce((reducers, item) => {
      reducers[item] = ! (matchPath(pathname, {
        path: item,
        exact: true
      }) === null);

      return reducers;
    }, {});

    return (
      <View {...matchRoutes}
        select={pathname}
        handle={path => () => this.onClickHandle(path, matchRoutes)}
      />
    );
  }

  onClickHandle(path, matchs) {
    if (matchs[path] === true) {
      return;
    }

    const { history: { replace } } = this.props;
    replace(path);
  }
}

export default withRouter(Navigation);
