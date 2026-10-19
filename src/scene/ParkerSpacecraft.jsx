import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { TPSHeatShield } from './TPSHeatShield.jsx';
import { TitaniumTruss } from './TitaniumTruss.jsx';
import { SolarArrays } from './SolarArrays.jsx';
import { ScientificPayload } from './ScientificPayload.jsx';
import { UmbraShadowCone } from './UmbraShadowCone.jsx';

import { SolarRadiationRays } from './SolarRadiationRays.jsx';

const HotspotLabel = ({ position, label, color, onClick, isSelected }) => (
  <Html position={position} center distanceFactor={11} zIndexRange={[10, 0]}>
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className={`px-2.5 py-1 rounded-lg font-mono text-[10px] font-bold whitespace-nowrap cursor-pointer shadow-lg hover:scale-110 transition-all select-none border ${color} ${
        isSelected ? 'ring-2 ring-white scale-110' : 'opacity-90 hover:opacity-100'
      }`}
    >
      {label}
    </button>
  </Html>
);

export const ParkerSpacecraft = ({
  selectedSubsystem,
  onSelectSubsystem,
  cfdMode = 'natural',
  hideTags = false,
  lang = 'es',
  panelAngle = 58,
  autoAnimatePanels = true,
  setPanelAngle,
  showRadRays = true
}) => {
  const probeGroupRef = useRef();
  const isES = lang === 'es';

  useFrame(({ clock }, delta) => {
    if (probeGroupRef.current && !hideTags) {
      probeGroupRef.current.rotation.y += delta * 0.06;
    }
    if (autoAnimatePanels && setPanelAngle) {
      const t = clock.getElapsedTime();
      const angle = Math.round(46.5 + 31.5 * Math.sin(t * 0.85));
      setPanelAngle(angle);
    }
  });

  return (
    <group ref={probeGroupRef}>
      <SolarRadiationRays visible={showRadRays} panelAngle={panelAngle} />
      <TPSHeatShield
        isSelected={selectedSubsystem === 'heatShield'}
        cfdMode={cfdMode}
        onSelect={(e) => { e.stopPropagation(); onSelectSubsystem('heatShield'); }}
      />
      <TitaniumTruss
        isSelected={selectedSubsystem === 'titaniumTruss'}
        onSelect={(e) => { e.stopPropagation(); onSelectSubsystem('titaniumTruss'); }}
      />
      <SolarArrays
        isSelected={['waterCooling', 'solarPanels', 'radiators'].includes(selectedSubsystem)}
        panelAngle={panelAngle}
        onSelect={(e) => { e.stopPropagation(); onSelectSubsystem('waterCooling'); }}
      />
      <ScientificPayload
        selectedSubsystem={selectedSubsystem}
        onSelectSub={(id) => onSelectSubsystem(id)}
      />
      <UmbraShadowCone
        isVisible
        isSelected={selectedSubsystem === 'umbra'}
        onSelect={(e) => { e.stopPropagation(); onSelectSubsystem('umbra'); }}
      />

      {/* Sleek Single-Line 3D Callout Badges (Automatically hidden when any modal/window is open) */}
      {!hideTags && (
        <>
          <HotspotLabel
            position={[0, 1.72, 1.48]}
            label={isES ? '🛡 TPS Carbono-Carbono + Espuma 97%' : '🛡 C-C TPS + 97% Carbon Foam'}
            color="bg-solar-gold/95 text-space-950 border-white/50"
            isSelected={selectedSubsystem === 'heatShield'}
            onClick={() => onSelectSubsystem('heatShield')}
          />
          <HotspotLabel
            position={[1.25, 0.62, 0.25]}
            label={isES ? '⚡ Copa SPC (Rejilla W Cuadricular 100µm)' : '⚡ SPC Cup (100µm Quadricular W Grid)'}
            color="bg-solar-flare/95 text-white border-solar-gold/60"
            isSelected={selectedSubsystem === 'faradayCup'}
            onClick={() => onSelectSubsystem('faradayCup')}
          />
          <HotspotLabel
            position={[1.52, -0.25, 0.02]}
            label={isES ? '🔌 Cable Coaxial Nb C-103 + Zafiro' : '🔌 Nb C-103 + Sapphire Coaxial Wire'}
            color="bg-cyan-500/95 text-space-950 border-white/60"
            isSelected={selectedSubsystem === 'wireHarness'}
            onClick={() => onSelectSubsystem('wireHarness')}
          />
          <HotspotLabel
            position={[-2.25, 0.42, -0.25]}
            label={isES ? '💧 Refrigeración Activa H₂O & Paneles' : '💧 Active H₂O Cooling & PV Wings'}
            color="bg-solar-cyan/95 text-space-950 border-white/60"
            isSelected={selectedSubsystem === 'waterCooling'}
            onClick={() => onSelectSubsystem('waterCooling')}
          />
          <HotspotLabel
            position={[-1.15, 1.15, 0.95]}
            label={isES ? '📡 Antenas Niobio C-103 (FIELDS)' : '📡 Niobium C-103 Antennas (FIELDS)'}
            color="bg-indigo-600/95 text-white border-indigo-300/60"
            isSelected={selectedSubsystem === 'niobiumAntennas'}
            onClick={() => onSelectSubsystem('niobiumAntennas')}
          />
          <HotspotLabel
            position={[0, 0.95, 0.85]}
            label={isES ? '⚙ Celosía Titanio (22.7 kg Aislador)' : '⚙ Titanium Truss (22.7 kg Isolator)'}
            color="bg-slate-700/95 text-white border-slate-400/60"
            isSelected={selectedSubsystem === 'titaniumTruss'}
            onClick={() => onSelectSubsystem('titaniumTruss')}
          />
          <HotspotLabel
            position={[0.75, 0.98, 0.1]}
            label={isES ? '◼ Radiadores de Grafito (ε=0.92)' : '◼ Graphite Radiators (ε=0.92)'}
            color="bg-emerald-700/95 text-white border-emerald-300/60"
            isSelected={selectedSubsystem === 'radiators'}
            onClick={() => onSelectSubsystem('radiators')}
          />
          <HotspotLabel
            position={[0, -1.62, 0.95]}
            label={isES ? '👁 Sensores de Limbo Solar (ACSW)' : '👁 Solar Limb Sensors (ACSW)'}
            color="bg-amber-600/95 text-space-950 border-amber-200/60"
            isSelected={selectedSubsystem === 'solarSensors'}
            onClick={() => onSelectSubsystem('solarSensors')}
          />
          <HotspotLabel
            position={[0, -1.15, -1.2]}
            label={isES ? '🔘 Cono de Sombra Umbra (<30°C)' : '🔘 Umbra Shadow Cone (<30°C)'}
            color="bg-purple-700/95 text-white border-purple-300/60"
            isSelected={selectedSubsystem === 'umbra'}
            onClick={() => onSelectSubsystem('umbra')}
          />
        </>
      )}
    </group>
  );
};
