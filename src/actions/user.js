// @flow

import generateAction from '../utils/generateAction';
import { SET_APP_USER } from '../constants';

/**
 * Fetch user.
 *
 * @param {string} token
 * @return {Function}
 * @author Seven Du <shiweidu@outlook.com>
 */
export function fetchUser (token: string): Function {
  return function(dispatch: Function) {
    dispatch(generateAction(SET_APP_USER, { id: 1 }));
  };
}

/**
 * get access token.
 *
 * @return {string|false}
 * @author Seven Du <shiweidu@outlook.com>
 */
export function getAccessToken(): string | false {
  const nowAt = (new Date).getTime() / 1000;
  const expiresAt = window.localStorage.getItem('access_token_expires_at');

  if (nowAt <= expiresAt) {
    return false;
  }

  return window.localStorage.getItem('access_token') || false;
}

/**
 * Set access token.
 *
 * @param {string} accessToken
 * @param {integer} expiresIn
 * @author Seven Du <shiweidu@outlook.com>
 */
export function setAccessToken(accessToken: string, expiresIn: number) {
  const nowAt = (new Date).getTime();
  window.localStorage.setItem('access_token', accessToken);
  window.localStorage.setItem('access_token_expires_at', nowAt + expiresIn);
}
