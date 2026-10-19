import React, { useMemo } from 'react';
import * as THREE from 'three';

export const WireHarness3D = ({ isSelected, onSelect }) => {
  // Continuous Coaxial Cable routing from the rear of SPC Faraday Cup (1.05, 0.36, 0.06) -> Spacecraft Bus
  const cableGeo = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(1.05, 0.36, 0.06),
      new THREE.Vector3(1.00, 0.32, -0.06),
      new THREE.Vector3(0.90, 0.25, -0.18),
      new THREE.Vector3(0.76, 0.18, -0.27),
      new THREE.Vector3(0.58, 0.12, -0.32)
    ]);
    return new THREE.TubeGeometry(curve, 36, 0.024, 12, false);
  }, []);

  // Secondary branch connecting the zoomed-in Coaxial Cross-Section Showcase to the main harness
  const branchGeo = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.90, 0.25, -0.18),
      new THREE.Vector3(1.12, 0.10, -0.12),
      new THREE.Vector3(1.28, -0.05, -0.05)
    ]);
    return new THREE.TubeGeometry(curve, 20, 0.018, 10, false);
  }, []);

  return (
    <group onClick={onSelect}>
      {/* Main Continuous Coaxial Harness Routing Tube */}
      <mesh geometry={cableGeo}>
        <meshStandardMaterial
          color={isSelected ? '#38bdf8' : '#cbd5e1'}
          metalness={0.9}
          roughness={0.15}
          emissive={isSelected ? '#0284c7' : '#000000'}
          emissiveIntensity={isSelected ? 0.5 : 0}
        />
      </mesh>

      {/* Branch Tube to Cutaway Showcase */}
      <mesh geometry={branchGeo}>
        <meshStandardMaterial color="#94a3b8" metalness={0.85} roughness={0.2} />
      </mesh>

      {/* Sapphire Dielectric Ring Spacers along the continuous cable */}
      {[
        [1.01, 0.33, -0.04],
        [0.91, 0.26, -0.16],
        [0.78, 0.19, -0.26]
      ].map((pos, idx) => (
        <mesh key={idx} position={pos} rotation={[0.25, 0.35, 0]}>
          <torusGeometry args={[0.028, 0.008, 10, 24]} />
          <meshStandardMaterial
            color="#60a5fa"
            emissive="#3b82f6"
            emissiveIntensity={0.7}
            roughness={0.1}
          />
        </mesh>
      ))}

      {/* Zoomed-in 3D Coaxial Cross-Section Cutaway Showcase (beside moved SPC) */}
      <group position={[1.28, -0.08, 0.02]} rotation={[Math.PI / 2, 0.25, 0]}>
        {/* 1. Outer Niobium C-103 Refractory Shield Jacket */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.095, 0.095, 0.22, 28]} />
          <meshStandardMaterial
            color="#94a3b8"
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>
        {/* 2. Middle Monocrystalline Sapphire (Al₂O₃) Dielectric Insulator Sleeve */}
        <mesh position={[0, 0.06, 0]}>
          <cylinderGeometry args={[0.066, 0.066, 0.24, 28]} />
          <meshStandardMaterial
            color="#3b82f6"
            emissive="#1d4ed8"
            emissiveIntensity={0.65}
            transparent
            opacity={0.88}
            roughness={0.1}
          />
        </mesh>
        {/* 3. Inner Niobium C-103 Core Conductor (89% Nb, 10% Hf, 1% Ti) */}
        <mesh position={[0, 0.12, 0]}>
          <cylinderGeometry args={[0.032, 0.032, 0.26, 24]} />
          <meshStandardMaterial
            color="#fbbf24"
            emissive="#f59e0b"
            emissiveIntensity={0.6}
            metalness={0.95}
            roughness={0.1}
          />
        </mesh>
      </group>
    </group>
  );
};
