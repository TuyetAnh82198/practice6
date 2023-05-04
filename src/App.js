import React, { useState, useEffect, useCallback } from "react";

import TaskForm from "./components/NewTask/TaskForm.jsx";
import Section from "./components/UI/Section.jsx";
import Tasks from "./components/Tasks/Tasks.jsx";

function App() {
  //state dữ liệu hiển thị
  const [tasklist, setTasklist] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const data = [];

  const taskFetch = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://databaseforlab13-1-default-rtdb.firebaseio.com/tasks.json`,
        { method: "GET" }
      );
      if (!response.ok) {
        throw new Error("Loi");
      }
      const result = await response.json();

      for (const key in result) {
        data.push({
          id: key,
          title: result[key].title,
        });
      }
      setTasklist(data);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    taskFetch();
  }, []);

  return (
    <React.Fragment>
      <Section>
        <TaskForm />
      </Section>
      <Section>
        {isLoading && (
          <p
            style={{
              fontWeight: "bold",
              fontSize: "1.25rem",
              textAlign: "center",
            }}
          >
            Loading tasks...
          </p>
        )}
        {tasklist.length === 0 && !isLoading && (
          <p
            style={{
              fontWeight: "bold",
              fontSize: "1.25rem",
              textAlign: "center",
            }}
          >
            No tasks found. Start adding some!
          </p>
        )}

        <Tasks tasklist={tasklist} />
      </Section>
    </React.Fragment>
  );
}

export default App;
