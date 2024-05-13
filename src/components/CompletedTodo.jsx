import styles from "./completedtodo.module.css";
import Todolist from "./Todolist";
export default function CompletedTodo({completedTodo }) {
  return (
    <div className={styles.boxes}>
      <div className={styles.completed}>
        <h3>Completed tasks:</h3>
      </div>{" "}
      <div className={styles.completed}>
        {completedTodo.map((todo)=> (<li key={index}>{todo}</li>))}
      </div>
    </div>
  );
}
