// @flow

import React, { Component, Node } from 'react';
import Snackbar from 'material-ui/Snackbar';
import CircularProgress from 'material-ui/Progress/CircularProgress';

class ModuleLoading extends Component <*> {
  render(): Node {
    return (
      <Snackbar
        open={true}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        message="正在加载资源..."
        action={<CircularProgress />}
      />
    );
  }
}

export default ModuleLoading;
