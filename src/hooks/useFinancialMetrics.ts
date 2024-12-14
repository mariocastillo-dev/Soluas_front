import { useMemo } from 'react';
import { useFinancialData } from './useFinancialData';
import type { Filters } from '../types/financialData';

export function useFinancialMetrics(filters: Filters) {
  const { filteredData } = useFinancialData(filters);

  const metrics = useMemo(() => {
    const categoryMap = new Map<string, { budget: number; spent: number }>();

    filteredData.forEach((item) => {
      const current = categoryMap.get(item.category) || { budget: 0, spent: 0 };
      categoryMap.set(item.category, {
        budget: current.budget + item.budget,
        spent: current.spent + item.spent,
      });
    });

    const categories = Array.from(categoryMap.entries());

    const budgetByCategory = {
      labels: categories.map(([category]) => category),
      values: categories.map(([, values]) => values.budget),
    };

    const spentByCategory = {
      labels: categories.map(([category]) => category),
      values: categories.map(([, values]) => values.spent),
    };

    return {
      budgetByCategory,
      spentByCategory,
    };
  }, [filteredData]);

  return metrics;
}