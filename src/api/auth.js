import { API_BASE } from '../constants/api';

export function authenticate(passPhrase) {
  return fetch(`${API_BASE}/auth`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ passPhrase }),
  });
}
