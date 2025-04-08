import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import productsData from "../../assets/Dproduct.json"; // Import JSON data

const ProductDetail = () => {
  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cart.find((item) => item.id === product.id);

    // Determine the correct price
    const productPrice =
      typeof product.price === "object"
        ? product.price.discounted
        : product.price;

    if (existingProduct) {
      if (existingProduct.quantity < 10) {
        existingProduct.quantity += 1;
      } else {
        alert("Maximum quantity reached");
      }
    } else {
      // Create a copy of the product with the correct price format
      const productToAdd = {
        ...product,
        price: productPrice, // Use the resolved price
        quantity: 1,
      };
      cart.push(productToAdd);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.reload();

    alert(`${product.name} added to cart!`);
  };

  const { id } = useParams(); // Use react-router-dom for route parameters
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    // Find the selected product based on the id from URL parameters
    const selectedProduct = productsData.find(
      (item) => item.id === parseInt(id)
    );
    setProduct(selectedProduct);
    setSelectedImage(selectedProduct?.image || "");
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-6 mt-14">
      {/* <button onClick={() => navigate(-1)} className="mb-4 text-blue-500">
        &larr; Back
      </button> */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Product Image and Thumbnails */}
        <div className="relative">
          {product.price.original !== product.price.discounted && (
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
              On Sale
            </span>
          )}
          <div className="overflow-hidden rounded-lg shadow-md">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-96 object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="flex gap-4 mt-4">
            <img
              src={product.image}
              alt="Main"
              className="w-16 h-16 object-cover rounded-md cursor-pointer border"
            />

            {product.thumbnails.map((thumb, index) => (
              <img
                key={index}
                src={thumb}
                alt={`Thumbnail ${index + 1}`}
                className={`w-16 h-16 object-none rounded-md cursor-pointer border ${
                  selectedImage === thumb
                    ? "border-blue-500"
                    : "hover:border-blue-500"
                }`}
                onClick={() => setSelectedImage(thumb)}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-lg text-gray-600 mb-4">{product.category}</p>

          <div className="flex items-center mb-4">
            <span className="text-2xl font-semibold text-red-500">
              ${product.price.discounted}
            </span>
            {product.price.original !== product.price.discounted && (
              <span className="text-sm text-gray-500 line-through ml-4">
                ${product.price.original}
              </span>
            )}
          </div>

          <div className="flex items-center mb-4">
            <span className="text-sm text-gray-500 mr-2">Rating:</span>
            <span className="text-yellow-500">
              {"★".repeat(product.rating)}
            </span>
            <span className="text-gray-300">
              {"★".repeat(5 - product.rating)}
            </span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <span className="font-semibold">Quantity:</span>
            <input
              type="number"
              min="1"
              max="10"
              defaultValue="1"
              className="w-20 border rounded-3xl px-2 py-1 text-center"
              onChange={(e) => {
                const value = parseInt(e.target.value, 10);
                if (value < 1 || value > 10) {
                  alert("Quantity must be between 1 and 10");
                  e.target.value = 1;
                }
              }}
            />
            {/* Add to Cart Button */}
            <button
              className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full shadow-md hover:shadow-lg hover:from-orange-600 hover:to-red-600 transition"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>

          <div className="mb-4">
            <p className="font-semibold">Stock:</p>
            <p>
              {product.stock.status} (SKU: {product.stock.sku})
            </p>
          </div>

          <div className="mb-4">
            <p className="font-semibold">Brand:</p>
            <p>{product.brand}</p>
          </div>

          <div className="mb-4">
            <p className="font-semibold">Description:</p>
            <p>{product.description}</p>
          </div>

          <div className="mb-4">
            <p className="font-semibold">Delivery:</p>
            <p>Estimated delivery time: {product.delivery.estimated}</p>
            <p>{product.delivery.freeShippingMessage}</p>
          </div>

          <div className="mb-4">
            <p className="font-semibold">Payment Options:</p>
            <div className="flex gap-2 mt-2">
              {product.paymentOptions.map((option, index) => (
                <img
                  key={index}
                  src={`/icons/${option}.png`}
                  alt={option}
                  className="w-24 h-20 object-contain"
                />
              ))}
            </div>
          </div>

          {/* Share Link */}
          <div className="mb-4">
            <a
              href={product.share.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-500 hover:text-blue-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 8.25H4.875A2.625 2.625 0 002.25 10.875v8.25A2.625 2.625 0 004.875 21.75h14.25a2.625 2.625 0 002.625-2.625v-8.25a2.625 2.625 0 00-2.625-2.625H16.5"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 4.5l-4.5 4.5-4.5-4.5"
                />
              </svg>
              Share this product
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
