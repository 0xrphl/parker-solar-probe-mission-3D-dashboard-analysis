import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { OrbitEllipse } from './OrbitEllipse.jsx';
import { VenusFlybys } from './VenusAssists.jsx';
import * as THREE from 'three';

export const HeliosphericTrajectory = ({
  t,
  onSelectLayer,
  activeFlyby,
  setActiveFlyby,
  hideTags = false
}) => {
  const probeRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime() * 0.35;
    const a = 5.4, b = 2.8;
    const c = Math.sqrt(a * a - b * b);
    const x = a * Math.cos(time) - c;
    const z = b * Math.sin(time);
    if (probeRef.current) probeRef.current.position.set(x, 0, z);
  });

  return (
    <group>
      {/* Central Sun */}
      <mesh>
        <sphereGeometry args={[0.75, 48, 48]} />
        <meshBasicMaterial color="#ff9100" />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.15, 32, 32]} />
        <meshBasicMaterial color="#ff6600" transparent opacity={0.18} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>

      {/* Earth Orbit */}
      <OrbitEllipse a={10} b={10} color="#38bdf8" opacity={0.35} />
      <mesh position={[10, 0, 0]}>
        <sphereGeometry args={[0.24, 16, 16]} />
        <meshStandardMaterial color="#38bdf8" emissive="#1d4ed8" emissiveIntensity={0.4} />
      </mesh>
      {!hideTags && (
        <Html position={[10, 0.6, 0]} center distanceFactor={28} zIndexRange={[10, 0]}>
          <button
            onClick={() => { onSelectLayer('earth'); setActiveFlyby(0); }}
            className="px-2 py-0.5 rounded bg-blue-900/90 border border-blue-400/70 text-[10px] font-mono text-blue-200 cursor-pointer whitespace-nowrap"
          >
            🌍 {t.layers.earthOrbit}
          </button>
        </Html>
      )}

      {/* Venus Orbit */}
      <OrbitEllipse a={7.2} b={7.2} color="#fbbf24" opacity={0.35} />
      <mesh position={[7.2, 0, 0]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color="#fbbf24" emissive="#92400e" emissiveIntensity={0.4} />
      </mesh>
      {!hideTags && (
        <Html position={[7.2, 0.6, 0]} center distanceFactor={28} zIndexRange={[10, 0]}>
          <button
            onClick={() => { onSelectLayer('venus'); setActiveFlyby(0); }}
            className="px-2 py-0.5 rounded bg-amber-900/90 border border-amber-400/70 text-[10px] font-mono text-amber-200 cursor-pointer whitespace-nowrap"
          >
            🌕 {t.layers.venusOrbit}
          </button>
        </Html>
      )}

      {/* 7 Interactive Venus Flybys */}
      <VenusFlybys
        activeFlyby={activeFlyby}
        setActiveFlyby={setActiveFlyby}
        hideTags={hideTags}
      />

      {/* Parker Eccentric Orbit */}
      <OrbitEllipse a={5.4} b={2.8} color="#f97316" opacity={0.95} lineWidth={3} />

      {!hideTags && (
        <Html position={[-4.7, 0.4, 0]} center distanceFactor={28} zIndexRange={[10, 0]}>
          <button
            onClick={() => setActiveFlyby(6)}
            className="px-2 py-0.5 rounded bg-red-900/90 border border-red-400/70 text-[9px] font-mono text-red-200 whitespace-nowrap cursor-pointer"
          >
            ☀ Perihelio Parker: 0.041 AU · 8.86 R☉ · 192 km/s
          </button>
        </Html>
      )}

      {/* Animated Probe Marker */}
      <group ref={probeRef}>
        <mesh>
          <sphereGeometry args={[0.22, 16, 16]} />
          <meshBasicMaterial color="#ff3d00" />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.38, 16, 16]} />
          <meshBasicMaterial color="#ff6600" transparent opacity={0.3} blending={THREE.AdditiveBlending} depthWrite={false} />
        </mesh>
        {!hideTags && (
          <Html position={[0, 0.55, 0]} center distanceFactor={28} zIndexRange={[10, 0]}>
            <div className="px-2.5 py-1 rounded bg-solar-flare/95 border border-solar-gold text-[10px] font-mono text-white font-bold whitespace-nowrap shadow-lg">
              🛸 Parker Solar Probe · v=192 km/s @ peri
            </div>
          </Html>
        )}
      </group>
    </group>
  );
};
