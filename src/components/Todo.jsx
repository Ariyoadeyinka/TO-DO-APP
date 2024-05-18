import { useState } from "react";
import Form from "./Form";
import Todolist from "./Todolist";
import CompletedTodo from "./CompletedTodo";
export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <Todolist todos={todos} setTodos={setTodos} />
      <CompletedTodo completedTodos={completedTodos} totalTodos={totalTodos} />
    </div>
  );
}
