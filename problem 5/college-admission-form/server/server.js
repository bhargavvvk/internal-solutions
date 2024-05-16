const express = require("express");
const cors = require("cors");

const Application = require("./mongo").Application;

const app = express();
app.use(cors({ origin: "http://localhost:3000" }));

app.use(express.json());

app.post("/submit", async (req, res) => {
  const { fname, lname, email, dob, username, password, gender, course } =
    req.body;
  await Application.create({
    fname: fname,
    lname: lname,
    email: email,
    dob: dob,
    username: username,
    password: password,
    gender: gender,
    course: course,
  }).then((response) => {
    console.log(response);
    res.send("Application submitted successfully");
  });
});

app.listen(5000, () => {
  console.log("Server started on http://localhost:5000");
});
