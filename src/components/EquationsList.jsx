import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { KatexLine } from './KatexLine.jsx';

export const EquationsList = ({ equations }) => {
  const [expandedId, setExpandedId] = useState(equations[0]?.id || 'rad-balance');

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">
          Formulación de Estado Estable
        </span>
        <span className="text-[10px] font-mono text-solar-corona">9 Ecuaciones</span>
      </div>

      {equations.map((eq) => {
        const isExpanded = expandedId === eq.id;
        return (
          <div
            key={eq.id}
            className={`rounded-xl border transition-all ${
              isExpanded
                ? 'bg-space-900/90 border-solar-gold/50 shadow-lg shadow-solar-gold/10'
                : 'bg-space-900/40 border-space-800 hover:border-space-700'
            }`}
          >
            <button
              onClick={() => setExpandedId(isExpanded ? null : eq.id)}
              className="w-full text-left p-3 flex items-center justify-between gap-2"
            >
              <div>
                <span className="text-[10px] font-mono text-solar-cyan uppercase">
                  {eq.category}
                </span>
                <h4 className="text-xs font-bold text-slate-100">{eq.title}</h4>
              </div>
              {isExpanded ? (
                <ChevronUp className="w-4 h-4 text-solar-gold shrink-0" />
              ) : (
                <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
              )}
            </button>

            {isExpanded && (
              <div className="px-3 pb-3 pt-1 border-t border-space-800/80 space-y-2.5">
                <div className="p-2.5 rounded-lg bg-space-950 border border-space-800 overflow-x-auto">
                  {eq.latex
                    ? <KatexLine tex={eq.latex} block className="text-solar-gold text-sm" />
                    : <code className="text-solar-gold font-mono text-xs">{eq.formula}</code>
                  }
                </div>

                <div className="space-y-1">
                  <p className="text-[10px] font-mono uppercase text-slate-400">
                    Variables:
                  </p>
                  <ul className="space-y-1 text-[11px] font-mono text-slate-300">
                    {eq.variables.map((v, i) => (
                      <li key={i} className="flex gap-2 items-start">
                        <span className="text-solar-cyan font-bold shrink-0">
                          <KatexLine tex={v.sym} />:
                        </span>
                        <span className="text-slate-300">{v.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-2 rounded-lg bg-space-800/50 border border-space-700/60 text-[11px] text-slate-300 leading-relaxed">
                  <span className="font-bold text-solar-gold">Fundamento Físico: </span>
                  {eq.insight}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
