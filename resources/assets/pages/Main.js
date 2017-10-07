import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import WithNavigation from '../components/WithNavigation';
import Home from './Home';
import Forum from './Forum';
import Tag from './Tag';
import Person from './Person';
import NotFound from './NotFound';

class Main extends Component {

  static propTypes = {
    location: PropTypes.object.isRequired,
  };

  render() {
    return (
      <WithNavigation tab={this.getTabName()}>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/forums" component={Forum} exact />
          <Route path="/tags" component={Tag} exact />
          <Route path="/person" component={Person} exact />
          <Route component={NotFound} />
        </Switch>
      </WithNavigation>
    );
  }

  getTabName() {
    const { location: { pathname } } = this.props;
    switch (pathname) {
      case '/':
        return 'home';

      case '/forums':
        return 'forum';

      case '/tags':
        return 'tag';

      case '/person':
        return 'person';

      default:
        return 'not found';
    }
  }
}

export default withRouter(Main);
