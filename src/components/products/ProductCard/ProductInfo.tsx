import React from 'react';
import ColorDot from './ColorDot';

interface ProductInfoProps {
  name: string;
  id: string;
  baseColor: string;
  subColor: string;
}

export default function ProductInfo({ name, id, baseColor, subColor }: ProductInfoProps) {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">ID: {id}</p>
      <div className="flex items-center gap-4">
        <ColorDot label="Base" color={baseColor} />
        <ColorDot label="Sub" color={subColor} />
      </div>
    </div>
  );
}