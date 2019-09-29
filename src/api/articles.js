import Cookies from 'js-cookie';
import { API_BASE } from '../constants/api';
import { TOKEN_KEY } from '../constants/auth';

export function getArticles() {
  return fetch(`${API_BASE}/articles`);
}

export function getArticle(id) {
  return fetch(`${API_BASE}/articles/article/${id}`);
}

// Athenticated
export function addArticle(articleDetails) {
  return fetch(`${API_BASE}/articles/article`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: Cookies.get(TOKEN_KEY),
    },
    body: JSON.stringify(articleDetails),
  });
}

// Authenticated
export function editArticle(id, editDetails) {
  return fetch(`${API_BASE}/articles/article/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: Cookies.get(TOKEN_KEY),
    },
    body: JSON.stringify(editDetails),
  });
}

// Authenticated
export function deleteArticle(articleID) {
  return fetch(`${API_BASE}/articles/article/${articleID}`, {
    method: 'DELETE',
    headers: {
      Authorization: Cookies.get(TOKEN_KEY),
    },
  });
}

export function likeArticle(articleId) {
  return fetch(`${API_BASE}/articles/article/${articleId}/liked`, { method: 'POST' });
}
