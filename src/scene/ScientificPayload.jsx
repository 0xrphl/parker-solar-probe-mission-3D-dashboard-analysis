import React from 'react';
import * as THREE from 'three';
import { WireHarness3D } from './WireHarness3D.jsx';

export const ScientificPayload = ({ selectedSubsystem, onSelectSub }) => {
  const isSpc = selectedSubsystem === 'faradayCup';
  const isAnt = selectedSubsystem === 'niobiumAntennas';
  const isSen = selectedSubsystem === 'solarSensors';
  const isWire = selectedSubsystem === 'wireHarness';

  const gridOffsets = [-0.075, -0.045, -0.015, 0.015, 0.045, 0.075];

  return (
    <group>
      {/* 1. Hexagonal Spacecraft Bus Body (Kapton Gold MLI + High-Gain Dish + Rear Magnetometer Boom) */}
      <group position={[0, 0, -0.15]} onClick={(e) => { e.stopPropagation(); onSelectSub('titaniumTruss'); }}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.68, 0.68, 1.25, 6]} />
          <meshStandardMaterial color="#1e293b" metalness={0.7} roughness={0.35} />
        </mesh>
        {/* Gold Kapton MLI Thermal Blankets on Bus Facets */}
        <mesh rotation={[Math.PI / 2, Math.PI / 6, 0]}>
          <cylinderGeometry args={[0.686, 0.686, 1.05, 6]} />
          <meshStandardMaterial color="#d97706" metalness={0.82} roughness={0.28} />
        </mesh>
        {/* Side Black Circular High-Gain Dish Antenna (from reference photo) */}
        <group position={[0, 0.78, -0.05]} rotation={[0.35, 0.25, 0]}>
          <mesh>
            <cylinderGeometry args={[0.32, 0.22, 0.05, 24]} />
            <meshStandardMaterial color="#0f172a" roughness={0.6} metalness={0.4} />
          </mesh>
        </group>
        {/* Rear Magnetometer Boom (FIELDS Tail Boom extending -Z) */}
        <mesh position={[0, -0.12, -1.35]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.016, 0.024, 1.45, 8]} />
          <meshStandardMaterial color="#94a3b8" metalness={0.85} roughness={0.2} />
        </mesh>
        <mesh position={[0, -0.12, -2.08]}>
          <boxGeometry args={[0.14, 0.14, 0.14]} />
          <meshStandardMaterial color="#d97706" metalness={0.85} roughness={0.2} />
        </mesh>
      </group>

      {/* 2. Solar Probe Cup (SPC) Faraday Cup with True QUADRICULAR 100-µm Tungsten Grid (Moved back inside Umbra) */}
      <group position={[1.05, 0.36, 0.25]} rotation={[0, 0.12, 0]} onClick={(e) => { e.stopPropagation(); onSelectSub('faradayCup'); }}>
        <mesh position={[-0.24, -0.08, -0.08]} rotation={[0, 0, -1.25]}>
          <cylinderGeometry args={[0.018, 0.022, 0.48, 10]} />
          <meshStandardMaterial color="#94a3b8" metalness={0.85} roughness={0.2} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.145, 0.115, 0.36, 24]} />
          <meshStandardMaterial color="#e2e8f0" metalness={0.92} roughness={0.12} emissive={isSpc ? '#ff3d00' : '#000000'} emissiveIntensity={isSpc ? 0.55 : 0} />
        </mesh>
        <mesh position={[0, 0, -0.19]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.042, 0.032, 0.06, 16]} />
          <meshStandardMaterial color="#fbbf24" metalness={0.9} roughness={0.15} />
        </mesh>
        <mesh position={[0, 0, 0.185]}>
          <torusGeometry args={[0.135, 0.014, 12, 32]} />
          <meshStandardMaterial color="#f59e0b" metalness={0.9} roughness={0.15} />
        </mesh>
        <group position={[0, 0, 0.18]}>
          {gridOffsets.map((offset, i) => (
            <React.Fragment key={i}>
              <mesh position={[0, offset, 0]}>
                <boxGeometry args={[0.21, 0.004, 0.004]} />
                <meshBasicMaterial color="#fbbf24" />
              </mesh>
              <mesh position={[offset, 0, 0]}>
                <boxGeometry args={[0.004, 0.21, 0.004]} />
                <meshBasicMaterial color="#fbbf24" />
              </mesh>
            </React.Fragment>
          ))}
          <mesh position={[0, 0, -0.06]}>
            <planeGeometry args={[0.19, 0.19, 8, 8]} />
            <meshBasicMaterial color="#f59e0b" wireframe transparent opacity={0.75} />
          </mesh>
        </group>
        {[-0.1, 0, 0.1].map((zPos, idx) => (
          <mesh key={idx} position={[0, 0, zPos]}>
            <torusGeometry args={[0.138, 0.009, 10, 28]} />
            <meshStandardMaterial color="#60a5fa" emissive="#3b82f6" emissiveIntensity={0.6} />
          </mesh>
        ))}
      </group>

      {/* 3. Coaxial Niobium C-103 + Sapphire Wire Harness & 3D Cutaway */}
      <WireHarness3D
        isSelected={isWire}
        onSelect={(e) => { e.stopPropagation(); onSelectSub('wireHarness'); }}
      />

      {/* 4. 4 Niobium C-103 Electric Field Antennas (FIELDS Suite) - All radially outward from base */}
      {[45, 135, 225, 315].map((deg, idx) => {
        const rad = (deg * Math.PI) / 180;
        const rBase = 0.86;
        return (
          <group
            key={idx}
            position={[Math.cos(rad) * rBase, Math.sin(rad) * rBase, 1.05]}
            rotation={[0, 0, rad - Math.PI / 2]}
            onClick={(e) => { e.stopPropagation(); onSelectSub('niobiumAntennas'); }}
          >
            {/* Base Ceramic/Gold Feedthrough Collar anchored at the root */}
            <mesh position={[0, 0.08, 0]}>
              <cylinderGeometry args={[0.028, 0.032, 0.14, 12]} />
              <meshStandardMaterial color="#d97706" metalness={0.85} roughness={0.2} />
            </mesh>
            {/* Outward Refractory Niobium C-103 Whip Antenna Boom (local +Y is always outward!) */}
            <mesh position={[0, 0.78, -0.12]} rotation={[-0.18, 0, 0]}>
              <cylinderGeometry args={[0.007, 0.015, 1.45, 10]} />
              <meshStandardMaterial
                color="#e2e8f0"
                metalness={0.95}
                roughness={0.08}
                emissive={isAnt ? '#818cf8' : '#000000'}
                emissiveIntensity={isAnt ? 0.65 : 0}
              />
            </mesh>
            {/* Outer Tip Cylindrical Voltage Pre-Amp Sensor */}
            <mesh position={[0, 1.50, -0.25]} rotation={[-0.18, 0, 0]}>
              <cylinderGeometry args={[0.012, 0.012, 0.12, 10]} />
              <meshStandardMaterial color="#fbbf24" metalness={0.9} roughness={0.15} />
            </mesh>
          </group>
        );
      })}

      {/* 5. 4 Autonomous Solar Limb Shadow-Edge Optical Lens Sensors (All facing +Z toward TPS edge!) */}
      {[0, 90, 180, 270].map((deg, idx) => {
        const rad = (deg * Math.PI) / 180;
        const rSens = 1.38;
        return (
          <group
            key={idx}
            position={[Math.cos(rad) * rSens, Math.sin(rad) * rSens, 0.42]}
            onClick={(e) => { e.stopPropagation(); onSelectSub('solarSensors'); }}
          >
            {/* Radial Periscope Strut connecting bus to Umbra edge */}
            <mesh
              position={[-Math.cos(rad) * 0.34, -Math.sin(rad) * 0.34, -0.04]}
              rotation={[0, 0, rad - Math.PI / 2]}
            >
              <cylinderGeometry args={[0.014, 0.018, 0.68, 8]} />
              <meshStandardMaterial color="#94a3b8" metalness={0.85} roughness={0.25} />
            </mesh>

            {/* Forward-facing (+Z) Optical Collimator Barrel */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.058, 0.064, 0.16, 20]} />
              <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.25} />
            </mesh>

            {/* Gold Precision Lens Bezel Ring at Front (+Z) */}
            <mesh position={[0, 0, 0.082]}>
              <torusGeometry args={[0.054, 0.008, 12, 24]} />
              <meshStandardMaterial color="#fbbf24" metalness={0.9} roughness={0.15} />
            </mesh>

            {/* Translucent Convex Quartz/Sapphire Optical Lens (facing +Z toward Sun) */}
            <mesh position={[0, 0, 0.085]} scale={[1, 1, 0.48]}>
              <sphereGeometry args={[0.050, 20, 20]} />
              <meshStandardMaterial
                color={isSen ? '#00f0ff' : '#38bdf8'}
                emissive={isSen ? '#00f0ff' : '#0284c7'}
                emissiveIntensity={isSen ? 1.1 : 0.65}
                transparent
                opacity={0.88}
                roughness={0.05}
                metalness={0.1}
              />
            </mesh>

            {/* Inner Silicon/SiC Photodiode Focal Element behind the Lens */}
            <mesh position={[0, 0, 0.06]}>
              <circleGeometry args={[0.032, 16]} />
              <meshBasicMaterial color="#fef08a" />
            </mesh>
          </group>
        );
      })}
    </group>
  );
};
