import styles from "./completedtodo.module.css";
import Todolist from "./Todolist";
export default function CompletedTodo({ completedTodos, totalTodos }) {
  return (
    <div className={styles.boxes}>
      <div className={styles.completed}>
        <h3>Total tasks: {totalTodos}</h3>
      </div>

      <div className={styles.completed}>
        <h3>Completed tasks: {completedTodos}</h3>
      </div>
    </div>
  );
}
