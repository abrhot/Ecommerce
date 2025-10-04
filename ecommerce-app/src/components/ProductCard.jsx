// components/ProductCard.jsx
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="group cursor-pointer transform hover:scale-[1.02] transition duration-300 ease-in-out">
      
      {/* Product Image Area */}
      <div className={`${product.color} rounded-lg p-6 flex justify-center items-center h-64 overflow-hidden`}>
        {/* Real images would go here. Use the color prop to set the subtle background color. */}
        <div className="w-full h-full bg-contain bg-no-repeat bg-center"
             style={{ backgroundImage: `url(${product.imageUrl})` }}>
           {/* Placeholder for the product image */}
           <span className="text-8xl text-gray-400 opacity-20">📦</span> 
        </div>
      </div>
      
      {/* Product Details */}
      <div className="mt-4">
        <p className="text-lg font-medium text-gray-200 group-hover:text-purple-400 transition duration-200">{product.name}</p>
        <p className="text-xl font-bold text-white">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;