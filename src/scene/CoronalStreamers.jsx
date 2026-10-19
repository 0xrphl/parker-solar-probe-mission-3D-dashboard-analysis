import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const CoronalStreamers = ({ count = 450 }) => {
  const pointsRef = useRef();

  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.7 + Math.random() * 3.5;

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);

      vel[i * 3] = (pos[i * 3] / r) * (0.8 + Math.random() * 1.2);
      vel[i * 3 + 1] = (pos[i * 3 + 1] / r) * (0.8 + Math.random() * 1.2);
      vel[i * 3 + 2] = (pos[i * 3 + 2] / r) * (0.8 + Math.random() * 1.2);
    }
    return [pos, vel];
  }, [count]);

  useFrame((_, delta) => {
    if (!pointsRef.current) return;
    const posArray = pointsRef.current.geometry.attributes.position.array;

    for (let i = 0; i < count; i++) {
      posArray[i * 3] += velocities[i * 3] * delta;
      posArray[i * 3 + 1] += velocities[i * 3 + 1] * delta;
      posArray[i * 3 + 2] += velocities[i * 3 + 2] * delta;

      const r = Math.sqrt(
        posArray[i * 3] ** 2 + posArray[i * 3 + 1] ** 2 + posArray[i * 3 + 2] ** 2
      );

      if (r > 7.5) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const resetR = 2.7;
        posArray[i * 3] = resetR * Math.sin(phi) * Math.cos(theta);
        posArray[i * 3 + 1] = resetR * Math.sin(phi) * Math.sin(theta);
        posArray[i * 3 + 2] = resetR * Math.cos(phi);
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#ffd166"
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};
