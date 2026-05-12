import { Search, Eye, Filter } from 'lucide-react';

export function AdminOrders() {
  const orders = [
    { id: 'ORD-7721', customer: 'Sienna Miller', date: '2024-05-10', total: 345.00, status: 'Processing' },
    { id: 'ORD-7720', customer: 'Julian Casablancas', date: '2024-05-09', total: 120.00, status: 'Shipped' },
    { id: 'ORD-7719', customer: 'Elias Thorne', date: '2024-05-08', total: 450.00, status: 'Delivered' },
    { id: 'ORD-7718', customer: 'Clara Oswald', date: '2024-05-08', total: 75.00, status: 'Delivered' },
    { id: 'ORD-7717', customer: 'Arthur Dent', date: '2024-05-07', total: 210.00, status: 'Shipped' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif text-white">Orders</h1>
        <p className="text-white/40 mt-2 text-sm italic font-serif">View and manage customer orders.</p>
      </div>

      <div className="bg-[#0a0a0a] border border-white/10 rounded-lg overflow-hidden">
        <div className="p-4 border-b border-white/10 flex justify-between items-center bg-[#111111]">
          <div className="relative w-full max-w-sm">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
            <input 
              type="text" 
              placeholder="Search orders..." 
              className="w-full pl-10 pr-4 py-2 bg-[#1a1a1a] border border-white/10 rounded-md text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>
          <button className="flex items-center gap-2 text-white/60 hover:text-white px-4 py-2 text-[10px] uppercase tracking-widest font-medium border border-white/10 rounded-md">
            <Filter className="w-4 h-4" /> Filter
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-[10px] uppercase tracking-widest text-white/50 bg-[#0a0a0a]">
                <th className="px-6 py-4 font-medium">Order ID</th>
                <th className="px-6 py-4 font-medium">Customer</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Total</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 text-sm font-mono text-amber-500">{order.id}</td>
                  <td className="px-6 py-4 text-sm text-white">{order.customer}</td>
                  <td className="px-6 py-4 text-xs text-white/60">{order.date}</td>
                  <td className="px-6 py-4 text-sm font-serif text-white/80">${order.total.toFixed(2)}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-[10px] uppercase tracking-widest border ${
                      order.status === 'Processing' ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' :
                      order.status === 'Shipped' ? 'bg-blue-500/10 text-blue-500 border-blue-500/20' :
                      'bg-green-500/10 text-green-500 border-green-500/20'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-white/40 hover:text-white transition-colors" title="View Details">
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
