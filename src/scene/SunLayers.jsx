import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Each layer: radius, color, opacity, animated scale, back-side glow
const LAYERS = [
  // Radiative/Convection zone (inner glow, not visible directly)
  { r: 2.45, color: '#ff1a00', opacity: 0.18, side: THREE.BackSide, speed: 0.03, name: 'convection' },
  // Photosphere boundary (thin bright limb)
  { r: 2.52, color: '#ffe066', opacity: 0.22, side: THREE.BackSide, speed: 0.02, name: 'photosphere' },
  // Chromosphere (H-alpha pink/rose glow)
  { r: 2.75, color: '#ff6b8a', opacity: 0.30, side: THREE.BackSide, speed: 0.04, name: 'chromosphere' },
  // Transition region (thin hot blue-purple band)
  { r: 2.90, color: '#9b59ff', opacity: 0.18, side: THREE.BackSide, speed: 0.05, name: 'transition' },
  // Inner corona (white-gold additive glow)
  { r: 3.20, color: '#fffbe0', opacity: 0.20, side: THREE.BackSide, speed: 0.015, name: 'corona-inner' },
  // Mid corona (orange additive)
  { r: 3.80, color: '#ffd166', opacity: 0.13, side: THREE.BackSide, speed: 0.01, name: 'corona-mid' },
  // Outer corona (faint large halo)
  { r: 5.20, color: '#ff9100', opacity: 0.06, side: THREE.BackSide, speed: 0.007, name: 'corona-outer' },
];

const AnimatedLayer = ({ r, color, opacity, side, speed, blending }) => {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const s = 1 + Math.sin(clock.elapsedTime * speed * 6.28) * 0.015;
    ref.current.scale.set(s, s, s);
    ref.current.rotation.y += speed * 0.005;
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[r, 48, 48]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={opacity}
        side={side}
        blending={blending || THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
};

export const SunLayers = () => (
  <group>
    {LAYERS.map((l) => (
      <AnimatedLayer key={l.name} {...l} />
    ))}
  </group>
);
