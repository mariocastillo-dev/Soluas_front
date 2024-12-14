import { DoughnutChart } from './DoughnutChart';
import { useFinancialMetrics } from '../../hooks/useFinancialMetrics';
import type { Filters } from '../../types/financialData';

interface CategoryChartsProps {
  filters: Filters;
}

export function CategoryCharts({ filters }: CategoryChartsProps) {
  const { budgetByCategory, spentByCategory } = useFinancialMetrics(filters);

  const budgetColorScheme = [
    'rgba(163, 224, 163, 0.7)',
    'rgba(122, 193, 122, 0.7)',
    'rgba(82, 163, 82, 0.7)',
    'rgba(41, 132, 41, 0.7)',
    'rgba(0, 102, 0, 0.7)',
    'rgba(0, 51, 0, 0.7)',
  ];

  const spentColorScheme = [
    'rgba(255, 204, 204, 0.7)',
    'rgba(255, 163, 163, 0.7)',
    'rgba(224, 122, 122, 0.7)',
    'rgba(193, 82, 82, 0.7)',
    'rgba(163, 41, 41, 0.7)',
    'rgba(102, 0, 0, 0.7)',
  ];

  return (
    <div className="grid grid-cols-1 gap-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <DoughnutChart
          data={{
            labels: budgetByCategory.labels,
            values: budgetByCategory.values,
          }}
          title="Presupuesto por Categoría"
          colorScheme={budgetColorScheme}
        />
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <DoughnutChart
          data={{
            labels: spentByCategory.labels,
            values: spentByCategory.values,
          }}
          title="Gasto por Categoría"
          colorScheme={spentColorScheme}
        />
      </div>
    </div>
  );
}