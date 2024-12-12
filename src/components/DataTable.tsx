import React from 'react';
import { TableData } from '../types/tableTypes';

interface Props {
  data: TableData[];
}

export const DataTable: React.FC<Props> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mes</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Presupuesto</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gasto</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Porcentaje de Ejecución</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((row) => (
            <tr key={row.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.mes}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${row.presupuesto}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${row.gasto}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${row.porcentajeEjec.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};





// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// // Exportamos la constante que tiene los meses para hacer la paginación
// import { meses } from '../utils/tableData';
// import type { TableData } from '../types/tableTypes';

// const ITEMS_PER_PAGE = 4;

// export function FinancialTable() {
//   const [currentPage, setCurrentPage] = useState(1);
  
//   const totalPages = Math.ceil(meses.length / ITEMS_PER_PAGE);
//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//   const endIndex = startIndex + ITEMS_PER_PAGE;
//   const currentData = meses.slice(startIndex, endIndex);

//   const formatCurrency = (amount: number) => {
//     return new Intl.NumberFormat('es-ES', {
//       style: 'currency',
//       currency: 'EUR'
//     }).format(amount);
//   };

//   return (
//     <div className="w-full max-w-4xl mx-auto p-6">
//       <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="w-full table-fixed">
//             <thead>
//               <tr className="bg-gray-100">
//                 <th className="w-1/4 px-6 py-3 text-left text-sm font-semibold text-gray-600">Mes</th>
//                 <th className="w-1/4 px-6 py-3 text-right text-sm font-semibold text-gray-600">Ganancias</th>
//                 <th className="w-1/4 px-6 py-3 text-right text-sm font-semibold text-gray-600">Costos</th>
//                 <th className="w-1/4 px-6 py-3 text-right text-sm font-semibold text-gray-600">Gastos</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">

//               {currentData.map((row: TableData) => (
//                 <tr key={row.mes} className="hover:bg-gray-50">
//                   <td className="px-6 py-4 text-sm text-gray-900">{row.mes}</td>
//                   <td className="px-6 py-4 text-sm text-right text-green-600">{formatCurrency(row.presupuesto)}</td>
//                   <td className="px-6 py-4 text-sm text-right text-red-600">{formatCurrency(row.gasto)}</td>
//                   <td className="px-6 py-4 text-sm text-right text-orange-600">{formatCurrency(row.porcentajeEjec)}</td>
//                 </tr>
//               ))}

//             </tbody>
//           </table>
//         </div>
        
//         <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
//           <div className="flex items-center justify-between">
//             <button
//               onClick={() => setCurrentPage(page => Math.max(page - 1, 1))}
//               disabled={currentPage === 1}
//               className="px-3 py-1 rounded-md text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1"
//             >
//               <ChevronLeft className="w-4 h-4" />
//               Anterior
//             </button>
//             <span className="text-sm text-gray-700">
//               Página {currentPage} de {totalPages}
//             </span>
//             <button
//               onClick={() => setCurrentPage(page => Math.min(page + 1, totalPages))}
//               disabled={currentPage === totalPages}
//               className="px-3 py-1 rounded-md text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1"
//             >
//               Siguiente
//               <ChevronRight className="w-4 h-4" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }