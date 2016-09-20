import {combineReducers} from 'redux';

import HomeReducer from './home_reducer';

export default combineReducers({
  home: HomeReducer
});
