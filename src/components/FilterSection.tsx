import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FilterSectionProps {
  title: string;
  options: string[];
  type: 'dropdown' | 'multiselect';
  value: string | string[];
  onChange: (value: any) => void;
}

export function FilterSection({ title, options, type, value, onChange }: FilterSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (type === 'dropdown') {
    const selectedValue = value as string;
    return (
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-gray-700">{title}</h4>
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-3 py-2 text-left text-sm bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
          >
            <div className="flex items-center justify-between">
              <span>{selectedValue}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
            </div>
          </button>

          {isOpen && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    onChange(option);
                    setIsOpen(false);
                  }}
                  className="w-full px-3 py-2 text-left text-sm hover:bg-sky-50 focus:outline-none focus:bg-sky-50"
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  if (type === 'multiselect') {
    const selectedValues = value as string[];
    return (
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-gray-700">{title}</h4>
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-3 py-2 text-left text-sm bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
          >
            <div className="flex items-center justify-between">
              <span>
                {selectedValues.length
                  ? `${selectedValues.length} seleccionados`
                  : 'Seleccionar opciones'}
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
            </div>
          </button>

          {isOpen && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
              {options.map((option) => (
                <label
                  key={option}
                  className="flex items-center px-3 py-2 hover:bg-sky-50"
                >
                  <input
                    type="checkbox"
                    checked={selectedValues.includes(option)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        onChange([...selectedValues, option]);
                      } else {
                        onChange(selectedValues.filter(item => item !== option));
                      }
                    }}
                    className="rounded border-gray-300 text-sky-600 focus:ring-sky-500 mr-2"
                  />
                  <span className="text-sm text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
  return null;
}