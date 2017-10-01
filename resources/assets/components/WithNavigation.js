import React, { Component } from 'react';
import Navigation from './common/Navigation';

class WithNavigation extends Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <Navigation></Navigation>
        { children }
      </div>
    );
  }
}

export default WithNavigation;
