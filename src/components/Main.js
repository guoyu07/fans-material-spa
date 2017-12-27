// @flow

import * as React from 'react';
import renderRoutes from 'react-router-config/renderRoutes';

// Mateial UI
import withWidth from 'material-ui/utils/withWidth';

// style
import styles from './Main.style';

// Components.
import AppBar from './AppBar';

/**
 * The component Props types.
 *
 * @type {Object}
 */
type Props = {
  width: string,
  classes: Object,
  route: {
    routes: Array<Object>,
  },
  // children?: React.Node,
};

class Main extends React.Component <Props> {
  /**
   * The Main Component render.
   *
   * @return {Element|Node}
   * @author Seven Du <shiweidu@outlook.com>
   */
  render () {

    const { width, route: { routes }, classes } = this.props;

    if (width === 'xs') {
      return renderRoutes(routes, { width })
    }

    return (
      <div className={classes.root}>
        <AppBar width={width} />
        <div className={classes.main}>
          { renderRoutes(routes, { width }) }
        </div>
      </div>
    );
  }
}

export default styles(
  withWidth()(Main)
);
