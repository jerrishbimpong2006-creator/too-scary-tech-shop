
import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';

const Home: React.FC = () => {
  const featured = PRODUCTS.filter(p => p.isFeatured);

  return (
    <div className="flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-dark border-b border-white/10 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-2xl">bolt</span>
          <h1 className="text-lg font-black tracking-tight dark:text-white uppercase italic">Too Scary Tech</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined text-2xl dark:text-white">search</button>
          <div className="relative">
            <span className="material-symbols-outlined text-2xl dark:text-white">shopping_bag</span>
            <span className="absolute -top-1 -right-1 bg-primary text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-background-dark text-white">2</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[80vh] w-full flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/30 to-transparent z-10"></div>
          <img 
            alt="Hero iPhone" 
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuClZHvTDCbvFSWRN3Ib54-tbuBxeWu96lIZoM8PG57f2GGjKrd8FTJa9Fpf_vqiEGxB9S1jn3LgsFE4gM-GpzfqVAkIjDpAbfP5ajvpJvXhUnHHPNW9xrnI7xf8d7qe4Ytz0yTWv6sKAHxKFzICQeqdbse-CxjXsW58mnlROhNTR7IUlXI3OMpdN6tZDBs9NVgd5puMe4yZst_CqnTRJwRV4G7Y3hamp1fTyX6MAGizkgBbU33LfsApePOEjMwdHX-lV-7gZlKFaXxg" 
          />
        </div>
        <div className="relative z-20 px-6 pb-12">
          <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-[10px] font-bold rounded-full mb-4 border border-primary/30 uppercase tracking-widest">
            New Arrivals Available
          </span>
          <h2 className="text-4xl font-black leading-tight mb-3 text-white">
            Premium iPhones & Expert Repairs in Ghana
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-[90%] font-medium">
            Buy New, Used & Refurbished iPhones with Confidence.
          </p>
          <div className="flex flex-col gap-3">
            <Link to="/shop" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-xl">shopping_cart</span>
              Shop Now
            </Link>
            <Link to="/repair" className="w-full bg-slate-900 border border-white/10 text-white font-bold py-4 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-xl">build</span>
              Book a Repair
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="px-4 py-8 border-y border-white/10 bg-slate-900/40">
        <div className="flex justify-between items-start gap-4 overflow-x-auto hide-scrollbar">
          {[
            { icon: 'verified_user', label: '12-Month', sub: 'Warranty' },
            { icon: 'engineering', label: 'Certified', sub: 'Technicians' },
            { icon: 'speed', label: 'Same-Day', sub: 'Fast Repair' }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center min-w-[100px]">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <span className="material-symbols-outlined text-primary">{item.icon}</span>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{item.label}</p>
              <p className="text-xs font-semibold dark:text-white">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Deals */}
      <section className="px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold dark:text-white tracking-tight">Featured Deals</h3>
          <Link to="/shop" className="text-primary text-sm font-semibold">View All</Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {featured.map(product => (
            <Link 
              to={`/product/${product.id}`} 
              key={product.id}
              className="bg-slate-900 rounded-2xl border border-white/10 p-3 flex flex-col group transition-all"
            >
              <div className="relative aspect-square rounded-xl overflow-hidden bg-black mb-3">
                <img 
                  alt={product.name} 
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform" 
                  src={product.image} 
                />
                <span className="absolute top-2 left-2 bg-white text-black text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter">
                  {product.condition}
                </span>
              </div>
              <h4 className="text-sm font-bold truncate dark:text-white">{product.name}</h4>
              <p className="text-[10px] text-slate-400 mb-2">{product.storage} • {product.color}</p>
              <div className="mt-auto">
                <p className="text-primary font-black text-sm">GHS {product.price.toLocaleString()}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Repair CTA */}
      <section className="px-4 py-10">
        <div className="bg-gradient-to-br from-primary to-blue-900 rounded-3xl p-8 relative overflow-hidden shadow-2xl shadow-primary/20">
          <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-9xl opacity-10">build_circle</span>
          <h3 className="text-2xl font-black mb-2 text-white">Cracked Screen?</h3>
          <p className="text-blue-100 mb-6 max-w-[200px] text-sm font-medium opacity-80 leading-relaxed">
            Get your iPhone fixed today by certified experts in Kumasi & Accra.
          </p>
          <Link to="/repair" className="inline-block bg-white text-primary font-black px-6 py-3 rounded-xl active:scale-95 transition-transform shadow-lg shadow-white/10">
            Check Repair Pricing
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
