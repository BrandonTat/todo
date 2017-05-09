import React from 'react';
import {merge} from 'lodash';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleRemove(e) {
    e.preventDefault();
    this.props.removeTodo(this.props.todo.id);
  }

  handleToggle(e) {
    e.preventDefault();
    const toggleTodo = merge({}, this.props.todo,
    {done: !this.props.todo.done});

    this.props.receiveTodo(toggleTodo);
  }

  render() {
    const { todo, removeTodo } = this.props;
    const {title, done } = todo;
    return (
      <div>
        <li>{title}</li>
        <button onClick={ this.handleRemove }>Delete</button>

        <button onClick={ this.handleToggle }>{ done ? "Undo" : "Done"}</button>
      </div>
    );
  }
}

export default TodoListItem;
