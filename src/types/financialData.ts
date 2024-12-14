export interface FinancialData {
    month: string;
    budget: number;
    spent: number;
    executionPercentage: number;
    category: string;
    year: string;
}

export interface Filters {
    year: string;
    months: string[];
    categories: string[];
}