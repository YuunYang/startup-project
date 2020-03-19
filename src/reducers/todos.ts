import { List } from 'immutable';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '~/constants';
import { Todo, TodoAction } from '~/types';

const initTodos = List();

const todos = (state: List<Todo> = initTodos, action: TodoAction): Todo [] => {
  switch (action.type) {
    case ADD_TODO:
      return state.push({
        id: action.id,
        list: action.list,
        text: action.text,
        completed: false,
      }).toJS();
    case REMOVE_TODO:
      return state.filterNot((x: Todo) => x.id === action.id).toJS();
    case TOGGLE_TODO: {
      const index = state.findIndex((x: Todo) => x.id === action.id);
      return state.update(index, (v: Todo) => Object.assign(v, { completed: !v.completed })).toJS();
    }
    default:
      return state.toJS();
  }
};

export default todos;
