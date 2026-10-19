import React from 'react';
import * as THREE from 'three';

export const UmbraShadowCone = ({ isVisible, isSelected, onSelect }) => {
  if (!isVisible) return null;

  return (
    <group position={[0, 0, 1.35]} onClick={onSelect}>
      {/* Protective Umbra Shadow Cylinder/Cone tapering behind the 2.4m TPS */}
      <mesh position={[0, 0, -2.2]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[1.50, 1.18, 4.4, 48, 1, true]} />
        <meshBasicMaterial
          color={isSelected ? '#c084fc' : '#a855f7'}
          transparent
          opacity={isSelected ? 0.22 : 0.09}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Penumbra outer boundary wireframe lines */}
      <mesh position={[0, 0, -2.2]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[1.52, 1.68, 4.4, 24, 1, true]} />
        <meshBasicMaterial
          color="#f59e0b"
          wireframe
          transparent
          opacity={isSelected ? 0.35 : 0.1}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
};
