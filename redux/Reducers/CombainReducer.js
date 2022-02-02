import {combineReducers} from 'redux';
import {getPopularResturents, getOpenNow, getHotAndNew} from './getData';
import {UserInfo} from './UserReducer';
export const reducers = combineReducers({
  getPopularResturents,
  getOpenNow,
  getHotAndNew,
  UserInfo,
});
