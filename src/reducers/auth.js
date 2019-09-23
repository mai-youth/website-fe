import * as Actions from '../constants/actions';
import Status from '../constants/status';

const defaultState = {
  token: null,
  status: null,
};

export default function auth(state = defaultState, { type, payload }) {
  switch (type) {
    case Actions.AUTH_REQUESTED:
      return {
        ...state,
        status: Status.PENDING,
      };
    case Actions.AUTH_RECEIVED:
      return {
        token: payload,
        status: Status.SUCCESS,
      };
    case Actions.AUTH_FAILED:
      return {
        token: null,
        status: Status.FAILED,
      };
    default:
      return state;
  }
}
