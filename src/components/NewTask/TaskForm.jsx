import React, { useEffect, useRef } from "react";

import useHttp from "../../customHook/useHttp.jsx";

import styles from "./TaskForm.module.css";

const TaskForm = () => {
  const titleInput = useRef();

  const { isLoading, error, sendRequest } = useHttp(titleInput);

  return (
    <div className={styles.form}>
      <input type="text" ref={titleInput} />
      <button
        onClick={() =>
          sendRequest({
            url: "https://databaseforlab13-1-default-rtdb.firebaseio.com/tasks.json",
            method: "POST",
            body: true,
            headers: { "Content-Type": "application/json" },
          })
        }
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskForm;
