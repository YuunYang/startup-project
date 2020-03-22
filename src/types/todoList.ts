import { List } from 'immutable';
import { Todo } from './actions';

export interface TodoList{
  todos: List<Todo>;
}
