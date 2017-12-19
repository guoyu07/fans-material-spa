import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Mateial UI
import withWidth from 'material-ui/utils/withWidth';

// style
import styles from './Main.style';

// Components.
import AppBar from './AppBar';

class Main extends Component {

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
    return (
      <div className={this.rootClassName()}>
        <AppBar />
        3
      </div>
    );
  }

  /**
   * Get the component root element class name.
   *
   * @return {String}
   * @author Seven Du <shiweidu@outlook.com>
   */
  rootClassName () {
    const { classes, width } = this.props;

    return classNames(classes.root, {
      [classes.xsWidth]: width === 'xs',
    });
  }
}

export default styles(
  withWidth()(Main)
);
