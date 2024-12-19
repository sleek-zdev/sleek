import React from 'react';
import { colorSystem } from '../../data/colors';
import { ChevronDown, X } from 'lucide-react';

interface ColorFilterProps {
  selectedBaseColor: string | null;
  selectedSubColor: string | null;
  onBaseColorChange: (color: string | null) => void;
  onSubColorChange: (color: string | null) => void;
  onReset: () => void;
}

export default function ColorFilter({
  selectedBaseColor,
  selectedSubColor,
  onBaseColorChange,
  onSubColorChange,
  onReset,
}: ColorFilterProps) {
  const baseColors = Object.keys(colorSystem);
  const subColors = selectedBaseColor ? colorSystem[selectedBaseColor as keyof typeof colorSystem] : [];

  return (
    <div className="flex flex-wrap gap-4 items-start mb-8">
      {/* Base Color Dropdown */}
      <div className="relative min-w-[200px]">
        <label className="block text-sm font-medium mb-1">Base Color</label>
        <div className="relative">
          <select
            value={selectedBaseColor || ''}
            onChange={(e) => onBaseColorChange(e.target.value || null)}
            className="w-full appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md py-2 px-4 pr-8 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Colors</option>
            {baseColors.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* Sub Color Dropdown */}
      <div className="relative min-w-[200px]">
        <label className="block text-sm font-medium mb-1">Color Variation</label>
        <div className="relative">
          <select
            value={selectedSubColor || ''}
            onChange={(e) => onSubColorChange(e.target.value || null)}
            disabled={!selectedBaseColor}
            className="w-full appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md py-2 px-4 pr-8 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          >
            <option value="">All Variations</option>
            {subColors.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* Reset Button */}
      {(selectedBaseColor || selectedSubColor) && (
        <button
          onClick={onReset}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors mt-6"
        >
          <X className="w-4 h-4 mr-1" />
          Reset Filters
        </button>
      )}
    </div>
  );
}