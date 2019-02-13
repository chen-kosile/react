import {combineReducers} from 'redux'
import userinfo from './userinfo'
import storeReducer from './store';


export default combineReducers({
  userinfo,
  storeReducer,
});