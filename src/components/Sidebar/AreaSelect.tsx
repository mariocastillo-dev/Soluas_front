// import { Label } from "../ui/label";
// import { Checkbox } from "../ui/checkbox";

// const areas = [
//   { id: "educacion", label: "Educación" },
//   { id: "salud", label: "Salud" },
//   { id: "alimentacion", label: "Alimentación" },
// ];

// export function AreaSelect() {
//   return (
//     <div className="space-y-2 p-4">
//       <Label>Área</Label>
//       <div className="space-y-2 mt-2">
//         {areas.map((area) => (
//           <div key={area.id} className="flex items-center space-x-2">
//             <Checkbox id={area.id} />
//             <Label htmlFor={area.id} className="text-sm font-normal">
//               {area.label}
//             </Label>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



//2DA VERSIÓN SELECTOR DE AREA
// import { useState } from "react";
// import { Label } from "../ui/label";
// import { Button } from "../ui/button";
// import { ChevronDown } from "lucide-react";
// import { Checkbox } from "../ui/checkbox";
// import * as Collapsible from '@radix-ui/react-collapsible';

// const areas = [
//   { id: "educacion", label: "Educación" },
//   { id: "salud", label: "Salud" },
//   { id: "alimentacion", label: "Alimentación" },
//   { id: "enterprise", label: "Enterprise" },
//   { id: "gobierno", label: "Gobierno" },
//   { id: "pyme", label: "Pyme" },
//   { id: "socios", label: "Socios" },
// ];

// export function AreaSelect() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedAreas, setSelectedAreas] = useState<string[]>([]);

//   const toggleArea = (areaId: string) => {
//     setSelectedAreas(prev =>
//       prev.includes(areaId)
//         ? prev.filter(id => id !== areaId)
//         : [...prev, areaId]
//     );
//   };

//   return (
//     <div className="space-y-2 p-4">
//       <Label>Área</Label>
//       <Collapsible.Root open={isOpen} onOpenChange={setIsOpen}>
//         <Collapsible.Trigger asChild>
//           <Button
//             variant="outline"
//             className="w-full justify-between"
//             role="combobox"
//             aria-expanded={isOpen}
//           >
//             {selectedAreas.length > 0
//               ? `${selectedAreas.length} seleccionados`
//               : "Seleccionar áreas"}
//             <ChevronDown className="h-4 w-4 opacity-50" />
//           </Button>
//         </Collapsible.Trigger>
//         <Collapsible.Content className="relative mt-1">
//           <div className="absolute w-full bg-popover border rounded-md shadow-md z-50">
//             <div className="max-h-[200px] overflow-auto">
//               {areas.map((area) => (
//                 <div
//                   key={area.id}
//                   className="flex items-center space-x-3 p-3 hover:bg-accent cursor-pointer"
//                   onClick={() => toggleArea(area.id)}
//                 >
//                   <Checkbox
//                     id={area.id}
//                     checked={selectedAreas.includes(area.id)}
//                     className="pointer-events-none"
//                   />
//                   <Label
//                     htmlFor={area.id}
//                     className="text-sm font-normal cursor-pointer flex-grow"
//                   >
//                     {area.label}
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



//3RA VERSIÓN SELECTOR DE AREA
import { useState } from "react";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import * as Collapsible from '@radix-ui/react-collapsible';

const areas = [
  { id: "educacion", label: "Educación" },
  { id: "salud", label: "Salud" },
  { id: "alimentacion", label: "Alimentación" },
  { id: "enterprise", label: "Enterprise" },
  { id: "gobierno", label: "Gobierno" },
  { id: "pyme", label: "Pyme" },
  { id: "socios", label: "Socios" },
];

export function AreaSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);

  const toggleArea = (areaId: string) => {
    setSelectedAreas(prev =>
      prev.includes(areaId)
        ? prev.filter(id => id !== areaId)
        : [...prev, areaId]
    );
  };

  return (
    <div className="space-y-2 p-4">
      <Label>Área</Label>
      <Collapsible.Root open={isOpen} onOpenChange={setIsOpen}>
        <Collapsible.Trigger asChild>
          <Button
            variant="outline"
            className="w-full justify-between"
            role="combobox"
            aria-expanded={isOpen}
          >
            {selectedAreas.length > 0
              ? `${selectedAreas.length} seleccionados`
              : "Seleccionar áreas"}
            <ChevronDown className="h-4 w-4 opacity-50" />
          </Button>
        </Collapsible.Trigger>
        <Collapsible.Content className="relative mt-1">
          <div className="absolute w-full bg-popover border rounded-md shadow-md z-50">
            <div className="max-h-[200px] overflow-auto">
              {areas.map((area) => (
                <div
                  key={area.id}
                  className="flex items-center space-x-2.5 p-2 hover:bg-accent cursor-pointer"
                  onClick={() => toggleArea(area.id)}
                >
                  <Checkbox
                    id={area.id}
                    checked={selectedAreas.includes(area.id)}
                    className="pointer-events-none"
                  />
                  <Label
                    htmlFor={area.id}
                    className="text-sm font-normal cursor-pointer flex-grow"
                  >
                    {area.label}
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