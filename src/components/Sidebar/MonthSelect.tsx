// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "../ui/select";
// import { Label } from "../ui/label";

// const months = [
//   "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
//   "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
// ];

// export function MonthSelect() {
//   return (
//     <div className="space-y-2 p-4">
//       <Label htmlFor="month">Mes</Label>
//       <Select>
//         <SelectTrigger id="month">
//           <SelectValue placeholder="Seleccionar mes" />
//         </SelectTrigger>
//         <SelectContent>
//           {months.map((month) => (
//             <SelectItem key={month} value={month.toLowerCase()}>
//               {month}
//             </SelectItem>
//           ))}
//         </SelectContent>
//       </Select>
//     </div>
//   );
// }


// 2RA VERSIÓN SELECTOR DE MESES

// import { useState } from "react";
// import { Label } from "../ui/label";
// import { Button } from "../ui/button";
// import { ChevronDown } from "lucide-react";
// import { Checkbox } from "../ui/checkbox";
// import * as Collapsible from '@radix-ui/react-collapsible';

// const months = [
//   "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
//   "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
// ];

// export function MonthSelect() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedMonth, setSelectedMonth] = useState<string | null>(null);

//   return (
//     <div className="space-y-2 p-4">
//       <Label>Mes</Label>
//       <Collapsible.Root open={isOpen} onOpenChange={setIsOpen}>
//         <Collapsible.Trigger asChild>
//           <Button
//             variant="outline"
//             className="w-full justify-between"
//             role="combobox"
//             aria-expanded={isOpen}
//           >
//             {selectedMonth || "Seleccionar mes"}
//             <ChevronDown className="h-4 w-4 opacity-50" />
//           </Button>
//         </Collapsible.Trigger>
//         <Collapsible.Content className="relative mt-1">
//           <div className="absolute w-full bg-popover border rounded-md shadow-md z-50">
//             <div className="max-h-[200px] overflow-auto">
//               {months.map((month) => (
//                 <div
//                   key={month}
//                   className="flex items-center space-x-3 p-3 hover:bg-accent cursor-pointer"
//                   onClick={() => {
//                     setSelectedMonth(month);
//                     setIsOpen(false);
//                   }}
//                 >
//                   <Checkbox
//                     id={`month-${month}`}
//                     checked={selectedMonth === month}
//                     className="pointer-events-none"
//                   />
//                   <Label
//                     htmlFor={`month-${month}`}
//                     className="text-sm font-normal cursor-pointer flex-grow"
//                   >
//                     {month}
//                   </Label>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </Collapsible.Content>
//       </Collapsible.Root>
//     </div>
//   );
// }


// 3RA VERSIÓN SELECTOR DE MESES

import { useState } from "react";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import * as Collapsible from '@radix-ui/react-collapsible';

const months = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

export function MonthSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMonths, setSelectedMonths] = useState<string[]>([]);

  const toggleMonth = (month: string) => {
    setSelectedMonths(prev =>
      prev.includes(month)
        ? prev.filter(m => m !== month)
        : [...prev, month]
    );
  };

  const getButtonText = () => {
    if (selectedMonths.length === 0) return "Seleccionar meses";
    if (selectedMonths.length === 1) return selectedMonths[0];
    return `${selectedMonths.length} meses seleccionados`;
  };

  return (
    <div className="space-y-2 p-4">
      <Label>Mes</Label>
      <Collapsible.Root open={isOpen} onOpenChange={setIsOpen}>
        <Collapsible.Trigger asChild>
          <Button
            variant="outline"
            className="w-full justify-between"
            role="combobox"
            aria-expanded={isOpen}
          >
            {getButtonText()}
            <ChevronDown className="h-4 w-4 opacity-50" />
          </Button>
        </Collapsible.Trigger>
        <Collapsible.Content className="relative mt-1">
          <div className="absolute w-full bg-popover border rounded-md shadow-md z-50">
            <div className="max-h-[200px] overflow-auto">
              {months.map((month) => (
                <div
                  key={month}
                  className="flex items-center space-x-2.5 p-2 hover:bg-accent cursor-pointer"
                  onClick={() => toggleMonth(month)}
                >
                  <Checkbox
                    id={`month-${month}`}
                    checked={selectedMonths.includes(month)}
                    className="pointer-events-none"
                  />
                  <Label
                    htmlFor={`month-${month}`}
                    className="text-sm font-normal cursor-pointer flex-grow"
                  >
                    {month}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </Collapsible.Content>
      </Collapsible.Root>
    </div>
  );
}