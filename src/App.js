import React from "react";
import CreateTodo from "./components/CreateTodo/CreateTodo";
import DisplayTodos from "./components/DisplayTodos/DisplayTodos";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CreateTodo />
        <DisplayTodos />
      </header>
    </div>
  );
}

export default App;
