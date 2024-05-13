import styles from "./form.module.css";
import { useState } from "react";
export default function Form({ todos, setTodos }) {
  //const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });
  function handleSUbmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <form className={styles.todoform} onSubmit={handleSUbmit}>
      <div className={styles.formContainer}>
        <input
          className={styles.Inputbox}
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          value={todo.name}
          type="text"
          placeholder="Enter Todo Item"
        />
        <button className={styles.submitButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
