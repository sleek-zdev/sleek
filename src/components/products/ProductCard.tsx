import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Product } from '../../types';
import Card from '../ui/Card';
import Button from '../ui/Button';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate();

  const handleInquiry = () => {
    navigate(`/inquiry/${product.id}`);
  };

  return (
    <Card className="group h-full">
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">ID: {product.id}</p>
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">Base:</span>
            <div
              className="w-4 h-4 rounded-full border"
              style={{ backgroundColor: product.baseColor.toLowerCase() }}
              title={product.baseColor}
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">Sub:</span>
            <div
              className="w-4 h-4 rounded-full border"
              style={{ backgroundColor: product.subColor.toLowerCase() }}
              title={product.subColor}
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
          <Button size="sm" onClick={handleInquiry}>Send Inquiry</Button>
        </div>
      </div>
    </Card>
  );
}