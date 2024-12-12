import { useState } from 'react';
import { monthlyData } from '../data/monthlyData';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import { Pagination } from './Pagination';

const ITEMS_PER_PAGE = 4;

export function FinancialTable() {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(monthlyData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentData = monthlyData.slice(startIndex, endIndex);

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full table-fixed">
            <TableHeader />
            <tbody className="divide-y divide-gray-200">
              {currentData.map((row) => (
                <TableRow key={row.month} data={row} />
              ))}
            </tbody>
          </table>
        </div>
        <Pagination 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}