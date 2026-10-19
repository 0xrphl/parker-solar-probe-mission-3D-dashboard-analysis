import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const buildLoop = (theta0, phi0, height, twist) => {
  const pts = [];
  const n = 60;
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const angle = Math.PI * t + twist * Math.sin(Math.PI * t);
    const r = 2.55 + height * Math.sin(Math.PI * t);
    const phi = phi0 + 0.3 * Math.sin(Math.PI * t);
    pts.push(new THREE.Vector3(
      r * Math.sin(phi) * Math.cos(theta0 + angle * 0.15),
      r * Math.cos(phi),
      r * Math.sin(phi) * Math.sin(theta0 + angle * 0.15)
    ));
  }
  return new THREE.CatmullRomCurve3(pts);
};

const LOOP_PARAMS = [
  { theta: 0.3, phi: 1.2, h: 0.8, twist: 0.4, color: '#00aaff' },
  { theta: 1.1, phi: 1.5, h: 0.6, twist: -0.3, color: '#ff66aa' },
  { theta: 2.2, phi: 0.9, h: 1.0, twist: 0.2, color: '#ffaa00' },
  { theta: 3.5, phi: 1.3, h: 0.7, twist: 0.5, color: '#00ffcc' },
  { theta: 4.8, phi: 1.6, h: 0.9, twist: -0.4, color: '#ff3388' },
  { theta: 5.5, phi: 1.0, h: 0.5, twist: 0.3, color: '#aaddff' },
];

const CoronalLoop = ({ theta, phi, h, twist, color, timeOffset }) => {
  const ref = useRef();

  const tube = useMemo(() => {
    const curve = buildLoop(theta, phi, h, twist);
    return new THREE.TubeGeometry(curve, 40, 0.022, 6, false);
  }, [theta, phi, h, twist]);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.elapsedTime + timeOffset;
    ref.current.material.opacity = 0.4 + 0.35 * Math.sin(t * 1.2);
  });

  return (
    <mesh ref={ref} geometry={tube}>
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.55}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
};

export const CoronalLoops = () => (
  <group>
    {LOOP_PARAMS.map((p, i) => (
      <CoronalLoop key={i} {...p} timeOffset={i * 1.3} />
    ))}
  </group>
);
