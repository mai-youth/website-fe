import * as Actions from '../constants/actions';
import * as ArticlesApi from '../api/articles';

export function getArticles() {
  return async (dispatch) => {
    dispatch({ type: Actions.REQUESTED_ARTICLES });
    const response = await ArticlesApi.getArticles();
    const json = await response.json();
    dispatch({
      type: Actions.RECIEVED_ARTICLES,
      payload: json,
    });
  };
}

export function getArticle(id) {
  return async (dispatch) => {
    dispatch({ type: Actions.REQUESTED_ARTICLE });
    const response = await ArticlesApi.getArticle(id);
    if (response.status === 200) {
      const json = await response.json();
      dispatch({
        type: Actions.RECIEVED_ARTICLE,
        payload: json,
      });
    } else {
      dispatch({ type: Actions.ERROR_GETTING_ARTICLE });
    }
  };
}

export function addArticle(articleDetails) {
  return async (dispatch) => {
    const response = await ArticlesApi.addArticle(articleDetails);
    if (response.status === 200) {
      dispatch({ type: Actions.ADDED_ARTICLE });
    } else {
      dispatch({ type: Actions.ERROR_ADDING_ARTICLE });
    }
  };
}
