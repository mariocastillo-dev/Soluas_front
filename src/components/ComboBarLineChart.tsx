// import React from "react";
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend
// } from "chart.js";
// import { Chart } from "react-chartjs-2";
// import { ComboBarLineChartData } from "../types/chartTypes";

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend
// );

// // Data ficticia para mostrar los gráficos
// interface Props {
//     data: ComboBarLineChartData[];
// }

// export const ComboBarLineChart: React.FC<Props> = ({ data }) => {
//     console.log("datos " , data);

//     const chartComboData = {
//         labels: data.map(item => item.mes),
//         datasets: [
//             {
//                 type: 'bar' as const,
//                 label: 'Gasto',
//                 backgroundColor: 'rgba(255, 99, 132, 0.6)',
//                 data: data.map(item => item.gasto),
//                 borderColor: 'rgb(255, 99, 132)',
//                 borderWidth: 2,
//             },
//             {
//                 type: 'line' as const,
//                 label: 'Presupuesto',
//                 backgroundColor: 'rgba(54, 162, 235, 0.6)',
//                 borderColor: 'rgb(54, 162, 235)',
//                 borderWidth: 2,
//                 fill: false,
//                 data: data.map(item => item.presupuesto),
//             },
//         ],
//     };

//     const options = {
//         responsive: true,
//         plugins: {
//             legend: {
//                 position: 'top' as const,
//             },
//             title: {
//                 display: true,
//                 text: 'Análisis de Gastos y Presupuestos',
//             },
//         },
//     };

//     return <Chart type='bar' data={chartComboData} options={options} />;
// };



import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import type { Filters } from '../types/financialData';
import { useFinancialData } from '../hooks/useFinancialData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

interface ComboBarLineChartProps {
  filters: Filters;
}

export function ComboBarLineChart({ filters }: ComboBarLineChartProps) {
  const { filteredData } = useFinancialData(filters);

  const options = {
    responsive: true,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Análisis de Gastos y Presupuestos',
        font: {
          size: 16,
        },
      },
    },
    scales: {
      y: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
        ticks: {
          callback: (value: number) => {
            return new Intl.NumberFormat('es-ES', {
              style: 'currency',
              currency: 'COP',
              maximumFractionDigits: 0,
            }).format(value);
          },
        },
      },
    },
  };

  const data = {
    labels: filteredData.map((item) => item.month),
    datasets: [
      {
        type: 'bar' as const,
        label: 'Gasto',
        data: filteredData.map((item) => item.spent),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 2,
        yAxisID: 'y',
      },
      {
        type: 'line' as const,
        label: 'Presupuesto',
        data: filteredData.map((item) => item.budget),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 2,
        fill: false,
        // yAxisID: 'y',
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <Chart type="bar" options={options} data={data} />
    </div>
  );
}