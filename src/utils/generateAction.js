// @flow


type ActionType = {
  type: string,
  payload: any,
};

/**
 * generate action util.
 *
 * @param {String} type
 * @param {Any} payload
 * @return {Object}
 * @author Seven Du <shiweidu@outlook.com>
 */
export default function (type: string, payload: any): ActionType {
  return { type, payload }
};
