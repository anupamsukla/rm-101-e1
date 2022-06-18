import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = ({ countvalue }) => {
  // sample value to be replaced
  const [count, setCount] = useState(countvalue);
  const counterChange = (value) => {
    if (count === 0) {
      if (value === 1) {
        setCount(count + value)
      }
    }
    else {
      setCount(count + value)
    }
  }
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div className={styles.counter}>
      <button data-testid="task-counter-increment-button" onClick={() => counterChange(-1)} >-</button>
      <span data-testid="task-counter-value">{count}</span>
      <button data-testid="task-counter-decrement-button" onClick={() => counterChange(1)}>+</button>
    </div>
  );
};

export default Counter;
