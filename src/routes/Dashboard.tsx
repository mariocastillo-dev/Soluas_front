// Ruta protegida, sólo visible cuando los usuarios se hayan logueado correctamente

// import React from "react";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { ComboBarLineChart } from "../components/ComboBarLineChart";
import { DoughnutChart } from "../components/DoughnutChart";

// import { DataTable } from "../components/DataTable";

// TABLA CON PAGINACION
import { FinancialTable } from "../components/FinancialTable";

import { generateComboChartData, generateDoughnutData } from "../utils/chartData";
// import { generateTableData } from "../utils/tableData";

export default function Dashboard() {
    // return <h1>Dashboard</h1>;
    const comboData = generateComboChartData();
    const doughnutData1 = generateDoughnutData(1);
    const doughnutData2 = generateDoughnutData(2);
    // const tableData = generateTableData();

    return (
        <div className="flex min-h-screen bg-background">
            <Sidebar />
            <div className="min-h-screen bg-gray-50 p-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-3 gap-8 mb-8">
                        <div className="col-span-2 space-y-8">
                            <div className="col-span-2 bg-white p-6 rounded-lg shadow-lg">
                                <ComboBarLineChart data={comboData} />
                            </div>
                            {/* <div className="bg-white p-6 rounded-lg shadow-lg"> */}

                            <div className="min-h-screen bg-white-100 py-6 ">
                                <div className="max-w-7xl mx-auto ">
                                    <h3 className="text-m font-bold text-gray-700 bg-emerald-200 py-2 mx-6 text-center">
                                        Reporte Financiero Mensual
                                    </h3>
                                    <FinancialTable />
                                </div>
                            </div>


                            {/* <h5 className="text-m font-semibold mb-4 text-center">Balance entre Gasto y Presupuesto por mes</h5>
                                <DataTable data={tableData} /> */}
                            {/* </div> */}


                        </div>
                        <div className="space-y-8">
                            <div className="bg-white p-6 rounded-lg shadow-lg h-330 w-400">
                                <DoughnutChart data={doughnutData1} title="Gastos por Categoría" />
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-lg h-320 w-400">
                                <DoughnutChart data={doughnutData2} title="Presupuesto por Categoría" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}