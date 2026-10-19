import React from 'react';
import * as THREE from 'three';

export const OrbitEllipse = ({ a, b, color, opacity = 0.5, lineWidth = 1 }) => {
  const points = [];
  const segments = 128;
  for (let i = 0; i <= segments; i++) {
    const theta = (i / segments) * Math.PI * 2;
    // Focus at origin: r = a(1 - e^2) / (1 + e*cos(theta))
    // Or simplified ellipse shifted by c = sqrt(a^2 - b^2)
    const c = Math.sqrt(Math.max(0, a * a - b * b));
    const x = a * Math.cos(theta) - c;
    const z = b * Math.sin(theta);
    points.push(new THREE.Vector3(x, 0, z));
  }

  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <line geometry={geometry}>
      <lineBasicMaterial color={color} transparent opacity={opacity} linewidth={lineWidth} />
    </line>
  );
};
