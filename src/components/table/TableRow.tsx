import type { FinancialData } from '../../types/financialData';
import { formatCurrency, formatPercentage } from '../../utils/formatters';

interface TableRowProps {
  data: FinancialData;
}

export function TableRow({ data }: TableRowProps) {
  const expensePercentage = data.spent / data.budget;

  return (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4 text-sm text-gray-900">{data.month}</td>
      <td className="px-6 py-4 text-sm text-center text-green-600">
        {formatCurrency(data.budget)}
      </td>
      <td className="px-6 py-4 text-sm text-center text-red-600">
        {formatCurrency(data.spent)}
      </td>
      <td className="px-6 py-4 text-sm text-center text-orange-600">
        {formatPercentage(expensePercentage)}
      </td>
    </tr>
  );
}