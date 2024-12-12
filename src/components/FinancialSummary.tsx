import { SummaryCard } from './SummaryCards';
import { monthlyData } from '../data/monthlyData';
import { formatCurrency, formatPercentage } from '../utils/formatters';

export function FinancialSummary() {
  const totalBudget = monthlyData.reduce((sum, month) => sum + month.budget, 0);
  const totalSpent = monthlyData.reduce((sum, month) => sum + month.spent, 0);
  const averageExpensePercentage = totalSpent / totalBudget;

  return (
    <>
      <SummaryCard
        title="Presupuesto Total"
        value={formatCurrency(totalBudget)}
        icon="budget"
      />
      <SummaryCard
        title="Gastos Totales"
        value={formatCurrency(totalSpent)}
        icon="spent"
      />
      <SummaryCard
        title="Porcentaje Promedio"
        value={formatPercentage(averageExpensePercentage)}
        icon="executionPercentage"
      />
    </>
  );
}