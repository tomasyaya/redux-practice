import { todoReducer, addTodoAction } from "../todoReducer";

describe("todoReducer", () => {
  it("should return correct value for add todo action", () => {
    const newTodo = { todo: "new todo" };
    const initialState = { loading: false, todos: [] };
    const newState = todoReducer(initialState, addTodoAction(newTodo));
    const expectedState = { loading: false, todos: [newTodo] };
    expect(newState).toEqual(expectedState);
  });
});
