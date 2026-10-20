import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { SubsystemsList } from './SubsystemsList.jsx';
import { ScriptReader } from './ScriptReader.jsx';

export const LeftSidebar = ({
  t,
  mode,
  setMode,
  selectedSubsystem,
  setSelectedSubsystem,
  selectedAtmosphereLayer,
  setSelectedAtmosphereLayer,
  collapsed,
  setCollapsed
}) => {
  const [activeTab, setActiveTab] = useState('subsystems');

  if (collapsed) {
    return (
      <button
        onClick={() => setCollapsed(false)}
        className="absolute top-1/2 -translate-y-1/2 left-0 z-50 py-3.5 px-2 rounded-r-2xl bg-space-900/95 border-y border-r border-solar-gold/70 text-solar-gold hover:bg-space-800 hover:pl-3 shadow-2xl shadow-black/80 transition-all flex items-center gap-1.5 font-mono text-xs font-bold"
        title="Abrir panel de subsistemas"
      >
        <ChevronRight className="w-4 h-4" />
        <span className="[writing-mode:vertical-rl] rotate-180 text-[10px] uppercase tracking-wider">
          Subsistemas
        </span>
      </button>
    );
  }

  return (
    <aside className="w-80 lg:w-[350px] shrink-0 h-[calc(100vh-4rem)] bg-space-950/95 backdrop-blur-xl border-r border-space-800 flex flex-col z-20 transition-all select-none overflow-hidden">
      <div className="flex items-center justify-between p-3 border-b border-space-800 bg-space-900/60">
        <div className="flex gap-1.5">
          {['subsystems', 'script', 'layers'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold font-mono uppercase transition-all ${
                activeTab === tab
                  ? 'bg-solar-corona text-space-950'
                  : 'text-slate-400 hover:text-white hover:bg-space-800'
              }`}
            >
              {tab === 'subsystems' ? 'Subsistemas' : tab === 'script' ? 'Guion' : 'Capas'}
            </button>
          ))}
        </div>
        <button
          onClick={() => setCollapsed(true)}
          className="p-1 rounded-lg hover:bg-space-800 text-slate-400 hover:text-white"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {activeTab === 'subsystems' && (
          <SubsystemsList
            t={t}
            selectedSubsystem={selectedSubsystem}
            setSelectedSubsystem={setSelectedSubsystem}
            setMode={setMode}
          />
        )}

        {activeTab === 'script' && <ScriptReader t={t} />}

        {activeTab === 'layers' && (
          <div className="space-y-3">
            <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">
              Capas y Órbitas Heliocéntricas
            </span>
            {[
              { id: 'photosphere', name: t.layers.photosphere, desc: t.layers.photosphereDesc },
              { id: 'chromosphere', name: t.layers.chromosphere, desc: t.layers.chromosphereDesc },
              { id: 'corona', name: t.layers.corona, desc: t.layers.coronaDesc },
              { id: 'earth', name: t.layers.earthOrbit, desc: 'Punto de partida (150M km).' },
              { id: 'venus', name: t.layers.venusOrbit, desc: '7 maniobras de frenado orbital.' },
              { id: 'parker', name: t.layers.parkerOrbit, desc: 'Perihelio récord (6.16M km).' }
            ].map((layer) => (
              <div
                key={layer.id}
                onClick={() => {
                  setSelectedAtmosphereLayer(layer.id);
                  setMode(['earth', 'venus', 'parker'].includes(layer.id) ? 'trajectory' : 'sunAtmosphere');
                }}
                className={`p-3 rounded-xl border cursor-pointer transition-all ${
                  selectedAtmosphereLayer === layer.id
                    ? 'bg-space-800 border-solar-gold shadow-lg'
                    : 'bg-space-900/40 border-space-800 hover:border-space-700'
                }`}
              >
                <p className="text-xs font-bold text-slate-100">{layer.name}</p>
                <p className="text-[11px] text-slate-400 mt-1">{layer.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
};
