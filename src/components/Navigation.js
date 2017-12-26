// @flow

import * as React from 'react';
import styles from './Navigation.style';
import { withRouter } from 'react-router';

// Material UI
import AppBar from 'material-ui/AppBar';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';

// Icons
import HomeIcon from 'material-ui-icons/Home';
import ForumIcon from 'material-ui-icons/Forum';
import LocalOfferIcon from 'material-ui-icons/LocalOffer';
import PersonIcon from 'material-ui-icons/Person';

/**
 * The Component props types.
 *
 * @type {Object}
 */
type Props = {
  width: string,
  classes: Object,
  history: Object,
  location: Array <{
    pathname: string,
  }>
};

/**
 * The component state types.
 *
 * @type {Object}
 */
type State = {
  showLabels: boolean,
};

class Navigation extends React.Component <Props, State> {

  state = {
    showLabels: false,
  }

  render () {
    const { width, classes } = this.props;

    if (width !== 'xs') {
      return null;
    }

    const { showLabels } = this.state;

    return (
      <AppBar position="fixed" className={classes.root}>
        <BottomNavigation
          showLabels={showLabels}
          value={this.getCheckedButton()}
          onChange={this.handleChangeButton}
        >
          <BottomNavigationButton label="首页" value="home" icon={<HomeIcon />} />
          <BottomNavigationButton label="论坛" value="forum" icon={<ForumIcon />} />
          <BottomNavigationButton label="标签" value="tag" icon={<LocalOfferIcon />} />
          <BottomNavigationButton label="个人" value="person" icon={<PersonIcon />} />
        </BottomNavigation>
      </AppBar>
    );
  }

  getCheckedButton (): string {
    const { location: { pathname } } = this.props;
    const routes = {
      '/': 'home',
      '/forums': 'forum',
      '/tags': 'tag',
      '/person': 'person',
    };
    const { [pathname]: value = 'home' } = routes;
    
    return value;
  }

  handleChangeButton = (event, value: string) => {
    const { history } = this.props;
    const routes = {
      home: '/',
      forum: '/forums',
      tag: '/tags',
      person: '/person'
    };

    history.replace(routes[value]);
  }
}

export default styles(
  withRouter(Navigation)
);
