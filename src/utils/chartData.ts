import { ComboBarLineChartData, DoughnutChartData, TableData } from '../types/chartTypes';

export const generateComboChartData = (): ComboBarLineChartData[] => {
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

// export const generateTableData = (): TableData[] => {
//   return Array.from({ length: 12 }, (_, i) => ({
//     id: i + 1,
//     date: `2023-${String(i + 1).padStart(2, '0')}-01`,
//     product: ['Laptop', 'Phone', 'Tablet', 'Watch'][i % 4],
//     sales: Math.floor(Math.random() * 100) + 50,
//     revenue: Math.floor(Math.random() * 10000) + 5000,
//     profit: Math.floor(Math.random() * 5000) + 1000
//   }));
// };

const meses = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Augosto', 'Septiembre', 'Octubre', 'Noviembre', 'Deciembre'
];


// export const generateTableData = (): TableData[] => {
//   const porcEjecucion = presupuesto / gasto

//   return meses.map((mes, i) => ({
//     id: i + 1,
//     mes: mes,
//     presupuesto: Math.floor(Math.random() * 10000) + 5000,
//     gasto: Math.floor(Math.random() * 10000) + 5000,
    
//     porcentajeEjec: 100,
//   }));
// };

export const generateTableData = (): TableData[] => {
  return meses.map((mes, i) => {
    const presupuesto = Math.floor(Math.random() * 1000) + 5000;
    const gasto = Math.floor(Math.random() * 10000) + 5000;
    return {
      id: i + 1,
      mes: mes,
      presupuesto,
      gasto,
      porcentajeEjec: Number((gasto / presupuesto).toFixed(4))
    };
  });
};