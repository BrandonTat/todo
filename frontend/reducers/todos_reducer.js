import { RECEIVE_TODOS, RECEIVE_TODO }from '../actions/todo_actions';
import merge from 'lodash/merge';

const todosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case(RECEIVE_TODOS):
      let newState = merge(state, action.todos);
      return newState;
    case(RECEIVE_TODO):
      let newState = merge(state, action.todo);
      return newState;
    default:
      return state;
  }
};

export default todosReducer;
