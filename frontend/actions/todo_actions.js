export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos
});

const receiveTodo = todo => {
  console.log("actions");
  return {
    type: RECEIVE_TODO,
    todo
  };
};

const removeTodo = id => ({
  type: REMOVE_TODO,
  id
});

export { receiveTodo, receiveTodos, removeTodo };
