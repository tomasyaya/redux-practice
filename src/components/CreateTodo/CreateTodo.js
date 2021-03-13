import React from "react";
import { useDispatch } from "react-redux";
import { useTodosHandlers } from "../../store/reducers/todoReducer";
import { createTodo } from "../../service";
const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    width: "600px",
    padding: "20px",
    border: "1px solid purple",
    borderRadius: "10px",
  },
};

function CreateTodo() {
  const [todo, setTodo] = React.useState("");
  const { addTodo, setLoading } = useTodosHandlers();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const newTodo = await createTodo(todo);
    addTodo(newTodo);
    setLoading(false);
    setTodo("");
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <h2>Create Todo</h2>
      <label htmlFor="todo">todo</label>
      <input
        type="text"
        name="todo"
        id="todo"
        placeholder="todo"
        value={todo}
        onChange={({ target }) => setTodo(target.value)}
      />
      <button type="submit">create todo</button>
    </form>
  );
}

export default CreateTodo;
