// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
};

class Main extends Component <Props> {

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
   * The Main Component render.
   *
   * @return {Element|Node}
   * @author Seven Du <shiweidu@outlook.com>
   */
  render () {

    const { width } = this.props;

    return (
      <div className={this.rootClassName()}>
        <AppBar width={width} />
        3
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
