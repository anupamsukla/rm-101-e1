import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({ todo, setTodo }) => {

  // NOTE: do not delete `data-testid` key value pair
  const [inputs, setInput] = useState("")
  const additem = () => {
    if (inputs !== '') {
      setTodo([...todo, { id: todo.length + 1, text: inputs, done: false, count: 1 }])
      setInput("")
    }
  }

  return (
    <div className={styles.todoForm}>
      <input data-testid="add-task-input"
        type="text"
        name="text"
        value={inputs}
        onChange={(ev) => setInput(ev.target.value)} />
      <button data-testid="add-task-button" onClick={() => { additem() }}>+</button>
    </div>
  );
};

export default AddTask;
