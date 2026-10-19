import React from 'react';
import { Html } from '@react-three/drei';

const FLYBY_ANGLES = [0, 52, 105, 158, 210, 262, 315];
export const FLYBY_DVS = ['2.5', '3.1', '4.0', '4.8', '5.7', '6.5', '7.2'];

export const VenusFlybys = ({ activeFlyby, setActiveFlyby, hideTags = false }) => {
  const R = 7.2;
  return (
    <group>
      {FLYBY_ANGLES.map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const x = R * Math.cos(rad);
        const z = R * Math.sin(rad);
        return (
          <group key={i} position={[x, 0, z]}>
            <mesh onClick={(e) => { e.stopPropagation(); setActiveFlyby(i); }}>
              <sphereGeometry args={[0.14, 14, 14]} />
              <meshBasicMaterial color={activeFlyby === i ? '#ff3d00' : '#fbbf24'} />
            </mesh>
            {!hideTags && (
              <Html position={[0, 0.32, 0]} center distanceFactor={28} zIndexRange={[10, 0]}>
                <button
                  onClick={(e) => { e.stopPropagation(); setActiveFlyby(i); }}
                  className="px-1.5 py-0.5 rounded bg-amber-950/90 border border-amber-400/70 text-[9px] font-mono text-amber-200 cursor-pointer whitespace-nowrap hover:scale-110 transition-all"
                >
                  Flyby #{i + 1} · Δv↓{FLYBY_DVS[i]} km/s
                </button>
              </Html>
            )}
          </group>
        );
      })}
    </group>
  );
};
