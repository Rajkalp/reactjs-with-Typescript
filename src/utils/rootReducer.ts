import { combineReducers } from 'redux';
import counterReducer from '../modules/test/Test.reducer';

const rootReducer = combineReducers({
  // Your reducers go here
  counterReducer:counterReducer
});

export default rootReducer;
