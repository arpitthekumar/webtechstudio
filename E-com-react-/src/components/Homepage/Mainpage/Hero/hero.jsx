import React from 'react';
import Hero1 from './Coms/hero1';
import CategoryGrid from '../category/Category';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gray-600">

      {/* Main Hero Section */}
      <Hero1 />
      <CategoryGrid
      />
      {/* Diagonal Overlay 1: Top-left to Bottom-right */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-orange-400 to-transparent mix-blend-overlay"></div>

      {/* Diagonal Overlay 2: Top-right to Bottom-left */}
      <div className="absolute inset-0 z-0 bg-gradient-to-bl from-transparent to-lightorange-200 mix-blend-overlay"></div>
    </div>
  );
};

export default Hero;
