import React from 'react';
import * as THREE from 'three';

export const TPSHeatShield = ({ isSelected, onSelect, cfdMode = 'natural' }) => {
  const sel = isSelected;

  // CFD color mapping for TPS front surface (1,377°C / 650 kW/m²)
  const frontColor =
    cfdMode === 'temp' ? '#ff2a00' :
    cfdMode === 'flux' ? '#ff0055' : '#f8fafc';

  const frontEmissive =
    cfdMode === 'temp' ? '#ff5500' :
    cfdMode === 'flux' ? '#ff0066' :
    sel ? '#ffe580' : '#cbd5e1';

  const foamColor =
    cfdMode === 'temp' ? '#f59e0b' :
    cfdMode === 'flux' ? '#9333ea' :
    sel ? '#38bdf8' : '#1e293b';

  const backColor =
    cfdMode === 'temp' ? '#10b981' :
    cfdMode === 'flux' ? '#0284c7' : '#0f172a';

  return (
    <group position={[0, 0, 1.4]} onClick={onSelect}>
      {/* 1. Front White Al₂O₃ Ceramic Reflective Coating (faces +Z toward Sun) */}
      <mesh position={[0, 0, 0.068]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[1.52, 1.52, 0.012, 64]} />
        <meshStandardMaterial
          color={frontColor}
          roughness={0.15}
          metalness={0.08}
          emissive={frontEmissive}
          emissiveIntensity={cfdMode !== 'natural' ? 0.65 : sel ? 0.4 : 0.08}
        />
      </mesh>

      {/* 2. Front Super-Heated Carbon-Carbon (C-C) Facesheet (2 mm) */}
      <mesh position={[0, 0, 0.056]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[1.51, 1.51, 0.01, 64]} />
        <meshStandardMaterial
          color="#111827"
          roughness={0.5}
          metalness={0.45}
          emissive={sel ? '#ff4800' : '#000000'}
          emissiveIntensity={sel ? 0.35 : 0}
        />
      </mesh>

      {/* 3. Ultramet 97% Air Porous Carbon Foam Core (11.4 cm) */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[1.49, 1.49, 0.10, 48, 3]} />
        <meshStandardMaterial
          color={foamColor}
          roughness={0.9}
          metalness={0.1}
          wireframe={sel}
        />
      </mesh>

      {/* Cellular Porosity Lattice Overlay on Foam Perimeter */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[1.495, 1.495, 0.098, 36, 2, true]} />
        <meshBasicMaterial
          color={sel ? '#00f0ff' : '#475569'}
          wireframe
          transparent
          opacity={sel ? 0.75 : 0.35}
        />
      </mesh>

      {/* 4. Rear Carbon-Carbon (C-C) Facesheet (Cool Shadow Side <30°C) */}
      <mesh position={[0, 0, -0.056]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[1.48, 1.48, 0.01, 64]} />
        <meshStandardMaterial
          color={backColor}
          roughness={0.5}
          metalness={0.4}
          emissive={cfdMode === 'temp' ? '#059669' : '#000000'}
          emissiveIntensity={cfdMode === 'temp' ? 0.4 : 0}
        />
      </mesh>

      {/* 5. Beveled C-C Composite Outer Rim Band (XY plane torus) */}
      <mesh position={[0, 0, 0.01]}>
        <torusGeometry args={[1.515, 0.022, 16, 64]} />
        <meshStandardMaterial color="#64748b" metalness={0.75} roughness={0.25} />
      </mesh>

      {/* 6. 6 Titanium-to-TPS Thermal Isolation Mounting Brackets */}
      {[0, 60, 120, 180, 240, 300].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        return (
          <mesh
            key={i}
            position={[Math.cos(rad) * 1.05, Math.sin(rad) * 1.05, -0.08]}
            rotation={[Math.PI / 2, 0, rad]}
          >
            <cylinderGeometry args={[0.04, 0.06, 0.06, 6]} />
            <meshStandardMaterial color="#94a3b8" metalness={0.85} roughness={0.2} />
          </mesh>
        );
      })}

      {/* Selection Highlight Ring */}
      {sel && (
        <mesh position={[0, 0, 0.075]}>
          <torusGeometry args={[1.57, 0.012, 12, 64]} />
          <meshBasicMaterial
            color="#ffd166"
            transparent
            opacity={0.85}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      )}
    </group>
  );
};
