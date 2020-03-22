import { connect } from 'react-redux';
import { List } from 'immutable';
import { TodoList } from '~/components';
import { State, Todo, List as ListType } from '~/types';


const mapStateToProps = (state: State): {todos: List<Todo>; current: ListType} => ({
  todos: state.todos,
  current: state.current,
});

const ShowTodoList = connect(
  mapStateToProps,
)(TodoList);

export default ShowTodoList;
