import { useState } from 'react';
import { Plus, Search, Edit, Trash2, X } from 'lucide-react';
import { products as initialProducts } from '../../data/products';

export function AdminProducts() {
  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProducts = products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="space-y-8 relative">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-serif text-white">Products</h1>
          <p className="text-white/40 mt-2 text-sm italic font-serif">Manage your catalog, pricing, and details.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 border border-white/20 hover:bg-white hover:text-black hover:border-white text-white px-6 py-3 transition-colors text-[10px] uppercase tracking-widest font-medium"
        >
          <Plus className="w-4 h-4" /> Add Product
        </button>
      </div>

      <div className="bg-[#0a0a0a] border border-white/10 rounded-lg overflow-hidden">
        <div className="p-4 border-b border-white/10 flex justify-between items-center bg-[#111111]">
          <div className="relative w-full max-w-sm">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-[#1a1a1a] border border-white/10 rounded-md text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-[10px] uppercase tracking-widest text-white/50 bg-[#0a0a0a]">
                <th className="px-6 py-4 font-medium">Product</th>
                <th className="px-6 py-4 font-medium">Category</th>
                <th className="px-6 py-4 font-medium">Price</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#111111] border border-white/10 overflow-hidden">
                        <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="font-serif text-white">{product.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs text-white/60">{product.category}</td>
                  <td className="px-6 py-4 text-sm font-serif text-white/80">${product.price.toFixed(2)}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-green-500/10 text-green-500 text-[10px] uppercase tracking-widest border border-green-500/20">Active</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-3">
                      <button className="p-2 text-white/40 hover:text-white transition-colors" title="Edit">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-white/40 hover:text-red-500 transition-colors" title="Delete">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredProducts.length === 0 && (
          <div className="p-12 text-center text-white/40 text-sm italic font-serif">
            No products found matching "{searchTerm}"
          </div>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-[#111111] border border-white/10 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-white/10 sticky top-0 bg-[#111111] z-10">
              <h2 className="text-2xl font-serif text-white">Add New Product</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-white/40 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2">
                  <label className="block text-xs uppercase tracking-[0.1em] text-white/50 mb-2">Product Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 text-white focus:outline-none focus:border-amber-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.1em] text-white/50 mb-2">Category</label>
                  <select className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 text-white focus:outline-none focus:border-amber-500 transition-colors appearance-none">
                    <option>Wallets</option>
                    <option>Bags</option>
                    <option>Accessories</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.1em] text-white/50 mb-2">Price ($)</label>
                  <input type="number" className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 text-white focus:outline-none focus:border-amber-500 transition-colors" />
                </div>
                <div className="col-span-2">
                  <label className="block text-xs uppercase tracking-[0.1em] text-white/50 mb-2">Description</label>
                  <textarea rows={4} className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 text-white focus:outline-none focus:border-amber-500 transition-colors"></textarea>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-white/10 flex justify-end gap-4 sticky bottom-0 bg-[#111111] z-10">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-3 border border-white/20 text-white hover:bg-white/5 transition-colors text-[10px] uppercase tracking-widest font-medium"
              >
                Cancel
              </button>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-3 bg-white text-black hover:bg-amber-500 transition-colors text-[10px] uppercase tracking-widest font-medium"
              >
                Save Product
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
