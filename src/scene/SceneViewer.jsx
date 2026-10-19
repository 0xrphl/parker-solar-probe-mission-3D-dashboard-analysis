import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { ParkerSpacecraft } from './ParkerSpacecraft.jsx';
import { SunAtmosphere } from './SunAtmosphere.jsx';
import { HeliosphericTrajectory } from './HeliosphericTrajectory.jsx';
import { AtomicMaterialScene } from './AtomicMaterialScene.jsx';
import { SubsystemWindow } from '../components/SubsystemWindow.jsx';
import { CFDControlBar } from '../components/CFDControlBar.jsx';
import { VideoReferenceModal } from '../components/VideoReferenceModal.jsx';
import { subsystemDetails } from '../i18n/subsystemDetails.js';
import { Youtube, FileText, ExternalLink } from 'lucide-react';

export const SceneViewer = ({
  mode,
  selectedSubsystem,
  setSelectedSubsystem,
  selectedAtmosphereLayer,
  setSelectedAtmosphereLayer,
  isBlueprintModalOpen,
  controlsRef,
  t,
  lang
}) => {
  const [cfdMode, setCfdMode] = useState('natural');
  const [openSubWindow, setOpenSubWindow] = useState(null);
  const [openSolarWindow, setOpenSolarWindow] = useState(null);
  const [activeFlyby, setActiveFlyby] = useState(null);
  const [panelAngle, setPanelAngle] = useState(55);
  const [autoAnimatePanels, setAutoAnimatePanels] = useState(true);
  const [showRadRays, setShowRadRays] = useState(true);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Hide 3D HTML callout tags whenever any modal or inspection window is open so they NEVER overlap!
  const hide3DTags = Boolean(
    isBlueprintModalOpen || isVideoModalOpen || openSubWindow || openSolarWindow || activeFlyby !== null
  );

  const handleSelectSubsystem = (id) => {
    setSelectedSubsystem(id);
    setOpenSolarWindow(null);
    setActiveFlyby(null);
    setOpenSubWindow(id);
  };

  const handleSelectSolarLayer = (id) => {
    setSelectedAtmosphereLayer(id);
    setOpenSubWindow(null);
    setActiveFlyby(null);
    setOpenSolarWindow(id);
  };

  return (
    <div className="w-full h-full relative bg-space-950 overflow-hidden">
      {/* CFD Mode Switcher + Viewport-Safe Solar/Trajectory Windows */}
      <CFDControlBar
        cfdMode={cfdMode}
        setCfdMode={setCfdMode}
        activeSolarLayer={openSolarWindow}
        onCloseSolarLayer={() => setOpenSolarWindow(null)}
        activeFlyby={activeFlyby}
        onCloseFlyby={() => setActiveFlyby(null)}
        lang={lang}
        mode={mode}
        panelAngle={panelAngle}
        setPanelAngle={setPanelAngle}
        autoAnimatePanels={autoAnimatePanels}
        setAutoAnimatePanels={setAutoAnimatePanels}
        showRadRays={showRadRays}
        setShowRadRays={setShowRadRays}
      />

      {/* Corner Buttons for Google Drive DOCX Report & 2 YouTube Reference Videos */}
      <div className="absolute bottom-3 right-3 z-30 flex items-center gap-2">
        <a
          href="https://docs.google.com/document/d/1b7eNMyO5pENDptTPzfeo3wBvgB3_d09c/edit?usp=sharing&ouid=102220368577968794134&rtpof=true&sd=true"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-2xl bg-emerald-700/90 hover:bg-emerald-600 text-white font-mono text-xs font-bold border border-emerald-300/50 shadow-xl transition-all hover:scale-105"
        >
          <FileText className="w-4 h-4" />
          <span>{lang === 'es' ? '📄 Informe Drive (.DOCX)' : '📄 Drive Report (.DOCX)'}</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>

        <button
          onClick={() => setIsVideoModalOpen(true)}
          className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-gradient-to-r from-red-600/90 to-solar-flare/90 hover:from-red-500 hover:to-solar-flare text-white font-mono text-xs font-bold border border-solar-gold/50 shadow-xl shadow-red-950/60 transition-all hover:scale-105"
        >
          <Youtube className="w-4 h-4" />
          <span>{lang === 'es' ? '🎬 2 Videos YouTube' : '🎬 2 YouTube Videos'}</span>
        </button>
      </div>

      <VideoReferenceModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        lang={lang}
      />

      {/* Viewport-Safe Spacecraft & Atomic Subsystem Window (Never clipped, never covered by tags) */}
      {openSubWindow && subsystemDetails[openSubWindow] && (
        <SubsystemWindow
          subsystemId={openSubWindow}
          data={subsystemDetails[openSubWindow]}
          lang={lang || 'es'}
          onClose={() => setOpenSubWindow(null)}
        />
      )}

      <Canvas
        camera={{ position: [0, 2.5, 7.8], fov: 48 }}
        gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
      >
        <color attach="background" args={['#030712']} />

        <ambientLight intensity={0.35} />
        <directionalLight position={[2, 3, 10]} intensity={2.4} color="#fff5ea" />
        <directionalLight position={[-6, -4, -6]} intensity={0.5} color="#00f0ff" />

        <Stars radius={120} depth={60} count={3500} factor={4} saturation={0.5} fade />

        {mode === 'spacecraft' && (
          <ParkerSpacecraft
            selectedSubsystem={selectedSubsystem}
            onSelectSubsystem={handleSelectSubsystem}
            cfdMode={cfdMode}
            hideTags={hide3DTags}
            lang={lang}
            panelAngle={panelAngle}
            autoAnimatePanels={autoAnimatePanels}
            setPanelAngle={setPanelAngle}
            showRadRays={showRadRays}
          />
        )}

        {mode === 'sunAtmosphere' && (
          <SunAtmosphere
            selectedLayer={selectedAtmosphereLayer}
            onSelectLayer={handleSelectSolarLayer}
            cfdMode={cfdMode}
            hideTags={hide3DTags}
            lang={lang}
          />
        )}

        {mode === 'trajectory' && (
          <HeliosphericTrajectory
            t={t}
            onSelectLayer={setSelectedAtmosphereLayer}
            activeFlyby={activeFlyby}
            setActiveFlyby={(idx) => {
              setOpenSubWindow(null);
              setOpenSolarWindow(null);
              setActiveFlyby(idx);
            }}
            hideTags={hide3DTags}
          />
        )}

        {mode === 'atomicMaterials' && (
          <AtomicMaterialScene
            selectedSubsystem={selectedSubsystem}
            onSelectSubsystem={handleSelectSubsystem}
            hideTags={hide3DTags}
            lang={lang}
          />
        )}

        <OrbitControls
          ref={controlsRef}
          enableDamping
          dampingFactor={0.06}
          minDistance={1.2}
          maxDistance={35}
        />
      </Canvas>

      {/* Bottom Mode Status Pill */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-space-900/90 border border-space-700/80 backdrop-blur-md text-xs font-mono text-slate-300 pointer-events-none flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-solar-gold animate-ping" />
        <span>
          {lang === 'es' ? ' Escena 3D:' : ' 3D Scene:'}{' '}
          <strong className="text-white">{t.modes[mode]}</strong>
        </span>
      </div>
    </div>
  );
};
