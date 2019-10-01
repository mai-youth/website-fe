import { combineReducers } from 'redux';
import articles from './articles';
import auth from './auth';

export default combineReducers({
  auth,
  articles,
});
