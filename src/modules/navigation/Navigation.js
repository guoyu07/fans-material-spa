// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';

// Material UI
import withStyles from 'material-ui/styles/withStyles';
import AppBar from 'material-ui/AppBar';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';

// Icons
import HomeIcon from 'material-ui-icons/Home';
import ForumIcon from 'material-ui-icons/Forum';
import LocalOfferIcon from 'material-ui-icons/LocalOffer';
import PersonIcon from 'material-ui-icons/Person';

const styles = withStyles(() => ({
  root: {
    width: '100%',
    top: 'unset',
    bottom: 0,
  }
}));

/**
 * The Component props types.
 *
 * @type {Object}
 */
type Props = {
  classes: Object,
  value: 'home' | 'forum' | 'tag' | 'person',
};

/**
 * The component state types.
 *
 * @type {Object}
 */
type State = {
  showLabels: boolean,
};

class Navigation extends React.Component<Props, State> {

  state = {
    showLabels: true,
  }

  render () {
    const { classes, value } = this.props;
    const { showLabels } = this.state;

    return (
      <AppBar position="fixed" className={classes.root} component="nav">
        <BottomNavigation
          showLabels={showLabels}
          value={value}
        >
          <BottomNavigationButton component={Link} to="/" replace label="首页" value="home" icon={<HomeIcon />} />
          <BottomNavigationButton component={Link} to="/forums" replace label="论坛" value="forum" icon={<ForumIcon />} />
          <BottomNavigationButton component={Link} to="/tags" replace label="标签" value="tag" icon={<LocalOfferIcon />} />
          <BottomNavigationButton component={Link} to="/person" replace label="个人" value="person" icon={<PersonIcon />} />
        </BottomNavigation>
      </AppBar>
    );
  }
}

export default styles(Navigation);
