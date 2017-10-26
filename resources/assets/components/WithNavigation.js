import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withWidth from 'material-ui/utils/withWidth';
import Navigation from './common/Navigation';
import AppBar from './common/AppBar';
import style from './WithNavigation.style';

class WithNavigation extends Component {

  static propTypes = {
    width: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
    tab: PropTypes.string.isRequired,
  };

  render() {
    const { children, width, classes, tab } = this.props;

    return (
      <div className={classNames(classes.root, { [classes.xs]: width === 'xs', [classes.high]: width !== 'xs' })}>
        <AppBar />
        {/*<Navigation width={width} tab={tab}></Navigation>*/}
        { children }
      </div>
    );
  }
}

export default withWidth()(
  style(WithNavigation)
);
