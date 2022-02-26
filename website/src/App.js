import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Homepage from "./Homepage";
import Nav from "./NavBar2";

function App() {
  let routes = useRoutes([{ path: "/", element: <Homepage /> }]);
  return routes;
}
const Appwrapper = () => {
  return (
    <Router>
      <Nav />
      <App />
    </Router>
  );
};

export default Appwrapper;
