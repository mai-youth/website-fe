import * as Actions from '../constants/actions';
import * as ArticlesApi from '../api/articles';
import { invalidateAuth } from './auth';

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

// Authenticated
export function addArticle(articleDetails) {
  return async (dispatch) => {
    const response = await ArticlesApi.addArticle(articleDetails);
    switch (response.status) {
      case 200:
        dispatch({ type: Actions.ADDED_ARTICLE });
        break;
      case 401:
        invalidateAuth(dispatch);
        break;
      default:
        dispatch({ type: Actions.ERROR_ADDING_ARTICLE });
    }
  };
}

// Authenticated
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
    switch (response.status) {
      case 200:
        dispatch({ type: Actions.EDITED_ARTICLE });
        break;
      case 401:
        invalidateAuth(dispatch);
        break;
      default:
        dispatch({ type: Actions.ERROR_EDITING_ARTICLE });
    }
  };
}

// Authenticated
export function deleteArticle(articleID) {
  return async (dispatch) => {
    const response = await ArticlesApi.deleteArticle(articleID);
    switch (response.status) {
      case 200:
        dispatch({ type: Actions.DELETED_ARTICLE, payload: articleID });
        break;
      case 401:
        invalidateAuth(dispatch);
        break;
      default:
        dispatch({ type: Actions.ERROR_DELETING_ARTICLE });
    }
  };
}


export function likeArticle(articleId) {
  return (dispatch) => {
    dispatch({ type: Actions.LIKED_ARTICLE });
    ArticlesApi.likeArticle(articleId);
  };
}

export function viewArticle(articleId) {
  return (dispatch) => {
    dispatch({ type: Actions.VIEWED_ARTICLE });
    ArticlesApi.viewArticle(articleId);
  };
}
