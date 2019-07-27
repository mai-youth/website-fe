import * as Actions from '../constants/actions';

const defaultState = {
  articles: [],
  article: null,
};

export default function articles(state = defaultState, { type, payload }) {
  switch (type) {
    case Actions.RECIEVED_ARTICLES:
      return {
        ...state,
        articles: payload,
      };
    case Actions.RECIEVED_ARTICLE:
      return {
        ...state,
        article: payload,
      };
    default:
      return state;
  }
}
