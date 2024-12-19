import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { Product } from '../../../types';
import useInquiryForm from '../../../hooks/useInquiryForm';
import Button from '../../ui/Button';
import FormField from './FormField';
import ProductPreview from './ProductPreview';

interface InquiryFormProps {
  product: Product;
}

export default function InquiryForm({ product }: InquiryFormProps) {
  const navigate = useNavigate();
  const { formData, errors, isSubmitting, handleChange, handleSubmit } = useInquiryForm(product.id);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await handleSubmit();
    if (success) {
      alert('Inquiry submitted successfully!');
      navigate('/products');
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <ProductPreview product={product} />

      <FormField label="Quantity Required" error={errors.quantity} required>
        <input
          type="number"
          min="1"
          value={formData.quantity}
          onChange={(e) => handleChange('quantity', parseInt(e.target.value))}
          className="input"
          required
        />
      </FormField>

      <FormField label="Full Name" error={errors.fullName} required>
        <input
          type="text"
          value={formData.fullName}
          onChange={(e) => handleChange('fullName', e.target.value)}
          className="input"
          required
        />
      </FormField>

      <FormField label="Phone Number" error={errors.phoneNumber} required>
        <input
          type="tel"
          value={formData.phoneNumber}
          onChange={(e) => handleChange('phoneNumber', e.target.value)}
          className="input"
          required
        />
      </FormField>

      <FormField label="Email Address" error={errors.email} required>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          className="input"
          required
        />
      </FormField>

      <FormField label="Additional Notes">
        <textarea
          value={formData.notes}
          onChange={(e) => handleChange('notes', e.target.value)}
          className="input"
          rows={4}
        />
      </FormField>

      <div className="flex items-center justify-end gap-4 pt-4">
        <Button
          variant="secondary"
          type="button"
          onClick={() => navigate('/products')}
          disabled={isSubmitting}
        >
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
        </Button>
      </div>
    </form>
  );
}