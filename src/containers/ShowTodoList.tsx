import { connect } from 'react-redux';
import { TodoList } from '~/components';
import { State, Todo } from '~/types';


const mapStateToProps = (state: State): {todos: Todo []} => ({
  todos: state.todos,
});

const ShowTodoList = connect(
  mapStateToProps,
)(TodoList);

export default ShowTodoList;
