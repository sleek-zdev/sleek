import React from 'react';
import HeroCarousel from '../components/home/HeroCarousel';
import Card from '../components/ui/Card';
import { Shirt, Shield, Truck, Palette } from 'lucide-react';

const features = [
  {
    icon: Shirt,
    title: 'Premium Fabric',
    description: 'High-quality materials for maximum comfort and durability',
  },
  {
    icon: Shield,
    title: 'Quality Assured',
    description: 'Rigorous quality control for every jersey we produce',
  },
  {
    icon: Palette,
    title: 'Custom Design',
    description: 'Create your unique jersey with our design tools',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Quick and reliable shipping to your doorstep',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroCarousel />
      
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Sleek?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center">
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}