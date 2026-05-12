import { Search, Mail, Phone, MapPin } from 'lucide-react';

export function AdminCustomers() {
  const customers = [
    { id: 1, name: 'Sienna Miller', email: 'sienna@example.com', orders: 4, spent: 1240.00 },
    { id: 2, name: 'Julian Casablancas', email: 'julian@example.com', orders: 2, spent: 345.50 },
    { id: 3, name: 'Elias Thorne', email: 'elias@example.com', orders: 7, spent: 2890.00 },
    { id: 4, name: 'Clara Oswald', email: 'clara@example.com', orders: 1, spent: 75.00 },
    { id: 5, name: 'Arthur Dent', email: 'arthur@example.com', orders: 3, spent: 540.00 },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif text-white">Customers</h1>
        <p className="text-white/40 mt-2 text-sm italic font-serif">View and manage customer data.</p>
      </div>

      <div className="bg-[#0a0a0a] border border-white/10 rounded-lg overflow-hidden">
        <div className="p-4 border-b border-white/10 flex justify-between items-center bg-[#111111]">
          <div className="relative w-full max-w-sm">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
            <input 
              type="text" 
              placeholder="Search customers..." 
              className="w-full pl-10 pr-4 py-2 bg-[#1a1a1a] border border-white/10 rounded-md text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-[10px] uppercase tracking-widest text-white/50 bg-[#0a0a0a]">
                <th className="px-6 py-4 font-medium">Customer</th>
                <th className="px-6 py-4 font-medium">Contact</th>
                <th className="px-6 py-4 font-medium">Orders</th>
                <th className="px-6 py-4 font-medium">Total Spent</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {customers.map((customer) => (
                <tr key={customer.id} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#111111] border border-white/10 flex items-center justify-center">
                        <span className="text-xs text-white/50">{customer.name.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                      <div className="text-sm font-medium text-white">{customer.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-xs text-white/40">
                        <Mail className="w-3 h-3" /> {customer.email}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-white/60">{customer.orders} orders</td>
                  <td className="px-6 py-4 text-sm font-serif text-white/80">${customer.spent.toFixed(2)}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-amber-500 hover:text-amber-400 text-[10px] uppercase tracking-widest font-bold transition-colors">
                      View Profile
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
