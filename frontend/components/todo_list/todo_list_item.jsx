import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove(e) {
    e.preventDefault();
    this.props.removeTodo(this.props.todo.id);
  }

  render() {
    return (
      <div>
        <li>{this.props.todo.title}</li>
        <button onClick={ this.handleRemove }>Delete</button>
      </div>
    );
  }
}

export default TodoListItem;
