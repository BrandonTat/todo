import { connect } from 'react-redux';
import TodoList from './todo_list';
import { allTodos, allErrors } from '../../reducers/selectors';
import {receiveTodo, removeTodo, fetchTodos, createTodo } from '../../actions/todo_actions';
import {clearErrors} from '../../actions/error_actions';

const mapStateToProps = state => ({
  todos: allTodos(state),
  errors: allErrors(state)
});

const mapDispatchToProps = dispatch => ({
  createTodo: todo =>  dispatch(createTodo(todo)),
  removeTodo: todo => dispatch(removeTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
