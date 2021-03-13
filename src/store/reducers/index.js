import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";

export const rootReducer = combineReducers({
  todos: todoReducer,
  user: (x = {}) => x,
  auth: (x = {}) => x,
});
