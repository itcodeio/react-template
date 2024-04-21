/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useEffect, FC } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const LineChart: FC = () => {
  const chartRef = useRef<Chart<'line', any, unknown> | null>(null);

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return <Line ref={(ref: any) => (chartRef.current = ref?.chartInstance)} data={data} />;
};

export default LineChart;
