import React from 'react';
import type { Product } from '../../../types';

interface ProductPreviewProps {
  product: Product;
}

export default function ProductPreview({ product }: ProductPreviewProps) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <img
        src={product.image}
        alt={product.name}
        className="w-24 h-24 object-cover rounded"
      />
      <div>
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">ID: {product.id}</p>
        <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}