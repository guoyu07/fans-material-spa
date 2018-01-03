// @flow

import * as React from 'react';
import browserTitle from '../utils/browserTitle';
import AppBarProvider from '../modules/app-bar/AppBarProvider';
import NavigationProvider from '../modules/navigation/NavigationProvider';

type Props = {
  width: string,
};

class Person extends React.Component <Props> {
  render (): React.Node {

    const { width } = this.props;

    return (
      <AppBarProvider width={width} title="个人资料">
        <NavigationProvider width={width} value="person">
          Person.
        </NavigationProvider>
      </AppBarProvider>
    );
  }

  componentDidMount() {
    browserTitle('个人资料');
  }
}

export default Person;
