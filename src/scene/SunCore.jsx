import React from 'react';
import { SunSurface } from './SunSurface.jsx';
import { SunLayers } from './SunLayers.jsx';
import { CoronalLoops } from './CoronalLoops.jsx';

export const SunCore = ({ isSelected }) => {
  return (
    <group>
      {/* GLSL procedural granulation photosphere */}
      <SunSurface radius={2.5} />
      {/* 7 atmosphere shells: convection → corona-outer */}
      <SunLayers />
      {/* 6 magnetic coronal loop arcs */}
      <CoronalLoops />
      {/* Solar illumination point lights */}
      <pointLight color="#ffeecc" intensity={5} distance={120} decay={1.2} />
      <pointLight color="#ff6600" intensity={2} distance={30} decay={1.5} />
    </group>
  );
};
