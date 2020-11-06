import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Components
import Home from "../src/components/main/Home";



import './sass/main.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
