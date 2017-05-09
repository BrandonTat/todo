import React from 'react';
import {uniqueId} from "../../util/util";
import {merge} from 'lodash';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.submit = this.submit.bind(this);
  }

  linkState(key) {
    return (event => this.setState({[key]: event.currentTarget.value}));
  }

  submit(e) {
    console.log("pressed submit");
    e.preventDefault();
    const todo = merge({}, this.state, { id: uniqueId()});
    this.props.receiveTodo(todo);
    this.setState({title: ""});
    console.log("done");
  }

  render () {
    return (
      <form>
        <span>Title: </span>
        <input onChange={this.linkState('title')} value={this.state.title}></input>
        <button onClick={this.submit}>Submit</button>
      </form>
    );
  }
}

export default TodoForm;
