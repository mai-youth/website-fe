import * as Actions from '../constants/actions';

export default function articles(state = [], { type, payload }) {
  switch (type) {
    case Actions.REQUESTED_ARTICLES:
      return state;
    case Actions.RECIEVED_ARTICLES:
      return payload;
    case Actions.DELETED_ARTICLE:
      return state.filter(({ id }) => id !== payload);
    default:
      return state;
  }
}
