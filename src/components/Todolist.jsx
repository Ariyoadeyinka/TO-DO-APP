import styles from "./todolist.module.css";
import TodoItem from "./Todoitem";
export default function Todolist({ todos }) {
  return (
    <div className={styles.list}>
      {" "}
      {todos.map((item) => (
        <TodoItem key={item} item={item} />
      ))}
    </div>
  );
}
