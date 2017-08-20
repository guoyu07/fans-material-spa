import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

// material ui
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import withStyles from 'material-ui/styles/withStyles';
import Button from 'material-ui/Button';

// icon
import HomeIcon from 'material-ui-icons/Home';
import ForumIcon from 'material-ui-icons/Forum';
import PersonIcon from 'material-ui-icons/Person';
import FavoriteIcon from 'material-ui-icons/Favorite';

const styles = () => ({
  root: {
    width: '100%',
  },
  bottom: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
});

class Navigation extends Component {
  render() {

    console.log(this.props);
    const { classes, select, handle } = this.props;

    return (
      <BottomNavigation className={classes.root} value={select} showLabels>

        <BottomNavigationButton
          className={classes.bottom}
          label="Home"
          value="/"
          icon={<HomeIcon />}
          onClick={(handle('/'))}
        />

        <BottomNavigationButton
          className={classes.bottom}
          label="Forum"
          value="/forum"
          icon={<ForumIcon />}
          onClick={(handle('/forum'))}
        />

        <BottomNavigationButton
          className={classes.bottom}
          label="Favorite"
          value="/favorite"
          icon={<FavoriteIcon />}
          onClick={(handle('/favorite'))}
        />

        <BottomNavigationButton
          className={classes.bottom}
          label="People"
          value="/people"
          icon={<PersonIcon />}
          onClick={(handle('/people'))}
        />

      </BottomNavigation>
    );
  }
}

export default withStyles(styles)(Navigation);
