import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome Home!</h1>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>Learn More About Us</h1>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h1>Get in Touch</h1>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
