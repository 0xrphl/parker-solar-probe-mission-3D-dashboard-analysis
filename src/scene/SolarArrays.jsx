import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const ArticulatedSolarWing = ({ side, isSelected, panelAngle = 55 }) => {
  const dir = side === 'port' ? -1 : 1;
  const dropletsRef = useRef();

  const sweepRad = (panelAngle * Math.PI) / 180;
  const tipAngle = Math.min(0.85, sweepRad * 0.65);

  useFrame(({ clock }) => {
    if (dropletsRef.current) {
      const t = clock.getElapsedTime();
      dropletsRef.current.children.forEach((drop, idx) => {
        const p = ((t * 0.9 + idx * 0.25) % 1);
        drop.position.x = dir * (0.2 + p * 1.15);
      });
    }
  });

  const isOverheated = panelAngle < 32;
  const cellColor = isOverheated ? '#b91c1c' : isSelected ? '#1d4ed8' : '#172554';
  const cellEmissive = isOverheated ? '#ff3d00' : isSelected ? '#0284c7' : '#0f172a';

  return (
    <group position={[dir * 0.68, 0, -0.05]}>
      {/* Motorized Titanium Hinge Boom */}
      <mesh position={[dir * 0.12, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.03, 0.03, 0.28, 12]} />
        <meshStandardMaterial color="#94a3b8" metalness={0.85} roughness={0.2} />
      </mesh>

      {/* Articulated Wing Assembly (rotates into Umbra shadow cone as panelAngle increases) */}
      <group position={[dir * 0.22, 0, 0]} rotation={[0, dir * sweepRad, 0]}>
        <mesh position={[dir * 0.58, 0, 0]}>
          <boxGeometry args={[1.12, 0.48, 0.028]} />
          <meshStandardMaterial
            color={cellColor}
            metalness={0.6}
            roughness={0.25}
            emissive={cellEmissive}
            emissiveIntensity={isOverheated ? 0.65 : isSelected ? 0.35 : 0.1}
          />
        </mesh>

        {/* PV Cell Grid Lines */}
        {[-0.16, -0.08, 0, 0.08, 0.16].map((y, i) => (
          <mesh key={`h-${i}`} position={[dir * 0.58, y, 0.016]}>
            <boxGeometry args={[1.08, 0.006, 0.002]} />
            <meshBasicMaterial color="#60a5fa" transparent opacity={0.65} />
          </mesh>
        ))}
        {[0.15, 0.35, 0.55, 0.75, 0.95].map((x, i) => (
          <mesh key={`v-${i}`} position={[dir * x, 0, 0.016]}>
            <boxGeometry args={[0.006, 0.45, 0.002]} />
            <meshBasicMaterial color="#60a5fa" transparent opacity={0.65} />
          </mesh>
        ))}

        {/* Active Water Cooling Manifold Tubes */}
        <mesh position={[dir * 0.65, 0.08, -0.02]}>
          <boxGeometry args={[1.25, 0.024, 0.016]} />
          <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={1.1} />
        </mesh>
        <mesh position={[dir * 0.65, -0.08, -0.02]}>
          <boxGeometry args={[1.25, 0.024, 0.016]} />
          <meshStandardMaterial color="#38bdf8" emissive="#0284c7" emissiveIntensity={0.9} />
        </mesh>

        {/* Animated Pressurized Water Coolant Packets */}
        <group ref={dropletsRef}>
          {[0, 1, 2, 3].map((idx) => (
            <mesh key={idx} position={[dir * 0.5, 0.08, -0.025]}>
              <sphereGeometry args={[0.022, 8, 8]} />
              <meshBasicMaterial color="#ffffff" />
            </mesh>
          ))}
        </group>

        {/* Secondary High-Heat Active Water-Cooled Tip Section */}
        <group position={[dir * 1.15, 0, 0]} rotation={[0, -dir * tipAngle, 0]}>
          <mesh position={[dir * 0.22, 0, 0]}>
            <boxGeometry args={[0.42, 0.46, 0.03]} />
            <meshStandardMaterial
              color="#cbd5e1"
              metalness={0.75}
              roughness={0.2}
              emissive="#0284c7"
              emissiveIntensity={0.35}
            />
          </mesh>
          <mesh position={[dir * 0.22, 0, 0.017]}>
            <planeGeometry args={[0.38, 0.42, 4, 4]} />
            <meshBasicMaterial color="#38bdf8" wireframe />
          </mesh>
        </group>
      </group>
    </group>
  );
};

export const SolarArrays = ({ isSelected, onSelect, panelAngle = 55 }) => {
  return (
    <group onClick={onSelect}>
      <ArticulatedSolarWing side="port" isSelected={isSelected} panelAngle={panelAngle} />
      <ArticulatedSolarWing side="starboard" isSelected={isSelected} panelAngle={panelAngle} />

      {/* 4 Pyramidal Black Graphite Radiator Panels under the TPS */}
      {[0, 90, 180, 270].map((deg, idx) => {
        const rad = (deg * Math.PI) / 180;
        const r = 0.66;
        return (
          <group
            key={idx}
            position={[Math.cos(rad) * r, Math.sin(rad) * r, 0.62]}
            rotation={[0, 0, rad + Math.PI / 2]}
          >
            <mesh rotation={[0.26, 0, 0]}>
              <boxGeometry args={[0.78, 0.026, 0.58]} />
              <meshStandardMaterial
                color="#090d16"
                roughness={0.92}
                metalness={0.15}
                emissive={isSelected ? '#00f0ff' : '#000000'}
                emissiveIntensity={isSelected ? 0.28 : 0}
              />
            </mesh>
            {[-0.26, -0.13, 0, 0.13, 0.26].map((rx, j) => (
              <mesh key={j} position={[rx, 0.018, 0]} rotation={[0.26, 0, 0]}>
                <boxGeometry args={[0.014, 0.01, 0.56]} />
                <meshStandardMaterial
                  color="#38bdf8"
                  emissive="#0284c7"
                  emissiveIntensity={isSelected ? 0.9 : 0.35}
                />
              </mesh>
            ))}
          </group>
        );
      })}
    </group>
  );
};
