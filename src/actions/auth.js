import Cookies from 'js-cookie';
import { decode } from 'jsonwebtoken';
import { toast } from 'react-toastify';
import * as Actions from '../constants/actions';
import * as AuthApi from '../api/auth';
import { TOKEN_KEY } from '../constants/auth';

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

export function invalidateAuth(dispatch) {
  dispatch({ type: Actions.AUTH_INVALID });
  Cookies.remove(TOKEN_KEY);
  toast.error('Session expired. Please refresh the page and try again.', {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
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
          invalidateAuth(dispatch);
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
