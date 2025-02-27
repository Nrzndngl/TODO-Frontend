import { useState } from "react";
import "./Styles/TodoForm.css";

export default function TodoForm({ todos, setTodos }) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, name]);
    setName("");
  }

  return (
    <div className="todo-container">
      <form onSubmit={handleSubmit} className="todo-form">
        <h1 className="todo-title">Todo App</h1>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter a task..."
          value={name}
          className="todo-input"
        />
        <button type="submit" className="todo-button">
          Add
        </button>
      </form>
    </div>
  );
}

// import { useState } from "react";

// export default function TodoForm({ todos, setTodos }) {
//   const [name, setName] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     setTodos([...todos, name]); // Ensure todos is an array
//     setName("");
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <h1>Todo App</h1>
//         <input
//           onChange={(e) => setName(e.target.value)}
//           type="text"
//           placeholder="Name"
//           value={name}
//         />
//         <button type="submit">Add</button>
//       </form>
//     </div>
//   );
// }
