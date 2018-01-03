// @flow

import * as React from 'react';
import browserTitle from '../utils/browserTitle';
import AppBarProvider from '../modules/app-bar/AppBarProvider';
import NavigationProvider from '../modules/navigation/NavigationProvider';

type Props = {
  width: string,
};

class Home extends React.Component <Props> {
  render (): React.Node {

    const { width } = this.props;

    return (
      <AppBarProvider width={width} title="首页">
        <NavigationProvider width={width} value="home">
          Home.
        </NavigationProvider>
      </AppBarProvider>
    );
  }

  componentDidMount() {
    browserTitle('首页');
  }
}

export default Home;
