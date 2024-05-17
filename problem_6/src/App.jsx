import { useEffect } from "react";
import "./App.css";
import Counter from "./components/Counter";
function App() {
  useEffect(() => {}, []);
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Counter key={1} index={1}></Counter>
      {/* <Counter key={2} index={2}></Counter> */}
    </div>
  );
}

export default App;

// fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata", {
//       method: "GET",
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
