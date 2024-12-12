import { ComboBarLineChartData, DoughnutChartData } from '../types/chartTypes';

export const generateComboChartData = (): ComboBarLineChartData[] => {
  /////////////////////////  Acá llamo los datos de la API ///////////////////////
  return [
    { mes: 'Ene', gasto: 65, presupuesto: 1200 },
    { mes: 'Feb', gasto: 400, presupuesto: 1100 },
    { mes: 'Mar', gasto: 80, presupuesto: 1500 },
    { mes: 'Abr', gasto: 81, presupuesto: 1600 },
    { mes: 'May', gasto: 620, presupuesto: 1000 },
    { mes: 'Jun', gasto: 55, presupuesto: 900 },
    { mes: 'Jul', gasto: 40, presupuesto: 800 },
    { mes: 'Ago', gasto: 500, presupuesto: 1200 },
    { mes: 'Sep', gasto: 200, presupuesto: 1100 },
    { mes: 'Oct', gasto: 80, presupuesto: 1500 },
    { mes: 'Nov', gasto: 81, presupuesto: 1600 },
    { mes: 'Dic', gasto: 750, presupuesto: 1000 }
  ];
};

export const generateDoughnutData = (index: number): DoughnutChartData => {
  if (index === 1) {
    return {
      labels: ['Educación', 'Salud', 'Vivienda', 'Infraestructura', 'Alimentación escolar', 'Funcionamiento'],
      values: [300, 200, 150, 100, 110, 400]
    };
  }
  return {
    labels: ['Educación', 'Salud', 'Vivienda', 'Infraestructura', 'Alimentación escolar', 'Funcionamiento'],
    values: [250, 180, 200, 370, 210, 300]
  };
};

