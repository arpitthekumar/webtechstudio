"use client";
import React, { useState } from 'react';

function Footer() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const email = e.target['newsletter-2'].value;
  
    if (!email) {
      setFormError(true);
      setFormSubmitted(false);
      return;
    }
  
    try {
      // Mock API call simulation
      setFormSubmitted(true);
      setFormError(false);
    } catch (error) {
      setFormSubmitted(false);
      setFormError(true);
    }
  };

  return (
    <footer id="footer" className="bg-gray-800 text-white relative">
      <div className="main-footer py-10 bg-cover bg-center" style={{ backgroundImage: "url('https://cdn.prod.website-files.com/66c5934366ec1f0519f21b89/66c5934366ec1f0519f21d61_18683.avif')" }}>
        <div className="absolute inset-0 bg-black opacity-90"></div> {/* Black tint overlay */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="newsletter-block flex flex-col md:flex-row justify-between items-center">
            <div className="contents-40 w-full md:w-1/2 mb-6 md:mb-0">
              <h2 className="text-2xl text-white leading-tight">
                Join our mailing list & get exclusive offers and updates
              </h2>
            </div>
            <div className="newsletter-form w-full md:w-1/2">
              <form id="wf-form-newsletter" name="wf-form-newsletter" onSubmit={handleSubmit} className="flex flex-col md:flex-row">
                <input
                  className="newsletter-input w-full md:w-3/4 p-3 mr-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  type="email"
                  name="newsletter-2"
                  placeholder="Enter your email"
                  required
                />
                <button
                  type="submit"
                  className="custom-button-white w-full md:w-1/4 bg-indigo-600 text-white p-3 rounded-lg mt-4 md:mt-0 hover:bg-indigo-500 transition duration-200"
                >
                  Submit Now
                </button>
              </form>
              {formSubmitted && (
                <div className="success mt-2 text-center text-green-500">
                  <img src="https://cdn.prod.website-files.com/66c5934366ec1f0519f21b52/66c5934366ec1f0519f21bdc_line-rounded-check-circle-white-brix-templates.svg" alt="Check" className="w-6 mx-auto mb-1" />
                  <p>You Are Subscribed!</p>
                </div>
              )}
              {formError && (
                <div className="error mt-2 text-center text-red-500">
                  <p>Oops! Something went wrong while submitting the form.</p>
                </div>
              )}
            </div>
          </div>

          <div className="footer-wrapper mt-10 flex flex-wrap justify-between">
            <div className="footer-block w-full md:w-1/3 mb-6 md:mb-0">
              <a href="#" className="navbar-logo-wrapper flex items-center">
                <img src="https://cdn.prod.website-files.com/66c5934366ec1f0519f21b52/66d3311f66a509e1a15b2018_GadgetZ%20(2).avif" loading="lazy" width="70" alt="GadgetZ Logo" />
                <p className="ml-3 text-white">Providing you with the best in electronic innovation.</p>
              </a>
              <div className="mt-4">
                <div className="flex items-center mb-2">
                  <div className="footer-icon text-indigo-400 text-lg mr-2">📞</div>
                  <div className="footer-paragraph text-white">(800) 555‑0199</div>
                </div>
                <div className="flex items-center">
                  <div className="footer-icon text-indigo-400 text-lg mr-2">✉️</div>
                  <div className="footer-paragraph text-white">NX@gadgetz.com</div>
                </div>
              </div>
            </div>

            <div className="footer-block w-full md:w-1/3 mb-6 md:mb-0">
              <h4 className="footer-title text-lg">Useful Links</h4>
              <div className="list-block mt-2">
                <a href="/" className="footer-links block py-2 hover:text-indigo-400">Home</a>
                <a href="/about" className="footer-links block py-2 hover:text-indigo-400">About</a>
                <a href="/blog" className="footer-links block py-2 hover:text-indigo-400">Blog</a>
                <a href="/shop" className="footer-links block py-2 hover:text-indigo-400">Shop</a>
                <a href="/contact" className="footer-links block py-2 hover:text-indigo-400">Contact</a>
              </div>
            </div>

            <div className="footer-block w-full md:w-1/3">
              <h4 className="footer-title text-lg">Quick Links</h4>
              <div className="list-block mt-2">
                <a href="/about" className="footer-links block py-2 hover:text-indigo-400">About Us</a>
                <a href="/faq" className="footer-links block py-2 hover:text-indigo-400">FAQ</a>
                <a href="/shop" className="footer-links block py-2 hover:text-indigo-400">Shop</a>
                <a href="/log-in" className="footer-links block py-2 hover:text-indigo-400">Log-In</a>
                <a href="/utility/license" className="footer-links block py-2 hover:text-indigo-400">Licensing</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="footer-container bg-gray-900 py-4 relative z-20"> {/* Added relative z-index */}
        <div className="footer-copyright text-center text-gray-400">
          Copyright © Gadgetz | Designed by Nexoy | 
          <span className="ml-2 text-gray-400">by Mr. Damager (Arpit Kumar)</span>
          <a href="https://webflow.com/" className="ml-2 text-gray-400 hover:text-white">Powered by Webflow.com</a>
        </div>
        <div className="social-share-icon-container flex justify-center mt-2">
          <a href="https://www.facebook.com" target="_blank" className="footer-social-icon mx-2 text-2xl text-gray-400 hover:text-blue-600">📘</a>
          <a href="https://www.instagram.com" target="_blank" className="footer-social-icon mx-2 text-2xl text-gray-400 hover:text-pink-500">📷</a>
          <a href="https://twitter.com" target="_blank" className="footer-social-icon mx-2 text-2xl text-gray-400 hover:text-blue-400">🐦</a>
          <a href="https://www.linkedin.com" target="_blank" className="footer-social-icon mx-2 text-2xl text-gray-400 hover:text-blue-700">🔗</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
