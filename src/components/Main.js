// @flow

import * as React from 'react';
import classNames from 'classnames';
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

    const { width, route: { routes } } = this.props;

    return (
      <div className={this.rootClassName()}>
        <AppBar width={width} />
        { renderRoutes(routes, { width }) }
      </div>
    );
  }

  /**
   * Get the component root element class name.
   *
   * @return {string}
   * @author Seven Du <shiweidu@outlook.com>
   */
  rootClassName (): string {
    const { classes, width } = this.props;

    return classNames(classes.root, {
      [classes.xsWidth]: width === 'xs',
    });
  }
}

export default styles(
  withWidth()(Main)
);
