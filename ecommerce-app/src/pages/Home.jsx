// Home.jsx (The Main Page Layout)
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PromoBanners from './components/PromoBanners';
import ProductCard from './components/ProductCard'; // We'll use this inside Home for simplicity here

// Mock data to simulate fetching product information
const bestSellers = [
  { id: 1, name: 'Instant camera', price: '100.00', imageUrl: '/path/to/camera.jpg', color: 'bg-pink-100' },
  { id: 2, name: 'Wireless mouse', price: '50.00', imageUrl: '/path/to/mouse.jpg', color: 'bg-blue-100' },
  { id: 3, name: 'Fitness tracker', price: '75.00', imageUrl: '/path/to/tracker.jpg', color: 'bg-orange-100' },
  { id: 4, name: 'Wireless earbuds', price: '100.00', imageUrl: '/path/to/earbuds.jpg', color: 'bg-teal-100' },
];

const Home = () => {
  // The unique background gradient from your design
  const backgroundStyle = {
    background: 'radial-gradient(at 0% 0%, #301944 0%, #0c0812 70%)',
    minHeight: '100vh',
  };

  return (
    <div style={backgroundStyle} className="text-white font-sans">
      
      {/* 1. Header is typically a layout component, but we include it here */}
      <Header />

      <main className="container mx-auto px-4 md:px-8 lg:px-12 pt-8">
        
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. Promotional Banners Section */}
        <section className="mt-20">
          <PromoBanners />
        </section>

        {/* 4. Best Sellers Section (Product Grid) */}
        <section className="mt-20 mb-20">
          
          {/* Section Header */}
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-4xl font-bold">Best Sellers</h2>
            <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-md uppercase font-semibold transition duration-300">
              View All
            </button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {bestSellers.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
              />
            ))}
          </div>
        </section>

      </main>

      {/* 5. Footer component would go here */}
    </div>
  );
};

export default Home;