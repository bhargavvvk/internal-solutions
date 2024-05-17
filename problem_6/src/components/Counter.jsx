import React, { useState, useEffect } from "react";
function Counter(props) {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  // Simulates fetching data on mount (componentDidMount)
  useEffect(() => {
    console.log("Component mounted (useEffect)");

    const fetchData = async () => {
      fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata", {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          setTime(data.datetime);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Data fetched");
    };

    fetchData();
  }, []); // Empty dependency array: runs only once on mount

  const increment = () => {
    setCount(count + 1);
  };

  // Simulates cleanup on unmount (componentWillUnmount)
  useEffect(() => {
    console.log("Adding cleanup logic (useEffect)");
    const isIdle = setInterval(() => console.log("Component is Idle"), 1000);
    return () => clearInterval(isIdle); // Cleanup function for unmount
  }, []); // Empty dependency array: runs only once on mount and cleanup on unmount

  console.log(`Component ${props.index} rendered (render)`); // Simulates render method

  return (
    <div>
      <h1>Time is {time}</h1>
      <h1>Counter</h1>
      <p>You clicked {count} times</p>
      <button onClick={increment}>Click me</button>
    </div>
  );
}

export default Counter;
