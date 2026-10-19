import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, FileText } from 'lucide-react';
import { BlueprintViewer } from './BlueprintViewer.jsx';
import { BlueprintSidebar } from './BlueprintSidebar.jsx';

export const BlueprintModal = ({ isOpen, onClose, blueprints, t }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  if (!isOpen) return null;

  const currentBp = blueprints[currentIdx] || blueprints[0];

  const handleNext = () => setCurrentIdx((prev) => (prev + 1) % blueprints.length);
  const handlePrev = () => setCurrentIdx((prev) => (prev - 1 + blueprints.length) % blueprints.length);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-6xl max-h-[92vh] bg-space-950 border border-space-700 rounded-3xl shadow-2xl flex flex-col overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-space-800 bg-space-900/80">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-solar-cyan/20 border border-solar-cyan/40 text-solar-cyan">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-slate-100">{currentBp.title}</h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-space-800 text-solar-gold border border-space-700">
                  {currentBp.tag}
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono">
                Esquemático {currentIdx + 1} de {blueprints.length} — Archivos Complementarios
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-space-800/80 p-1 rounded-xl border border-space-700 mr-2">
              <button
                onClick={handlePrev}
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-space-700 transition-all"
                title={t.prev}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono px-2 text-solar-cyan">
                {currentIdx + 1}/{blueprints.length}
              </span>
              <button
                onClick={handleNext}
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-space-700 transition-all"
                title={t.next}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-space-800 hover:bg-space-700 border border-space-700 text-slate-300 hover:text-white transition-all"
              title={t.close}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 gap-6 p-6">
          <BlueprintViewer currentBp={currentBp} />
          <BlueprintSidebar
            currentBp={currentBp}
            blueprints={blueprints}
            currentIdx={currentIdx}
            setCurrentIdx={setCurrentIdx}
          />
        </div>
      </div>
    </div>
  );
};
