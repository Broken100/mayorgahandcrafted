import { DollarSign, ShoppingBag, Users, Activity } from 'lucide-react';

export function AdminDashboard() {
  const stats = [
    { name: 'Total Revenue', value: '$45,231.89', change: '+20.1%', icon: DollarSign },
    { name: 'Orders', value: '+573', change: '+201', icon: ShoppingBag },
    { name: 'Active Customers', value: '+2350', change: '+180', icon: Users },
    { name: 'Active Now', value: '+12', change: '+2 since last hour', icon: Activity },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif text-white">Dashboard</h1>
        <p className="text-white/40 mt-2 text-sm italic font-serif">Welcome back to the Mayorga Handcrafted admin panel.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-[#0a0a0a] border border-white/10 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white/50 text-[10px] uppercase tracking-widest">{stat.name}</h3>
                <Icon className="w-4 h-4 text-white/40" />
              </div>
              <div className="text-2xl font-serif text-white mb-1">{stat.value}</div>
              <div className="text-amber-500 text-xs">{stat.change}</div>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-[#0a0a0a] border border-white/10 p-6 rounded-lg overflow-hidden">
          <h3 className="text-white/80 text-[10px] uppercase tracking-widest mb-6">Top Selling Products</h3>
          <div className="space-y-4">
            {[
              { name: 'Mayorga Signature Belt', sales: 45, revenue: 4275.00, image: 'https://images.unsplash.com/photo-1624222247344-550fbadcd97e?auto=format&fit=crop&q=80&w=200' },
              { name: 'Classic Bifold Wallet', sales: 32, revenue: 2720.00, image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=200' },
              { name: 'The Mayorga Tote', sales: 12, revenue: 2940.00, image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=200' },
            ].map((p, i) => (
              <div key={i} className="flex items-center justify-between border-b border-white/10 pb-4 last:border-0 last:pb-0">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#111111] border border-white/10 overflow-hidden">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover grayscale" />
                  </div>
                  <div>
                    <p className="text-sm text-white">{p.name}</p>
                    <p className="text-[10px] text-white/40">{p.sales} units sold</p>
                  </div>
                </div>
                <div className="font-serif text-white">
                  ${p.revenue.toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#0a0a0a] border border-white/10 p-6 rounded-lg h-96 overflow-y-auto">
          <h3 className="text-white/80 text-[10px] uppercase tracking-widest mb-6">Recent Sales</h3>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center justify-between border-b border-white/10 pb-4 last:border-0 last:pb-0">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#111111] border border-white/10 flex items-center justify-center">
                    <span className="text-xs text-white/50">C{i}</span>
                  </div>
                  <div>
                    <p className="text-sm text-white">Customer {i}</p>
                    <p className="text-[10px] text-white/40">customer{i}@example.com</p>
                  </div>
                </div>
                <div className="font-serif text-white">
                  ${(Math.random() * 200 + 50).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
