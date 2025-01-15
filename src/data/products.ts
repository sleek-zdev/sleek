import { colorSystem } from './colors';

// Helper function to get random items from an array
const getRandomItem = <T,>(array: T[]): T => 
  array[Math.floor(Math.random() * array.length)];
  
  const imageFilenames = [
  'D1.png',
  'D1.png',
  'D1.png',
  'D1.png',
  'D1.png',
];

// Generate 15 sample products
export const products = Array.from({ length: 15 }, (_, i) => {
  const baseColor = getRandomItem(Object.keys(colorSystem));
  const subColor = getRandomItem(colorSystem[baseColor as keyof typeof colorSystem]);
  
  return {
    id: `jersey-${(i + 1).toString().padStart(3, '0')}`,
    name: `${subColor} ${baseColor} Jersey`,
    baseColor,
    subColor,
    price: 59.99 + Math.floor(Math.random() * 40),
    image: `/images/${getRandomItem(imageFilenames)}`,
  };
});
