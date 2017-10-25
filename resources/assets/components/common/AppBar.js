import React, { Component } from 'react';
import AppBarComponent from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import MenuIcon from 'material-ui-icons/Menu';

class AppBar extends Component {
  render() {
    return (
      <AppBarComponent position="fixed">
        <Toolbar>
          <IconButton>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBarComponent>
    );
  }
}

export default AppBar;
