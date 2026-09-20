import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BarChart3, 
  BrainCircuit, 
  Award, 
  BookOpen, 
  ShoppingCart,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

const Sidebar = ({ isConnected }) => {
  const navItems = [
    { path: '/', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/analytics', label: 'Analytics', icon: BarChart3 },
    { path: '/prediction', label: 'Prediction', icon: BrainCircuit },
    { path: '/model-performance', label: 'Model Performance', icon: Award },
    { path: '/about', label: 'Methodology', icon: BookOpen },
  ];

  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col justify-between hidden md:flex min-h-screen sticky top-0 z-30">
      <div>
        {/* Logo / Brand Header */}
        <div className="p-6 border-b border-slate-800 flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
            <ShoppingCart className="w-5 h-5" />
          </div>
          <div>
            <h1 className="font-bold text-slate-100 text-base tracking-wide">IDRA AI Studio</h1>
            <p className="text-xs text-slate-400 font-medium">Capstone Project #10</p>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="p-4 space-y-1.5">
          <div className="px-3 py-2 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
            Main Navigation
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500/15 to-blue-500/10 text-cyan-400 border border-cyan-500/30 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`
                }
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Backend Health Status Badge */}
      <div className="p-4 border-t border-slate-800">
        <div className="bg-slate-950/80 rounded-xl p-3.5 border border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="relative flex h-2.5 w-2.5">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isConnected ? 'bg-emerald-400' : 'bg-amber-400'}`}></span>
              <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isConnected ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-200">FastAPI Model Engine</p>
              <p className="text-[11px] text-slate-400">{isConnected ? 'Online & Ready' : 'Connecting...'}</p>
            </div>
          </div>
          {isConnected ? (
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          ) : (
            <AlertCircle className="w-4 h-4 text-amber-400" />
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
