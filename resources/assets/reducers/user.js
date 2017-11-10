import { CHANGE } from '../actions';
import { SET_AUTH } from '../actions/user';

const defaultUser = {
  id: 0,
  login: null,
  name: '游客',
};

/**
 * Default the authenticated user state.
 *
 * @type {Object}
 */
const defaultState = { user: defaultUser, token: null, ttl: 0, refresh_ttl: 0 };

/**
 * The authenticated user reducer.
 *
 * @param {Object} state
 * @param {String} options.type
 * @param {Object} options.payload
 * @return {Object}
 * @author Seven Du <shiweidu@outlook.com>
 */
export default function (state = defaultState, { type, payload }) {
  switch (type) {
    case SET_AUTH:
      return { user: state.user, ...payload };

    case CHANGE:
      return { ...state, user: { ...state.user, ...payload } };
  }

  return state;
};
