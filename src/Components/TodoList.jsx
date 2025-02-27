import "./Styles/TodoList.css";

export default function TodoList({ todos }) {
  return (
    <div className="todo-list-container">
      <h1 className="todo-list-title">Todo List</h1>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}
