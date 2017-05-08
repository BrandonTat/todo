import React from 'react';
import TodoListItem from './todo_list_item';

const TodoList = ({ todos }) => (
  <div>
    <ul>
      {todos.map((todo, idx) => <TodoListItem key={idx} todo={todo}/>)}

    </ul>
  </div>
);

export default TodoList;
