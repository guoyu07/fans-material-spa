import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import HomeIcon from 'material-ui-icons/Home';
import ForumIcon from 'material-ui-icons/Forum';

class Navigation extends Component {

  static propTypes = {
    width: PropTypes.string.isRequired,
  };

  render() {

    const { width } = this.props;

    if (width === 'xs') {
      return this.renderMobileNav();
    }

    return null;
  }

  renderMobileNav() {
    return (
      <BottomNavigation value="home" onChange={() => {}}>
        <BottomNavigationButton label="首页" value="home" icon={<HomeIcon />} />
        <BottomNavigationButton label="论坛" value="forum" icon={<ForumIcon />} />
      </BottomNavigation>
    );
  }
}

export default Navigation;
