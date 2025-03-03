import "./Styles/TodoItem.css";

export default function TodoItem({ index, todo, todos, setTodos }) {
  function handleDelete(todo) {
    console.log("delete", todo);
    const newTodos = todos.filter((t) => t !== todo);
    setTodos(newTodos);
  }

  return (
    <div className="todo-item-container">
      <li key={index} className="todo-item">
        <span className="todo-text">{todo}</span>
        <button className="delete-button" onClick={() => handleDelete(todo)}>
          Delete
        </button>
      </li>
    </div>
  );
}
