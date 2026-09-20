import React from 'react';

const StatCard = ({ title, value, subtitle, icon: Icon, trend, color = 'cyan' }) => {
  const colorMap = {
    cyan: 'from-cyan-500/20 to-blue-500/5 text-cyan-400 border-cyan-500/30 icon-cyan',
    emerald: 'from-emerald-500/20 to-teal-500/5 text-emerald-400 border-emerald-500/30 icon-emerald',
    purple: 'from-purple-500/20 to-pink-500/5 text-purple-400 border-purple-500/30 icon-purple',
    amber: 'from-amber-500/20 to-orange-500/5 text-amber-400 border-amber-500/30 icon-amber',
  };

  const selectedColor = colorMap[color] || colorMap.cyan;

  return (
    <div className="glass-card glass-card-hover rounded-2xl p-5 border border-slate-800 relative overflow-hidden">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{title}</p>
          <h3 className="text-2xl font-extrabold text-slate-100 mt-1.5 tracking-tight">{value}</h3>
          {subtitle && <p className="text-xs text-slate-400 mt-1">{subtitle}</p>}
        </div>
        {Icon && (
          <div className={`p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 shadow-inner`}>
            <Icon className="w-5 h-5 text-cyan-400" />
          </div>
        )}
      </div>
      {trend && (
        <div className="mt-3 pt-2.5 border-t border-slate-800/60 flex items-center text-xs">
          <span className="text-emerald-400 font-medium">{trend}</span>
          <span className="text-slate-400 ml-1.5">vs baseline</span>
        </div>
      )}
    </div>
  );
};

export default StatCard;
