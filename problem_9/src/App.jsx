import React, { useEffect, useReducer, useState } from "react";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "",
    completed: false,
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/getTasks")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
      });
  }, []);

  const addTask = () => {
    if (!newTask.title) {
      return;
    }
    const title = newTask.title;
    setTasks([...tasks, { title, completed: false }]);
    setNewTask({ title: "", completed: false });

    fetch("http://localhost:5000/api/addTask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });
  };

  return (
    <>
      <h1>TO DO App</h1>
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
    setEdit(!edit);
  };

  const toggleTaskCompleted = () => {
    setTaskCompleted(!taskCompleted);
  };

  const updateTask = (taskTitle, taskCompleted) => {
    fetch("http://localhost:5000/api/updateTask", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: task._id,
        title: taskTitle,
        completed: taskCompleted,
      }),
    }).then((res) => console.log("Updated"));
  };

  const deleteTask = () => {
    fetch("http://localhost:5000/api/deleteTask", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: task._id,
      }),
    }).then((res) => console.log("Deleted"));
  };
  return (
    <div className={taskCompleted ? "task green" : "task"}>
      <input
        type="checkbox"
        checked={taskCompleted}
        onChange={() => {
          const newTasks = [...tasks];
          toggleTaskCompleted();
          newTasks[index].completed = !newTasks[index].completed;
          setTasks(newTasks);
          updateTask(taskTitle, !taskCompleted);
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
          newTasks[index].completed = !taskCompleted;
          setTasks(newTasks);
          console.log(taskTitle, taskCompleted);
          updateTask(taskTitle, taskCompleted);
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
          deleteTask();
        }}
      >
        X
      </button>
    </div>
  );
};

export default App;
