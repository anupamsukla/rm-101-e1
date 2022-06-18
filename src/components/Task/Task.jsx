import React from "react";
import styles from "./task.module.css";
import { Counter } from "../Counter"

const Task = ({ task, handleClick, handleDelete }) => {
  // NOTE: do not delete `data-testid` key value pair
  console.log(task)
  return (
    <li data-testid="task" className={styles.task} key={task.id}>
      {task.done ? (
        <input
          type="checkbox"
          data-testid="task-checkbox"
          onClick={() => {
            handleClick(task.id);
          }}
          defaultChecked
        />
      ) : (
        <input
          type="checkbox"
          data-testid="task-checkbox"
          onClick={() => {
            handleClick(task.id);
          }}
        />
      )}
      <div
        data-testid="task-text"
        style={task.done ? { textDecoration: "line-through" } : {}}
      >
        {task.text}
      </div>
      <Counter countvalue={task.count} />
      <button
        data-testid="task-remove-button"
        onClick={() => {
          handleDelete(task.id);
        }}
      >
        x
      </button>
    </li>
  );
};

export default Task;
