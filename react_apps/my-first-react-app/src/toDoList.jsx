import { use, useState } from "react";
import Top from "./assets/Top";

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

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <>
      <div className="top">
        <h1>To-Do list</h1>
        <input
          type="text"
          placeholder="Write task here"
          value={newTask}
          onChange={handleInputChange}
          id="todo-input"
          className="button"
        />
        <button
          className="add-button button"
          onClick={addTask}>
          Add
        </button>
      </div>

      <div className="cards">
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <div className="list-item">
                <span>{task}</span>

                <button
                  className="delete-button"
                  onClick={() => deleteTask(index)}>
                  Delete
                </button>

                <button
                  className="move-button"
                  onClick={() => moveTaskUp(index)}>
                  Up
                </button>

                <button
                  className="move-button"
                  onClick={() => moveTaskDown(index)}>
                  Down
                </button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default ToDoList;
