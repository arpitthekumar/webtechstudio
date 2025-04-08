import React, { useEffect, useState } from 'react';

import ProductDetail from './ProductDetails';
// import Hero from '../Homepage/Mainpage/Hero/hero';
import Navbar from '../Homepage/Mainpage/navbar/Navbar';
import Footer from '../Homepage/Mainpage/footer/Footer';

const Main = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  return (
    <div className="overflow-x-auto">
      <Navbar cartCount={cart.length} />
      {/* <Hero /> */}
      <div className="py-8">
        <ProductDetail/>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
