import { useState } from 'react';
import type { InquiryFormData } from '../types';
import { validateEmail, validatePhone, validateQuantity, validateName } from '../utils/validation';

interface UseInquiryFormReturn {
  formData: InquiryFormData;
  errors: Partial<InquiryFormData>;
  isSubmitting: boolean;
  handleChange: (field: keyof InquiryFormData, value: string | number) => void;
  handleSubmit: () => Promise<boolean>;
}

export default function useInquiryForm(productId: string): UseInquiryFormReturn {
  const [formData, setFormData] = useState<InquiryFormData>({
    productId,
    quantity: 1,
    fullName: '',
    phoneNumber: '',
    email: '',
    notes: '',
  });

  const [errors, setErrors] = useState<Partial<InquiryFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<InquiryFormData> = {};

    if (!validateQuantity(formData.quantity)) {
      newErrors.quantity = 'Quantity must be at least 1';
    }
    if (!validateName(formData.fullName)) {
      newErrors.fullName = 'Full name is required';
    }
    if (!validatePhone(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Valid phone number is required';
    }
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Valid email address is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof InquiryFormData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when field is modified
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (): Promise<boolean> => {
    if (!validateForm()) return false;

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      return true;
    } catch (error) {
      setErrors(prev => ({ ...prev, submit: 'Failed to submit inquiry' }));
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
}