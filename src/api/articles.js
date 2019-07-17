import { API_BASE } from '../constants/api';

export function getArticles() {
  return fetch(`${API_BASE}/articles`);
}
