import React from 'react';

interface ColorDotProps {
  label: string;
  color: string;
}

export default function ColorDot({ label, color }: ColorDotProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-600 dark:text-gray-400">{label}:</span>
      <div
        className="w-4 h-4 rounded-full border"
        style={{ backgroundColor: color.toLowerCase() }}
        title={color}
      />
    </div>
  );
}