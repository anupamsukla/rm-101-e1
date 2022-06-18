import React, { useState } from "react";
import data from '../data/tasks.json'
import styles from "./taskApp.module.css";

import { TaskHeader } from "./TaskHeader";
import { AddTask } from "./AddTask"
import { Tasks } from "./Tasks"

const TaskApp = () => {
  const [todo, setTodo] = useState(data)
  return (
    <div data-testid="task-app" className={styles.taskApp}>
      <TaskHeader todo={todo} />
      <AddTask todo={todo} setTodo={setTodo} />
      <Tasks todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default TaskApp;
