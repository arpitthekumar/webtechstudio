import Head from 'next/head';
import Button from './button/Button';
const Navbar = () => {
    return (
      <nav className="flex top-0 sticky z-20 justify-between items-center p-6 bg-black px-20 text-white">
        <div className="text-2xl font-bold">WebTechStudio</div>
        <div className="space-x-6">
          <a href="#" className="hover:text-gray-400">About</a>
          <a href="#" className="hover:text-gray-400">Project</a>
          <a href="#" className="hover:text-gray-400">Services</a>
          <a href="#" className="hover:text-gray-400">Pricing</a>
          <a href="#" className="hover:text-gray-400">Blog</a>
          <a href="#" className="hover:text-gray-400">Shop</a>
        </div>
        <Button text="Let's Talk" mode="light" href="/contact" />
      </nav>
    );
  };
  
  export default Navbar;