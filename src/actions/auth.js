import Cookies from 'js-cookie';
import { decode } from 'jsonwebtoken';
import * as Actions from '../constants/actions';
import * as AuthApi from '../api/auth';

const TOKEN_KEY = 'TOKEN';

export function authenticate(passPhrase) {
  return async (dispatch) => {
    dispatch({ type: Actions.AUTH_REQUESTED });
    const response = await AuthApi.authenticate(passPhrase);

    switch (response.status) {
      case 200: {
        const json = await response.json();
        dispatch({ type: Actions.AUTH_RECEIVED, payload: json.token });
        Cookies.set(TOKEN_KEY, json.token);
        break;
      }
      default:
        dispatch({ type: Actions.AUTH_FAILED });
    }
  };
}

export function restoreSession() {
  return (dispatch) => {
    const token = Cookies.get(TOKEN_KEY);

    // This is to correct in rare cases where this breaks
    if (token === 'undefined') {
      Cookies.remove(TOKEN_KEY);
      return;
    }

    try {
      if (token) {
        // token exists, check if still valid (not expired)
        const { exp } = decode(token);
        if (Date.now() >= exp * 1000) {
          // token expired, remove cookie
          Cookies.remove(TOKEN_KEY);
          return;
        }

        // token is valid, authenticate
        dispatch({ type: Actions.AUTH_RECEIVED, payload: token });
      }
    } catch (err) {
      // Do nothing
    }
  };
}
