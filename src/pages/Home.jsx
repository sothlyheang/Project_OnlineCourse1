import React from 'react';
import products from '../data/product';
import ProductCard from '../components/ProductCard';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
