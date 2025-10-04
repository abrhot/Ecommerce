// components/Header.jsx
import React from 'react';

const navLinks = ['New In', 'Cell Phones', 'Computers & Tablets', 'Accessories', 'Sale', 'Contact'];

const Header = () => {
  return (
    <header className="bg-opacity-10 bg-black backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 flex justify-between items-center py-4">
        
        {/* Logo and Branding */}
        <div className="flex items-center space-x-2">
          {/* Placeholder for the SELCORE icon */}
          <span className="text-purple-500 text-2xl">M</span> 
          <h1 className="text-xl font-bold uppercase tracking-wider">Selcore</h1>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden lg:flex space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase().replace(/ /g, '-')}`} 
              className="text-white hover:text-purple-400 transition duration-200"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* User Icons (Heart, Cart) */}
        <div className="flex items-center space-x-4 text-xl">
          {/* Placeholder Icons - Use a library like 'react-icons' */}
          <button aria-label="Account" className="hover:text-purple-400">👤</button> 
          <button aria-label="Shopping Cart" className="hover:text-purple-400 relative">
            🛒
            {/* Cart Badge */}
            <span className="absolute -top-2 -right-2 bg-red-600 text-xs w-5 h-5 flex items-center justify-center rounded-full">
              5
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;