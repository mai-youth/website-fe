import { API_BASE } from '../constants/api';

export function getArticles() {
  return fetch(`${API_BASE}/articles`);
}

export function addArticle(articleDetails) {
  return fetch(`${API_BASE}/articles/article`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(articleDetails),
  });
}

export function deleteArticle(articleID){
  return fetch(`${API_BASE}/articles/article`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(articleID),
  });
}
