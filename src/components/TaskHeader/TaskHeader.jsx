import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = (props) => {
  const { info } = props
  // sample values to be replaced
  let totalTask = info.length;
  let unCompletedTask = info.filter(el => el.done === false).length;

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      <h1>Todo List</h1>
      <small>You have
        <b data-testid="header-remaining-task"> {unCompletedTask} </b> of
        <b data-testid="header-total-task"> {totalTask} </b>
        tasks remaining</small >
    </div>
  );
};

export default TaskHeader;
