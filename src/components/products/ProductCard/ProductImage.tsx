import React from 'react';

interface ProductImageProps {
  src: string;
  alt: string;
}

export default function ProductImage({ src, alt }: ProductImageProps) {
  return (
    <div className="aspect-square overflow-hidden">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
    </div>
  );
}