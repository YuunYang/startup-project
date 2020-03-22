import { combineReducers } from 'redux';
import current from './current';
import lists from './lists';
import todos from './todos';

const rootReducers = combineReducers({
  lists,
  todos,
  current,
});

export default rootReducers;
