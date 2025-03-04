import "./Styles/TodoItem.css";

export default function TodoItem({ index, todo, todos, setTodos }) {
  function handleDelete(todo) {
    console.log("delete", todo);
    const newTodos = todos.filter((t) => t !== todo);
    setTodos(newTodos);
  }
  function handleMarkAsRead(item) {
    console.log("todo =", item);

    //mark as read logic
    const newTodos = todos.map((todo) => {
      if (todo.name === item) {
        return { ...todo, isCompleted: true };
      }
      return todo;
    });
    setTodos(newTodos);
  }

  return (
    <div className="todo-item-container">
      <li key={index} className="todo-item">
        <span className="todo-text">{todo.name}</span>
        <button
          className="mark-as-read"
          onClick={() => handleMarkAsRead(todo.name)}
        >
          Mark as read
        </button>
        <button className="delete-button" onClick={() => handleDelete(todo)}>
          Delete
        </button>
      </li>
    </div>
  );
}
