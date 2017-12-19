import { SET } from '../actions';

/**
 * Default state.
 *
 * @type {String}
 */
const defaultTitle = 'Fans 2';

/**
 * Export App title reducer.
 *
 * @param {String} title
 * @param {String} options.type
 * @param {String} options.payload
 * @return {String}
 * @author Seven Du <shiweidu@outlook.com>
 */
export default function (title = defaultTitle, { type, payload }) {
  return type === SET ? payload : title;
};
