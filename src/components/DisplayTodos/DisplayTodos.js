import React from "react";
import { useSelector } from "react-redux";
const styles = {
  container: {
    border: "1px solid purple",
    borderRadius: "10px",
    width: "400px",
    minHeight: "100vh",
    padding: "10px",
    margin: "10px",
  },
  card: {
    border: "1px solid purple",
    borderRadius: "10px",
    padding: "10px",
    margin: "10px auto",
    width: "90%",
  },
};

function DisplayTodos() {
  const todos = useSelector((state) => state.todos.todos);
  const loading = useSelector((state) => state.todos.loading);
  return (
    <div style={styles.container}>
      {loading && "Please wait while we create the new todo ..."}
      {todos.map((todo) => (
        <div key={todo}>
          <p>{todo}</p>
        </div>
      ))}
    </div>
  );
}

export default DisplayTodos;
