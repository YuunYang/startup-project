import { combineReducers } from 'redux';
import lists from './lists';
import todos from './todos';

const rootReducers = combineReducers({
  lists,
  todos,
});

export default rootReducers;
