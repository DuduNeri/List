import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <h1 className="heading">To-do List</h1>
      <div className="input-container">
        <input
          className="input"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Adicione algo a lista"
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
      <ul className="task-list">
        {tasks.map((t, index) => (
          <li key={index} className="task-item">
            {t}
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
