export interface FinancialData {
    month: string;
    budget: number;
    spent: number;
    executionPercentage: number;
}

export interface Filters {
    year: string;
    months: string[];
    categories: string[];
  }