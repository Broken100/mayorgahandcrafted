import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function CartDrawer() {
  const { isCartOpen, setIsCartOpen, items, updateQuantity, removeFromCart, totalPrice } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 cursor-pointer"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full max-w-md bg-[#0A0A0A] z-50 shadow-2xl flex flex-col border-l border-white/10"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="text-2xl font-serif text-white flex items-center gap-3">
                Cart
              </h2>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 -mr-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#111111] border border-white/10 flex items-center justify-center text-white/40">
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                  <p className="text-white/60 font-serif italic text-lg">Your cart is empty.</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="text-[10px] uppercase tracking-[0.2em] text-white hover:text-amber-500 border-b border-white hover:border-amber-500 pb-0.5 mt-4 transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4 group">
                      <div className="w-24 h-24 bg-[#111111] border border-white/10 flex-shrink-0 overflow-hidden relative p-2">
                        <img 
                          src={item.images[0]} 
                          alt={item.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                      </div>
                      
                      <div className="flex flex-col flex-1">
                        <div className="flex justify-between items-start">
                          <h3 className="font-serif text-lg text-white leading-tight">
                            <Link to={`/product/${item.id}`} onClick={() => setIsCartOpen(false)} className="hover:text-amber-500 transition-colors">
                              {item.name}
                            </Link>
                          </h3>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-white/40 hover:text-red-500 transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-[11px] tracking-[0.1em] text-white/50 mt-1">${item.price}</p>
                        
                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex items-center border border-white/10 bg-[#111111]">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="px-2 py-1 text-white/60 hover:text-white transition-colors"
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs px-3 py-1 text-white select-none min-w-[2rem] text-center">
                              {item.quantity}
                            </span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-2 py-1 text-white/60 hover:text-white transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <p className="font-serif text-white">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 bg-[#0a0a0a] border-t border-white/10">
                <div className="space-y-3 mb-6 text-[11px] tracking-[0.1em] uppercase text-white/60">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="text-white">${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="text-white">Calculated at checkout</span>
                  </div>
                  <div className="flex justify-between font-serif text-2xl text-white normal-case tracking-normal pt-4 border-t border-white/10">
                    <span>Total</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                </div>
                
                <Link
                  to="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="w-full block text-center border border-white/20 text-white hover:bg-white hover:text-black py-4 transition-colors uppercase tracking-[0.2em] text-[11px] mt-8"
                >
                  Checkout
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
