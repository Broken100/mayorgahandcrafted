import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export function Checkout() {
  const { items, totalPrice, clearCart } = useCart();
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate order processing
    setTimeout(() => {
      setIsSuccess(true);
      clearCart();
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center py-20 px-4">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-amber-500 mb-6"
        >
          <CheckCircle2 className="w-20 h-20" />
        </motion.div>
        <h1 className="text-4xl font-serif text-white mb-4 text-center">Order Confirmed</h1>
        <p className="text-white/40 font-serif italic text-center mb-8 max-w-md">
          Thank you for your purchase. We have received your order and will begin crafting it shortly.
        </p>
        <Link 
          to="/shop" 
          className="border border-white/20 text-white px-8 py-4 uppercase tracking-[0.2em] text-[11px] hover:bg-white hover:text-black transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center py-20 px-4">
        <h2 className="text-2xl font-serif text-white mb-6">Your cart is empty.</h2>
        <button 
          onClick={() => navigate('/shop')}
          className="text-amber-500 border-b border-amber-500 uppercase tracking-widest text-[10px] pb-1 hover:text-amber-400"
        >
          Return to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl lg:text-5xl font-serif text-white mb-12 text-center md:text-left">Checkout</h1>
      
      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* Checkout Form */}
        <div className="w-full lg:w-3/5 order-2 lg:order-1">
          <form onSubmit={handleSubmit} className="space-y-12">
            
            {/* Contact Info */}
            <section>
              <h2 className="text-2xl font-serif text-white mb-6 pb-2 border-b border-white/10">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-[0.1em] text-white/50 mb-2">Email address</label>
                  <input type="email" id="email" required className="w-full px-4 py-3 border border-white/20 bg-transparent text-white focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-colors" />
                </div>
              </div>
            </section>

            {/* Shipping Address */}
            <section>
              <h2 className="text-2xl font-serif text-white mb-6 pb-2 border-b border-white/10">Shipping Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-xs uppercase tracking-[0.1em] text-white/50 mb-2">First name</label>
                  <input type="text" id="firstName" required className="w-full px-4 py-3 border border-white/20 bg-transparent text-white focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-colors" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs uppercase tracking-[0.1em] text-white/50 mb-2">Last name</label>
                  <input type="text" id="lastName" required className="w-full px-4 py-3 border border-white/20 bg-transparent text-white focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-colors" />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="address" className="block text-xs uppercase tracking-[0.1em] text-white/50 mb-2">Address</label>
                  <input type="text" id="address" required className="w-full px-4 py-3 border border-white/20 bg-transparent text-white focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-colors" />
                </div>
                <div>
                  <label htmlFor="city" className="block text-xs uppercase tracking-[0.1em] text-white/50 mb-2">City</label>
                  <input type="text" id="city" required className="w-full px-4 py-3 border border-white/20 bg-transparent text-white focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-colors" />
                </div>
                <div>
                  <label htmlFor="zip" className="block text-xs uppercase tracking-[0.1em] text-white/50 mb-2">ZIP code</label>
                  <input type="text" id="zip" required className="w-full px-4 py-3 border border-white/20 bg-transparent text-white focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-colors" />
                </div>
              </div>
            </section>

            {/* Payment Dummy */}
            <section>
              <h2 className="text-2xl font-serif text-white mb-6 pb-2 border-b border-white/10">Payment</h2>
              <div className="p-6 bg-[#111111] border border-white/10 text-center">
                <p className="text-white/40 font-serif italic">
                  This is a demonstration. No real payment will be processed.
                </p>
              </div>
            </section>

            <button 
              type="submit"
              className="w-full border border-white/20 text-white hover:bg-white hover:text-black py-5 uppercase tracking-[0.2em] text-[11px] font-medium transition-colors"
            >
              Place Order
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-2/5 order-1 lg:order-2">
          <div className="bg-[#111111] border border-white/10 p-6 lg:p-8 sticky top-28">
            <h2 className="text-2xl font-serif text-white mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-16 h-16 bg-[#1a1a1a] border border-white/10 flex-shrink-0 relative overflow-hidden p-1">
                    <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                    <span className="absolute top-0 right-0 bg-amber-500 text-black text-[10px] font-bold w-4 h-4 flex items-center justify-center">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-white text-base">{item.name}</h3>
                    <p className="text-white/40 text-[11px] mt-1">${item.price}</p>
                  </div>
                  <div className="font-serif text-white">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 pt-6 space-y-3 text-[11px] uppercase tracking-[0.1em] text-white/50">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-white">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-serif text-2xl normal-case tracking-normal text-white pt-4 border-t border-white/10 mt-4">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
