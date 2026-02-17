
import React, { useState } from 'react';
import { REPAIR_TYPES } from '../constants';

const Repair: React.FC = () => {
  const [selectedIssue, setSelectedIssue] = useState(REPAIR_TYPES[0].id);
  const [submitted, setSubmitted] = useState(false);

  const activeRepair = REPAIR_TYPES.find(r => r.id === selectedIssue);

  if (submitted) {
    return (
      <div className="flex flex-col min-h-screen px-6 pt-20 items-center text-center">
        <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6 animate-pulse">
          <span className="material-symbols-outlined text-primary text-5xl">task_alt</span>
        </div>
        <h1 className="text-3xl font-black text-white mb-2 tracking-tighter uppercase italic">Booking Confirmed!</h1>
        <p className="text-slate-400 mb-8 max-w-xs font-medium">Your repair reference is <span className="text-primary font-black">TSTS-9921-GH</span>. We've sent details to your phone.</p>
        
        <div className="w-full space-y-4 text-left">
          <div className="bg-slate-900 p-6 rounded-3xl border border-white/10">
            <h2 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4">Before you arrive</h2>
            <div className="space-y-4">
              {['Backup your data', 'Sign out of Find My', 'Charge device to 20%+'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                  <span className="text-sm font-bold text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <button onClick={() => setSubmitted(false)} className="w-full bg-primary text-white font-black py-5 rounded-2xl shadow-xl shadow-primary/20">
            DONE
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background-dark">
      <header className="px-6 py-8 border-b border-white/10">
        <h1 className="text-3xl font-black text-white tracking-tighter italic uppercase">Book a Repair</h1>
        <p className="text-slate-500 font-bold text-xs uppercase tracking-widest mt-1">Premium service • Accra & Kumasi</p>
      </header>

      <main className="px-6 py-8 space-y-10 pb-40">
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">smartphone</span>
            <h2 className="font-black text-white uppercase tracking-widest text-xs">Device Details</h2>
          </div>
          <div className="relative">
            <select className="w-full bg-slate-900 border border-white/5 rounded-2xl p-5 appearance-none text-white font-bold outline-none focus:ring-2 focus:ring-primary/20">
              <option>Select iPhone Model</option>
              <option>iPhone 15 Pro Max</option>
              <option>iPhone 14 Pro</option>
              <option>iPhone 13</option>
            </select>
            <span className="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none">expand_more</span>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">build</span>
            <h2 className="font-black text-white uppercase tracking-widest text-xs">What's the issue?</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {REPAIR_TYPES.map(repair => (
              <button
                key={repair.id}
                onClick={() => setSelectedIssue(repair.id)}
                className={`flex flex-col items-start p-5 rounded-2xl border-2 transition-all text-left ${
                  selectedIssue === repair.id ? 'bg-primary/10 border-primary' : 'bg-slate-900 border-white/5 grayscale opacity-60'
                }`}
              >
                <span className={`material-symbols-outlined mb-3 ${selectedIssue === repair.id ? 'text-primary' : 'text-slate-500'}`}>
                  {repair.icon}
                </span>
                <span className="text-sm font-black text-white">{repair.name}</span>
                <span className="text-[10px] font-bold text-slate-500 uppercase mt-1">From GHS {repair.estimatedPrice}</span>
              </button>
            ))}
          </div>
        </section>

        {activeRepair && (
          <section className="bg-primary/10 rounded-3xl p-6 border border-primary/20 flex justify-between items-center shadow-2xl shadow-primary/5">
            <div>
              <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">Instant Estimate</p>
              <h3 className="text-3xl font-black text-white tracking-tighter">GHS {activeRepair.estimatedPrice.toLocaleString()}</h3>
              <p className="text-[10px] font-bold text-slate-500 mt-2 italic">*Includes genuine parts & labor.</p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="text-[10px] font-bold text-slate-400 bg-white/5 px-2 py-1 rounded">⏱ {activeRepair.duration}</span>
              <span className="text-[10px] font-bold text-slate-400 bg-white/5 px-2 py-1 rounded">🛡 {activeRepair.warranty} Warranty</span>
            </div>
          </section>
        )}

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">schedule</span>
            <h2 className="font-black text-white uppercase tracking-widest text-xs">Schedule Appointment</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input type="date" className="w-full bg-slate-900 border border-white/5 rounded-2xl p-5 text-white font-bold text-sm outline-none focus:ring-2 focus:ring-primary/20" />
            <input type="time" className="w-full bg-slate-900 border border-white/5 rounded-2xl p-5 text-white font-bold text-sm outline-none focus:ring-2 focus:ring-primary/20" />
          </div>
        </section>
      </main>

      <div className="fixed bottom-0 left-0 right-0 z-50 glass-dark border-t border-white/10 p-6 pb-10">
        <button 
          onClick={() => setSubmitted(true)}
          className="w-full bg-primary text-white font-black py-5 rounded-2xl shadow-xl shadow-primary/30 flex items-center justify-center gap-3 active:scale-95 transition-all"
        >
          <span>CONFIRM BOOKING</span>
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default Repair;
