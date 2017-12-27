// @flow

import generateAction from '../utils/generateAction';
import { SET_APP_DRAWER } from '../constants';

/**
 * Set app drawer switch.
 *
 * @param {boolean} open
 * @return {Function}
 * @author Seven Du <shiweidu@outlook.com>
 */
export function setAppDrawerSwitch (open: boolean): Function {
  return function (dispatch: Function) {
    dispatch(generateAction(SET_APP_DRAWER, open));
  };
}