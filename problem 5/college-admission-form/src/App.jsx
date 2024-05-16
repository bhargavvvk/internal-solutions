import { useState } from "react";
import "./App.css";

function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(fname, lname, email, dob, username, gender, course);
    await fetch("http://localhost:5000/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fname: fname,
        lname: lname,
        email: email,
        dob: dob,
        username: username,
        password: password,
        gender: gender,
        course: course,
      }),
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <>
      <div className="container center-form">
        <form action="" method="get" onSubmit={(e) => handleSubmit(e)}>
          <h1>Student Registration Form</h1>
          <p>Fill in this form to register</p>
          <label for="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="Enter your first Name"
            onChange={(e) => setFname(e.target.value)}
          />
          <br />
          <label for="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lname"
            placeholder="Enter your Last Name"
            onChange={(e) => setLname(e.target.value)}
          />
          <br />
          <label for="email">E-mail</label>
          <input
            type="email"
            id="emial"
            name="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label for="dob">Date of birth</label>
          <input
            type="date"
            id="dob"
            name="dob"
            onChange={(e) => setDob(e.target.value)}
          />
          <br />
          <label for="username">Set Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Set Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <label for="password">Set Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Set Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <strong>Gender</strong>
          <br />

          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            onChange={(e) => setGender(e.target.value)}
          />
          <label for="gender">Male</label>
          <br />

          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            onChange={(e) => setGender(e.target.value)}
          />
          <label for="gender">Female</label>
          <br />

          <input
            type="radio"
            id="others"
            name="gender"
            value="others"
            onChange={(e) => setGender(e.target.value)}
          />
          <label for="gender">Others</label>
          <br />

          <label for="course">Course :</label>
          <select
            name="course"
            id="course"
            onChange={(e) => setCourse(e.target.value)}
          >
            <option value="cse">Computer Science and Engineering (CSE)</option>
            <option value="it">Information Technology (IT)</option>
            <option value="eee">
              Electronics & Electrical Engineering (EEE)
            </option>
            <option value="ce">Civil Engineering (CE)</option>
          </select>
          <br />

          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
}

export default App;
