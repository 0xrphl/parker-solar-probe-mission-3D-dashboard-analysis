export const sdSolarPanels = {
  en: {
    title: "Retractable Solar Arrays — Water-Cooled Triple-Junction PV Wings",
    desc: `Parker's solar arrays are unique in spaceflight. During cruise they are fully deployed, but as the probe approaches the Sun they retract behind the TPS umbra. Only two small secondary panels remain exposed — actively cooled with pressurized water. At 0.041 AU, solar flux is 475× Earth's (~650 kW/m²). Without cooling the cells would exceed 150°C, degrading efficiency and risking permanent damage. Water holds them at ~70°C. The original Jupiter-flyby design used large panels that could NOT retract — they would have been destroyed. This single engineering constraint drove the entire mission redesign from Jupiter to 7 Venus flybys. The trade: fewer power watts but 24 solar orbits and 900+ data hours vs. 2 passes and 100 hours with Jupiter. Triple-junction GaInP/GaAs/Ge cells achieve ~28% efficiency. (Source: VIDEO_COMPLEMENTARY_PARKER_PROBE)`,
    latex: `\\eta_{\\text{cell}}(T)=\\eta_0[1-\\beta(T-T_{\\text{ref}})],\\quad \\beta\\approx0.0045/\\text{K}`,
    latexCaption: "PV cell efficiency loss vs temperature — water cooling preserves η near η₀",
    blueprintImage: null,
    specs: [
      { k: "Cell type", v: "Triple-junction GaInP/GaAs/Ge, η≈28%" },
      { k: "Solar flux @ perihelion", v: "475× Earth ≈ 650 kW/m²" },
      { k: "T without cooling", v: ">150°C → cell degradation" },
      { k: "T with water cooling", v: "≈70°C → safe operating range" },
      { k: "Power output", v: "~388 W at 0.041 AU (reduced area)" },
      { k: "Mission impact", v: "Retractability → 7 Venus flybys → 24 solar passes" },
    ],
    source: "Real Engineering / NASA APL — VIDEO_COMPLEMENTARY_PARKER_PROBE.TXT"
  },
  es: {
    title: "Paneles Solares Retráctiles — Alas FV de Unión Triple Refrigeradas con Agua",
    desc: `Los paneles solares de Parker son únicos en la historia espacial. Durante el crucero se despliegan completamente, pero al acercarse al Sol se retraen detrás de la umbra del TPS. Solo dos pequeños paneles secundarios permanecen expuestos — refrigerados activamente con agua. A 0.041 AU, el flujo solar es 475× el terrestre (~650 kW/m²). Sin refrigeración las células superarían 150°C, degradando la eficiencia. El agua las mantiene a ~70°C. El diseño original con asistencia de Júpiter usaba paneles grandes que NO podían retraerse — habrían sido destruidos. Esta única restricción de ingeniería impulsó todo el rediseño de la misión de Júpiter a 7 asistencias de Venus. El compromiso: menos vatios de potencia pero 24 órbitas solares y >900 horas de datos vs. 2 pasos y 100 horas con Júpiter. Las células de unión triple GaInP/GaAs/Ge alcanzan ~28% de eficiencia. (Fuente: VIDEO_COMPLEMENTARY_PARKER_PROBE)`,
    latex: `\\eta_{\\text{célula}}(T)=\\eta_0[1-\\beta(T-T_{\\text{ref}})],\\quad \\beta\\approx0.0045/\\text{K}`,
    latexCaption: "Pérdida de eficiencia FV vs temperatura — el enfriamiento preserva η cerca de η₀",
    blueprintImage: null,
    specs: [
      { k: "Tipo de célula", v: "Unión triple GaInP/GaAs/Ge, η≈28%" },
      { k: "Flujo solar @ perihelio", v: "475× terrestre ≈ 650 kW/m²" },
      { k: "T sin refrigeración", v: ">150°C → degradación de célula" },
      { k: "T con refrigeración", v: "≈70°C → rango operativo seguro" },
      { k: "Potencia generada", v: "~388 W a 0.041 AU (área reducida)" },
      { k: "Impacto de misión", v: "Retractabilidad → 7 flybys Venus → 24 pasos solares" },
    ],
    source: "Real Engineering / NASA APL — VIDEO_COMPLEMENTARY_PARKER_PROBE.TXT"
  }
};
