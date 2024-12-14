import { TableData } from '../types/tableTypes';


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

