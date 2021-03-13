const initialState = {
  todos: [],
};

export function todoReducer(state = initialState, { type, payload } = {}) {
  switch (type) {
    case "ADD":
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    default:
      return state;
  }
}
