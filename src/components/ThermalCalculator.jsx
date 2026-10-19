import React, { useState } from 'react';
import { Flame, Shield, Droplets, Gauge } from 'lucide-react';
import { KatexLine } from './KatexLine.jsx';

export const ThermalCalculator = ({ t }) => {
  const [distanceR, setDistanceR] = useState(8.86);

  // Physical calculations
  // 1 AU = 215 R_sun. At 1 AU, flux = 1361 W/m^2.
  // Flux(r) = 1361 * (215 / distanceR)^2
  const solarConstant = 1361; // W/m^2
  const r_au = distanceR / 215;
  const incidentFlux = solarConstant / (r_au * r_au); // W/m^2
  const fluxEarthMultiplier = (incidentFlux / solarConstant).toFixed(0);

  // Equilibrium front temperature with alpha=0.18, eps=0.86, sigma=5.67e-8
  // T_front = [ (alpha * Flux) / (eps * sigma) ]^(1/4)
  const alpha = 0.18;
  const eps = 0.86;
  const sigma = 5.670374e-8;
  const tKelvin = Math.pow((alpha * incidentFlux) / (eps * sigma), 0.25);
  const tCelsius = Math.round(tKelvin - 273.15);

  // Back temperature through 11.4 cm Ultramet foam
  // Solid + radiative conduction drop
  const tBackCelsius = Math.round(Math.max(20, Math.min(35, 15 + (tCelsius / 1370) * 15)));

  // Water coolant mass flow rate required to reject solar array parasitic heat
  // Q_dot ~ 450 W array heat -> m_dot = Q_dot / (Cp * DeltaT), Cp=4184 J/kg-K, DeltaT=15 K
  const heatArray = (incidentFlux / 650000) * 550; // Watts
  const waterFlowGramsPerSec = ((heatArray / (4184 * 15)) * 1000).toFixed(2); // g/s

  return (
    <div className="p-3.5 rounded-2xl bg-space-900/80 border border-space-700/80 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Gauge className="w-4 h-4 text-solar-corona" />
          <h4 className="text-xs font-bold text-slate-100">{t.calcTitle}</h4>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-solar-flare/20 text-solar-gold border border-solar-flare/40">
          SOLVER ESTADO ESTABLE
        </span>
      </div>

      <div className="space-y-1.5">
        <div className="flex justify-between text-xs font-mono">
          <span className="text-slate-400">{t.calcDistance}:</span>
          <span className="font-bold text-solar-gold">{distanceR} R☉ ({ (distanceR * 0.696).toFixed(2) }M km)</span>
        </div>
        <input
          type="range"
          min="8.86"
          max="120"
          step="0.5"
          value={distanceR}
          onChange={(e) => setDistanceR(parseFloat(e.target.value))}
          className="w-full accent-solar-corona cursor-pointer"
        />
        <div className="flex justify-between text-[10px] font-mono text-slate-500">
          <span>Perihelio (8.86 R☉)</span>
          <span>Venus (155 R☉)</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="p-2.5 rounded-xl bg-space-950 border border-space-800">
          <div className="flex items-center gap-1.5 text-solar-flare mb-1">
            <Flame className="w-3.5 h-3.5" />
            <span className="text-[10px] font-mono uppercase">Escudo Frontal</span>
          </div>
          <p className="text-base font-bold text-white">{tCelsius} °C</p>
          <p className="text-[10px] text-slate-400 font-mono">{(incidentFlux / 1000).toFixed(1)} kW/m²</p>
          <p className="text-[9px] text-solar-gold font-mono">{fluxEarthMultiplier}x {t.solarFluxEquiv}</p>
        </div>

        <div className="p-2.5 rounded-xl bg-space-950 border border-space-800">
          <div className="flex items-center gap-1.5 text-solar-cyan mb-1">
            <Shield className="w-3.5 h-3.5" />
            <span className="text-[10px] font-mono uppercase">Bus Posterior</span>
          </div>
          <p className="text-base font-bold text-emerald-400">+{tBackCelsius} °C</p>
          <p className="text-[10px] text-slate-400 font-mono">ΔT = {tCelsius - tBackCelsius} °C</p>
          <p className="text-[9px] text-emerald-400 font-mono">{t.safeRange}</p>
        </div>
      </div>

      <div className="p-2.5 rounded-xl bg-space-950 border border-space-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Droplets className="w-4 h-4 text-solar-cyan" />
          <div>
            <p className="text-xs font-semibold text-slate-200">Refrigeración H2O</p>
            <p className="text-[10px] text-slate-400 font-mono">Bucle activo presurizado</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs font-bold text-solar-cyan">{waterFlowGramsPerSec} g/s</p>
          <p className="text-[9px] text-slate-500 font-mono">Rechazo: {Math.round(heatArray)} W</p>
        </div>
      </div>

      <div className="p-2 rounded-xl bg-space-950 border border-space-800 text-solar-gold overflow-x-auto">
        <KatexLine tex={`T_s = \\left(\\frac{\\alpha_s S_0 (215/R_\\odot)^2}{\\varepsilon\\sigma}\\right)^{1/4} = ${tCelsius}^\\circ\\text{C}`} />
      </div>
    </div>
  );
};
