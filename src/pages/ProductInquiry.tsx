import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import InquiryForm from '../components/inquiry/InquiryForm';

export default function ProductInquiry() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Product Not Found</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            The product you're looking for doesn't exist.
          </p>
          <Button onClick={() => navigate('/products')}>Back to Products</Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-6">Product Inquiry</h2>
          <InquiryForm product={product} />
        </div>
      </Card>
    </div>
  );
}