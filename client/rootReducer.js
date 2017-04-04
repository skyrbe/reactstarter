import { combineReducers } from 'redux';
import toasts from './reducers/Toasts';
import auth from './reducers/Auth';

export default combineReducers({
  toasts,
  auth
});
