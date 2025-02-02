export interface Product {
  Product: string;
  name: string;
  baseColor: string;
  subColor: string;
  price: number;
  image: string;
}

export type Theme = 'light' | 'dark';

export interface InquiryFormData {
  productId: string;
  quantity: number;
  fullName: string;
  phoneNumber: string;
  email: string;
  notes: string;
}