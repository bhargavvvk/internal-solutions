const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/college-admissions")
  .then((response) => console.log("Connected to database"))
  .catch((err) => console.log(err));

const applicationSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  dob: Date,
  username: String,
  password: String,
  gender: String,
  course: String,
});

const Application = mongoose.model("Application", applicationSchema);

module.exports.Application = Application;
