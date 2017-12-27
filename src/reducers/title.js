// @flow

import { SET_APP_TITLE } from '../constants';

/**
 * Default state.
 *
 * @type {String}
 */
const defaultTitle: string = 'Fans';

/**
 * The payload types.
 *
 * @type {Object}
 */
type Payload = {
  type: string,
  payload: string,
};

/**
 * Export App title reducer.
 *
 * @param {String} title
 * @param {String} options.type
 * @param {String} options.payload
 * @return {String}
 * @author Seven Du <shiweidu@outlook.com>
 */
export default function (title: string = defaultTitle, { type, payload }: Payload): string {
  if (type === SET_APP_TITLE) {
    return payload;
  }

  return title;
};
