import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: '/sleek/images/Home_sc_1.png',
    title: 'CUSTOM SPORTSWEAR',
    description: 'Customize Your Sport WIth Us',
  },
  {
    image: '/sleek/images/Home_sc_1.png',
    title: 'CUSTOM SPORTSWEAR',
    description: 'Customize Your Sport WIth Us',
  },
  {
    image: '/sleek/images/Home_sc_1.png',
    title: 'CUSTOM SPORTSWEAR',
    description: 'Customize Your Sport WIth Us',
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-[800px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
              <p className="text-xl">{slide.description}</p>
            </div>
          </div>
        </div>
      ))}
      
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}