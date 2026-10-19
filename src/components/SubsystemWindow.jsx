import React from 'react';
import { X, ExternalLink, Cpu } from 'lucide-react';
import { KatexLine } from './KatexLine.jsx';
import { HardwareSchematicSVG } from './HardwareSchematicSVG.jsx';

export const SubsystemWindow = ({
  subsystemId,
  data,
  onClose,
  lang
}) => {
  if (!data) return null;
  const d = data[lang] || data.en;

  return (
    <div
      className="absolute top-3 right-3 z-40 w-[94vw] sm:w-[460px] max-h-[calc(100vh-5.5rem)] overflow-y-auto rounded-2xl border border-solar-gold/50 bg-space-950/95 backdrop-blur-2xl shadow-2xl shadow-black/90 select-text"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="sticky top-0 z-10 flex items-start justify-between p-3.5 border-b border-space-800 bg-space-900/95 backdrop-blur-md rounded-t-2xl gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-0.5">
            <Cpu className="w-3.5 h-3.5 text-solar-cyan" />
            <span className="text-[9px] font-mono uppercase tracking-widest text-solar-cyan">
              NASA / APL · STEADY STATE SPECS
            </span>
          </div>
          <h3 className="text-xs sm:text-sm font-bold text-solar-gold leading-snug">{d.title}</h3>
        </div>
        <button
          onClick={onClose}
          className="shrink-0 p-1.5 rounded-lg bg-space-800 hover:bg-red-900/70 border border-space-700 text-slate-300 hover:text-white transition-all"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="p-3 bg-space-900/60 border-b border-space-800 space-y-2.5">
        <HardwareSchematicSVG subsystemId={subsystemId} lang={lang} />
        {d.blueprintImage && (
          <div className="relative">
            <img
              src={d.blueprintImage}
              alt={d.title}
              className="w-full max-h-36 object-contain rounded-lg border border-space-700 bg-black/50 shadow-md"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <span className="absolute bottom-1.5 right-2 text-[8px] font-mono text-solar-gold bg-black/80 px-1.5 py-0.5 rounded border border-solar-gold/30">
              COMPLEMENTARY_VIDEO_IMGS
            </span>
          </div>
        )}
      </div>

      {d.latex && (
        <div className="p-3.5 border-b border-space-800 bg-space-950/80">
          <div className="text-[9px] font-mono uppercase text-solar-corona mb-1.5 tracking-wider">
            {lang === 'es' ? 'Ecuación de Transferencia / Física (LaTeX):' : 'Heat Transfer / Physics Equation (LaTeX):'}
          </div>
          <div className="p-2.5 rounded-xl bg-space-900 border border-solar-gold/30 overflow-x-auto text-solar-gold">
            <KatexLine tex={d.latex} block />
          </div>
          {d.latexCaption && (
            <p className="text-[10px] text-slate-400 mt-1 italic">{d.latexCaption}</p>
          )}
        </div>
      )}

      <div className="p-3.5 border-b border-space-800">
        <p className="text-[11px] text-slate-200 leading-relaxed whitespace-pre-line">{d.desc}</p>
      </div>

      <div className="p-3.5 border-b border-space-800">
        <div className="text-[9px] font-mono uppercase text-slate-400 mb-2 tracking-wider">
          {lang === 'es' ? 'Especificaciones Técnicas:' : 'Technical Specifications:'}
        </div>
        <div className="space-y-1">
          {d.specs.map((s, i) => (
            <div key={i} className="flex items-start justify-between gap-2 text-[11px] border-b border-space-800/50 pb-1">
              <span className="font-bold text-solar-cyan shrink-0">{s.k}:</span>
              <span className="text-slate-200 font-mono text-right">{s.v}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="px-3.5 py-2.5 rounded-b-2xl bg-space-900/70 flex items-center gap-1.5">
        <ExternalLink className="w-3 h-3 text-slate-500 shrink-0" />
        <span className="text-[9px] font-mono text-slate-400 truncate">{d.source}</span>
      </div>
    </div>
  );
};
