import { useState, useEffect } from "react";
import React from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 500);
  });

  return <h1>I have rendered {count} times!</h1>;
}

const Useeffecthook = () => {
  return <Timer />;
};

export default Useeffecthook;
