import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = ({ dataPoints }) => {
    const dataPointValues = dataPoints.map(data => data.value);
    const totalMax = Math.max(...dataPointValues);

    return (
        <div className='chart'>
            {dataPoints.map((data) => (
                <ChartBar
                    key={data.label}
                    value={data.value}
                    maxValue={totalMax}
                    label={data.label}
                />
            ))}
        </div>
    );
};

export default Chart;
