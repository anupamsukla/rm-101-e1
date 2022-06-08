import React from "react";
import styles from "./taskApp.module.css";
import data from '../data/tasks.json'
import { TaskHeader } from "./TaskHeader";
import { AddTask } from "./AddTask";
import { Tasks } from './Tasks'

const TaskApp = () => {
  // NOTE: do not delete `data-testid` key value pair
  const [lists, setLists] = React.useState(data || [])
  return (
    <div data-testid="task-app" className={styles.taskApp}>
      <TaskHeader info={lists} />
      <AddTask lists={lists} setLists={setLists} />
      <Tasks lists={lists} setLists={setLists} />
    </div>
  );
};

export default TaskApp;
