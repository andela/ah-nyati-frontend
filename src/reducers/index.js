import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import resetReducer from './resetReducer';


export default combineReducers({
  auth: authReducer,
  err: errorReducer,
  reset: resetReducer,
});
