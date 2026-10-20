import React from 'react';
import {
  Layers,
  Compass,
  Cpu,
  Atom,
  FileText,
  Globe,
  RotateCcw,
  Github,
  PanelLeft,
  PanelRight
} from 'lucide-react';

const REPO_URL = 'https://github.com/0xrphl/parker-solar-probe-mission-3D-dashboard-analysis';
const DRIVE_DOCX_URL = 'https://docs.google.com/document/d/1b7eNMyO5pENDptTPzfeo3wBvgB3_d09c/edit?usp=sharing&ouid=102220368577968794134&rtpof=true&sd=true';

export const Header = ({
  lang,
  setLang,
  mode,
  setMode,
  t,
  onOpenBlueprints,
  onResetCamera,
  leftCollapsed,
  setLeftCollapsed,
  rightCollapsed,
  setRightCollapsed
}) => {
  const navModes = [
    { id: 'spacecraft', label: t.modes.spacecraft, icon: Cpu },
    { id: 'sunAtmosphere', label: t.modes.sunAtmosphere, icon: Layers },
    { id: 'trajectory', label: t.modes.trajectory, icon: Compass },
    { id: 'atomicMaterials', label: t.modes.atomicMaterials, icon: Atom }
  ];

  return (
    <header className="h-16 border-b border-space-700 bg-space-950/95 backdrop-blur-md px-4 flex items-center justify-between z-30 select-none">
      <div className="flex items-center gap-3">
        <div className="relative flex items-center justify-center w-12 h-11 rounded-xl bg-space-900 border border-space-700 p-1 shadow-inner">
          <img
            src="/nasa-6.png"
            alt="NASA Logo"
            className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(255,145,0,0.4)]"
          />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-sm lg:text-base font-bold tracking-wider text-slate-100 glow-solar">
              PARKER SOLAR PROBE
            </h1>
            <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-solar-flare/20 text-solar-gold border border-solar-flare/40">
              NASA / JHU APL · SOTA
            </span>
          </div>
          <p className="text-[11px] text-slate-400 font-mono hidden sm:block">
            {t.appSubtitle}
          </p>
        </div>
      </div>

      {/* 4 Primary 3D Viewport Modes */}
      <nav className="hidden lg:flex items-center gap-1 bg-space-900/90 p-1 rounded-xl border border-space-700/80">
        {navModes.map((m) => {
          const Icon = m.icon;
          const active = mode === m.id;
          return (
            <button
              key={m.id}
              onClick={() => setMode(m.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                active
                  ? 'bg-solar-corona text-space-950 font-bold shadow-md shadow-solar-corona/30'
                  : 'text-slate-300 hover:text-white hover:bg-space-800'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{m.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Actions and Bilingual Switcher (Spanish by default) */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setLeftCollapsed(!leftCollapsed)}
          className={`p-2 rounded-lg text-xs font-mono border transition-all ${
            !leftCollapsed
              ? 'bg-solar-gold/20 text-solar-gold border-solar-gold/50'
              : 'bg-space-800 text-slate-400 hover:text-white border-space-700'
          }`}
          title={leftCollapsed ? 'Abrir panel izquierdo' : 'Cerrar panel izquierdo'}
        >
          <PanelLeft className="w-4 h-4" />
        </button>

        <a
          href={REPO_URL}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-space-800 hover:bg-space-700 text-slate-200 hover:text-white border border-space-600 hover:border-slate-400 shadow-sm transition-all"
          title="Ver código fuente en GitHub"
        >
          <Github className="w-3.5 h-3.5 text-solar-gold" />
          <span className="hidden sm:inline">GitHub</span>
        </a>

        <a
          href={DRIVE_DOCX_URL}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-emerald-900/50 hover:bg-emerald-800/70 text-emerald-300 border border-emerald-400/50 shadow-sm transition-all"
          title="Abrir documento DOCX en Google Drive"
        >
          <FileText className="w-3.5 h-3.5" />
          <span className="hidden md:inline">{lang === 'es' ? 'Informe Drive (.DOCX)' : 'Drive Report (.DOCX)'}</span>
        </a>

        <button
          onClick={onOpenBlueprints}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-space-800 hover:bg-space-700 text-solar-cyan border border-solar-cyan/40 shadow-sm shadow-solar-cyan/20 transition-all"
        >
          <FileText className="w-3.5 h-3.5" />
          <span className="hidden xl:inline">{t.blueprintsBtn}</span>
        </button>

        <button
          onClick={onResetCamera}
          className="p-2 rounded-lg text-xs font-mono bg-space-800 hover:bg-space-700 text-slate-300 border border-space-700 hover:text-white transition-all"
          title={t.resetCamera}
        >
          <RotateCcw className="w-4 h-4" />
        </button>

        <button
          onClick={() => setRightCollapsed(!rightCollapsed)}
          className={`p-2 rounded-lg text-xs font-mono border transition-all ${
            !rightCollapsed
              ? 'bg-solar-gold/20 text-solar-gold border-solar-gold/50'
              : 'bg-space-800 text-slate-400 hover:text-white border-space-700'
          }`}
          title={rightCollapsed ? 'Abrir panel derecho' : 'Cerrar panel derecho'}
        >
          <PanelRight className="w-4 h-4" />
        </button>

        <button
          onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-gradient-to-r from-solar-flare/20 to-solar-corona/20 hover:from-solar-flare/40 hover:to-solar-corona/40 text-solar-gold border border-solar-gold/40 shadow-sm transition-all"
        >
          <Globe className="w-3.5 h-3.5" />
          <span>{lang === 'es' ? 'ES → EN' : 'EN → ES'}</span>
          <span className="text-[10px] text-slate-300">({lang === 'es' ? 'SPA' : 'ENG'})</span>
        </button>
      </div>
    </header>
  );
};
