import React from "react";
import styles from "./tasks.module.css";
import { Task } from "../Task";

const Tasks = (props) => {
  const { todo, setTodo } = props
  function handleClick(id) {
    setTodo(
      todo.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }
  function handleDelete(id) {
    setTodo(todo.filter((task) => task.id !== id));
  }
  return (
    <>
      <ul data-testid="tasks" className={styles.tasks}>
        {todo.map(task => <Task task={task} handleClick={handleClick} handleDelete={handleDelete} />)}
      </ul>
      {todo.length === 0 ? (
        <div data-testid="tasks-empty" className={styles.empty}>
          Please Add Some Thing
        </div>
      ) : null}
    </>
  );
};

export default Tasks;