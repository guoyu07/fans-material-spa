import generateAction from '../utils/generateAction';
import { SET_APP_TITLE } from '../constants';

/**
 * Set app title.
 *
 * @param {String} title
 * @return {Function}
 * @author Seven Du <shiweidu@outlook.com>
 */
export const setAppTitle = (title: string): Function => (dispatch: Function) => {
  document.title = title;
  dispatch(generateAction(SET_APP_TITLE, title));
};
