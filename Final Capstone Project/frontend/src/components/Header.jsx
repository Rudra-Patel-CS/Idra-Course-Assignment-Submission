import React from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCart, Sparkles, LayoutDashboard, BarChart3, BrainCircuit, Award, BookOpen } from 'lucide-react';

const Header = ({ title, subtitle }) => {
  const navItems = [
    { path: '/', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/analytics', label: 'Analytics', icon: BarChart3 },
    { path: '/prediction', label: 'Prediction', icon: BrainCircuit },
    { path: '/model-performance', label: 'Performance', icon: Award },
    { path: '/about', label: 'Methodology', icon: BookOpen },
  ];

  return (
    <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-20 px-6 py-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-100 tracking-tight flex items-center gap-2">
            {title}
          </h1>
          {subtitle && <p className="text-xs text-slate-400 mt-0.5">{subtitle}</p>}
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'bg-slate-800 text-slate-400'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Top Header Badge */}
        <div className="hidden lg:flex items-center space-x-2 bg-slate-950/60 border border-slate-800 px-3 py-1.5 rounded-full text-xs text-slate-300">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>IDRA Capstone Project #10</span>
          <span className="text-slate-600">|</span>
          <span className="text-cyan-400 font-mono">v1.0.0</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
