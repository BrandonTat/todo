import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { allTodos } from './reducers/selectors';
import { receiveTodo, receiveTodos } from './actions/todo_actions';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", function(){
  const store = configureStore();
  ReactDOM.render(<Root store={store} />, document.getElementById('content'));
});
