import React, { useState, useEffect } from "react";
import { IconButton, Button, Typography } from "@mui/material";
import { Delete as DeleteIcon, Close as CloseIcon } from "@mui/icons-material";
import CartCard from "./CartItem";
import RazorpayButton from "../Checkout/PlaceOrderButton";

const Cart = ({ isOpen, onClose }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const handleUpdateQuantity = (id, newQuantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    window.location.reload();
    alert(`${product.name} added to cart!`);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full p-6 relative">
        {/* Close Button */}
        <div
          onClick={onClose}
          className="absolute text-red-700 top-4 right-4 cursor-pointer"
        >
          <CloseIcon />
        </div>

        {/* Cart Title */}
        <Typography
          variant="h4"
          className="text-center mb-6 text-gray-800 font-semibold"
        >
          Your Cart
        </Typography>

        {/* Cart Items */}
        {cartItems.length === 0 ? (
          <Typography variant="body1" className="text-center text-gray-500">
            Your cart is empty.
          </Typography>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="mb-4">
              <CartCard
                item={item}
                onUpdateQuantity={handleUpdateQuantity}
                onRemove={handleRemoveItem}
              />
            </div>
          ))
        )}

        {/* Cart Total */}
        {cartItems.length > 0 && (
          <div className="mt-6 flex justify-between items-center">
            <Typography variant="h6" className="text-gray-800 font-semibold">
              Total: $
              {cartItems
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toFixed(2)}
            </Typography>

            {/* Checkout Button */}

            <button
              // className="px-6 py-2 bg-blue-500 text-white rounded-lg"
              >
              <RazorpayButton/>
            </button>
              
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
