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

export function addArticle(articleDetails) {
  return async (dispatch) => {
    const response = await ArticlesApi.addArticle(articleDetails);
    const json = await response.json();

    if (json.status === 200) {
      dispatch({ type: Actions.ADDED_ARTICLE });
    } else {
      dispatch({ type: Actions.ERROR_ADDING_ARTICLE });
    }
  };
}
