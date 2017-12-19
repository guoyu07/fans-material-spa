import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Material UI
import AppBarProvider from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';

// Style.
import styles from './AppBar.style';

// Icons.
import MenuIcon from 'material-ui-icons/Menu';

// Components.
import AppBarTitle from './AppBarTitle';
import AppBarSearch from './AppBarSearch';

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
   * The component prop types.
   *
   * @type {Object}
   */
  static propTypes = {
    width: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
  };

  /**
   * The component render.
   *
   * @return {Element|Node}
   * @author Seven Du <shiweidu@outlook.com>
   */
  render () {

    const { title, width } = this.props;

    return (
      <AppBarProvider position="fixed">
        <Toolbar>
          <Hidden smUp={true}>
            <IconButton color="contrast" aria-label="菜单">
              <MenuIcon />
            </IconButton>
          </Hidden>
          <AppBarTitle title={title} />
          <AppBarSearch width={width} />
          <Button color="contrast" aria-label="登录">登录</Button>
        </Toolbar>
      </AppBarProvider>
    );
  }
}

export default styles(
  connect(mapStateToProps)(AppBar)
);
