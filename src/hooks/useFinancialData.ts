import { useMemo } from 'react';
import { financialData } from '../data/financialData';
// import type { Filters } from '../types/financialData';
import type { Filters } from '../types/financialData';

export function useFinancialData(filters: Filters) {
    const filteredData = useMemo(() => {
        const yearData = financialData[filters.year] || [];

        return yearData.filter((item) => {
            const matchesMonth = filters.months.length === 0 || filters.months.includes(item.month);
            const matchesCategory = filters.categories.length === 0 || filters.categories.includes(item.category);
            return matchesMonth && matchesCategory;
        });
    }, [filters]);

    const totals = useMemo(() => {
        const totalBudget = filteredData.reduce((sum, item) => sum + item.budget, 0);
        const totalSpent = filteredData.reduce((sum, item) => sum + item.spent, 0);
        const averageExpensePercentage = totalSpent / totalBudget;

        return {
            budget: totalBudget,
            spent: totalSpent,
            executionPercentage: averageExpensePercentage
        };
    }, [filteredData]);

    return { filteredData, totals };
}