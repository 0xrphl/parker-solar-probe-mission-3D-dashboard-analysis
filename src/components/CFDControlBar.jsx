import React from 'react';
import { X, Flame, Thermometer, Zap } from 'lucide-react';
import { KatexLine } from './KatexLine.jsx';
import { SOLAR_LAYER_DATA } from '../scene/SunAtmosphere.jsx';
import { FLYBY_DVS } from '../scene/VenusAssists.jsx';

export const CFDControlBar = ({
  cfdMode,
  setCfdMode,
  activeSolarLayer,
  onCloseSolarLayer,
  activeFlyby,
  onCloseFlyby,
  lang = 'es',
  mode = 'spacecraft',
  panelAngle = 55,
  setPanelAngle,
  autoAnimatePanels = true,
  setAutoAnimatePanels,
  showRadRays = true,
  setShowRadRays
}) => {
  const isES = lang === 'es';
  const layerObj = SOLAR_LAYER_DATA.find((l) => l.id === activeSolarLayer);
  const estPowerW = Math.round(388 + (80 - panelAngle) * 4.2);
  const estTempC = Math.round(62 + (80 - panelAngle) * 1.45);

  return (
    <>
      <div className="absolute top-3 left-3 z-30 flex flex-col gap-1.5 bg-space-950/90 border border-space-700/80 backdrop-blur-xl p-2 rounded-2xl shadow-xl">
        <div className="flex items-center gap-1">
          {[
            { id: 'natural', label: 'Natural', icon: Flame, cls: 'bg-solar-gold text-space-950' },
            { id: 'temp', label: 'CFD T(r)', icon: Thermometer, cls: 'bg-solar-flare text-white' },
            { id: 'flux', label: 'CFD |q|', icon: Zap, cls: 'bg-solar-cyan text-space-950' }
          ].map((b) => {
            const Icon = b.icon;
            return (
              <button
                key={b.id}
                onClick={() => setCfdMode(b.id)}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold transition-all ${
                  cfdMode === b.id ? b.cls : 'text-slate-300 hover:bg-space-800'
                }`}
              >
                <Icon className="w-3 h-3" />
                <span>{b.label}</span>
              </button>
            );
          })}
        </div>

        {cfdMode !== 'natural' && (
          <div className="space-y-1 pt-1 border-t border-space-800">
            <div className="h-2 w-full rounded-full bg-gradient-to-r from-emerald-500 via-blue-500 via-amber-400 to-rose-600" />
            <div className="flex justify-between text-[9px] font-mono text-slate-300 gap-2">
              {cfdMode === 'temp' ? (
                <><span>30°C</span><span>5,778 K</span><span>1.5×10⁷ K</span></>
              ) : (
                <><span>0.02 W/m²</span><span>650 kW/m²</span><span>63 MW/m²</span></>
              )}
            </div>
          </div>
        )}

        {/* Spacecraft Solar Array Umbra Retraction Slider & Perpendicular Radiation Toggle */}
        {mode === 'spacecraft' && (
          <div className="pt-1.5 border-t border-space-800 space-y-1.5 w-64">
            <div className="flex items-center justify-between text-[10px] font-mono">
              <span className="text-solar-cyan font-bold">
                {isES ? `Ángulo Alas Umbra: ${panelAngle}°` : `Umbra Wing Angle: ${panelAngle}°`}
              </span>
              <button
                onClick={() => setAutoAnimatePanels(!autoAnimatePanels)}
                className={`px-1.5 py-0.5 rounded text-[9px] font-bold border ${
                  autoAnimatePanels
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400/50'
                    : 'bg-space-800 text-slate-400 border-space-700'
                }`}
              >
                {autoAnimatePanels ? 'AUTO ON' : 'MANUAL'}
              </button>
            </div>
            <input
              type="range"
              min="10"
              max="82"
              value={panelAngle}
              onChange={(e) => {
                setAutoAnimatePanels(false);
                setPanelAngle(Number(e.target.value));
              }}
              className="w-full accent-solar-cyan cursor-pointer h-1.5"
            />
            <div className="flex items-center justify-between text-[9px] font-mono text-slate-300">
              <span>⚡ {estPowerW} W</span>
              <span className={estTempC > 110 ? 'text-red-400 font-bold' : 'text-emerald-400'}>
                🌡 Celda: {estTempC}°C (H₂O)
              </span>
            </div>
            <button
              onClick={() => setShowRadRays(!showRadRays)}
              className={`w-full py-1 rounded-lg text-[10px] font-mono font-bold border transition-all ${
                showRadRays
                  ? 'bg-solar-gold/20 text-solar-gold border-solar-gold/50'
                  : 'bg-space-900 text-slate-400 border-space-700'
              }`}
            >
              {showRadRays
                ? (isES ? '☀ Líneas Radiación ⊥ TPS: ACTIVAS' : '☀ ⊥ TPS Radiation Lines: ON')
                : (isES ? '☀ Líneas Radiación ⊥ TPS: OCULTAS' : '☀ ⊥ TPS Radiation Lines: OFF')}
            </button>
          </div>
        )}
      </div>

      {layerObj && (
        <div
          className="absolute top-3 right-3 z-40 w-[92vw] sm:w-[410px] max-h-[calc(100vh-5.5rem)] overflow-y-auto rounded-2xl border border-solar-gold/50 bg-space-950/95 backdrop-blur-2xl shadow-2xl p-4 space-y-2.5 select-text"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-start justify-between border-b border-space-800 pb-2">
            <div>
              <span className="text-[9px] font-mono uppercase text-solar-cyan">
                {isES ? 'ANÁLISIS CFD SOLAR EN CORTE' : 'SPLIT CUTAWAY SOLAR CFD'}
              </span>
              <h4 className="text-sm font-bold text-solar-gold">{isES ? layerObj.labelES : layerObj.labelEN}</h4>
              <p className="text-[11px] font-mono text-slate-300">{layerObj.detail}</p>
            </div>
            <button onClick={onCloseSolarLayer} className="p-1.5 rounded-lg bg-space-800 hover:bg-red-900/70 text-slate-300">
              <X className="w-4 h-4" />
            </button>
          </div>
          <img src={layerObj.img} alt={layerObj.id} className="w-full max-h-32 object-contain rounded-xl border border-space-700 bg-black/50" />
          <div className="p-2 rounded-xl bg-space-900 border border-solar-gold/30 overflow-x-auto text-solar-gold">
            <KatexLine tex={layerObj.latex} block />
          </div>
          <p className="text-xs text-slate-200 leading-relaxed">{isES ? layerObj.descES : layerObj.descEN}</p>
        </div>
      )}

      {activeFlyby !== null && activeFlyby !== undefined && (
        <div
          className="absolute top-3 right-3 z-40 w-[92vw] sm:w-[410px] max-h-[calc(100vh-5.5rem)] overflow-y-auto rounded-2xl border border-amber-400/50 bg-space-950/95 backdrop-blur-2xl shadow-2xl p-4 space-y-2.5 select-text"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-start justify-between border-b border-space-800 pb-2">
            <div>
              <span className="text-[9px] font-mono uppercase text-solar-cyan">
                {isES ? 'MECÁNICA ORBITAL & ASISTENCIA' : 'ORBITAL MECHANICS & ASSIST'}
              </span>
              <h4 className="text-sm font-bold text-amber-300">
                {isES ? `Asistencia Venus #${activeFlyby + 1}` : `Venus Gravity Assist #${activeFlyby + 1}`}
              </h4>
            </div>
            <button onClick={onCloseFlyby} className="p-1.5 rounded-lg bg-space-800 hover:bg-red-900/70 text-slate-300">
              <X className="w-4 h-4" />
            </button>
          </div>
          <img src="/blueprints/delta v for elliptical transfer of orbit model.png" alt="Delta V" className="w-full max-h-32 object-contain rounded-xl border border-space-700 bg-black/50" />
          <div className="p-2 rounded-xl bg-space-900 border border-amber-400/30 overflow-x-auto text-solar-gold">
            <KatexLine
              tex={`\\Delta v_1 = \\sqrt{\\frac{\\mu_\\odot}{r_1}}\\!\\left(1 - \\sqrt{\\frac{2r_2}{r_1+r_2}}\\right) = 21.4\\,\\text{km/s};\\quad \\Delta v_{\\#${activeFlyby + 1}} \\approx -${FLYBY_DVS[activeFlyby]}\\,\\text{km/s}`}
              block
            />
          </div>
          <p className="text-xs text-slate-200 leading-relaxed">
            {isES
              ? 'La Tierra orbita a 30 km/s. Para caer a 8.86 R☉ (6.16M km), Parker cede 21.4 km/s con Delta IV Heavy + Star 48BV y 7 asistencias en Venus.'
              : 'Earth orbits at 30 km/s. To drop to 8.86 R☉ (6.16M km), Parker sheds 21.4 km/s via Delta IV Heavy + Star 48BV and 7 Venus gravity assists.'}
          </p>
        </div>
      )}
    </>
  );
};
