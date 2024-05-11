import { useState } from "react";
import TodoItem from "./Todoitem";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  function handleSUbmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }
  return (
    <div>
      <form onSubmit={handleSUbmit}>
        <input
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          type="text"
        />
        <button type="submit">Add</button>
      </form>
      {todos.map((item) => (
        <TodoItem key={item} item = {item}/>
      ))}
    </div>
  );
}