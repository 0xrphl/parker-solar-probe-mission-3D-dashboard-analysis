import React, { useState, useRef } from 'react';
import { Header } from './components/Header.jsx';
import { LeftSidebar } from './components/LeftSidebar.jsx';
import { RightSidebar } from './components/RightSidebar.jsx';
import { BlueprintModal } from './components/BlueprintModal.jsx';
import { SceneViewer } from './scene/SceneViewer.jsx';
import { translations } from './i18n/translations.js';
import { equationsData } from './i18n/equationsData.js';
import { blueprintsData } from './i18n/blueprintsData.js';

export default function App() {
  const [lang, setLang] = useState('es'); // Spanish by default as requested
  const [mode, setMode] = useState('spacecraft'); // spacecraft, sunAtmosphere, trajectory
  const [selectedSubsystem, setSelectedSubsystem] = useState('heatShield');
  const [selectedAtmosphereLayer, setSelectedAtmosphereLayer] = useState('corona');
  const [isBlueprintModalOpen, setIsBlueprintModalOpen] = useState(false);
  const [leftCollapsed, setLeftCollapsed] = useState(false);
  const [rightCollapsed, setRightCollapsed] = useState(false);

  const controlsRef = useRef();

  const t = translations[lang];
  const equations = equationsData[lang];
  const blueprints = blueprintsData[lang];

  const handleResetCamera = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col bg-space-950 text-slate-100 overflow-hidden font-sans">
      <Header
        lang={lang}
        setLang={setLang}
        mode={mode}
        setMode={setMode}
        t={t}
        onOpenBlueprints={() => setIsBlueprintModalOpen(true)}
        onResetCamera={handleResetCamera}
        leftCollapsed={leftCollapsed}
        setLeftCollapsed={setLeftCollapsed}
        rightCollapsed={rightCollapsed}
        setRightCollapsed={setRightCollapsed}
      />

      <div className="flex-1 flex relative overflow-hidden">
        <LeftSidebar
          t={t}
          mode={mode}
          setMode={setMode}
          selectedSubsystem={selectedSubsystem}
          setSelectedSubsystem={setSelectedSubsystem}
          selectedAtmosphereLayer={selectedAtmosphereLayer}
          setSelectedAtmosphereLayer={setSelectedAtmosphereLayer}
          collapsed={leftCollapsed}
          setCollapsed={setLeftCollapsed}
        />

        <main className="flex-1 min-w-0 h-full relative">
          <SceneViewer
            mode={mode}
            selectedSubsystem={selectedSubsystem}
            setSelectedSubsystem={setSelectedSubsystem}
            selectedAtmosphereLayer={selectedAtmosphereLayer}
            setSelectedAtmosphereLayer={setSelectedAtmosphereLayer}
            isBlueprintModalOpen={isBlueprintModalOpen}
            controlsRef={controlsRef}
            t={t}
            lang={lang}
          />
        </main>

        <RightSidebar
          t={t}
          equations={equations}
          collapsed={rightCollapsed}
          setCollapsed={setRightCollapsed}
        />
      </div>

      <BlueprintModal
        isOpen={isBlueprintModalOpen}
        onClose={() => setIsBlueprintModalOpen(false)}
        blueprints={blueprints}
        t={t}
      />
    </div>
  );
}
