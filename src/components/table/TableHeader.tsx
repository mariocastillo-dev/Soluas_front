export function TableHeader() {
  return (
    <thead>
      <tr className="bg-gray-100">
        <th className="w-1/4 px-6 py-3 text-left text-sm font-semibold text-gray-600">Mes</th>
        <th className="w-1/4 px-6 py-3 text-center text-sm font-semibold text-gray-600">Presupuestos</th>
        <th className="w-1/4 px-6 py-3 text-center text-sm font-semibold text-gray-600">Gastos</th>
        <th className="w-1/4 px-6 py-3 text-center text-sm font-semibold text-gray-600">% de Ejecución</th>
      </tr>
    </thead>
  );
}