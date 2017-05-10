export const allTodos = ({ todos }) => (
  Object.keys(todos).map(id => todos[id])
);

export const allErrors = ({ errors }) => (
  errors
);
