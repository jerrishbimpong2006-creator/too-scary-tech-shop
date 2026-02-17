
import React from 'react';

const Rewards: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background-dark">
      <header className="px-6 py-8 border-b border-white/10">
        <h1 className="text-3xl font-black text-white tracking-tighter italic uppercase">Loyalty Portal</h1>
        <p className="text-slate-500 font-bold text-xs uppercase tracking-widest mt-1">GHS to Points • Ghana Rewards</p>
      </header>

      <main className="px-6 py-8 space-y-8">
        <section className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary to-indigo-900 p-8 text-white shadow-2xl shadow-primary/20">
          <div className="relative z-10">
            <p className="text-white/70 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Available Balance</p>
            <h2 className="text-5xl font-black tracking-tighter mb-1">1,250</h2>
            <p className="text-white/60 text-sm font-bold italic tracking-widest uppercase">Points</p>
            <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between">
              <div>
                <p className="text-white/40 text-[9px] font-black uppercase tracking-widest">Cash Value</p>
                <p className="text-lg font-black tracking-tighter">GHS 125.00</p>
              </div>
              <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-xl">
                <span className="material-symbols-outlined text-4xl">loyalty</span>
              </div>
            </div>
          </div>
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-40 h-40 bg-blue-400/10 rounded-full blur-3xl"></div>
        </section>

        <section className="bg-slate-900 p-6 rounded-3xl border border-white/5">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">Progress to Next Voucher</h3>
            <span className="text-[10px] font-black text-primary">750 / 1,000 pts</span>
          </div>
          <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden border border-white/5">
            <div className="bg-primary h-full w-[75%] rounded-full shadow-[0_0_15px_rgba(19,91,236,0.5)]"></div>
          </div>
          <p className="mt-4 text-[11px] text-slate-500 font-bold italic">Unlock GHS 50.00 off your next repair or purchase.</p>
        </section>

        <section className="space-y-4">
          <h3 className="text-xs font-black text-white uppercase tracking-[0.2em] px-1">Redeemable Perks</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: 'Free Protector', cost: '200 Pts', icon: 'screen_lock_portrait', color: 'bg-orange-500' },
              { title: 'Repair Discount', cost: '500 Pts', icon: 'build', color: 'bg-purple-500' }
            ].map((perk, i) => (
              <div key={i} className="bg-slate-900 p-5 rounded-3xl border border-white/5 flex flex-col gap-4">
                <div className={`${perk.color} w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-lg shadow-black/20`}>
                  <span className="material-symbols-outlined">{perk.icon}</span>
                </div>
                <div>
                  <h4 className="text-sm font-black text-white">{perk.title}</h4>
                  <p className="text-[10px] font-bold text-slate-500 mt-1 uppercase tracking-tighter">{perk.cost}</p>
                </div>
                <button className="w-full py-2 bg-white/5 rounded-lg text-[10px] font-black text-slate-400 border border-white/5">REDEEM</button>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-green-500/10 border border-green-500/20 rounded-3xl p-6 flex items-center gap-6">
          <div className="flex-1">
            <h4 className="text-sm font-black text-green-500 uppercase tracking-tight mb-1">Share & Earn 50 Pts</h4>
            <p className="text-[10px] text-slate-400 font-bold leading-relaxed">Refer a friend for any iPhone sale or screen repair.</p>
          </div>
          <button className="bg-[#25D366] text-white px-5 py-3 rounded-xl font-black text-[10px] uppercase shadow-xl shadow-green-900/20 active:scale-95 transition-all">
            WHATSAPP
          </button>
        </section>
      </main>
    </div>
  );
};

export default Rewards;
