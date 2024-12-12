import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { ComboBarLineChartData } from "../types/chartTypes";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

// Data ficticia para mostrar los gráficos
interface Props {
    data: ComboBarLineChartData[];
}

export const ComboBarLineChart: React.FC<Props> = ({ data }) => {
    console.log("datos " , data);
    
    const chartComboData = {
        labels: data.map(item => item.mes),
        datasets: [
            {
                type: 'bar' as const,
                label: 'Gasto',
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                data: data.map(item => item.gasto),
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 2,
            },
            {
                type: 'line' as const,
                label: 'Presupuesto',
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgb(54, 162, 235)',
                borderWidth: 2,
                fill: false,
                data: data.map(item => item.presupuesto),
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Análisis de Gastos y Presupuestos',
            },
        },
    };

    return <Chart type='bar' data={chartComboData} options={options} />;
};
