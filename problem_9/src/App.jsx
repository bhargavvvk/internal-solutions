import React, { useReducer, useState } from "react";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "",
    completed: false,
  });

  const addTask = () => {
    const title = newTask.title;
    setTasks([...tasks, { title, completed: false }]);
    setNewTask({ title: "", completed: false });
  };

  return (
    <>
      <div className="taskbar">
        <div className="taskbar-header">
          <input
            type="text"
            id="task"
            value={newTask.title}
            placeholder="Add a task..."
            onChange={(e) => {
              setNewTask({ title: e.target.value, completed: false });
            }}
          />
          <button onClick={addTask}>+</button>
        </div>

        {tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            index={index}
            tasks={tasks}
            setTasks={setTasks}
          />
        ))}
      </div>
    </>
  );
};

const Task = ({ task, index, tasks, setTasks }) => {
  const [edit, setEdit] = useReducer((p) => !p, false);
  const [taskTitle, setTaskTitle] = useState(task.title);
  const [taskCompleted, setTaskCompleted] = useReducer(
    (p) => !p,
    task.completed
  );
  const toggleEdit = () => {
    setEdit();
  };

  return (
    <div className={taskCompleted ? "task green" : "task"}>
      <input
        type="checkbox"
        checked={taskCompleted}
        onChange={() => {
          const newTasks = [...tasks];
          setTaskCompleted();
          newTasks[index].completed = !newTasks[index].completed;
          setTasks(newTasks);
        }}
      />
      <input
        type="text"
        value={taskTitle}
        disabled={!edit ? true : false}
        onChange={(e) => {
          setTaskTitle(e.target.value);
        }}
      />
      <button onClick={toggleEdit} hidden={edit}>
        {"edit"}
      </button>
      <button
        onClick={() => {
          toggleEdit();
          const newTasks = [...tasks];
          newTasks[index].title = taskTitle;
          setTasks(newTasks);
        }}
        hidden={!edit}
      >
        {"done"}
      </button>
      <button
        onClick={() => {
          const newTasks = [...tasks];
          newTasks.splice(index, 1);
          setTasks(newTasks);
        }}
      >
        X
      </button>
    </div>
  );
};

export default App;
