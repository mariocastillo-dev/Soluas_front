import { TableData } from '../types/tableTypes';


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


export const meses = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Augosto', 'Septiembre', 'Octubre', 'Noviembre', 'Deciembre'
];



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

// export const monthlyData = [
//     { month: 'Enero', revenue: 125000, costs: 45000, expenses: 28000 },
//     { month: 'Febrero', revenue: 118000, costs: 42000, expenses: 25000 },
//     { month: 'Marzo', revenue: 135000, costs: 48000, expenses: 30000 },
//     { month: 'Abril', revenue: 140000, costs: 50000, expenses: 32000 },
//     { month: 'Mayo', revenue: 145000, costs: 52000, expenses: 33000 },
//     { month: 'Junio', revenue: 150000, costs: 54000, expenses: 35000 },
//     { month: 'Julio', revenue: 160000, costs: 58000, expenses: 38000 },
//     { month: 'Agosto', revenue: 155000, costs: 56000, expenses: 36000 },
//     { month: 'Septiembre', revenue: 148000, costs: 53000, expenses: 34000 },
//     { month: 'Octubre', revenue: 142000, costs: 51000, expenses: 32000 },
//     { month: 'Noviembre', revenue: 138000, costs: 49000, expenses: 31000 },
//     { month: 'Diciembre', revenue: 165000, costs: 60000, expenses: 40000 },
//   ];



