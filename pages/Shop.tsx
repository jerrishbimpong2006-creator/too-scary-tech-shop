
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { Condition } from '../types';

const Shop: React.FC = () => {
  const [filter, setFilter] = useState<Condition | 'ALL'>('ALL');
  const [search, setSearch] = useState('');

  const filtered = PRODUCTS.filter(p => {
    const matchesFilter = filter === 'ALL' || p.condition === filter;
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 glass-dark border-b border-white/10 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-primary p-1.5 rounded-lg">
            <span className="material-symbols-outlined text-white text-xl">bolt</span>
          </div>
          <div>
            <h1 className="text-sm font-black leading-tight tracking-tight dark:text-white">TOO SCARY TECH</h1>
            <p className="text-[9px] text-slate-500 uppercase tracking-widest font-black">Ghana's #1 iPhone Hub</p>
          </div>
        </div>
        <button className="relative p-2 text-slate-400">
          <span className="material-symbols-outlined">shopping_cart</span>
          <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-black text-white">3</span>
        </button>
      </header>

      {/* Search & Filter */}
      <div className="px-4 pt-6 space-y-4">
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-lg">search</span>
          <input 
            className="w-full bg-slate-900 border border-white/5 rounded-xl py-3.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20 outline-none placeholder:text-slate-600 text-white"
            placeholder="Search iPhone models..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex p-1 bg-slate-900 rounded-xl h-12 border border-white/5">
          {['ALL', Condition.NEW, Condition.USED, Condition.REFURBISHED].map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c as any)}
              className={`flex-1 rounded-lg text-[10px] font-black uppercase tracking-tighter transition-all ${
                filter === c ? 'bg-primary text-white shadow-lg' : 'text-slate-500'
              }`}
            >
              {c === 'ALL' ? 'Everything' : c}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <main className="px-4 py-8 grid grid-cols-2 gap-4">
        {filtered.map(product => (
          <Link 
            to={`/product/${product.id}`} 
            key={product.id}
            className="bg-slate-900 rounded-2xl border border-white/10 overflow-hidden flex flex-col group"
          >
            <div className="relative aspect-square bg-slate-800 flex items-center justify-center p-4">
              <img 
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" 
                src={product.image} 
                alt={product.name}
              />
              <span className={`absolute top-2 left-2 text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest ${
                product.condition === Condition.NEW ? 'bg-primary text-white' : 'bg-slate-700 text-slate-300'
              }`}>
                {product.condition}
              </span>
            </div>
            <div className="p-3 flex flex-col flex-1">
              <h3 className="text-xs font-bold text-white leading-tight truncate">{product.name}</h3>
              <p className="text-[9px] text-slate-500 mb-2 truncate">{product.storage} • {product.color}</p>
              
              <div className="mt-auto">
                <p className="text-primary font-black text-sm mb-3">GH₵ {product.price.toLocaleString()}</p>
                <button className="w-full bg-primary text-white py-2 rounded-lg text-[10px] font-black hover:bg-primary/80 active:scale-95 transition-all">
                  BUY NOW
                </button>
              </div>
            </div>
          </Link>
        ))}
      </main>

      {filtered.length === 0 && (
        <div className="flex-1 flex flex-col items-center justify-center text-slate-500 px-8 text-center py-20">
          <span className="material-symbols-outlined text-6xl mb-4 opacity-20">search_off</span>
          <p className="font-bold">No iPhones found</p>
          <p className="text-sm opacity-60">Try adjusting your filters or search term.</p>
        </div>
      )}
    </div>
  );
};

export default Shop;
