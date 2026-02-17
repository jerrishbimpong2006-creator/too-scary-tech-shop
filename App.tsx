
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Repair from './pages/Repair';
import Admin from './pages/Admin';
import Rewards from './pages/Rewards';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  if (isAdmin) {
    return (
      <div className="min-h-screen bg-background-dark">
        {children}
        <nav className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-800 px-6 pb-8 pt-4 flex justify-between items-center z-50">
          <Link to="/admin" className={`flex flex-col items-center gap-1 ${location.pathname === '/admin' ? 'text-primary' : 'text-slate-500'}`}>
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-[10px] font-bold">Dashboard</span>
          </Link>
          <Link to="/admin/stock" className={`flex flex-col items-center gap-1 ${location.pathname === '/admin/stock' ? 'text-primary' : 'text-slate-500'}`}>
            <span className="material-symbols-outlined">inventory_2</span>
            <span className="text-[10px] font-bold">Inventory</span>
          </Link>
          <Link to="/" className="flex flex-col items-center gap-1 text-slate-500">
            <span className="material-symbols-outlined">logout</span>
            <span className="text-[10px] font-bold">Exit</span>
          </Link>
        </nav>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark pb-24">
      {children}
      <nav className="fixed bottom-0 left-0 right-0 z-50 glass-dark border-t border-white/10 px-6 pb-8 pt-4 flex justify-between items-center">
        <Link to="/" className={`flex flex-col items-center gap-1 ${location.pathname === '/' ? 'text-primary' : 'text-slate-500'}`}>
          <span className="material-symbols-outlined">home</span>
          <span className="text-[10px] font-bold">Home</span>
        </Link>
        <Link to="/shop" className={`flex flex-col items-center gap-1 ${location.pathname === '/shop' ? 'text-primary' : 'text-slate-500'}`}>
          <span className="material-symbols-outlined">storefront</span>
          <span className="text-[10px] font-bold">Shop</span>
        </Link>
        <Link to="/repair" className={`flex flex-col items-center gap-1 ${location.pathname === '/repair' ? 'text-primary' : 'text-slate-500'}`}>
          <span className="material-symbols-outlined">handyman</span>
          <span className="text-[10px] font-bold">Repair</span>
        </Link>
        <Link to="/rewards" className={`flex flex-col items-center gap-1 ${location.pathname === '/rewards' ? 'text-primary' : 'text-slate-500'}`}>
          <span className="material-symbols-outlined">redeem</span>
          <span className="text-[10px] font-bold">Rewards</span>
        </Link>
        <Link to="/admin" className={`flex flex-col items-center gap-1 ${location.pathname === '/admin' ? 'text-primary' : 'text-slate-500'}`}>
          <span className="material-symbols-outlined">person</span>
          <span className="text-[10px] font-bold">Profile</span>
        </Link>
      </nav>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/repair" element={<Repair />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
