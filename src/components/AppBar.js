// @flow

import * as React from 'react';
import { connect } from 'react-redux';

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

/**
 * The component Props types.
 *
 * @type {Object}
 */
type Props = {
  width: string,
  classes: Object,
  title: string,
};

class AppBar extends React.Component <Props> {
  /**
   * The component render.
   *
   * @return {React.Node}
   * @author Seven Du <shiweidu@outlook.com>
   */
  render (): React.Node {

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
