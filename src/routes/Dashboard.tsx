// Ruta protegida, sólo visible cuando los usuarios se hayan logueado correctamente

import { useState } from 'react';

// IMPORTAMOS EL OTRO COMPONENTE DE SIDEBAR
import { Sidebar } from "../components/Sidebar";
import { ComboBarLineChart } from "../components/ComboBarLineChart";

// import { DoughnutChart } from "../components/charts/DoughnutChart";

import { CategoryCharts } from '../components/charts/CategoryCharts';

// TABLA CON PAGINACION
import { FinancialTable } from "../components/FinancialTable";
// import { generateComboChartData, generateDoughnutData } from "../utils/chartData";
// CARDS DE LA PARTE SUPERIOR
import { FinancialSummary } from '../components/FinancialSummary';
import type { Filters } from '../types/financialData';


export default function Dashboard() {
    // return <h1>Dashboard</h1>;
    // const comboData = generateComboChartData();
    // const doughnutData1 = generateDoughnutData(1);
    // const doughnutData2 = generateDoughnutData(2);
    // const tableData = generateTableData();

    const [filters, setFilters] = useState<Filters>({
        year: '2024',
        months: [],
        categories: []
    });

    return (
        <div className="min-h-screen bg-gray-100 flex">
            <div className="w-64 fixed left-0 top-0 h-screen p-4">
                <Sidebar filters={filters} onFiltersChange={setFilters} />
            </div>
            <div className="flex-1 ml-64">
                <div className="p-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                <FinancialSummary filters={filters} />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <div className='col-span-2 row-span-1'>
                                <ComboBarLineChart filters={filters} />
                            </div>
                            <div className='col-span-1 row-span-2'>
                                <CategoryCharts filters={filters} />
                            </div>
                            <div className='col-span-2'>
                                <h3 className="text-m font-bold text-white bg-gradient-to-br from-cyan-300 to-sky-800 rounded-lg py-2 text-center">
                                    Reporte Financiero Mensual
                                </h3>
                                <FinancialTable filters={filters} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        /////////////////////////////////////////
        // <div className="flex min-h-screen bg-background">

        //     <div className="min-h-screen bg-gray-100">
        //         <div className="flex flex-col lg:flex-row">
        //             {/* Sidebar */}

        //             <div className="w-64 fixed left-0 top-0 h-screen p-4">
        //                 <Sidebar filters={filters} onFiltersChange={setFilters} />
        //             </div>

        //             {/* Main Content */}

        //             <div className="flex-1 ml-64">
        //                 <div className="p-8">
        //                     <div className="flex-1 p-4">
        //                         <div className="max-w-7xl mx-auto">
        //                             {/* Cards Grid - Responsive */}
        //                             <div className="mb-2 mx-8">
        //                                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        //                                     <FinancialSummary filters={filters} />
        //                                 </div>
        //                             </div>
        //                             <div className="min-h-screen bg-gray-50 p-8">
        //                                 <div className="max-w-7xl mx-auto">
        //                                     <div className="grid grid-cols-3 gap-8 mb-8">
        //                                         <div className="col-span-2 space-y-8">
        //                                             <div className="col-span-2 bg-white p-6 rounded-lg shadow-lg">
        //                                                 <ComboBarLineChart filters={filters} />
        //                                             </div>
        //                                             {/* <div className="bg-white p-6 rounded-lg shadow-lg"> */}

        //                                             <div className="min-h-screen bg-white-100 py-6 ">
        //                                                 <div className="max-w-7xl mx-auto ">
        //                                                     <h3 className="text-m font-bold text-gray-700 bg-sky-100 rounded-lg py-2 mx-6 text-center">
        //                                                         Reporte Financiero Mensual
        //                                                     </h3>
        //                                                     <FinancialTable filters={filters} />
        //                                                 </div>
        //                                             </div>

        //                                         </div>
        //                                         <div className="space-y-8">
        //                                             <div className="bg-white p-6 rounded-lg shadow-lg ">
        //                                                 <CategoryCharts filters={filters} />
        //                                             </div>
        //                                             {/* <div className="bg-white p-6 rounded-lg shadow-lg ">
        //                                                 <CategoryCharts filters={filters}  />
        //                                             </div> */}
        //                                         </div>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>



        ///////////////////////////////////////////////

        // SEGUNDA VERSION

        // <div className="min-h-screen bg-gray-100 flex">
        //     <div className="w-64 fixed left-0 top-0 h-screen p-4">
        //         <Sidebar filters={filters} onFiltersChange={setFilters} />
        //     </div>


        //     <div className="flex-1 ml-64">
        //         <div className="p-8">
        //             <div className="max-w-7xl mx-auto">
        //                 <div className="mb-8">
        //                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        //                         <FinancialSummary filters={filters} />
        //                     </div>
        //                 </div>

        //                 <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        //                     Reporte Financiero Mensual
        //                 </h1>

        //                 <FinancialTable filters={filters} />
        //             </div>
        //         </div>
        //     </div>
        // </div>

    );
}