import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Form from "./components/Form";
import "./App.css";
import Chart from "./charts/Chart";
import lineData from "./data/Linedata";
import lineData2 from "./data/Linedata2";
import lineData3 from "./data/Linedata3";
import lineData4 from "./data/Linedata4";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Chart data={lineData} height={400} width={50}/>
      <Chart data={lineData2} height={400} width={50} />
      <Chart data={lineData3} height={400} width={50} />
      <Chart data={lineData4} height={400} width={50} />
      <Home />
      <Form/>
    </div>
  );
}

export default App;
