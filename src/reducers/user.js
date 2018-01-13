import { SET_APP_USER } from '../constants';

const defaultState = {};

export default function(state = defaultState, { type, payload }) {
  switch (type) {
    case SET_APP_USER:
      return payload;
    default:
      return state;
  }
};