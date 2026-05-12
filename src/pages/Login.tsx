import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';

export function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate auth
    navigate('/');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-20 px-4 bg-[#0a0a0a]">
      <div className="w-full max-w-md">
        <div className="text-center mb-12">
          <Link to="/" className="flex flex-col items-center justify-center mb-8">
            <span className="text-3xl font-sans tracking-[0.1em] font-medium text-white leading-none mb-1.5">MAYORGA</span>
            <span className="text-[10px] font-sans tracking-[0.3em] font-light text-white leading-none">° HANDCRAFTED °</span>
          </Link>
          <h1 className="text-4xl font-serif text-white mb-2">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h1>
          <p className="text-white/40 font-serif italic">
            {isLogin 
              ? 'Access your orders and preferences.' 
              : 'Join our guild of craft enthusiasts.'}
          </p>
        </div>

        <div className="bg-[#111111] border border-white/10 p-8 shadow-2xl relative overflow-hidden">
          {/* Accent decoration */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 -translate-y-1/2 translate-x-1/2 blur-3xl rounded-full"></div>
          
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <AnimatePresence mode="wait">
              {!isLogin && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <label htmlFor="name" className="block text-xs uppercase tracking-[0.1em] text-white/50 mb-2">Full Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
                    <input 
                      type="text" 
                      id="name"
                      required={!isLogin}
                      className="w-full pl-10 pr-4 py-3 bg-[#1a1a1a] border border-white/10 text-white focus:outline-none focus:border-amber-500 transition-colors text-sm" 
                      placeholder="Daniel Mayorga"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div>
              <label htmlFor="email" className="block text-xs uppercase tracking-[0.1em] text-white/50 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
                <input 
                  type="email" 
                  id="email"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-[#1a1a1a] border border-white/10 text-white focus:outline-none focus:border-amber-500 transition-colors text-sm" 
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="pass" className="block text-xs uppercase tracking-[0.1em] text-white/50">Password</label>
                {isLogin && (
                  <button type="button" className="text-[10px] uppercase tracking-widest text-amber-500/60 hover:text-amber-500 transition-colors">
                    Forgot?
                  </button>
                )}
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
                <input 
                  type="password" 
                  id="pass"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-[#1a1a1a] border border-white/10 text-white focus:outline-none focus:border-amber-500 transition-colors text-sm" 
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full py-4 border border-white/20 text-white hover:bg-white hover:text-black transition-all group flex items-center justify-center gap-2 text-[11px] uppercase tracking-[0.2em] font-medium"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-white/40 text-[11px] uppercase tracking-widest">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="ml-2 text-white hover:text-amber-500 transition-colors font-bold"
              >
                {isLogin ? 'Register' : 'Login'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
