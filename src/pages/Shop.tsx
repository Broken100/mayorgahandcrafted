import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import { motion } from 'motion/react';

export function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get('category') || 'All';
  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = currentCategory === 'All' 
    ? products 
    : products.filter(p => p.category === currentCategory);

  const handleCategoryChange = (category: string) => {
    if (category === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen pt-12 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Our Collection</h1>
        <p className="text-white/40 text-lg font-serif italic">
          Explore our range of handcrafted leather goods, designed thoughtfully and built to age beautifully alongside you.
        </p>
      </div>

      {/* Filter / Categories */}
      <div className="flex flex-wrap justify-center gap-6 mb-16">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`text-[10px] uppercase tracking-[0.2em] transition-colors pb-1 border-b ${
              currentCategory === category
                ? 'text-amber-500 border-amber-500 font-bold'
                : 'text-white/40 border-transparent hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {filteredProducts.map((product, idx) => (
          <motion.div 
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="group"
          >
            <Link to={`/product/${product.id}`} className="block">
              <div className="relative aspect-[4/5] bg-[#111111] border border-white/10 overflow-hidden mb-6 p-4">
                <img 
                  src={product.images[0]} 
                  alt={product.name} 
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
                {product.images[1] && (
                  <img 
                    src={product.images[1]} 
                    alt={`${product.name} alternate view`} 
                    className="absolute inset-0 object-cover w-full h-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                )}
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-serif text-white text-lg group-hover:text-amber-500 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mt-1">{product.category}</p>
                </div>
                <p className="font-serif text-lg text-white/50">${product.price}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="text-center py-20 text-white/40 font-serif text-lg italic">
          No products found in this category.
        </div>
      )}
    </div>
  );
}
