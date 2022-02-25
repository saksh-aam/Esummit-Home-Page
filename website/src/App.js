import React from "react";
import {BrowserRouter as Router,useRoutes } from "react-router-dom";
import Homepage from "./Homepage";
import NavBar from "./NavBar";

function App() {
  let routes = useRoutes([
    { path: "/", element:< Homepage /> },
  ]);
  return routes;
};
const Appwrapper = () => {
  return (
    <Router>
      <NavBar/>
      <App />
      </Router>
    )
  }

export default Appwrapper;
