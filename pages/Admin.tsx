
import React from 'react';

const Admin: React.FC = () => {
  const kpis = [
    { label: 'Total Sales', value: 'GHS 45.2k', trend: '+12%', icon: 'payments' },
    { label: 'Active Repairs', value: '12', trend: '+2', icon: 'build' },
    { label: 'Pending Trade-ins', value: '8', trend: '-1', icon: 'published_with_changes' },
    { label: 'Low Stock', value: '5', trend: 'Critical', icon: 'warning' }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background-dark pb-32">
      <header className="flex items-center justify-between px-6 py-6 sticky top-0 bg-background-dark/80 backdrop-blur-md z-40 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img 
              alt="Admin" 
              className="w-10 h-10 rounded-full border-2 border-primary object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRqTCR3FT7z7zXy4tlFgTrn-_mF2wdvfFssjahCcqd-ynhmIzKvNN056g54qp0yJnMJ5NqRt6KbRLpot6zyrQmWOBs9PFsHJScYbsyVZcCbwdJcvMXBPS16niI9ASr_hYQOns9_NFRVidFBdGVGLbjWUWzGYjAdf1y6AJLRRBAS0PjmPttzPi6CchhHNrsw98cIxTikYUdwZv50U3oU9MSJw7JkBzWrUfnGmpimjRnyzDTtgI7qKhClESrqeyOcGYjW_QPaBbQ-Dcc" 
            />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background-dark"></div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-sm font-black text-white italic uppercase tracking-tighter">Too Scary Tech</h1>
            <p className="text-[9px] text-slate-500 font-bold truncate max-w-[140px]">ADMIN CONSOLE</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-900 border border-white/5 text-primary">
            <span className="material-symbols-outlined">notifications</span>
          </button>
        </div>
      </header>

      <main className="px-6 py-6 space-y-8">
        <div className="grid grid-cols-2 gap-3">
          {kpis.map((kpi, idx) => (
            <div key={idx} className="bg-slate-900 p-5 rounded-3xl border border-white/5 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="material-symbols-outlined text-primary">{kpi.icon}</span>
                <span className={`text-[10px] font-black px-1.5 py-0.5 rounded ${
                  kpi.trend.includes('+') ? 'text-green-500 bg-green-500/10' : 'text-red-500 bg-red-500/10'
                }`}>
                  {kpi.trend}
                </span>
              </div>
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{kpi.label}</p>
                <p className="text-2xl font-black text-white tracking-tighter">{kpi.value}</p>
              </div>
            </div>
          ))}
        </div>

        <section className="bg-slate-900 p-6 rounded-3xl border border-white/5">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-sm font-black text-white uppercase tracking-widest">Weekly Performance</h2>
            <span className="text-xs font-bold text-primary">Last 7 Days</span>
          </div>
          <div className="h-40 flex items-end gap-3 px-2">
            {[40, 65, 30, 85, 55, 95, 70].map((h, i) => (
              <div key={i} className="flex-1 bg-primary/20 rounded-t-lg relative group">
                <div style={{ height: `${h}%` }} className="bg-primary w-full rounded-t-lg transition-all duration-1000"></div>
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-black text-[8px] font-bold px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {h}%
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 px-2 text-[10px] font-bold text-slate-500 uppercase tracking-tighter">
            <span>Mon</span>
            <span>Wed</span>
            <span>Fri</span>
            <span>Sun</span>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-black text-white uppercase tracking-widest">Low Stock Alerts</h2>
            <button className="text-[10px] font-black text-primary">MANAGE ALL</button>
          </div>
          <div className="space-y-3">
            {[
              { name: 'iPhone 15 Pro Max Screen', stock: 2 },
              { name: 'iPhone 13 Battery (OEM)', stock: 0 }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-900 p-4 rounded-2xl border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-500">
                    <span className="material-symbols-outlined">inventory</span>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white">{item.name}</h3>
                    <p className="text-[10px] font-bold text-red-500">{item.stock} left</p>
                  </div>
                </div>
                <button className="bg-primary/20 text-primary text-[10px] font-black px-4 py-2 rounded-lg border border-primary/20">
                  RESTOCK
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <button className="fixed bottom-32 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-2xl shadow-primary/40 flex items-center justify-center active:scale-95 transition-all z-40">
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>
    </div>
  );
};

export default Admin;
