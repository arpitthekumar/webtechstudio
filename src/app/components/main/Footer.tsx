import Head from 'next/head';
import React, { FC } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className="bg-black  flex flex-col justify-between">
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
