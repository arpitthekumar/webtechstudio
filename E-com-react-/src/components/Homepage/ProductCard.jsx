import React, { useState } from 'react';

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.reload(); 
    alert(`${product.name} added to cart!`);
  };

  return (
    <div
      className={`max-w-sm mx-auto border border-gray-300 rounded-lg shadow-lg overflow-hidden relative 
                  ${isHovered ? 'transform -translate-y-2 scale-105' : ''} transition duration-300`}
                  
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {product.onSale && (
        <div className="absolute top-0 left-0 bg-red-500 text-white text-sm px-2 py-1 rounded-br-lg">
          On Sale
          <p className="text-white bg-red-500 text-sm rounded-br-lg">
            Original: ${product.originalPrice}
          </p>
        </div>
      )}
      <a href={`/product/${product.id}`}>
        <img
          className="w-full h-40 object-none"
          src={product.image}
          alt={product.name}
        />
      </a>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900">{product.name}</h2>
        <p className="text-gray-600">${product.price}</p>
        <p className="text-sm">
          Rating: {'⭐'.repeat(product.rating)}
        </p>
        <button
          className="mt-4 px-4 py-2 bg-transparent border text-gray-600 bg-gradient-to-br from-orange-400 to-transparent mix-blend-overlay hover:text-white rounded-3xl shadow-md hover:bg-orange-400 transition"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
