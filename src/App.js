import "./App.css";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTasks(task) {
    setTasks([...tasks, task]);
  }

  function handleDelete(id) {
    setTasks(tasks.filter((_, i) => i !== id));
  }

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1>To-Do List</h1>
      <UserInput addtasks={addTasks} />
      <DisplayTask tasks={tasks} onDelete={handleDelete} />
    </div>
  );
}

function UserInput(props) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (text.trim()) {
      props.addtasks(text);
      setText("");
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Write a task"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          padding: "8px 12px",
          marginRight: "10px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "8px 16px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Add
      </button>
    </form>
  );
}

function DisplayTask({ tasks, onDelete }) {
  return (
    <ol
      style={{
        paddingLeft: 0,
        listStylePosition: "inside",
        width: "100%",
        maxWidth: "400px",
        margin: "20px 0",
      }}
    >
      {tasks.map((task, index) => (
        <Task key={index} taskText={task} taskId={index} onDelete={onDelete} />
      ))}
    </ol>
  );
}

function Task({ taskText, taskId, onDelete }) {
  return (
    <li
      style={{
        marginBottom: "10px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <span>{taskText}</span>
      <button
        onClick={() => onDelete(taskId)}
        style={{
          backgroundColor: "#ff4444",
          color: "white",
          border: "none",
          padding: "4px 8px",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default App;
