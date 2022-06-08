import React from "react";
import styles from "./addTask.module.css";

const AddTask = (props) => {
  const { lists, setLists } = props
  const [item, setItem] = React.useState('');

  const addtodo = () => {
    if (item !== '') {
      const payload = { id: lists.length + 1, text: item, done: false, count: 1 }
      setLists([...lists, payload])
      setItem("")
    }
  }

  return (
    <div className={styles.addTask} >
      <input data-testid="add-task-input"
        type="text"
        placeholder="Add task..."
        value={item}
        onChange={(e) => setItem(e.target.value)} />
      <button data-testid="add-task-button" onClick={() => {
        addtodo()
      }}
      >+</button>
    </div>
  );
};

export default AddTask;

