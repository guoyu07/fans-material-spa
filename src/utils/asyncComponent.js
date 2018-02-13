// @flow

import Loadable from 'react-loadable';
import loading from '../modules/module-loading';

export default function (module: Function, options: Object = {}): Function {
  return Loadable({
    loading: loading,
    ...options,
    loader: module,
  });
};
