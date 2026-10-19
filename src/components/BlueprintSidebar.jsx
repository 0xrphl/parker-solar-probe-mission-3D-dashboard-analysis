import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const BlueprintSidebar = ({ currentBp, blueprints, currentIdx, setCurrentIdx }) => {
  return (
    <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
      <div className="space-y-4">
        <div className="p-4 rounded-2xl bg-space-900/80 border border-space-800 space-y-2">
          <span className="text-[10px] font-mono uppercase text-solar-corona tracking-wider">
            Análisis de Ingeniería Aeroespacial
          </span>
          <p className="text-xs text-slate-200 leading-relaxed">
            {currentBp.desc}
          </p>
        </div>

        <div className="space-y-2">
          <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">
            Puntos Críticos de Diseño
          </span>
          <div className="space-y-2">
            {currentBp.highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-space-900/40 border border-space-800 flex items-start gap-2.5"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-space-800 flex gap-2 overflow-x-auto pb-1">
        {blueprints.map((bp, i) => (
          <button
            key={bp.id}
            onClick={() => setCurrentIdx(i)}
            className={`h-12 w-16 rounded-lg overflow-hidden border shrink-0 transition-all ${
              currentIdx === i
                ? 'border-solar-corona ring-2 ring-solar-corona/30 scale-105'
                : 'border-space-800 opacity-60 hover:opacity-100'
            }`}
          >
            <img src={bp.file} alt={bp.title} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};
