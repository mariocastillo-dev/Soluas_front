// import { Building2, Filter, LogOut } from 'lucide-react';
// import { Filter, LogOut } from 'lucide-react';
import { LogOut } from 'lucide-react';
import { FilterSection } from './FilterSection';
// import { UserProfile } from "./Sidebar/UserProfile";
import type { Filters } from '../types/financialData';


interface SidebarProps {
    filters: Filters;
    onFiltersChange: (filters: Filters) => void;
}

// type Month =
//     | 'Enero'
//     | 'Febrero'
//     | 'Marzo'
//     | 'Abril'
//     | 'Mayo'
//     | 'Junio'
//     | 'Julio'
//     | 'Agosto'
//     | 'Septiembre'
//     | 'Octubre'
//     | 'Noviembre'
//     | 'Diciembre';

export function Sidebar({ filters, onFiltersChange }: SidebarProps) {
    const years = ['2024', '2023', '2022'];


    const months = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    // function getCompleteMonth(input: string): string | null {
    //     const search = input.toLowerCase();
    //     const monthFound = months.find(month => month.toLowerCase().startsWith(search)) || null;
    //     return monthFound || null;
    // }

    //    function getCompleteMonth(input: string): string | null {
    //         const months = [
    //             'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    //             'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    //         ];

    //         const search = input.toLowerCase();
    //         const monthFound = months.find(month => month.toLowerCase().startsWith(search)) || null;
    //         return monthFound;
    //     }


    const categories = ['Educación', 'Salud', 'Vivienda', 'Infraestructura', 'Alimentación escolar', 'Funcionamiento'];

    const handleLogout = () => {
        // ACÁ HAY QUE AÑADIR LA LÓGICA DEL LOG OUT
        console.log('Saliendo...');
    };

    return (
        <aside className="bg-gay-100 shadow-lg rounded-lg p-6 h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center gap-3 mb-8 bg-gradient-to-br from-cyan-300 to-sky-800 shadow-lg rounded-lg px-1.5 py-3">
                {/* <Building2 className="w-8 h-8 text-purple-600" /> */}
                <img className='h-12'
                    src="https://hacienda.itagui.gov.co/img/logo.f4c6b2b1.png"
                />
                <h2 className="text-m font-bold text-white text-left">SECRETARÍA DE HACIENDA DE ITAGÜÍ</h2>
            </div>

            {/* Filters */}
            <div className="flex-1 space-y-6">
                {/* <div className="flex items-center gap-2 text-gray-700">
                    <Filter className="w-5 h-5" />
                    <h3 className="font-semibold">Filtros</h3>
                </div> */}

                {/* <FilterSection title="Año" options={years} type="dropdown" />
                <FilterSection title="Mes" options={months} type="multiselect" />
                <FilterSection title="Categoría" options={categories} type="multiselect" /> */}

                <FilterSection
                    title="Año"
                    options={years}
                    type="dropdown"
                    value={filters.year}
                    onChange={(year) => onFiltersChange({ ...filters, year })}
                />
                <FilterSection
                    title="Mes"
                    options={months}
                    type="multiselect"
                    value={filters.months}
                    onChange={(months) => onFiltersChange({ ...filters, months })}
                />

                {/* <FilterSection
                    title="Mes"
                    options={months}
                    type="multiselect"
                    value={filters.months}
                    onChange={(selectedMonths) => {
                        // Mapear cada mes seleccionado para obtener el nombre completo
                        const fullMonths = selectedMonths.map((m: string) => getCompleteMonth(m) || m);
                        onFiltersChange({ ...filters, months: fullMonths });
                    }}
                /> */}

                <FilterSection
                    title="Categoría"
                    options={categories}
                    type="multiselect"
                    value={filters.categories}
                    onChange={(categories) => onFiltersChange({ ...filters, categories })}
                />

            </div>

            {/* Logout Button */}
            <button
                onClick={handleLogout}
                className="mt-8 w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-sky-500 to-cyan-600 rounded-lg hover:from-sky-600 hover:to-sky-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
            >
                <LogOut className="w-4 h-4" />
                Cerrar Sesión
            </button>
        </aside>
    );
}