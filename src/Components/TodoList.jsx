import "./Styles/TodoList.css";
import TodoItem from "./TodoItem";
export default function TodoList({ todos, setTodos }) {
  return (
    <div className="todo-list-container">
      <h1 className="todo-list-title">Todo List</h1>
      <p>Total:{todos.length}</p>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} todos={todos} setTodos={setTodos} />
        ))}
      </ul>
    </div>
  );
}
