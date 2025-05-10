"use client";
import { useEffect, useState } from "react";
import Button from "./button/Button";

const PromoPopup: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup on every page load
    setTimeout(() => {
      setShowPopup(true);
    }, 500); // Optional delay
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Discount Activated!");
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex justify-center items-center">
      <div className="relative bg-black bg-[url('/gears-bg.png')] bg-cover text-white p-6 rounded-lg w-full max-w-md shadow-xl border border-gray-700">
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-3 right-4 text-white text-xl"
        >
          ×
        </button>
        <h2 className="text-acua-marine font-bold text-xl text-center">
          Get 50% OFF on Engines/Transmissions
        </h2>
        <p className="text-center mt-2">CALL NOW FOR FREE QUOTE</p>
        <p className="text-center font-bold text-3xl my-1">
          <span className="text-white text-5xl">📞</span>
          +91 92594 93075
        </p>
        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 rounded bg-white text-black"
            required
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full px-4 py-2 rounded bg-white text-black"
            required
          />
          <button
            type="submit"
            className="w-full bg-acua-marine py-2 hover:bg-white text-black rounded-full "
          >
            ACTIVATE DISCOUNT
          </button>
        </form>
        <p className="py-3 mt-3 rounded-4xl text-center text-xl bg-gray-900  text-gray-100">
          24*7 HELPLINE{" "}
          <span className="text-acua-marine font-semibold">
            +91 92594 93075
          </span>
        </p>
        <p className="mt-2 text-lg text-center ">
          🔒 Your information will never be shared with any third party.
        </p>
      </div>
    </div>
  );
};

export default PromoPopup;
