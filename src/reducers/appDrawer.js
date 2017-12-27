// @flow

import { SET_APP_DRAWER } from '../constants';

/**
 * Default state.
 *
 * @type {String}
 */
const defaultSwitch: boolean = false;

/**
 * The payload types.
 *
 * @type {Object}
 */
type Payload = {
  type: string,
  payload: boolean,
};

/**
 * Export App Drawer reducer.
 *
 * @param {appSwitch} boolean
 * @param {string} options.type
 * @param {boolean} options.payload
 * @return {boolean}
 * @author Seven Du <shiweidu@outlook.com>
 */
export default function (appSwitch: boolean = defaultSwitch, { type, payload }: Payload): boolean {
  if (type === SET_APP_DRAWER) {
    return payload;
  }

  return appSwitch;
};
