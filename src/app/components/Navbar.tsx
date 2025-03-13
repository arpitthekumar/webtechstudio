import Head from 'next/head';
const Navbar = () => {
    return (
      <nav className="flex justify-between items-center p-6 bg-black text-white">
        <div className="text-2xl font-bold">Kairos</div>
        <div className="space-x-6">
          <a href="#" className="hover:text-gray-400">About</a>
          <a href="#" className="hover:text-gray-400">Project</a>
          <a href="#" className="hover:text-gray-400">Services</a>
          <a href="#" className="hover:text-gray-400">Pricing</a>
          <a href="#" className="hover:text-gray-400">Blog</a>
          <a href="#" className="hover:text-gray-400">Shop</a>
        </div>
        <button className="bg-green-500 text-white px-4 py-2 rounded-full">Let's Talk</button>
      </nav>
    );
  };
  
  export default Navbar;