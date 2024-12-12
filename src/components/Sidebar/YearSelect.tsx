import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const currentYear = new Date().getFullYear();
const generateYearRange = (year: number) => 
  Array.from({ length: 5 }, (_, i) => year - i);

export function YearSelect() {
  const [baseYear, setBaseYear] = useState(currentYear);
  const years = generateYearRange(baseYear);

  const handlePrevious = () => setBaseYear(prev => prev - 5);
  const handleNext = () => setBaseYear(prev => prev + 5);

  return (
    <div className="space-y-2 p-4">
      <Label htmlFor="year">Año</Label>
      <div className="relative">
        <Select defaultValue={currentYear.toString()}>
          <SelectTrigger id="year">
            <SelectValue placeholder="Seleccionar año" />
          </SelectTrigger>
          <SelectContent>
            <div className="flex items-center justify-between px-1 py-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7"
                onClick={handlePrevious}
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Años anteriores</span>
              </Button>
              <div className="flex-1">
                {years.map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7"
                onClick={handleNext}
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Años siguientes</span>
              </Button>
            </div>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}