import React, { Component } from 'react';
import { connect } from 'react-redux';

// Material UI
import AppBarProvider from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';

// Style.
import styles from './AppBar.style';

// Icons.
import MenuIcon from 'material-ui-icons/Menu';

// Components.
import AppBarTitle from './AppBarTitle';

/**
 * The App bar map state to props.
 *
 * @param {String} options.title
 * @return {Object}
 * @author Seven Du <shiweidu@outlook.com>
 */
function mapStateToProps ({ title }) {
  return { title };
};

class AppBar extends Component {
  /**
   * The component render.
   *
   * @return {Element|Node}
   * @author Seven Du <shiweidu@outlook.com>
   */
  render () {

    const { title } = this.props;
    console.log(this.props);

    return (
      <AppBarProvider position="fixed">
        <Toolbar>
          <Hidden smUp={true}>
            <IconButton color="contrast" aria-label="菜单">
              <MenuIcon />
            </IconButton>
          </Hidden>
          <AppBarTitle title={title} />
        </Toolbar>
      </AppBarProvider>
    );
  }
}

export default styles(
  connect(mapStateToProps)(AppBar)
);
