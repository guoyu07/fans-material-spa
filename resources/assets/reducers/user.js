import { CHANGE } from '../actions';
import { SET_AUTH } from '../actions/user';

const defaultState = { user: null, token: null, ttl: 0, refresh_ttl: 0 };

export default (state = defaultState, { type, ...payload }) => {
  switch (type) {
    case SET_AUTH:
      return { user: state.user, ...payload };

    case CHANGE:
      return { ...state, user: { ...state.user, ...payload.user } };
  }

  return state;
};
