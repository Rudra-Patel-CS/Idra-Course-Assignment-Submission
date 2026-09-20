import React from 'react';

const ChartCard = ({ title, subtitle, children, action }) => {
  return (
    <div className="glass-card rounded-2xl p-5 border border-slate-800 flex flex-col justify-between">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-bold text-slate-100 text-base">{title}</h3>
          {subtitle && <p className="text-xs text-slate-400 mt-0.5">{subtitle}</p>}
        </div>
        {action && <div>{action}</div>}
      </div>
      <div className="w-full overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default ChartCard;
