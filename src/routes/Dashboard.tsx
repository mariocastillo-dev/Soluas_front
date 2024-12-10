// Ruta protegida, sólo visible cuando los usuarios se hayan logueado correctamente

// import React from "react";
import { ComboBarLineChart } from "../components/ComboBarLineChart";
import { DoughnutChart } from "../components/DoughnutChart";
import { DataTable } from "../components/DataTable";

import { generateComboChartData, generateDoughnutData, generateTableData } from "../utils/chartData";

export default function Dashboard() {
    // return <h1>Dashboard</h1>;
    const comboData = generateComboChartData();
    const doughnutData1 = generateDoughnutData(1);
    const doughnutData2 = generateDoughnutData(2);
    const tableData = generateTableData();

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-3 gap-8 mb-8">
                    <div className="col-span-2 space-y-8">
                        <div className="col-span-2 bg-white p-6 rounded-lg shadow-lg">
                            <ComboBarLineChart data={comboData} />
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h4 className="text-xl font-semibold mb-4 text-center">Balance entre Gasto y Presupuesto por mes</h4>
                            <DataTable data={tableData} />
                        </div>
                    </div>
                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg h-300 w-300">
                            <DoughnutChart data={doughnutData1} title="Gastos por Categoría" />
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <DoughnutChart data={doughnutData2} title="Presupuesto por Categoría" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}