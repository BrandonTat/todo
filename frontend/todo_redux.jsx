import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { allTodos } from './reducers/selectors';
import { receiveTodo, receiveTodos } from './actions/todo_actions';

window.store = configureStore;
window.allTodos = allTodos;
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<h1>Todos App</h1>, document.getElementById('content'));
});
