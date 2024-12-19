import React from 'react';
import Card from '../components/ui/Card';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">About Sleek</h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Founded in 2024, Sleek has been at the forefront of sports jersey manufacturing,
            combining traditional craftsmanship with modern technology to create
            premium quality sportswear that athletes love.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Our commitment to excellence and innovation has made us a trusted name
            in the sports apparel industry, serving teams and individuals worldwide.
          </p>
        </div>
        <div className="relative h-64 md:h-auto">
          <img
            src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=800"
            alt="Our workshop"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Our Process</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Design',
              description: 'Our designers work closely with clients to create unique, eye-catching designs.',
            },
            {
              title: 'Manufacturing',
              description: 'Using state-of-the-art technology and premium materials for the best quality.',
            },
            {
              title: 'Quality Control',
              description: 'Rigorous testing ensures every product meets our high standards.',
            },
          ].map((step, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-6">Our Mission</h2>
        <Card className="p-6">
          <p className="text-gray-600 dark:text-gray-300">
            To provide athletes and teams with the highest quality sports jerseys
            that combine comfort, durability, and style. We strive to innovate
            continuously and maintain the highest standards of craftsmanship in
            everything we do.
          </p>
        </Card>
      </div>
    </div>
  );
}