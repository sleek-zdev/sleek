import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { Product } from '../../../types';
import Card from '../../ui/Card';
import Button from '../../ui/Button';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';

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
      <ProductImage src={product.image} alt={product.name} />
      <div className="p-4">
        <ProductInfo
          name={product.name}
          id={product.id}
          baseColor={product.baseColor}
          subColor={product.subColor}
        />
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
          <Button size="sm" onClick={handleInquiry}>Send Inquiry</Button>
        </div>
      </div>
    </Card>
  );
}