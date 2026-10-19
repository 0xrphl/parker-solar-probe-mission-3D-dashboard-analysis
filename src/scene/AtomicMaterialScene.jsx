import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';

export const AtomicMaterialScene = ({
  onSelectSubsystem,
  hideTags = false,
  lang = 'es'
}) => {
  const ccGroupRef = useRef();
  const wireGroupRef = useRef();
  const wGridGroupRef = useRef();
  const isES = lang === 'es';

  // Generate sp² Hexagonal Graphene / Carbon-Carbon atomic positions
  const hexAtoms = useMemo(() => {
    const pts = [];
    const r = 0.28;
    const centers = [
      [0, 0], [0.48, 0.28], [0.48, -0.28],
      [-0.48, 0.28], [-0.48, -0.28], [0, 0.56], [0, -0.56]
    ];
    centers.forEach(([cx, cy]) => {
      for (let i = 0; i < 6; i++) {
        const a = (i * Math.PI) / 3;
        pts.push([cx + r * Math.cos(a), cy + r * Math.sin(a), 0]);
        pts.push([cx + r * Math.cos(a), cy + r * Math.sin(a), -0.35]);
      }
    });
    return pts;
  }, []);

  useFrame((_, delta) => {
    if (!hideTags) {
      if (ccGroupRef.current) ccGroupRef.current.rotation.y += delta * 0.22;
      if (wireGroupRef.current) wireGroupRef.current.rotation.y -= delta * 0.18;
      if (wGridGroupRef.current) wGridGroupRef.current.rotation.y += delta * 0.15;
    }
  });

  const gridLines = [-0.45, -0.3, -0.15, 0, 0.15, 0.3, 0.45];

  return (
    <group>
      {/* 1. LEFT: Carbon-Carbon sp² Lattice + 97% Air Ultramet Carbon Foam */}
      <group
        ref={ccGroupRef}
        position={[-2.6, 0.15, 0]}
        onClick={(e) => { e.stopPropagation(); onSelectSubsystem('heatShield'); }}
      >
        {hexAtoms.map((pos, i) => (
          <mesh key={i} position={pos}>
            <sphereGeometry args={[0.048, 12, 12]} />
            <meshStandardMaterial color="#f59e0b" emissive="#d97706" emissiveIntensity={0.45} metalness={0.8} roughness={0.2} />
          </mesh>
        ))}
        <mesh position={[0, 0, -0.18]}>
          <dodecahedronGeometry args={[1.05, 1]} />
          <meshBasicMaterial color="#38bdf8" wireframe transparent opacity={0.45} />
        </mesh>
        {!hideTags && (
          <Html position={[0, 1.45, 0]} center distanceFactor={12} zIndexRange={[10, 0]}>
            <button
              onClick={() => onSelectSubsystem('heatShield')}
              className="px-2.5 py-1 rounded-lg bg-solar-gold/95 text-space-950 font-mono text-[10px] font-bold whitespace-nowrap shadow-lg border border-white/60 cursor-pointer"
            >
              {isES ? '⚛ Red Atómica C-C sp² & Espuma 97% Aire' : '⚛ sp² C-C Atomic Lattice & 97% Air Foam'}
            </button>
          </Html>
        )}
      </group>

      {/* 2. CENTER: Coaxial Nb C-103 BCC + Monocrystalline Sapphire (Al₂O₃) */}
      <group
        ref={wireGroupRef}
        position={[0, 0.15, 0]}
        onClick={(e) => { e.stopPropagation(); onSelectSubsystem('wireHarness'); }}
      >
        <mesh position={[0, -0.25, 0]}>
          <cylinderGeometry args={[0.58, 0.58, 0.85, 32, 1, true]} />
          <meshStandardMaterial color="#94a3b8" metalness={0.9} roughness={0.18} side={2} />
        </mesh>
        <mesh position={[0, 0.05, 0]}>
          <cylinderGeometry args={[0.40, 0.40, 1.05, 32]} />
          <meshStandardMaterial color="#3b82f6" emissive="#1d4ed8" emissiveIntensity={0.5} transparent opacity={0.78} roughness={0.1} />
        </mesh>
        <mesh position={[0, 0.35, 0]}>
          <cylinderGeometry args={[0.19, 0.19, 1.35, 24]} />
          <meshStandardMaterial color="#fbbf24" emissive="#f59e0b" emissiveIntensity={0.55} metalness={0.95} roughness={0.1} />
        </mesh>
        {!hideTags && (
          <Html position={[0, 1.45, 0]} center distanceFactor={12} zIndexRange={[10, 0]}>
            <button
              onClick={() => onSelectSubsystem('wireHarness')}
              className="px-2.5 py-1 rounded-lg bg-cyan-400/95 text-space-950 font-mono text-[10px] font-bold whitespace-nowrap shadow-lg border border-white/60 cursor-pointer"
            >
              {isES ? '🔌 Coaxial: Niobio C-103 + Cristal Zafiro Al₂O₃' : '🔌 Coaxial: Nb C-103 + Sapphire Al₂O₃ Crystal'}
            </button>
          </Html>
        )}
      </group>

      {/* 3. RIGHT: 100-µm Acid-Etched Quadricular Tungsten (W) Grid */}
      <group
        ref={wGridGroupRef}
        position={[2.6, 0.15, 0]}
        onClick={(e) => { e.stopPropagation(); onSelectSubsystem('faradayCup'); }}
      >
        <mesh>
          <torusGeometry args={[0.72, 0.045, 16, 48]} />
          <meshStandardMaterial color="#cbd5e1" metalness={0.95} roughness={0.1} />
        </mesh>
        {gridLines.map((p, i) => (
          <React.Fragment key={i}>
            <mesh position={[0, p, 0]}>
              <boxGeometry args={[1.25, 0.022, 0.022]} />
              <meshStandardMaterial color="#fbbf24" emissive="#f59e0b" emissiveIntensity={0.5} metalness={0.9} />
            </mesh>
            <mesh position={[p, 0, 0]}>
              <boxGeometry args={[0.022, 1.25, 0.022]} />
              <meshStandardMaterial color="#fbbf24" emissive="#f59e0b" emissiveIntensity={0.5} metalness={0.9} />
            </mesh>
          </React.Fragment>
        ))}
        {!hideTags && (
          <Html position={[0, 1.45, 0]} center distanceFactor={12} zIndexRange={[10, 0]}>
            <button
              onClick={() => onSelectSubsystem('faradayCup')}
              className="px-2.5 py-1 rounded-lg bg-solar-flare/95 text-white font-mono text-[10px] font-bold whitespace-nowrap shadow-lg border border-solar-gold/60 cursor-pointer"
            >
              {isES ? '⚡ Malla Cuadricular Tungsteno W (100 µm)' : '⚡ 100-µm Quadricular Tungsten (W) Mesh'}
            </button>
          </Html>
        )}
      </group>
    </group>
  );
};
