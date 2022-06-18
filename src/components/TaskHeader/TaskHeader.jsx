import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({ todo }) => {
  // sample values to be replaced
  let totalTask = todo.length;
  let unCompletedTask = todo.filter(el => el.done === false).length;

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      <b data-testid="header-remaining-task">{unCompletedTask}</b>
      <b data-testid="header-total-task">{totalTask}</b>
    </div>
  );
};

export default TaskHeader;
