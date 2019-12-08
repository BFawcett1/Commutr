import React from "react";
import Graphs from "./components/Graphs";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import "./App.css";
import { Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/form" component={Form} />
        <Route exact path="/graphs" component={Graphs} /> 
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
