import React from 'react'
import Chart from "../charts/Chart";
import lineData from "../data/Linedata";
import lineData2 from "../data/Linedata2";
import lineData3 from "../data/Linedata3";
import lineData4 from "../data/Linedata4";

const Home = () => {

    return (
      <div className="home">
        <Chart data={lineData} height={400} width={50} />
        <Chart data={lineData2} height={400} width={50} />
        <Chart data={lineData3} height={400} width={50} />
        <Chart data={lineData4} height={400} width={50} />
      </div>
    );
}

export default Home;