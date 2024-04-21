/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useEffect } from 'react';
import { Scatter } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const ScatterPlot: React.FC = () => {
  const chartRef = useRef<Chart<'scatter', any, unknown> | null>(null);

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  const data = {
    datasets: [
      {
        label: 'Scatter Dataset',
        data: [
          { x: 1, y: 2 },
          { x: 2, y: 3 },
          { x: 3, y: 4 },
          { x: 4, y: 5 },
        ],
      },
    ],
  };

  return <Scatter ref={(ref: any) => (chartRef.current = ref?.chartInstance)} data={data} />;
};

export default ScatterPlot;
