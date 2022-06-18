import React from "react";
import styles from "./tasks.module.css";
import { Task } from "../Task";

const Tasks = (props) => {
  const { todo, setTodo } = props
  function handleClick(idx) {
    setTodo(
      todo.map((task, id) =>
        id === idx ? { ...task, done: !task.done } : task
      )
    );
  }
  function handleDelete(idx) {
    setTodo(todo.filter((task, id) => idx !== id));
  }
  return (
    <>
      <ul data-testid="tasks" className={styles.tasks}>
        {todo.map((task, idx) =>
          <Task idx={idx}
            task={task}
            handleClick={handleClick}
            handleDelete={handleDelete} />)}
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