import React, { useState } from "react";

function App() {

  const [tasks, setTasks] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    const trimmedValue = inputValue.trim();

    if (trimmedValue === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      text: trimmedValue,
    };

    setTasks((prevTasks) => {

      const updatedTasks = [...prevTasks, newTask];

      updatedTasks.sort((a, b) =>
        a.text.localeCompare(b.text, undefined, { sensitivity: "base" })
      );

      return updatedTasks;
    });

    setInputValue("");
  };

  const deleteTask = (idToRemove) => {

    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== idToRemove));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <div>
      <h1>Todo List</h1>

      <input
        type="text"
        id="task-input"
        data-testid="task-input"
        placeholder="Enter a new task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      {}
      <button
        id="add-button"
        data-testid="add-button"
        onClick={addTask}
        disabled={inputValue.trim() === ""}
      >
        Add
      </button>

      {}
      {tasks.length === 0 ? (
        <p id="empty-message">No tasks yet. Add one above!</p>
      ) : (
        <ul id="task-list">
          {tasks.map((task) => (
            <li key={task.id} data-testid="task-item">
              <span>{task.text}</span>
              <button
                data-testid="delete-button"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* UX improvement: a running count of remaining tasks */}
      {tasks.length > 0 && (
        <p id="task-count">
          {tasks.length} task{tasks.length !== 1 ? "s" : ""} remaining
        </p>
      )}
    </div>
  );
}

export default App;