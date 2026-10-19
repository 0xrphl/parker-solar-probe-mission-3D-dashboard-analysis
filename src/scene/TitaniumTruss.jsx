import React from 'react';

export const TitaniumTruss = ({ isSelected, onSelect }) => {
  // Ultra-lightweight Grade 5 Titanium Hexapod Isogrid Truss (22.7 kg / 50 lbs)
  // Connects the TPS shield (z = 1.32) to the spacecraft bus (z = 0.55)
  const col = isSelected ? '#38bdf8' : '#94a3b8';
  const emi = isSelected ? '#0284c7' : '#000000';

  return (
    <group position={[0, 0, 0.92]} onClick={onSelect}>
      {/* 12 Hexapod V-Struts (Stewart-platform geometry for minimal thermal area A_cs) */}
      {[0, 60, 120, 180, 240, 300].map((angle, idx) => {
        const rad = (angle * Math.PI) / 180;
        const rMid = 0.85;
        const x = Math.cos(rad) * rMid;
        const y = Math.sin(rad) * rMid;
        return (
          <group key={idx}>
            {/* Primary axial-diagonal titanium tube */}
            <mesh
              position={[x, y, 0]}
              rotation={[Math.PI / 2 + Math.sin(rad) * 0.28, -Math.cos(rad) * 0.28, 0]}
            >
              <cylinderGeometry args={[0.018, 0.022, 0.86, 10]} />
              <meshStandardMaterial
                color={col}
                metalness={0.85}
                roughness={0.22}
                emissive={emi}
                emissiveIntensity={isSelected ? 0.5 : 0}
              />
            </mesh>
            {/* Cross-bracing isogrid strut */}
            <mesh
              position={[x * 0.88, y * 0.88, 0]}
              rotation={[Math.PI / 2 - Math.sin(rad) * 0.22, Math.cos(rad) * 0.22, 0.35]}
            >
              <cylinderGeometry args={[0.012, 0.012, 0.84, 8]} />
              <meshStandardMaterial color={col} metalness={0.8} roughness={0.3} />
            </mesh>
          </group>
        );
      })}

      {/* Upper TPS Interface Titanium Ring */}
      <mesh position={[0, 0, 0.36]}>
        <torusGeometry args={[1.05, 0.022, 10, 48]} />
        <meshStandardMaterial color={col} metalness={0.85} roughness={0.25} />
      </mesh>

      {/* Lower Bus Interface Titanium Ring */}
      <mesh position={[0, 0, -0.36]}>
        <torusGeometry args={[0.72, 0.026, 10, 48]} />
        <meshStandardMaterial color="#64748b" metalness={0.85} roughness={0.25} />
      </mesh>
    </group>
  );
};
