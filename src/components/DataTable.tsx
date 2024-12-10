import React from 'react';
import { TableData } from '../types/chartTypes';

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