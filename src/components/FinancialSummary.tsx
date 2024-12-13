import { SummaryCard } from './SummaryCard';
import { useFinancialData } from '../hooks/useFinancialData';
import { formatCurrency, formatPercentage } from '../utils/formatters';
import type { Filters } from '../types/financialData';

interface FinancialSummaryProps {
  filters: Filters;
}

export function FinancialSummary({ filters }: FinancialSummaryProps) {
  const { totals } = useFinancialData(filters);

  return (
    <>
      <SummaryCard
        title="Ganancias Totales"
        value={formatCurrency(totals.budget)}
        icon="budget"
      />
      <SummaryCard
        title="Costos Totales"
        value={formatCurrency(totals.spent)}
        icon="spent"
      />
      <SummaryCard
        title="Porcentaje Promedio"
        value={formatPercentage(totals.executionPercentage)}
        icon="executionPercentage"
      />
    </>
  );
}