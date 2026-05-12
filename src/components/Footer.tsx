import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white/50 border-t border-white/10 mt-auto shrink-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex flex-col items-start mb-6 animate-pulse inline-block">
              <span className="text-2xl font-sans tracking-[0.1em] font-medium text-white leading-none mb-1.5">MAYORGA</span>
              <span className="text-[8px] font-sans tracking-[0.3em] font-light text-white leading-none">° HANDCRAFTED °</span>
            </Link>
            <p className="text-white/40 max-w-sm mt-4 text-sm font-serif italic leading-relaxed">
              Handcrafted leather goods made slowly and intentionally. 
              Designed to age beautifully and tell the story of the life you live.
            </p>
          </div>

          <div>
            <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-white mb-6">Shop</h3>
            <ul className="space-y-4">
              <li><Link to="/shop" className="text-white/40 hover:text-white transition-colors text-[11px] uppercase tracking-widest">All Products</Link></li>
              <li><Link to="/shop?category=Wallets" className="text-white/40 hover:text-white transition-colors text-[11px] uppercase tracking-widest">Wallets</Link></li>
              <li><Link to="/shop?category=Bags" className="text-white/40 hover:text-white transition-colors text-[11px] uppercase tracking-widest">Bags</Link></li>
              <li><Link to="/shop?category=Accessories" className="text-white/40 hover:text-white transition-colors text-[11px] uppercase tracking-widest">Accessories</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-white mb-6">Support</h3>
            <ul className="space-y-4">
              <li><Link to="/contact" className="text-white/40 hover:text-white transition-colors text-[11px] uppercase tracking-widest">Contact Us</Link></li>
              <li><Link to="/faq" className="text-white/40 hover:text-white transition-colors text-[11px] uppercase tracking-widest">FAQ</Link></li>
              <li><Link to="/shipping" className="text-white/40 hover:text-white transition-colors text-[11px] uppercase tracking-widest">Shipping & Returns</Link></li>
              <li><Link to="/care" className="text-white/40 hover:text-white transition-colors text-[11px] uppercase tracking-widest">Leather Care</Link></li>
              <li><Link to="/admin" className="text-amber-500/70 hover:text-amber-500 transition-colors text-[11px] uppercase tracking-widest">Admin Dashboard</Link></li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest">
          <p className="text-white/30 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Mayorga Handcrafted. For demonstration purposes.
          </p>
          <div className="flex space-x-6 text-white/40">
            <a href="#" className="hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5">Instagram</a>
            <a href="#" className="hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5">Pinterest</a>
            <a href="#" className="hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5">Journal</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
