import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * SolarRadiationRays: Renders perpendicular incident solar radiation lines (q_rad = 650 kW/m²)
 * striking the TPS front Al2O3 surface (z = 1.48) and reflecting 82% away, while demonstrating
 * complete shadow protection inside the Umbra cone behind the shield.
 */
export const SolarRadiationRays = ({ visible = true, panelAngle = 45 }) => {
  const pulsesRef = useRef();
  const reflectedRef = useRef();

  // Generate concentric grid of perpendicular rays hitting the 2.4m shield (r <= 1.45)
  // plus outer rays passing past the shield rim (1.55 <= r <= 2.3) that hit exposed solar wings
  const { rayCoords, outerCoords } = useMemo(() => {
    const inner = [];
    const outer = [];
    const rings = [0.0, 0.42, 0.85, 1.28];
    rings.forEach((r, rIdx) => {
      const count = rIdx === 0 ? 1 : rIdx * 6;
      for (let i = 0; i < count; i++) {
        const a = (i / count) * Math.PI * 2;
        inner.push([r * Math.cos(a), r * Math.sin(a)]);
      }
    });
    // Outer rays grazing past the shield edge (illuminating Solar Limb Sensors / Solar Wings if deployed)
    for (let i = 0; i < 16; i++) {
      const a = (i / 16) * Math.PI * 2;
      const r = 1.62 + (i % 2) * 0.32;
      outer.push([r * Math.cos(a), r * Math.sin(a)]);
    }
    return { rayCoords: inner, outerCoords: outer };
  }, []);

  useFrame(({ clock }) => {
    if (!visible) return;
    const t = clock.getElapsedTime();
    if (pulsesRef.current) {
      pulsesRef.current.children.forEach((mesh, idx) => {
        // Move photon pulses from z = 3.5 down to z = 1.50 perpendicular to TPS
        const phase = ((t * 1.8 + idx * 0.17) % 1);
        mesh.position.z = 3.5 - phase * 2.0;
      });
    }
    if (reflectedRef.current) {
      reflectedRef.current.children.forEach((mesh, idx) => {
        const phase = ((t * 1.6 + idx * 0.23) % 1);
        mesh.position.z = 1.50 + phase * 1.4;
      });
    }
  });

  if (!visible) return null;

  return (
    <group>
      {/* 1. Perpendicular Incident Solar Flux Lines hitting the TPS (z: 3.5 -> 1.48) */}
      {rayCoords.map(([x, y], i) => (
        <group key={`in-${i}`} position={[x, y, 0]}>
          <mesh position={[0, 0, 2.49]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.005, 0.005, 2.02, 6]} />
            <meshBasicMaterial
              color="#ffd166"
              transparent
              opacity={0.42}
              blending={THREE.AdditiveBlending}
            />
          </mesh>
          {/* Impact hotspot disk on the white Al2O3 shield face */}
          <mesh position={[0, 0, 1.485]}>
            <circleGeometry args={[0.035, 12]} />
            <meshBasicMaterial
              color="#ff9100"
              transparent
              opacity={0.65}
              blending={THREE.AdditiveBlending}
            />
          </mesh>
        </group>
      ))}

      {/* 2. Animated Photon Energy Pulses traveling perpendicular to TPS */}
      <group ref={pulsesRef}>
        {rayCoords.map(([x, y], i) => (
          <mesh key={`pulse-${i}`} position={[x, y, 2.5]} rotation={[Math.PI / 2, 0, 0]}>
            <coneGeometry args={[0.024, 0.14, 8]} />
            <meshBasicMaterial color="#ff5500" blending={THREE.AdditiveBlending} />
          </mesh>
        ))}
      </group>

      {/* 3. Reflected Al2O3 Ceramic Rays (82% Reflectance bouncing back toward +Z) */}
      <group ref={reflectedRef}>
        {rayCoords.filter((_, i) => i % 2 === 0).map(([x, y], i) => (
          <mesh key={`ref-${i}`} position={[x * 1.04, y * 1.04, 1.8]} rotation={[-Math.PI / 2, 0, 0]}>
            <coneGeometry args={[0.018, 0.1, 6]} />
            <meshBasicMaterial color="#38bdf8" transparent opacity={0.75} blending={THREE.AdditiveBlending} />
          </mesh>
        ))}
      </group>

      {/* 4. Grazing Solar Rays passing outside the 2.4m TPS Rim (showing Umbra boundary) */}
      {outerCoords.map(([x, y], i) => (
        <mesh key={`out-${i}`} position={[x, y, 0.6]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.004, 0.004, 5.8, 6]} />
          <meshBasicMaterial
            color={panelAngle < 45 ? '#ff3d00' : '#fbbf24'}
            transparent
            opacity={0.24}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
};
