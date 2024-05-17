const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/to-do-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

const taskSchema = new mongoose.Schema({
  title: String,
  completed: Boolean,
});

const Task = mongoose.model("Task", taskSchema);

exports.Task = Task;
