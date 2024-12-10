export interface ComboBarLineChartData {
    mes: string;
    gasto: number;
    presupuesto: number;
}

export interface DoughnutChartData {
    labels: string[];
    values: number[];
}

export interface TableData {
    id: number;
    mes: string;
    presupuesto: number;
    gasto: number;
    porcentajeEjec: number;
}