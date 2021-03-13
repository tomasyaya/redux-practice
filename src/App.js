import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodo } from "./service";
import "./App.css";

function App() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const [todo, setTodo] = React.useState("");
  const handleSumit = async (e) => {
    e.preventDefault();
    const newTodo = await createTodo(todo);
    dispatch({ type: "ADD", payload: newTodo });
    setTodo("");
  };
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSumit}>
          <input
            type="text"
            name="todo"
            value={todo}
            onChange={({ target }) => setTodo(target?.value)}
          />
          <button type="submit">create</button>
        </form>
        {todos.map((todo) => (
          <p key={todo}>{todo}</p>
        ))}
      </header>
    </div>
  );
}

export default App;
