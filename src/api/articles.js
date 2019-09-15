import { API_BASE } from '../constants/api';

export function getArticles() {
  return fetch(`${API_BASE}/articles`);
}

export function getArticle(id) {
  return fetch(`${API_BASE}/articles/article/${id}`);
}

export function addArticle(articleDetails) {
  return fetch(`${API_BASE}/articles/article`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(articleDetails),
  });
}

export function editArticle(id, editDetails) {
  return fetch(`${API_BASE}/articles/article/${id}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(editDetails),
  });
}

export function deleteArticle(articleID) {
  return fetch(`${API_BASE}/articles/article/${articleID}`, {
    method: 'DELETE',
  });
}
