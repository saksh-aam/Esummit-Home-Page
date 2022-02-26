import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Section from "./components/events-shelf/Section";
import NavBar from "./components/NavBar";
import "./App.css";
import About from "./components/About";

function App() {
  return (
    <>
      <div className="Main">
        <NavBar />
        <Homepage />
      </div>
      <About />
    </>
  );
}

export default App;
