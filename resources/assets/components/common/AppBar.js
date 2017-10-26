import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBarComponent from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import MenuIcon from 'material-ui-icons/Menu';
import SearchIcon from 'material-ui-icons/Search';

import style from './AppBar.style';

class AppBar extends Component {

  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  render() {

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
          <Button color="contrast">Login</Button>
        </Toolbar>
      </AppBarComponent>
    );
  }
}

export default style(AppBar);
