import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const SHELLS = [
  {
    id: 'core',
    rIn: 0.0,
    rOut: 0.75,
    natural: '#ffffff',
    temp: '#00f0ff',   // 15,000,000 K peak
    flux: '#ffffff'    // Core fusion source
  },
  {
    id: 'radiative',
    rIn: 0.76,
    rOut: 1.48,
    natural: '#fde047',
    temp: '#38bdf8',   // 7M -> 2M K
    flux: '#facc15'
  },
  {
    id: 'convective',
    rIn: 1.49,
    rOut: 2.18,
    natural: '#f97316',
    temp: '#f59e0b',   // 2M -> 6,500 K
    flux: '#fb923c'
  },
  {
    id: 'photosphere',
    rIn: 2.19,
    rOut: 2.50,
    natural: '#ff5500',
    temp: '#2563eb',   // Coolest layer! 5,778 K (3,700°C top)
    flux: '#ef4444'    // 63 MW/m² surface exitance
  },
  {
    id: 'chromosphere',
    rIn: 2.51,
    rOut: 2.74,
    natural: '#ec4899',
    temp: '#a855f7',   // 4,000 -> 20,000 K
    flux: '#db2777'
  },
  {
    id: 'transition',
    rIn: 2.75,
    rOut: 2.92,
    natural: '#a855f7',
    temp: '#ec4899',   // 20,000 -> 500,000 K spike
    flux: '#9333ea'
  },
  {
    id: 'corona',
    rIn: 2.93,
    rOut: 3.65,
    natural: '#ff9100',
    temp: '#ff0044',   // > 1,000,000 K superheated plasma
    flux: '#3b82f6'    // q_rad ~ 650 kW/m², q_conv ~ 0.02 W/m²
  }
];

export const SunCutawayCFD = ({ cfdMode = 'natural', selectedLayer, onSelectLayer }) => {
  const groupRef = useRef();

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.015;
    }
  });

  // Open cutaway wedge: leaves a 105° open wedge directly facing front camera (+Z)
  const phiStart = -0.92;
  const phiLength = Math.PI * 1.42;

  return (
    <group ref={groupRef} rotation={[0.26, 0.38, 0]}>
      {SHELLS.map((s, idx) => {
        const col = s[cfdMode] || s.natural;
        const isOuter = idx >= 4;
        const isSel = selectedLayer === s.id;

        return (
          <group
            key={s.id}
            onClick={(e) => {
              e.stopPropagation();
              onSelectLayer(s.id);
            }}
          >
            {/* Cutaway Spherical Shell */}
            <mesh>
              <sphereGeometry args={[s.rOut, 48, 48, phiStart, phiLength, 0, Math.PI]} />
              <meshStandardMaterial
                color={col}
                emissive={col}
                emissiveIntensity={isSel ? 1.35 : isOuter ? 0.72 : 0.92}
                transparent={isOuter}
                opacity={isOuter ? (isSel ? 0.65 : 0.32) : 0.98}
                side={THREE.DoubleSide}
                roughness={0.25}
              />
            </mesh>

            {/* Precise Polar-to-Equator Semi-Annular Cross-Section Planes on both Cutaway Wedge Boundaries */}
            {s.rIn > 0 && (
              <>
                <mesh rotation={[0, -phiStart + Math.PI / 2, 0]}>
                  <ringGeometry args={[s.rIn, s.rOut, 36, 1, 0, Math.PI]} />
                  <meshBasicMaterial color={col} side={THREE.DoubleSide} />
                </mesh>
                <mesh rotation={[0, -(phiStart + phiLength) + Math.PI / 2, 0]}>
                  <ringGeometry args={[s.rIn, s.rOut, 36, 1, 0, Math.PI]} />
                  <meshBasicMaterial color={col} side={THREE.DoubleSide} />
                </mesh>
              </>
            )}
          </group>
        );
      })}

      {/* Central Fusion Core Sphere */}
      <mesh onClick={(e) => { e.stopPropagation(); onSelectLayer('core'); }}>
        <sphereGeometry args={[0.74, 32, 32]} />
        <meshBasicMaterial color={cfdMode === 'temp' ? '#00f0ff' : '#ffffff'} />
      </mesh>

      <pointLight color="#ffeecc" intensity={5.0} distance={120} decay={1.1} />
    </group>
  );
};
