import { connect } from 'react-redux';
import { TodoList } from '~/components';
import { State } from '~/types';


const mapStateToProps = (state: State) => ({
  todos: state.todos,
});

const ShowTodoList = connect(
  mapStateToProps,
)(TodoList);

export default ShowTodoList;