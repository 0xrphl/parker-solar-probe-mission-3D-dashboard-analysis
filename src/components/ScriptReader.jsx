import React, { useState } from 'react';

export const ScriptReader = ({ t }) => {
  const [activeScriptIdx, setActiveScriptIdx] = useState(0);

  return (
    <div className="space-y-3">
      <div className="p-2.5 rounded-xl bg-space-900/70 border border-space-700 text-xs">
        <h4 className="font-bold text-solar-gold mb-1">{t.transcriptTitle}</h4>
        <p className="text-[11px] text-slate-400">
          Traducción completa fiel y sincronizada de los testimonios de ingeniería.
        </p>
      </div>
      {t.script.map((item, idx) => {
        const isActive = activeScriptIdx === idx;
        const isBetsy = item.speaker.includes('Betsy');
        return (
          <div
            key={idx}
            onClick={() => setActiveScriptIdx(idx)}
            className={`p-3 rounded-xl border cursor-pointer transition-all ${
              isActive
                ? 'bg-space-800/90 border-solar-corona shadow-md'
                : 'bg-space-900/40 border-space-800/70 hover:border-space-700'
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className={`text-[11px] font-mono font-bold ${isBetsy ? 'text-solar-cyan' : 'text-solar-gold'}`}>
                {item.speaker}
              </span>
              <span className="text-[10px] font-mono text-slate-500">0{idx + 1}</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-200">{item.text}</p>
          </div>
        );
      })}
    </div>
  );
};
