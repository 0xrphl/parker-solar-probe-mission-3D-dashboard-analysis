import React from 'react';

export const HardwareSchematicSVG = ({ subsystemId, lang = 'es' }) => {
  const isES = lang === 'es';

  if (subsystemId === 'solarSensors') {
    return (
      <svg viewBox="0 0 400 96" className="w-full h-24 bg-space-950 rounded-lg border border-amber-500/30 p-1 font-mono">
        <rect x="8" y="12" width="105" height="72" fill="#ff9100" fillOpacity="0.2" />
        <text x="14" y="28" fill="#ffd166" fontSize="8">{isES ? 'SOL 650 kW/m²' : 'SUN 650 kW/m²'}</text>
        <rect x="115" y="8" width="12" height="80" rx="2" fill="#f8fafc" stroke="#ff9100" />
        <polygon points="127,8 280,24 280,72 127,88" fill="#a855f7" fillOpacity="0.2" stroke="#a855f7" strokeDasharray="3,3" />
        <text x="150" y="52" fill="#e9d5ff" fontSize="8.5">{isES ? 'CONO UMBRA (<30°C)' : 'UMBRA CONE (<30°C)'}</text>
        <circle cx="242" cy="18" r="5" fill="#f59e0b" stroke="#fff" />
        <circle cx="242" cy="78" r="5" fill="#f59e0b" stroke="#fff" />
        <line x1="247" y1="18" x2="310" y2="38" stroke="#00f0ff" strokeWidth="1.5" />
        <line x1="247" y1="78" x2="310" y2="58" stroke="#00f0ff" strokeWidth="1.5" />
        <rect x="310" y="28" width="80" height="40" rx="4" fill="#0f172a" stroke="#00f0ff" />
        <text x="318" y="45" fill="#00f0ff" fontSize="8">ACSW CONTROL</text>
        <text x="318" y="58" fill="#cbd5e1" fontSize="8">Δθ &lt; 1.0 s</text>
      </svg>
    );
  }

  if (subsystemId === 'faradayCup') {
    return (
      <svg viewBox="0 0 400 96" className="w-full h-24 bg-space-950 rounded-lg border border-solar-flare/40 p-1 font-mono">
        <text x="10" y="13" fill="#ffd166" fontSize="8.5">
          {isES ? 'REJILLA CUADRICULAR TUNGSTENO (100 µm)' : 'QUADRICULAR TUNGSTEN MESH (100 µm)'}
        </text>
        <g transform="translate(14, 18)">
          <rect width="68" height="68" fill="#090d16" stroke="#f59e0b" strokeWidth="1.8" />
          {[14, 28, 41, 55].map((p) => (
            <g key={p}>
              <line x1={p} y1="0" x2={p} y2="68" stroke="#fbbf24" strokeWidth="1.1" />
              <line x1="0" y1={p} x2="68" y2={p} stroke="#fbbf24" strokeWidth="1.1" />
            </g>
          ))}
        </g>
        <g transform="translate(105, 16)">
          <rect y="4" width="150" height="62" fill="none" stroke="#94a3b8" strokeWidth="2" />
          <line x1="25" y1="4" x2="25" y2="66" stroke="#fbbf24" strokeWidth="2" strokeDasharray="4,2" />
          <line x1="60" y1="4" x2="60" y2="66" stroke="#fbbf24" strokeWidth="2" strokeDasharray="4,2" />
          <rect x="122" y="12" width="9" height="46" fill="#38bdf8" />
          <circle cx="134" cy="18" r="4.5" fill="#60a5fa" />
          <circle cx="134" cy="52" r="4.5" fill="#60a5fa" />
          <line x1="134" y1="35" x2="265" y2="35" stroke="#f97316" strokeWidth="2.5" />
          <text x="4" y="77" fill="#fbbf24" fontSize="7.5">W Grid (3422°C)</text>
          <text x="105" y="77" fill="#60a5fa" fontSize="7.5">Sapphire + Nb C-103</text>
        </g>
      </svg>
    );
  }

  if (subsystemId === 'wireHarness' || subsystemId === 'niobiumAntennas') {
    return (
      <svg viewBox="0 0 400 96" className="w-full h-24 bg-space-950 rounded-lg border border-indigo-400/40 p-1 font-mono">
        <text x="10" y="13" fill="#818cf8" fontSize="8.5">
          {isES ? 'CORTE COAXIAL: NIOBIO C-103 + ZAFIRO Al₂O₃' : 'COAXIAL CUTAWAY: NIOBIUM C-103 + SAPPHIRE'}
        </text>
        <g transform="translate(52, 54)">
          <circle r="34" fill="#1e293b" stroke="#94a3b8" strokeWidth="3.5" />
          <circle r="22" fill="#1d4ed8" fillOpacity="0.45" stroke="#60a5fa" strokeWidth="2.5" />
          <circle r="9" fill="#f59e0b" stroke="#fef08a" strokeWidth="2" />
        </g>
        <g transform="translate(105, 24)" fontSize="8.5">
          <text y="12" fill="#fef08a">● {isES ? 'Núcleo: Aleación Nb C-103 (2350°C)' : 'Core: Nb C-103 Alloy (2350°C)'}</text>
          <text y="29" fill="#60a5fa">● {isES ? 'Aislante: Zafiro Monocristalino (2040°C)' : 'Insulator: Sapphire Al₂O₃ (2040°C)'}</text>
          <text y="46" fill="#cbd5e1">● {isES ? 'Camisa: Blindaje Exterior Nb C-103' : 'Jacket: Outer Nb C-103 Shield'}</text>
          <text y="63" fill="#f87171">✖ {isES ? 'Cu (1085°C) y Al (660°C) se funden' : 'Cu (1085°C) & Al (660°C) melt'}</text>
        </g>
      </svg>
    );
  }

  if (subsystemId === 'waterCooling' || subsystemId === 'solarPanels' || subsystemId === 'radiators') {
    return (
      <svg viewBox="0 0 400 104" className="w-full h-28 bg-space-950 rounded-lg border border-solar-cyan/40 p-1 font-mono">
        <text x="10" y="13" fill="#00f0ff" fontSize="8.5">
          {isES ? 'DIAGRAMA DE BUCLE ACTIVO H₂O & RADIADORES GRAFITO' : 'ACTIVE H₂O COOLING LOOP & GRAPHITE RADIATORS DIAGRAM'}
        </text>
        {/* PV Wing Box */}
        <rect x="12" y="24" width="95" height="62" rx="4" fill="#172554" stroke="#38bdf8" strokeWidth="1.5" />
        <text x="18" y="42" fill="#93c5fd" fontSize="8">{isES ? 'Ala Solar FV' : 'PV Solar Wing'}</text>
        <text x="18" y="56" fill="#fff" fontSize="8.5">T_cell ≈ 70°C</text>
        <text x="18" y="72" fill="#ffd166" fontSize="7.5">q_in = 650 kW/m²</text>
        {/* Hot Water Line */}
        <path d="M 107 38 L 195 38" stroke="#ef4444" strokeWidth="2.5" />
        <polygon points="195,38 188,34 188,42" fill="#ef4444" />
        <text x="116" y="32" fill="#fca5a5" fontSize="7.5">{isES ? 'H₂O Caliente →' : 'Hot H₂O →'}</text>
        {/* Cold Water Return Line */}
        <path d="M 195 72 L 107 72" stroke="#00f0ff" strokeWidth="2.5" />
        <polygon points="107,72 114,68 114,76" fill="#00f0ff" />
        <text x="116" y="85" fill="#67e8f9" fontSize="7.5">{isES ? '← H₂O Fría (Cp=4184)' : '← Cool H₂O (Cp=4184)'}</text>
        {/* 4 Black Graphite Radiators */}
        <rect x="195" y="22" width="108" height="66" rx="4" fill="#090d16" stroke="#10b981" strokeWidth="1.5" />
        <text x="203" y="40" fill="#6ee7b7" fontSize="8">{isES ? '4 Radiadores Grafito' : '4 Graphite Radiators'}</text>
        <text x="203" y="54" fill="#e2e8f0" fontSize="8">ε_rad = 0.92 (Ti Truss)</text>
        <text x="203" y="70" fill="#38bdf8" fontSize="7.5">Q = m_dot·Cp·ΔT</text>
        {/* Radiative Rejection to Deep Space */}
        <line x1="303" y1="38" x2="345" y2="28" stroke="#ffd166" strokeWidth="1.5" strokeDasharray="3,2" />
        <line x1="303" y1="55" x2="345" y2="55" stroke="#ffd166" strokeWidth="1.5" strokeDasharray="3,2" />
        <line x1="303" y1="72" x2="345" y2="82" stroke="#ffd166" strokeWidth="1.5" strokeDasharray="3,2" />
        <text x="348" y="52" fill="#ffd166" fontSize="8">Q_rad</text>
        <text x="348" y="65" fill="#94a3b8" fontSize="7.5">T_∞ ≈ 4K</text>
      </svg>
    );
  }

  if (subsystemId === 'titaniumTruss') {
    return (
      <svg viewBox="0 0 400 104" className="w-full h-28 bg-space-950 rounded-lg border border-slate-500/40 p-1 font-mono">
        <text x="10" y="13" fill="#38bdf8" fontSize="8.5">
          {isES ? 'DIAGRAMA CELOSÍA ISOGRID TITANIO (22.7 kg) & R_th' : 'TITANIUM ISOGRID TRUSS (22.7 kg) & R_th DIAGRAM'}
        </text>
        {/* TPS Hot Side */}
        <rect x="12" y="22" width="72" height="68" rx="3" fill="#7c2d12" stroke="#f97316" strokeWidth="1.5" />
        <text x="18" y="45" fill="#fed7aa" fontSize="8">TPS C-C</text>
        <text x="18" y="60" fill="#fff" fontSize="8.5">1,377 °C</text>
        {/* Hexapod Isogrid Struts */}
        <g stroke="#94a3b8" strokeWidth="2">
          <line x1="84" y1="28" x2="195" y2="42" />
          <line x1="84" y1="48" x2="195" y2="28" />
          <line x1="84" y1="62" x2="195" y2="82" />
          <line x1="84" y1="82" x2="195" y2="62" />
          <line x1="138" y1="35" x2="138" y2="75" stroke="#38bdf8" strokeDasharray="3,2" />
        </g>
        <text x="92" y="98" fill="#38bdf8" fontSize="7.5">Ti-6Al-4V (k=6.7 W/m·K, A_cs min)</text>
        {/* Bus Cool Side */}
        <rect x="195" y="22" width="76" height="68" rx="3" fill="#064e3b" stroke="#10b981" strokeWidth="1.5" />
        <text x="202" y="45" fill="#6ee7b7" fontSize="8">Bus (Umbra)</text>
        <text x="202" y="60" fill="#fff" fontSize="8.5">&lt; 30 °C</text>
        {/* Thermal Resistance Formula Box */}
        <rect x="282" y="26" width="108" height="60" rx="4" fill="#0f172a" stroke="#64748b" />
        <text x="288" y="44" fill="#ffd166" fontSize="8">R_th = L/(k·A_cs)</text>
        <text x="288" y="60" fill="#cbd5e1" fontSize="7.5">Masa = 22.7 kg</text>
        <text x="288" y="74" fill="#38bdf8" fontSize="7.5">ΔT = -1,347 °C</text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 400 100" className="w-full h-26 bg-space-950 rounded-lg border border-solar-gold/40 p-1 font-mono">
      <text x="10" y="13" fill="#ffd166" fontSize="8.5">
        {isES ? 'CORTE SÁNDWICH ESCUDO TPS (11.4 cm) & CONO UMBRA' : 'TPS SANDWICH CROSS-SECTION (11.4 cm) & UMBRA CONE'}
      </text>
      {/* Layer 1: Al2O3 */}
      <rect x="16" y="22" width="16" height="64" fill="#f8fafc" stroke="#cbd5e1" />
      {/* Layer 2: Front C-C */}
      <rect x="32" y="22" width="14" height="64" fill="#1e293b" stroke="#f97316" />
      {/* Layer 3: 97% Carbon Foam */}
      <rect x="46" y="22" width="96" height="64" fill="#0f172a" stroke="#38bdf8" strokeDasharray="3,2" />
      <text x="54" y="48" fill="#38bdf8" fontSize="8">Espuma C 97%</text>
      <text x="54" y="62" fill="#cbd5e1" fontSize="7.5">11.4 cm Aire/C</text>
      {/* Layer 4: Back C-C */}
      <rect x="142" y="22" width="14" height="64" fill="#1e293b" stroke="#10b981" />
      {/* Umbra Cone */}
      <polygon points="156,22 385,34 385,74 156,86" fill="#a855f7" fillOpacity="0.2" stroke="#a855f7" strokeDasharray="4,2" />
      <text x="175" y="48" fill="#ffd166" fontSize="8">{isES ? '1. Al₂O₃ Blanca (1377°C)' : '1. White Al₂O₃ (1377°C)'}</text>
      <text x="175" y="62" fill="#e9d5ff" fontSize="8">{isES ? '2. Láminas C-C + Sombra (<30°C)' : '2. C-C Sheets + Umbra (<30°C)'}</text>
      <text x="175" y="76" fill="#6ee7b7" fontSize="7.5">k_eff ≈ 0.08 W/(m·K)</text>
    </svg>
  );
};
