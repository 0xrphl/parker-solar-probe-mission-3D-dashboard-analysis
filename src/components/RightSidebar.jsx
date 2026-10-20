import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Layers, Atom } from 'lucide-react';
import { EquationsList } from './EquationsList.jsx';
import { ThermalCalculator } from './ThermalCalculator.jsx';

export const RightSidebar = ({
  t,
  equations,
  collapsed,
  setCollapsed
}) => {
  const [activeTab, setActiveTab] = useState('equations');

  if (collapsed) {
    return (
      <button
        onClick={() => setCollapsed(false)}
        className="absolute top-1/2 -translate-y-1/2 right-0 z-50 py-3.5 px-2 rounded-l-2xl bg-space-900/95 border-y border-l border-solar-gold/70 text-solar-gold hover:bg-space-800 hover:pr-3 shadow-2xl shadow-black/80 transition-all flex items-center gap-1.5 font-mono text-xs font-bold"
        title="Abrir panel de estado estable"
      >
        <span className="[writing-mode:vertical-rl] text-[10px] uppercase tracking-wider">
          Estado Estable
        </span>
        <ChevronLeft className="w-4 h-4" />
      </button>
    );
  }

  return (
    <aside className="w-80 lg:w-[350px] shrink-0 h-[calc(100vh-4rem)] bg-space-950/95 backdrop-blur-xl border-l border-space-800 flex flex-col z-20 transition-all select-none overflow-hidden">
      <div className="flex items-center justify-between p-3 border-b border-space-800 bg-space-900/60">
        <button
          onClick={() => setCollapsed(true)}
          className="p-1 rounded-lg hover:bg-space-800 text-slate-400 hover:text-white"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        <div className="flex gap-1.5">
          <button
            onClick={() => setActiveTab('equations')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold font-mono uppercase transition-all ${
              activeTab === 'equations'
                ? 'bg-solar-corona text-space-950'
                : 'text-slate-400 hover:text-white hover:bg-space-800'
            }`}
          >
            Estado Estable
          </button>
          <button
            onClick={() => setActiveTab('materials')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold font-mono uppercase transition-all ${
              activeTab === 'materials'
                ? 'bg-solar-corona text-space-950'
                : 'text-slate-400 hover:text-white hover:bg-space-800'
            }`}
          >
            Materiales
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Dynamic thermodynamic equilibrium calculator */}
        <ThermalCalculator t={t} />

        {activeTab === 'equations' && (
          <EquationsList equations={equations} />
        )}

        {activeTab === 'materials' && (
          <div className="space-y-3">
            <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">
              {t.materials}
            </span>
            <div className="space-y-2">
              {t.materialsList.map((mat, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-space-900/40 border border-space-800 hover:border-space-700 transition-all"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Atom className="w-3.5 h-3.5 text-solar-cyan" />
                    <h5 className="text-xs font-bold text-slate-100">{mat.name}</h5>
                  </div>
                  <p className="text-[11px] font-mono text-slate-300 pl-5">{mat.spec}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};
