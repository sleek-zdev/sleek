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
    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLScB-ePB2pDWUeW8LpFa-7v-XlUgvTmsR04-652_r-60Hhua-A/viewform?usp=header";
    window.location.href = formUrl;
  };

  return (
    <Card className="group h-full">
      <div className="aspect-square overflow-hidden">
        <img
          src={`/sleek/images/${product.image}`}
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Product Details: {product.Product}</p>
        <div className="flex items-center gap-4 mb-4">
          
        </div>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">₹ {product.price}</span>
          <Button size="sm" onClick={handleInquiry}>Send Inquiry</Button>
        </div>
      </div>
    </Card>
  );
}