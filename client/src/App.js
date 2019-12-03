import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import "./App.css";
import { Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/form" component={Form}/>
      </Switch>
    </div>
  );
}

export default App;
