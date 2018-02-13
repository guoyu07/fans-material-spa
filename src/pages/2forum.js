// @flow

import * as React from 'react';
import browserTitle from '../utils/browserTitle';
import AppBarProvider from '../modules/app-bar/AppBarProvider';
import NavigationProvider from '../modules/navigation/NavigationProvider';
import { replaceRootPath } from '../utils/history';

type Props = {
  width: string,
};

class Forum extends React.Component <Props> {
  render (): React.Node {

    const { width } = this.props;

    return (
      <AppBarProvider width={width} title="论坛">
        <NavigationProvider width={width} value="forum">
          Forum.
        </NavigationProvider>
      </AppBarProvider>
    );
  }

  componentDidMount() {
    browserTitle('论坛');
    replaceRootPath('/forums');
  }
}

export default Forum;
