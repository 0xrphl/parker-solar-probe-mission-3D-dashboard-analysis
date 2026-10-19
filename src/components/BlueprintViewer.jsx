import React from 'react';
import { ZoomIn } from 'lucide-react';

export const BlueprintViewer = ({ currentBp }) => {
  return (
    <div className="lg:col-span-8 flex flex-col items-center justify-center p-3 rounded-2xl bg-space-900/60 border border-space-800 relative group min-h-[350px]">
      <img
        src={currentBp.file}
        alt={currentBp.title}
        className="max-h-[60vh] max-w-full object-contain rounded-xl shadow-2xl transition-transform duration-300 group-hover:scale-[1.01]"
      />
      <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md text-xs font-mono text-slate-300 border border-white/10">
        <ZoomIn className="w-3.5 h-3.5 text-solar-gold" />
        <span>Alta Resolución Original</span>
      </div>
    </div>
  );
};
