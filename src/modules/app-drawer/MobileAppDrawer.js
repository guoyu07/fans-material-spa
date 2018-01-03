// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom';
import { setAppDrawerSwitch } from '../../actions';

// Material UI
import withStyles from 'material-ui/styles/withStyles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

// Icons
import CloseIcon from 'material-ui-icons/Close';
import HomeIcon from 'material-ui-icons/Home';
import ForumIcon from 'material-ui-icons/Forum';
import LocalOfferIcon from 'material-ui-icons/LocalOffer';
import PersonIcon from 'material-ui-icons/Person';

const styles = withStyles(() => ({
  paper: {
    width: 256,
  },
  title: {
    flex: 1,
  },
}));

/**
 * Map the state to props.
 *
 * @param {boolean} options.appDrawer
 * @return {Object}
 * @author Seven Du <shiweidu@outlook.com>
 */
function mapStateToProps ({ appDrawer }: { appDrawer: boolean }): { open: boolean } {
  return { open: appDrawer };
};

/**
 * Map dispatch to props.
 *
 * @type {Object}
 */
const mapDispatchToProps: Object = { setAppDrawerSwitch };

/**
 * The component props types.
 *
 * @type {Object}
 */
type Props = {
  // width: string,
  classes: Object,
  open: boolean,
  setAppDrawerSwitch: Function,
  history: {
    replace: Function,
  }
};

class MobileAppDrawer extends React.Component <Props> {
  render (): React.Node {
    const { classes, open } = this.props;
    const date = new Date();

    return (
      <Drawer
        classes={{ paper: classes.paper }}
        onClose={() => this.handleClose()}
        type="temporary"
        anchor="left"
        open={open}
      >
        <AppBar position="static">
          <Toolbar>
            <Typography noWrap={true} aria-label="标题" type="title" color="inherit" className={classes.title}>
              Fans
            </Typography>
            <IconButton color="contrast" aria-label="关闭菜单" onClick={() => this.handleClose()}>
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <List component="div">
          <ListItem component={Link} to="/" onClick={(event) => this.handleReplaceRoute(event, '/')}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="首页" />
          </ListItem>
          <ListItem component={Link} to="/forums" onClick={(event) => this.handleReplaceRoute(event, '/forums')}>
            <ListItemIcon>
              <ForumIcon />
            </ListItemIcon>
            <ListItemText primary="论坛" />
          </ListItem>
          <ListItem component={Link} to="/tags" onClick={(event) => this.handleReplaceRoute(event, '/tags')}>
            <ListItemIcon>
              <LocalOfferIcon />
            </ListItemIcon>
            <ListItemText primary="标签" />
          </ListItem>
          <ListItem component={Link} to="/person" onClick={(event) => this.handleReplaceRoute(event, '/person')}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="个人资料" />
          </ListItem>
        </List>
        <Typography gutterBottom align="center">
          © { date.getFullYear() } Seven Du.
        </Typography>
      </Drawer>
    );
  }

  handleClose (): void {
    const { setAppDrawerSwitch } = this.props;
    setAppDrawerSwitch(false);
  }

  handleReplaceRoute(event, path) {
    event.preventDefault();
    this.handleClose();
    const { history } = this.props;
    history.replace(path);
  }
}

export default styles(
  withRouter(
    connect(mapStateToProps, mapDispatchToProps)(MobileAppDrawer)
  )
);
