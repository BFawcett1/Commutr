import React from 'react';
import { Line } from 'react-chartjs-2';

export default ({ data, width, height }) => (
    <div className="chart">
        <h1></h1>
        <Line
            data={data}
            width={width}
            height={height}
            options={{
                maintainAspectRatio: false
            }}
        />
    </div>
);