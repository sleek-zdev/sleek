export const validateEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const validatePhone = (phone: string): boolean => {
  return phone.length >= 10;
};

export const validateQuantity = (quantity: number): boolean => {
  return quantity >= 1;
};

export const validateName = (name: string): boolean => {
  return name.trim().length >= 2;
};