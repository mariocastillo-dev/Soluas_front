import { useState } from 'react';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import { Pagination } from './Pagination';
import { useFinancialData } from '../hooks/useFinancialData';
import type { Filters } from '../types/financialData';

const ITEMS_PER_PAGE = 3;

interface FinancialTableProps {
  filters: Filters;
}

export function FinancialTable({ filters }: FinancialTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const { filteredData } = useFinancialData(filters);
  
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentData = filteredData.slice(startIndex, endIndex);

  return (
    <div className="w-full mx-auto">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full table-fixed">
            <TableHeader />
            <tbody className="divide-y divide-gray-200">
              {currentData.map((row) => (
                <TableRow key={`${row.year}-${row.month}`} data={row} />
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