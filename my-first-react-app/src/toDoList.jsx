import { use, useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState(["sad", "walk"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => index !== i);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {}

  return (
    <>
      <div className="top">
        <h1>To-Do list</h1>
        <input
          type="text"
          placeholder="Write task here"
          value={newTask}
          onChange={handleInputChange}
        />
        <button
          className="add-button"
          onClick={addTask}>
          Add
        </button>
      </div>

      <div className="cards">
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span>{task}</span>

              <button
                className="delete-button"
                onClick={() => deleteTask(index)}>
                Delete
              </button>

              <button
                className="move-up-button"
                onClick={() => moveTaskUp(index)}>
                Up
              </button>

              <button
                className="move-down-button"
                onClick={() => moveTaskDown(index)}>
                Down
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default ToDoList;
