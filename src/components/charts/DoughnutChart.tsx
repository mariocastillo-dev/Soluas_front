// import React from 'react';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Doughnut } from 'react-chartjs-2';
// import { DoughnutChartData } from '../types/chartTypes';

// ChartJS.register(ArcElement, Tooltip, Legend);

// interface Props {
//     data: DoughnutChartData;
//     title: string;
// }

// export const DoughnutChart: React.FC<Props> = ({ data, title }) => {
//     const chartData = {
//         labels: data.labels,
//         datasets: [
//             {
//                 data: data.values,
//                 backgroundColor: [
//                     'rgba(75, 192, 192, 0.6)',
//                     'rgba(54, 162, 235, 0.6)',
//                     'rgba(255, 159, 64, 0.6)',
//                     'rgba(255, 99, 132, 0.6)',
//                     'rgba(255, 205, 86, 0.6)',
//                     'rgba(153, 102, 255, 0.6)',
//                 ],
//                 borderColor: [
//                     'rgba(75, 192, 192, 1)',
//                     'rgba(54, 162, 235, 1)',
//                     'rgba(255, 159, 64, 1)',
//                     'rgba(255, 99, 132, 1)',
//                     'rgba(255, 205, 86, 1)',
//                     'rgba(153, 102, 255, 1)',
//                 ],
//                 borderWidth: 1,
//             },
//         ],
//     };

//     const options = {
//         // cutout: 15,
//         // radius: 40,
//         // circumference: 360,
//         aspectRatio: 0.8,

//         // scales: {
//         //     y: {
//         //         suggestedMin: 50,
//         //         suggestedMax: 100
//         //     }
//         // },
        
//         // maintainAspectRatio: true,

//         responsive: true,
//         plugins: {
//             legend: {
//                 position: 'top' as const,
//             },
//             title: {
//                 display: true,
//                 text: title,
//             },
//         },
//     };

//     // height={300} width={300}
//     return <Doughnut data={chartData} options={options} />;
// };

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { formatCurrency } from '../../utils/formatters';

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
  data: {
    labels: string[];
    values: number[];
  };
  title: string;
  colorScheme: string[];
}

export function DoughnutChart({ data, title, colorScheme }: DoughnutChartProps) {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        data: data.values,
        backgroundColor: colorScheme,
        borderColor: colorScheme.map(color => color.replace('0.7', '1')),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 16,
        },
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const value = context.raw;
            const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0);
            const percentage = ((value / total) * 100).toFixed(1);
            return `${context.label}: ${formatCurrency(value)} (${percentage}%)`;
          },
        },
      },
    },
  };

  return <Doughnut data={chartData} options={options} />;
}