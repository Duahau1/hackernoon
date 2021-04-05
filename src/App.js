import React from "react";
import "./App.css";
import Post from "./pages/post";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Post} exact />
      </Switch>
    </Router>
  );
}

export default App;
