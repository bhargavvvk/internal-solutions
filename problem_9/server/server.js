const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
const port = 5000;
const Task = require("./mongo.js").Task;

app.use(express.json());

app.post("/api/addTask", async (req, res) => {
  const task = new Task({
    title: req.body.title,
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
  console.log(task.title, req.body.title, req.body.completed);
  const title = req.body.title;
  const completed = req.body.completed;
  task.completed = completed;
  task.title = title;
  await task.save();
  res.send(task);
});

app.delete("/api/deleteTask", async (req, res) => {
  const id = await Task.findById(req.body.id);
  await Task.deleteOne({ _id: id });
  res.send("Deleted");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
