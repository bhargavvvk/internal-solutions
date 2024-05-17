const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
const port = 5000;
const Task = require("./mongo.js").Task;

app.use(express.json());

app.post("/api/addTask", async (req, res) => {
  const task = new Task({
    name: req.body.name,
    completed: false,
  });

  await task.save();
  res.send(task);
});

app.get("/api/getTasks", async (req, res) => {
  const tasks = await Task.find();
  res.send(tasks);
});

app.put("/api/updateTask", async (req, res) => {
  const task = await Task.findById(req.body.id);
  task.completed = !task.completed;
  await task.save();
  res.send(task);
});

app.delete("/api/deleteTask", async (req, res) => {
  const task = await Task.findById(req.body.id);
  await task.delete();
  res.send(task);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
