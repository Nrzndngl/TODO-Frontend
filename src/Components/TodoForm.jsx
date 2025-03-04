import { useState } from "react";
import "./Styles/TodoForm.css";

export default function TodoForm({ todos, setTodos }) {
  const [name, setName] = useState({ name: "", isCompleted: false });

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.name.trim()) {
      return;
    }
    setTodos([...todos, name]);
    setName({ name: "", isCompleted: false });
  }

  return (
    <div className="todo-container">
      <form onSubmit={handleSubmit} className="todo-form">
        <h1 className="todo-title">Todo App</h1>
        <input
          onChange={(e) =>
            setName({ name: e.target.value, isCompleted: false })
          }
          type="text"
          placeholder="Enter a task..."
          value={name.name}
          className="todo-input"
        />
        <button type="submit" className="todo-button">
          Add
        </button>
      </form>
    </div>
  );
}
