import React, { useEffect, useState } from 'react';
import Navbar from './Mainpage/navbar/Navbar';
import Hero from './Mainpage/Hero/hero';
import ProductGrid from './ProductGrid';
import productsData from '../../assets/product.json';
import Footer from './Mainpage/footer/Footer';

const Homepage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  return (
    <div className="overflow-x-auto">
      <Navbar cartCount={cart.length} />
      <Hero />
      <div className="py-8">
        <ProductGrid products={productsData} />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
