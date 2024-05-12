import styles from "./form.module.css";
import { useState } from "react";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");
  function handleSUbmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }
  return (
    <form className={styles.todoform} onSubmit={handleSUbmit}>
      <div className={styles.formContainer}>
        <input
          className={styles.Inputbox}
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
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
