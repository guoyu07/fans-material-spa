// @flow

import * as React from 'react';
import classNames from 'classnames';
import withStyles from 'material-ui/styles/withStyles';
import AppBar from './AppBar';
import { MobileAppDrawer } from '../app-drawer';

const styles = withStyles(() => ({
  root: {
    width: '100%',
    boxSizing: 'border-box',
    paddingTop: 64,
  },
  xsRoot: {
    paddingTop: 56,
    // minHeight: '100vh',
  }
}));

type Props = {
  children: React.Node,
  width: string,
  classes: Object,
  title: string,
};

class AppBarProvider extends React.Component<Props> {
  render(): React.Node {
    const { children, width, title } = this.props;

    return (
      <div className={this.getRootClassName()}>
        <AppBar width={width} title={title} />
        { this.getAppDrawer() }
        { children }
      </div>
    );
  }

  getAppDrawer(): React.Node {
    const { width } = this.props;

    return width === 'xs' ? <MobileAppDrawer width={width} /> : null
  }

  /**
   * Get the component root element class name.
   *
   * @return {string}
   * @author Seven Du <shiweidu@outlook.com>
   */
  getRootClassName (): string {
    const { classes, width } = this.props;

    return classNames(classes.root, {
      [classes.xsRoot]: width === 'xs',
    });
  }
}

export default styles(AppBarProvider);
