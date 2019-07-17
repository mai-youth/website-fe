import * as Actions from '../constants/actions';

export default function articles(state = [], { type, payload }) {
  switch (type) {
    case Actions.REQUESTED_ARTICLES:
      return state;
    case Actions.RECIEVED_ARTICLES:
      return payload;
    default:
      return state;
  }
}
