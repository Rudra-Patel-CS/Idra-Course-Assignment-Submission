import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingState = ({ message = "Loading data science analytics..." }) => {
  return (
    <div className="flex flex-col items-center justify-center p-12 space-y-3 min-h-[300px]">
      <Loader2 className="w-8 h-8 text-cyan-400 animate-spin" />
      <p className="text-sm font-medium text-slate-300 animate-pulse">{message}</p>
    </div>
  );
};

export default LoadingState;
