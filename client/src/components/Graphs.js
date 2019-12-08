import React from 'react'
import Chart from "../charts/Chart";
import lineData from "../data/Linedata";
import lineData2 from "../data/Linedata2";
import lineData3 from "../data/Linedata3";
import lineData4 from "../data/Linedata4";

const Home = () => {

    return (
      <div className="graphs">
        <h1 className="graphs__header">Adult 1 Zone (trips vs. price($))</h1>
        <Chart data={lineData} height={400} width={50} />
        <h1 className="graphs__header">Adult 2 Zone (trips vs. price($))</h1>
        <Chart data={lineData2} height={400} width={50} />
        <h1 className="graphs__header">Adult 3 Zone (trips vs. price($))</h1>
        <Chart data={lineData4} height={400} width={50} />
        <h1 className="graphs__header">Concession (trips vs. price($))</h1>
        <Chart data={lineData3} height={400} width={50} />
      </div>
    );
}

export default Home;