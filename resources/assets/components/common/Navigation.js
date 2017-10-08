import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import HomeIcon from 'material-ui-icons/Home';
import ForumIcon from 'material-ui-icons/Forum';
import LocalOfferIcon from 'material-ui-icons/LocalOffer';
import PersonIcon from 'material-ui-icons/Person';
import AppBar from 'material-ui/AppBar';
import style from './Navigation.style';

class Navigation extends Component {

  static propTypes = {
    width: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
    tab: PropTypes.string.isRequired,
    history: PropTypes.object.isRequired,
  };

  render() {

    const { width } = this.props;

    if (width === 'xs') {
      return this.renderMobileNav();
    }

    return null;
  }

  renderMobileNav() {

    const { classes, tab } = this.props;

    return (
      <AppBar position="fixed" className={classes.xsRoot}>
        <BottomNavigation
          showLabels={false}
          value={tab}
          onChange={(event, tab) => this.handleTargetMobile(event, tab)}
        >
          <BottomNavigationButton label="首页" value="home" icon={<HomeIcon />} />
          <BottomNavigationButton label="论坛" value="forum" icon={<ForumIcon />} />
          <BottomNavigationButton label="标签" value="tag" icon={<LocalOfferIcon />} />
          <BottomNavigationButton label="个人" value="person" icon={<PersonIcon />} />
        </BottomNavigation>
      </AppBar>
    );
  }

  handleTargetMobile(event, tab) {
    const { history } = this.props;
    const routes = {
      home: '/',
      forum: '/forums',
      tag: '/tags',
      person: '/person'
    };

    history.replace(routes[tab]);
  }
}

export default style(
  withRouter(Navigation)
);
