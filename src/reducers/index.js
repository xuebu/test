import { combineReducers } from 'redux';

import  loggedUserReducer  from './loggedUserReducer';

export default combineReducers({
  loggedUserState:loggedUserReducer //这里注意名称
});