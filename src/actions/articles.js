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

export function editArticle(article, updates) {
  const updatedField = (newVal, oldVal) => (
    newVal !== null && newVal !== oldVal ? newVal : undefined
  );

  return async (dispatch) => {
    const updatedFields = {
      newTitle: updatedField(updates.title, article.title),
      newBody: updatedField(updates.body, article.body),
      newAuthor: updatedField(updates.author, article.author),
    };
    const response = await ArticlesApi.editArticle(article.id, updatedFields);

    if (response.status === 200) {
      dispatch({ type: Actions.EDITED_ARTICLE });
    } else {
      dispatch({ type: Actions.ERROR_EDITING_ARTICLE });
    }
  };
}
