import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '../components/products/ProductCard';
import ColorFilter from '../components/products/ColorFilter';

// Import the JSON file directly
import productsData from '../resources/products.json';

export default function Products() {
  const [selectedBaseColor, setSelectedBaseColor] = useState<string | null>(
    null
  );
  const [selectedSubColor, setSelectedSubColor] = useState<string | null>(null);
  const [products, setProducts] = useState(productsData);

  // Filter products based on selected base and sub colors
  const filteredProducts = products.filter((product) => {
    if (selectedBaseColor && product.baseColor !== selectedBaseColor)
      return false;
    if (selectedSubColor && product.subColor !== selectedSubColor) return false;
    return true;
  });

  const resetFilters = () => {
    setSelectedBaseColor(null);
    setSelectedSubColor(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-6">Our Products</h1>

        <ColorFilter
          selectedBaseColor={selectedBaseColor}
          selectedSubColor={selectedSubColor}
          onBaseColorChange={(color) => {
            setSelectedBaseColor(color);
            setSelectedSubColor(null);
          }}
          onSubColorChange={setSelectedSubColor}
          onReset={resetFilters}
        />
      </div>

      <AnimatePresence mode="wait">
        {filteredProducts.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p className="text-xl text-gray-600 dark:text-gray-400">
              No products found matching your filters.
            </p>
            <button
              onClick={resetFilters}
              className="mt-4 text-blue-600 dark:text-blue-400 hover:underline"
            >
              Clear filters
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
