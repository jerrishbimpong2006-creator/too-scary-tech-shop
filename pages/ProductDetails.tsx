
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../constants';

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) return <div className="p-10 text-center">Product not found</div>;

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="sticky top-0 z-50 glass-dark border-b border-white/10 px-4 py-3 flex items-center justify-between">
        <button onClick={() => navigate(-1)} className="p-2 rounded-full hover:bg-white/5 transition-colors">
          <span className="material-symbols-outlined text-white">chevron_left</span>
        </button>
        <div className="flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Details</span>
          <span className="text-xs font-bold text-white">{product.name}</span>
        </div>
        <button className="p-2 rounded-full hover:bg-white/5 transition-colors">
          <span className="material-symbols-outlined text-white">share</span>
        </button>
      </nav>

      <main className="pb-40">
        <section className="bg-slate-900 p-10 aspect-square flex items-center justify-center border-b border-white/5">
          <img src={product.image} className="h-full object-contain" alt={product.name} />
        </section>

        <section className="px-6 pt-8">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h1 className="text-3xl font-black tracking-tighter text-white">{product.name}</h1>
              <p className="text-slate-400 text-sm font-medium mt-1">{product.storage} • {product.color}</p>
            </div>
            <span className="bg-primary/20 text-primary text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest border border-primary/30">
              {product.condition}
            </span>
          </div>

          <div className="flex items-baseline gap-2 mb-8">
            <span className="text-3xl font-black text-white">GHS {product.price.toLocaleString()}</span>
            <span className="text-slate-600 line-through text-lg font-medium">GHS {(product.price * 1.1).toLocaleString()}</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            <div className="flex items-center gap-2 bg-slate-900 border border-white/5 px-4 py-3 rounded-xl">
              <span className="material-symbols-outlined text-primary text-sm">storage</span>
              <span className="text-sm font-bold text-white">{product.storage}</span>
            </div>
            {product.batteryHealth && (
              <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-3 rounded-xl">
                <span className="material-symbols-outlined text-primary text-sm">battery_full</span>
                <span className="text-sm font-bold text-primary">{product.batteryHealth}% Health</span>
              </div>
            )}
            <div className="flex items-center gap-2 bg-slate-900 border border-white/5 px-4 py-3 rounded-xl">
              <span className="material-symbols-outlined text-primary text-sm">verified</span>
              <span className="text-sm font-bold text-white">{product.warranty} Warranty</span>
            </div>
          </div>

          <div className="space-y-4 border-t border-white/10 pt-8 mb-10">
            <div className="flex items-start gap-4 p-4 bg-slate-900 rounded-2xl border border-white/5">
              <div className="bg-primary/10 p-2 rounded-lg shrink-0">
                <span className="material-symbols-outlined text-primary">local_shipping</span>
              </div>
              <div>
                <p className="font-bold text-sm text-white">Same Day Delivery</p>
                <p className="text-xs text-slate-500 leading-relaxed mt-0.5">Available in Accra & Tema. Ships within 2 hours of payment.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-slate-900 rounded-2xl border border-white/5">
              <div className="bg-primary/10 p-2 rounded-lg shrink-0">
                <span className="material-symbols-outlined text-primary">security</span>
              </div>
              <div>
                <p className="font-bold text-sm text-white">Authenticity Guaranteed</p>
                <p className="text-xs text-slate-500 leading-relaxed mt-0.5">Full inspection report provided with every used or refurb device.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="fixed bottom-0 left-0 right-0 z-50 glass-dark border-t border-white/10 px-6 py-6 pb-10">
        <div className="flex gap-4 max-w-lg mx-auto">
          <button className="flex-1 bg-slate-900 border-2 border-primary text-primary font-black py-4 rounded-2xl hover:bg-primary/5 transition-all">
            ADD TO CART
          </button>
          <button className="flex-[2] bg-primary text-white font-black py-4 rounded-2xl shadow-xl shadow-primary/30 hover:brightness-110 active:scale-95 transition-all">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
