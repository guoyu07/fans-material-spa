export const APPEND = 'append';
export const PREPEND = 'prepend';
export const DESTROY = 'destroy';
export const CHANGE = 'change';

/**
 * Make a action.
 *
 * @param {String} type
 * @param {Object} payload
 * @return {Object}
 * @author Seven Du <shiweidu@outlook.com>
 */
export function makeAction (type, payload) {
  return { type, payload };
};
