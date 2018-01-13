// @flow

import * as React from 'react';
import browserTitle from '../utils/browserTitle';
import AppBarProvider from '../modules/app-bar/AppBarProvider';
import NavigationProvider from '../modules/navigation/NavigationProvider';
import { replaceRootPath } from '../utils/history';

type Props = {
  width: string,
};

class Tag extends React.Component <Props> {
  render (): React.Node {

    const { width } = this.props;

    return (
      <AppBarProvider width={width} title="话题">
        <NavigationProvider width={width} value="tag">
          Tag.
        </NavigationProvider>
      </AppBarProvider>
    );
  }

  componentDidMount() {
    browserTitle('话题');
    replaceRootPath('/tags');
  }
}

export default Tag;
