// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { setAppDrawerSwitch } from '../../actions';

// Material UI
import withStyles from 'material-ui/styles/withStyles';
import AppBarProvider from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';

// Icons.
import MenuIcon from 'material-ui-icons/Menu';

// Components.
import AppBarTitle from './AppBarTitle';
import AppBarSearch from './AppBarSearch';

/**
 * The App bar map state to props.
 *
 * @param {string} options.title
 * @return {Object}
 * @author Seven Du <shiweidu@outlook.com>
 */
function mapStateToProps ({ appDrawer }) {
  return { open: appDrawer };
};

/**
 * Map dispatch to props.
 *
 * @type {Object}
 */
const mapDispatchToProps: Object = { setAppDrawerSwitch };

const styles = withStyles((theme: Object) => ({
  menu: {
    marginRight: theme.spacing.unit * 2
  },
}));

/**
 * The component Props types.
 *
 * @type {Object}
 */
type Props = {
  appDrawerOpen: boolean,
  width: string,
  classes: Object,
  title: string,
  setAppDrawerSwitch: Function,
  open: boolean,
};

class AppBar extends React.Component<Props>
{
  render(): React.Node {
    const { title, width, classes } = this.props;

    return (
      <AppBarProvider position="fixed">
        <Toolbar>
          <IconButton onClick={this.handleToggleDrawer} classes={{ root: classes.menu }} color="contrast" aria-label="菜单">
            <MenuIcon />
          </IconButton>
          <AppBarTitle title={title} width={width} />
          <AppBarSearch width={width} />
          <Button color="contrast" aria-label="登录">登录</Button>
        </Toolbar>
      </AppBarProvider>
    );
  }

  handleToggleDrawer = () => {
    const { open, setAppDrawerSwitch } = this.props;
    setAppDrawerSwitch(! open);
  }
}

export default styles(
  connect(mapStateToProps, mapDispatchToProps)(AppBar)
);
