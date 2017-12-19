import React, { Component } from 'react';

// Material UI
import AppBarProvider from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';

// Style.
import styles from './AppBar.style';

// Icons.
import MenuIcon from 'material-ui-icons/Menu';

class AppBar extends Component {
  /**
   * The component render.
   *
   * @return {Element|Node}
   * @author Seven Du <shiweidu@outlook.com>
   */
  render () {
    return (
      <AppBarProvider position="fixed">
        <Toolbar>
          <Hidden smUp={true}>
            <IconButton color="contrast" aria-label="菜单">
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBarProvider>
    );
  }
}

export default styles(AppBar);
