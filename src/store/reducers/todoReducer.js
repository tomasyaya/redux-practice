import { useMemo } from "react";
import { useDispatch } from "react-redux";

const initialState = {
  loading: false,
  todos: [],
};

// view -> disatch() --> action === { type: "ADD" }
// action === { type: "ADD" } --> reducer
// reducer --> prevState + action == newState -> view

// Action === { type: "ADD_TODO", payload: {...}}
// La action es un objeto de javascript, en Redux, la key Type es obligatoria y debe ser un string.

const ADD_TODO = "ADD_TODO";
const SET_LOADING = "SET_LOADING";
const REMOVE_TODO = "REMOVE_TODO";

export function todoReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo !== action.payload),
      };
    default:
      return state;
  }
}

export const addTodoAction = (todo) => ({ type: ADD_TODO, payload: todo });
export const setLoadingAction = (loading) => ({
  type: SET_LOADING,
  payload: loading,
});

const buildHandlers = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodoAction(todo)),
  setLoading: (loading) => dispatch(setLoadingAction(loading)),
});

export function useTodosHandlers() {
  const dispatch = useDispatch();
  const handlers = useMemo(() => buildHandlers(dispatch), [dispatch]);
  return handlers;
}
