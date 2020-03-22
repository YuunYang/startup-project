import { List } from 'immutable';
import {
  SHOW_TODO, ADD_TODO, REMOVE_TODO, TOGGLE_TODO,
} from '~/constants';
import { Todo, TodoAction } from '~/types';

const initTodos = List();

const todos = (state: List<Todo> = initTodos, action: TodoAction): List<Todo> => {
  switch (action.type) {
    case SHOW_TODO:
      return state.filter((x: Todo) => x.id === action.list);
    case ADD_TODO:
      return state.push({
        id: action.id,
        list: action.list,
        text: action.text,
        completed: false,
      });
    case REMOVE_TODO:
      return state.filterNot((x: Todo) => x.id === action.id);
    case TOGGLE_TODO: {
      const index = state.findIndex((x: Todo) => x.id === action.id);
      return state.update(index, (v: Todo) => Object.assign(v, { completed: !v.completed }));
    }
    default:
      return state;
  }
};

export default todos;
