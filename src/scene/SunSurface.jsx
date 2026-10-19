import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const vertexShader = `
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;
void main() {
  vUv = uv;
  vNormal = normalize(normalMatrix * normal);
  vPosition = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
uniform float uTime;
uniform vec3 uColor1;
uniform vec3 uColor2;
varying vec2 vUv;
varying vec3 vNormal;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1,0)), f.x),
             mix(hash(i + vec2(0,1)), hash(i + vec2(1,1)), f.x), f.y);
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p = p * 2.1 + vec2(1.7, 9.2);
    a *= 0.5;
  }
  return v;
}

void main() {
  // Animated granulation pattern
  vec2 uv = vUv * 6.0 + vec2(uTime * 0.04, uTime * 0.025);
  float gran = fbm(uv);
  float gran2 = fbm(uv * 2.3 - vec2(uTime * 0.03, 0.0));
  float pattern = gran * 0.7 + gran2 * 0.3;

  // Limb darkening: attenuate edges based on surface normal angle
  float limbFactor = dot(vNormal, vec3(0.0, 0.0, 1.0));
  limbFactor = clamp(limbFactor, 0.0, 1.0);
  float limb = pow(limbFactor, 0.5);

  // Sunspot darkening zones (procedural)
  float spot = smoothstep(0.55, 0.5, fbm(vUv * 4.0 + 0.5));

  vec3 col = mix(uColor1, uColor2, pattern);
  col *= (0.6 + 0.4 * limb); // limb darkening
  col *= (1.0 - spot * 0.35); // sunspots
  col = pow(col, vec3(0.9)); // gamma

  gl_FragColor = vec4(col, 1.0);
}
`;

export const SunSurface = ({ radius = 2.5 }) => {
  const meshRef = useRef();
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uColor1: { value: new THREE.Color('#ff4800') },
    uColor2: { value: new THREE.Color('#ffcc00') },
  }), []);

  useFrame(({ clock }) => {
    uniforms.uTime.value = clock.getElapsedTime();
    if (meshRef.current) meshRef.current.rotation.y += 0.0008;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[radius, 128, 128]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};
