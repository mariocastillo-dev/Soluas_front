// Ruta protegida, sólo visible cuando los usuarios se hayan logueado correctamente
import { useState } from 'react';
// IMPORTAMOS EL OTRO COMPONENTE DE SIDEBAR
import { Sidebar } from "../components/Sidebar";
import type { Filters } from '../types/financialData';
// CARDS DE LA PARTE SUPERIOR
import { FinancialSummary } from '../components/cards/FinancialSummary';
// GRÁFICOS
import { ComboBarLineChart } from "../components/charts/ComboBarLineChart";
import { CategoryCharts } from '../components/charts/CategoryCharts';
// TABLA CON PAGINACION
import { FinancialTable } from "../components/table/FinancialTable";


export default function Dashboard() {
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
    );
}