import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search, User } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();
  const navigate = useNavigate();

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleLoginClick = () => {
    navigate('/login');
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10 shrink-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-white/60 hover:text-white p-2"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center flex-1">
            <Link to="/shop" className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors">
              Shop
            </Link>
            <Link to="/about" className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors">
              Process
            </Link>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center flex-1">
            <Link to="/" className="flex flex-col items-center justify-center">
              <span className="text-2xl sm:text-3xl font-sans tracking-[0.1em] font-medium text-white leading-none mb-1.5">MAYORGA</span>
              <span className="text-[8px] sm:text-[10px] font-sans tracking-[0.3em] font-light text-white leading-none">° HANDCRAFTED °</span>
            </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4 flex-1 justify-end">
            <button 
              onClick={handleLoginClick}
              className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/60 hover:text-white p-2 hidden sm:flex items-center gap-2"
            >
              <User className="w-4 h-4" /> Account
            </button>
            <button className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/60 hover:text-white p-2 hidden sm:flex items-center gap-2">
              <Search className="w-4 h-4" /> Search
            </button>
            <button 
              onClick={handleCartClick}
              className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/60 hover:text-white p-2 flex items-center gap-2 relative group"
            >
              <ShoppingBag className="w-4 h-4 transition-transform group-hover:scale-110" />
              Cart ({totalItems})
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-full max-w-sm bg-[#111111] z-50 p-6 flex flex-col md:hidden shadow-2xl border-r border-white/10"
            >
              <div className="flex items-center justify-between mb-12">
                <Link to="/" className="flex flex-col items-start" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="text-2xl font-sans tracking-[0.1em] font-medium text-white leading-none mb-1.5">MAYORGA</span>
                  <span className="text-[8px] font-sans tracking-[0.3em] font-light text-white leading-none">° HANDCRAFTED °</span>
                </Link>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex flex-col space-y-6">
                <button onClick={handleLoginClick} className="flex items-center gap-4 text-2xl font-serif text-white hover:text-amber-500 transition-colors text-left">
                  <User className="w-6 h-6" /> User Login
                </button>
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif text-white hover:text-white/60">Home</Link>
                <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif text-white hover:text-white/60">Shop All</Link>
                <Link to="/shop?category=Wallets" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-serif text-white/70 hover:text-white pl-4 border-l border-white/20">Wallets</Link>
                <Link to="/shop?category=Bags" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-serif text-white/70 hover:text-white pl-4 border-l border-white/20">Bags</Link>
                <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif text-white hover:text-white/60 mt-4">Process</Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
