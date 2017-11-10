import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import AppBarComponent from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import MenuIcon from 'material-ui-icons/Menu';
import SearchIcon from 'material-ui-icons/Search';

import style from './AppBar.style';

function mapStateToProps (state) {
  const { user, token } = state.user;

  return { user, token };
};

class AppBar extends Component {

  static propTypes = {
    classes: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    token: PropTypes.string,
  };

  render () {

    const { classes } = this.props;

    return (
      <AppBarComponent position="fixed">
        <Toolbar>
          <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" className={classes.flex}>
            phpwind Fans
          </Typography>
          <IconButton color="contrast" aria-label="Search">
            <SearchIcon />
          </IconButton>
          { this.makeUserNode() }
        </Toolbar>
      </AppBarComponent>
    );
  }

  makeUserNode () {
    const { token: isLogin, user, classes } = this.props;

    if (! isLogin) {
      return (<Button color="contrast">Login</Button>);
    }

    return <Avatar className={classes.avatar}>{ user.name[0] }</Avatar>
  }
}

export default style(
  connect(mapStateToProps)(AppBar)
);
