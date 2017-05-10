export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
import * as TodoAPIUtil from '../util/todo_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos
});

export const receiveTodo = todo => {
  return {
    type: RECEIVE_TODO,
    todo
  };
};

export const removeTodo = id => ({
  type: REMOVE_TODO,
  id
});

export const fetchTodos = () => dispatch => (
  TodoAPIUtil.fetchTodos().then(todos => dispatch(receiveTodos(todos)))
);

export const createTodo = todo => dispatch => (
  TodoAPIUtil.createTodo(todo).then(todo => dispatch(receiveTodo(todo)),
  err => dispatch(receiveErrors(err.responseJSON))).then(() => clearErrors())
);

window.fetchTodos = fetchTodos;
