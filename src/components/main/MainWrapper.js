// @flow

import * as React from 'react';
import classNames from 'classnames';
import renderRoutes from 'react-router-config/renderRoutes';
import styles from './MainWrapper.style';

// Mateial UI
// import withWidth from 'material-ui/utils/withWidth';

// Components
import Navigation from '../Navigation';

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
};

class MainWrapper extends React.Component <Props> {
  render () {

    const { width, route: { routes } } = this.props;
    console.log(this.props);

    return (
      <div className={this.rootClassName()}>
        <Navigation width={width} />
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
      [classes.xsRoot]: width === 'xs',
    });
  }
}

export default styles(MainWrapper);
