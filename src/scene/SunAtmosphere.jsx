import React from 'react';
import { Html } from '@react-three/drei';
import { SunCutawayCFD } from './SunCutawayCFD.jsx';
import { CoronalLoops } from './CoronalLoops.jsx';
import { CoronalStreamers } from './CoronalStreamers.jsx';

export const SOLAR_LAYER_DATA = [
  {
    id: 'core',
    labelES: '1. Núcleo de Fusión Solar',
    labelEN: '1. Solar Fusion Core',
    detail: '15,000,000 K · 150 g/cm³',
    pos: [0.2, 0.2, 0.9],
    color: 'bg-cyan-400/95 text-space-950 border-white',
    img: '/blueprints/sun temperature elevation.png',
    latex: '4\\,^1\\text{H} \\rightarrow \\,^4\\text{He} + 2e^+ + 2\\nu_e + 26.7\\,\\text{MeV};\\quad T_{\\text{core}}\\approx 1.5\\times 10^7\\,\\text{K}',
    descES: 'El núcleo solar genera el 99% de la potencia por fusión protón-protón. Los fotones tardan ~100.000 años en cruzar la zona radiativa.',
    descEN: 'The solar core generates 99% of fusion power via p-p chains. Gamma photons take ~100,000 years to diffuse across the radiative zone.'
  },
  {
    id: 'radiative',
    labelES: '2. Zona Radiativa & Convectiva',
    labelEN: '2. Radiative & Convective Zones',
    detail: '7M K → 6,500 K · 0.25–1.0 R☉',
    pos: [-1.4, 0.9, 1.1],
    color: 'bg-yellow-400/95 text-space-950 border-yellow-200',
    img: '/blueprints/solar atmosphere-The Insane Engineering of the Parker Solar Probe - YouTube.png',
    latex: 'q_{\\text{rad}} = -\\frac{16\\sigma T^3}{3\\kappa\\rho}\\frac{dT}{dr};\\quad \\mathrm{Ra} = \\frac{g\\beta\\Delta T L^3}{\\nu\\alpha} \\gg 10^{20}',
    descES: 'Difusión fotónica (0.25–0.7 R☉) seguida de convección turbulenta por celdas de flotabilidad magnética (0.7–1.0 R☉).',
    descEN: 'Photon diffusion (0.25–0.7 R☉) followed by turbulent buoyancy convection cells (0.7–1.0 R☉).'
  },
  {
    id: 'photosphere',
    labelES: '3. Fotosfera (Superficie)',
    labelEN: '3. Photosphere (Surface)',
    detail: '6,200°C base → 3,700°C cima',
    pos: [2.5, 1.1, 0],
    color: 'bg-amber-500/95 text-space-950 border-amber-200',
    img: '/blueprints/sun temperature elevation.png',
    latex: 'M_e = \\sigma T_{\\text{eff}}^4 = 6.32\\times 10^7\\,\\text{W/m}^2;\\quad T: 6500\\,\\text{K} \\rightarrow 4000\\,\\text{K}',
    descES: 'La superficie visible oscila entre 6.200°C (base) y 3.700°C (cima), similar a un arco de soldadura y 5× más fría que un rayo.',
    descEN: 'Visible surface ranges from 6,200°C (bottom) to 3,700°C (top) — similar to a welding arc and 5× cooler than a lightning bolt.'
  },
  {
    id: 'chromosphere',
    labelES: '4. Cromosfera (~2,000 km)',
    labelEN: '4. Chromosphere (~2,000 km)',
    detail: '4,000 K → 20,000 K · H-α',
    pos: [-2.8, -1.1, 0.4],
    color: 'bg-pink-600/95 text-white border-pink-300',
    img: '/blueprints/solar atmosphere-The Insane Engineering of the Parker Solar Probe - YouTube.png',
    latex: 'I_{\\nu}(\\text{H}\\alpha) = S_{\\nu}(1 - e^{-\\tau_{\\nu}});\\quad T_{\\text{chromo}}: 4{,}000\\,\\text{K} \\rightarrow 20{,}000\\,\\text{K}',
    descES: 'Capa media donde el gradiente térmico se invierte por disipación magneto-acústica.',
    descEN: 'Middle layer where temperature stops falling and inverts via magneto-acoustic dissipation.'
  },
  {
    id: 'transition',
    labelES: '5. Región de Transición (2,100 km)',
    labelEN: '5. Transition Region (2,100 km)',
    detail: '20,000 K → 500,000 K',
    pos: [2.9, -1.2, 0.5],
    color: 'bg-purple-600/95 text-white border-purple-300',
    img: '/blueprints/sun temperature elevation.png',
    latex: '\\left|\\nabla T\\right| = \\frac{dT}{dr} \\approx 4.8\\,\\text{K/m};\\quad T_{\\text{corona}}/T_{\\text{photo}} \\approx 80\\times',
    descES: 'A 2.100 km sobre la superficie, la temperatura salta 80× más alta que la fotosfera (anomalía de calentamiento coronal).',
    descEN: 'Starting 2,100 km above the surface, temperature jumps 80× higher than the photosphere.'
  },
  {
    id: 'corona',
    labelES: '6. Corona Solar (Kn >> 10)',
    labelEN: '6. Solar Corona (Kn >> 10)',
    detail: '>1,000,000 °F (500,000+ °C)',
    pos: [0, 3.85, 0],
    color: 'bg-orange-500/95 text-space-950 border-yellow-200',
    img: '/blueprints/sun temperature elevation.png',
    latex: '\\mathrm{Kn}=\\frac{\\lambda_{\\text{mfp}}}{L}\\gg 10;\\quad q_{\\text{conv}}=\\frac{\\alpha_a}{2}n_p m_p v_{\\text{th}}^3 \\approx 0.02\\,\\text{W/m}^2 \\ll q_{\\text{rad}}',
    descES: 'Aunque supera 1.000.000 °F, la densidad de partículas es mínima (Kn>>10). Como meter la mano en un horno a 400 °F: alta T cinética pero bajo calor convectivo.',
    descEN: 'Exceeds 1,000,000 °F, but particle density is ultra-low (Kn>>10). Like a 400 °F oven: high kinetic T, negligible convective heat transfer.'
  }
];

export const SunAtmosphere = ({
  selectedLayer,
  onSelectLayer,
  cfdMode = 'natural',
  hideTags = false,
  lang = 'es'
}) => {
  const isES = lang === 'es';

  return (
    <group>
      <SunCutawayCFD
        cfdMode={cfdMode}
        selectedLayer={selectedLayer}
        onSelectLayer={onSelectLayer}
      />
      <CoronalLoops />
      <CoronalStreamers count={550} />

      {!hideTags && SOLAR_LAYER_DATA.map((tag) => (
        <Html key={tag.id} position={tag.pos} center distanceFactor={14} zIndexRange={[10, 0]}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelectLayer(tag.id);
            }}
            className={`px-2.5 py-1 rounded-lg border text-[10px] font-mono font-bold whitespace-nowrap cursor-pointer backdrop-blur-md transition-all select-none shadow-lg ${
              tag.color
            } ${selectedLayer === tag.id ? 'ring-2 ring-white scale-110' : 'opacity-90 hover:scale-105'}`}
          >
            {isES ? tag.labelES : tag.labelEN} · {tag.detail}
          </button>
        </Html>
      ))}
    </group>
  );
};
