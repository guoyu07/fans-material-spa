// @flow

import * as React from 'react';
import withStyles from 'material-ui/styles/withStyles';
import Navigation from './Navigation';

const styles = withStyles(() => ({
  root: {
    width: '100%',
    paddingBottom: 56,
  },
}));

type Props = {
  children: React.Node,
  classes: Object,
  width: string
};

class NavigationProvider extends React.Component <Props> {
  render(): React.Node {

    const { classes, children, width, ...props } = this.props;

    if (width !== 'xs') {
      return children;
    }

    return (
      <div className={classes.root}>
        <Navigation {...props} />
        { children }
      </div>
    );
  }
}

export default styles(NavigationProvider);
