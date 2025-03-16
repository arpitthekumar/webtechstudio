import Head from 'next/head';
import React, { FC } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col justify-between">
      {/* ✅ Hero Section */}
      <div className="bg-gray-900 text-center p-12 rounded-xl max-w-4xl mx-auto mt-10">
        <span className="text-sm bg-gray-800 text-green-400 px-4 py-1 rounded-full inline-block mb-4">
          💬 Let's Work Together
        </span>
        <h1 className="text-4xl font-bold text-white">Ready to Elevate Your Digital Presence?</h1>
        <p className="text-gray-400 mt-4">
          Partner with us to bring your vision to life. From websites to branding and design, we've got you covered.
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <button className="bg-green-500 text-black px-6 py-2 rounded-full flex items-center gap-2">
            Get Started ↗
          </button>
          <button className="bg-white text-black px-6 py-2 rounded-full flex items-center gap-2">
            Get A Quote ↗
          </button>
        </div>
      </div>

      {/* ✅ Black Horizontal Line */}
      <hr className="border-t border-black my-10 mx-auto w-11/12" />

      {/* ✅ Footer Section */}
      <footer className="bg-green-400 text-black py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div>
            <h2 className="text-2xl font-bold">Kairos</h2>
            <p className="text-sm text-gray-700 mt-2">
              We deliver custom-crafted digital solutions that help agencies elevate their brands and achieve remarkable growth.
            </p>
            <div className="flex gap-4 mt-4">
              <FaFacebookF />
              <FaInstagram />
              <FaLinkedinIn />
              <FaYoutube />
              <FaXTwitter />
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-bold">Company</h3>
            <ul className="text-sm space-y-2 mt-2">
              <li>Home</li>
              <li>About</li>
              <li>Blog</li>
              <li>Contact</li>
              <li>Project</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-bold">Utility Page</h3>
            <ul className="text-sm space-y-2 mt-2">
              <li>Styleguide</li>
              <li>Changelog</li>
              <li>Privacy Policy</li>
              <li>License</li>
              <li>Youtube</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
