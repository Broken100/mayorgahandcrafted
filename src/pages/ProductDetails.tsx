import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ArrowLeft, ChevronRight, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center py-20">
        <h2 className="text-2xl font-serif text-white mb-6">Product not found.</h2>
        <Link to="/shop" className="text-amber-500 border-b border-amber-500 uppercase tracking-widest text-[10px] pb-1 hover:text-amber-400">
          Return to Shop
        </Link>
      </div>
    );
  }

  const handleNextImage = () => {
    setCurrentImageIdx((prev) => (prev + 1) % product.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIdx((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="min-h-screen pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Breadcrumb */}
      <nav className="flex items-center text-[10px] uppercase tracking-[0.2em] text-white/40 mb-10">
        <Link to="/shop" className="hover:text-white transition-colors">Shop</Link>
        <span className="mx-2">/</span>
        <Link to={`/shop?category=${product.category}`} className="hover:text-white transition-colors">{product.category}</Link>
        <span className="mx-2">/</span>
        <span className="text-white truncate font-medium">{product.name}</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        
        {/* Image Gallery */}
        <div className="w-full lg:w-3/5 flex flex-col lg:flex-row-reverse gap-4">
          
          {/* Main Image */}
          <div className="relative aspect-[4/5] bg-[#111111] border border-white/10 flex-1 overflow-hidden group p-4">
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentImageIdx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                src={product.images[currentImageIdx]} 
                alt={`${product.name} view ${currentImageIdx + 1}`}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
            
            {product.images.length > 1 && (
              <>
                <button 
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/80 hover:bg-black text-white border border-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/80 hover:bg-black text-white border border-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
          </div>

          {/* Thumbnails */}
          <div className="flex flex-row lg:flex-col gap-4 lg:w-24 overflow-x-auto lg:overflow-visible">
            {product.images.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentImageIdx(idx)}
                className={`relative aspect-[3/4] flex-shrink-0 w-20 lg:w-full overflow-hidden transition-all bg-[#111111] border border-white/10 p-2 ${currentImageIdx === idx ? 'ring-1 ring-amber-500' : 'opacity-60 hover:opacity-100'}`}
              >
                <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="w-full lg:w-2/5 flex flex-col pt-4">
          <div className="text-[10px] uppercase tracking-[0.3em] text-amber-500 font-bold mb-2">{product.category}</div>
          <h1 className="text-4xl lg:text-5xl font-serif text-white mb-4 leading-none">{product.name}</h1>
          <p className="text-2xl font-serif text-white/50 mb-8 border-b border-white/10 pb-8">${product.price}</p>
          
          <div className="prose prose-sm md:prose-base prose-invert mb-10 text-white/60 font-serif italic mx-auto leading-relaxed">
            <p>{product.description}</p>
          </div>

          <button 
            onClick={() => addToCart(product)}
            className="w-full border border-white/20 text-white hover:bg-white hover:text-black py-5 uppercase tracking-[0.2em] text-[11px] font-medium transition-colors mb-10"
          >
            Add to Cart — ${product.price}
          </button>

          <div className="border-t border-white/10 pt-8">
            <h3 className="uppercase text-[10px] font-medium tracking-[0.2em] text-white p-0 mb-4 flex items-center gap-3">
              <span className="w-4 h-[1px] bg-amber-500"></span>
              Details
            </h3>
            <ul className="space-y-3 text-sm text-white/50 font-sans">
              {product.details.map((detail, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="w-1 h-1 rounded-full bg-white/20 mt-2 mr-4 flex-shrink-0"></span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="border-t border-white/10 pt-8 mt-8">
             <h3 className="uppercase text-[10px] font-medium tracking-[0.2em] text-white p-0 mb-4 flex items-center gap-3">
              <span className="w-4 h-[1px] bg-amber-500"></span>
              Shipping & Returns
             </h3>
             <p className="text-sm text-white/50 font-sans mb-3">Free shipping on all domestic orders over $150.</p>
             <p className="text-sm text-white/50 font-sans">Products may be returned within 30 days in unused condition.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
