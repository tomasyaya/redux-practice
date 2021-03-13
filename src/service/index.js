export const createTodo = (todo) =>
  new Promise((res) => setTimeout(() => res(todo), 1000));
