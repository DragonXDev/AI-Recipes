import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";

function RouterFunction() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" component={Home} />
        </Routes>
      </Router>
    </div>
  );
}

export default RouterFunction;