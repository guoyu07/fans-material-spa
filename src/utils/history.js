// @flow

import { publicUrl } from '../config';

let rootUrl = publicUrl;

/**
 * Handle history back handle.
 *
 * @param {Object} event
 * @return {void}
 * @author Seven Du <shiweidu@outlook.com>
 */
export function handleBack(event: { preventDefault: Function }) {
  if (event.preventDefault) {
    event.preventDefault();
  }

  if (! document.referrer) {
    window.location.href = rootUrl;

    return;
  }

  window.history.back();
}

/**
 * Replace root history path.
 *
 * @param {string} path
 * @return {void}
 * @author Seven Du <shiweidu@outlook.com>
 */
export function replaceRootPath(path: string) {
  rootUrl = (publicUrl === '/' ? '' : publicUrl) + path;
}

