import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withWidth from 'material-ui/utils/withWidth';
import Navigation from './common/Navigation';

class WithNavigation extends Component {

  static propTypes = {
    width: PropTypes.string.isRequired,
  };

  render() {
    const { children, width } = this.props;

    return (
      <div>
        <Navigation width={width}></Navigation>
        { children }
      </div>
    );
  }
}

export default withWidth()(WithNavigation);
