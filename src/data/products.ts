import { colorSystem } from './colors';

// Helper function to get random items from an array
const getRandomItem = <T,>(array: T[]): T => 
  array[Math.floor(Math.random() * array.length)];

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
    image: `https://images.unsplash.com/photo-${[
      '1517466787929-bc90951d0974',
      '1518063319789-7217e6706b04',
      '1511886929837-354d827aae26',
      '1516826957135-700dedea698c',
      '1521412644187-c49fa049e84d',
    ][Math.floor(Math.random() * 5)]}?auto=format&fit=crop&q=80&w=800`,
  };
});