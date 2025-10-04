// components/PromoBanners.jsx
import React from 'react';

const PromoBanners = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      
      {/* Top Deals Banner (Dark/Purple Block) */}
      <div className="bg-gray-900 p-12 flex flex-col justify-between rounded-lg border border-purple-900">
        <h3 className="text-4xl font-light mb-8">Top Deals</h3>
        <div className="space-y-4">
          <p className="uppercase text-lg text-gray-400">Up to</p>
          <p className="text-7xl font-bold text-purple-400">30% OFF</p>
          <p className="uppercase text-lg text-gray-400">Selected Brands</p>
        </div>
        <a href="#deals" className="mt-8 text-lg font-semibold border-b-2 border-white hover:border-purple-400 pb-1 w-fit transition duration-200">
          SHOP NOW
        </a>
      </div>

      {/* Our Staff Pick Banner (Image Block) */}
      <div className="relative bg-gray-900 p-12 flex flex-col justify-end rounded-lg overflow-hidden border border-purple-900 min-h-[400px]">
        {/* Placeholder Image (The Large Speaker) */}
        <div className="absolute inset-0 bg-cover bg-center opacity-70" 
             style={{ 
               backgroundImage: "url('/path/to/large-speaker.jpg')",
               mixBlendMode: 'lighten', // Helps blend the image with the dark background
             }}>
        </div>
        
        <div className="relative z-10">
          <h3 className="text-4xl font-light mb-4">Our Staff Pick</h3>
          <p className="text-xl mb-6 text-gray-300">Tune into quality sound</p>
          <a href="#staff-pick" className="text-lg font-semibold border-b-2 border-white hover:border-purple-400 pb-1 w-fit transition duration-200">
            SHOP NOW
          </a>
        </div>
      </div>
    </div>
  );
};

export default PromoBanners;