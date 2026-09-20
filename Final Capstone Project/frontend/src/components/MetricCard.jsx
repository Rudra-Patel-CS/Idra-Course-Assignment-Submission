import React from 'react';

const MetricCard = ({ label, value, badge, isPrimary }) => {
  return (
    <div className={`p-4 rounded-xl border ${isPrimary ? 'bg-cyan-500/10 border-cyan-500/30' : 'bg-slate-900/60 border-slate-800'}`}>
      <div className="flex items-center justify-between text-xs text-slate-400">
        <span>{label}</span>
        {badge && <span className="px-2 py-0.5 rounded-md bg-slate-800 text-cyan-400 font-medium">{badge}</span>}
      </div>
      <div className="text-xl font-bold text-slate-100 mt-1 font-mono">
        {typeof value === 'number' ? (value <= 1 ? (value * 100).toFixed(2) + '%' : value) : value}
      </div>
    </div>
  );
};

export default MetricCard;
