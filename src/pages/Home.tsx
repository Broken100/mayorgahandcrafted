import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function Home() {
  const featuredProducts = products.filter(p => p.isFeatured).slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=1920" 
            alt="Handcrafted leather goods" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-amber-600"></div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-amber-500 font-bold">The Heritage Collection</span>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[48px] md:text-[84px] text-white font-serif mb-8 leading-[0.9]"
          >
            Handcrafted <br/>To Outlive <br/>The Owner.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-white/40 font-serif italic max-w-md mx-auto leading-relaxed mb-10"
          >
            Hand-stitched leather goods made slowly and intentionally in our studio.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              to="/shop" 
              className="inline-block px-10 py-4 border border-white/20 text-[11px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors"
            >
              View Collections
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-serif text-white">Featured Pieces</h2>
          <Link to="/shop" className="hidden sm:flex items-center text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-colors group">
            View All <ArrowRight className="w-3 h-3 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {featuredProducts.map((product, idx) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group"
            >
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative aspect-[3/4] bg-[#111111] border border-white/10 overflow-hidden mb-6 p-4">
                  <img 
                    src={product.images[0]} 
                    alt={product.name} 
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Second image on hover (fade in) */}
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
        <div className="mt-12 text-center sm:hidden">
          <Link to="/shop" className="inline-flex flex-col items-center text-[10px] uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors">
            View All
            <div className="w-12 h-px bg-white/40 mt-2 hover:bg-white transition-colors"></div>
          </Link>
        </div>
      </section>

      {/* Brand Story / Split Section */}
      <section className="bg-[#111111] border-y border-white/10">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="h-96 lg:h-auto relative">
              <img 
                src="https://images.unsplash.com/photo-1544816155-528256a42211?auto=format&fit=crop&q=80&w=1200" 
                alt="Leather working tools" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center px-8 py-20 lg:p-24">
              <div className="mb-4 flex items-center gap-4">
                <div className="h-[1px] w-8 bg-amber-600"></div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-amber-500 font-bold">Our Process</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-[1.1]">
                Traditional methods. <br/>Modern utility.
              </h2>
              <p className="text-lg text-white/40 font-serif italic leading-relaxed mb-8">
                Every piece that leaves our workshop is cut, assembled, and stitched by hand. 
                We use only premium vegetable-tanned leathers that develop a rich patina over time, 
                becoming uniquely yours.
              </p>
              <Link 
                to="/about" 
                className="inline-block w-max px-8 py-3 border border-white/20 text-[10px] uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-colors"
              >
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
