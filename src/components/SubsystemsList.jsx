import React from 'react';
import { ShieldCheck, Droplets, Cpu, Radio, Eye, Cable } from 'lucide-react';

export const SubsystemsList = ({ t, selectedSubsystem, setSelectedSubsystem, setMode }) => {
  const subsystems = [
    { id: 'heatShield', label: t.heatShield, icon: ShieldCheck, color: 'text-solar-gold' },
    { id: 'faradayCup', label: t.faradayCup, icon: Cpu, color: 'text-solar-flare' },
    { id: 'wireHarness', label: t.wireHarness, icon: Cable, color: 'text-cyan-300' },
    { id: 'waterCooling', label: t.waterCooling, icon: Droplets, color: 'text-solar-cyan' },
    { id: 'titaniumTruss', label: t.titaniumTruss, icon: ShieldCheck, color: 'text-slate-300' },
    { id: 'solarSensors', label: t.solarSensors, icon: Eye, color: 'text-amber-400' },
    { id: 'niobiumAntennas', label: t.niobiumAntennas, icon: Radio, color: 'text-indigo-400' },
    { id: 'solarPanels', label: t.solarPanels, icon: Droplets, color: 'text-blue-400' },
    { id: 'radiators', label: t.radiators, icon: ShieldCheck, color: 'text-emerald-400' },
    { id: 'umbra', label: t.umbra, icon: ShieldCheck, color: 'text-purple-400' }
  ];

  return (
    <div className="space-y-2">
      <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">
        Ingeniería y Hardware ({subsystems.length} Módulos)
      </span>
      {subsystems.map((sub) => {
        const Icon = sub.icon;
        const isSelected = selectedSubsystem === sub.id;
        return (
          <button
            key={sub.id}
            onClick={() => {
              setSelectedSubsystem(sub.id);
              setMode('spacecraft');
            }}
            className={`w-full text-left p-2.5 rounded-xl border flex items-center gap-3 transition-all ${
              isSelected
                ? 'bg-space-800 border-solar-gold/60 shadow-lg text-white'
                : 'bg-space-900/50 border-space-800 text-slate-300 hover:bg-space-900'
            }`}
          >
            <div className={`p-2 rounded-lg bg-space-950 border border-space-800 ${sub.color}`}>
              <Icon className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold truncate">{sub.label}</p>
              <p className="text-[10px] text-slate-400 font-mono">
                {isSelected ? '● Estado estable activo' : 'Click para abrir ventana'}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
};
