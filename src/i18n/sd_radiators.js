export const sdRadiators = {
  en: {
    title: "Graphite Radiator Panels — Deep Space Radiative Heat Rejection",
    desc: `Two black graphite radiator panels mounted on the titanium truss below the TPS receive hot water from the solar array cooling loops and radiate thermal energy to deep space (T_sink≈4 K). High-emissivity graphite coatings (ε≈0.92) maximize Stefan-Boltzmann radiative rejection: Q = ε·A·σ·(T_rad⁴ − T_space⁴). At 50°C (323 K): Q/A = 0.92×5.67e-8×323⁴ ≈ 570 W/m² — adequate for the probe's power budget. The radiators must remain in the TPS shadow at all times — if exposed to direct sunlight at perihelion they would absorb far more than they radiate, destroying the cooling loop. The titanium truss positioning ensures this. Their black coating achieves ε≈0.92 while the TPS front white coating has ε≈0.86 but α_s≈0.18 — opposite optical properties by design. (Source: VIDEO_COMPLEMENTARY_PARKER_PROBE)`,
    latex: `Q_{\\text{rad}}=\\varepsilon_{\\text{gr}}A_r\\sigma\\bigl(T_r^4-T_\\infty^4\\bigr),\\quad\\varepsilon_{\\text{graphite}}\\approx0.92`,
    latexCaption: "Stefan-Boltzmann radiative rejection — high ε graphite coating maximizes Q",
    blueprintImage: null,
    specs: [
      { k: "Coating", v: "High-ε graphite black, ε≈0.92" },
      { k: "T_sink", v: "≈4 K deep space (CMB)" },
      { k: "Q/A at 50°C", v: "≈570 W/m² rejected to space" },
      { k: "Mounting", v: "Titanium truss — always within TPS umbra" },
      { k: "Heat input", v: "H₂O cooling loop from solar panels" },
      { k: "Governing law", v: "Stefan-Boltzmann: Q ∝ ε·A·(T⁴−T_sink⁴)" },
    ],
    source: "Real Engineering / NASA APL — VIDEO_COMPLEMENTARY_PARKER_PROBE.TXT"
  },
  es: {
    title: "Paneles Radiadores de Grafito — Rechazo Radiativo de Calor al Espacio Profundo",
    desc: `Dos paneles radiadores de grafito negro montados en la celosía de titanio bajo el TPS reciben agua caliente de los bucles de refrigeración de los paneles solares y radian energía térmica al espacio profundo (T_sumidero≈4 K). Los recubrimientos de grafito de alta emisividad (ε≈0.92) maximizan el rechazo radiativo de Stefan-Boltzmann: Q = ε·A·σ·(T_rad⁴ − T_espacio⁴). A 50°C (323 K): Q/A = 0.92×5.67e-8×323⁴ ≈ 570 W/m² — adecuado para el presupuesto de potencia de la sonda. Los radiadores deben permanecer siempre en la sombra del TPS — si se exponen a la luz solar directa en perihelio absorberían mucho más de lo que radian, destruyendo el bucle de enfriamiento. El posicionamiento de la celosía de titanio lo asegura. Su recubrimiento negro logra ε≈0.92 mientras el recubrimiento blanco frontal del TPS tiene ε≈0.86 pero α_s≈0.18 — propiedades ópticas opuestas por diseño. (Fuente: VIDEO_COMPLEMENTARY_PARKER_PROBE)`,
    latex: `Q_{\\text{rad}}=\\varepsilon_{\\text{gr}}A_r\\sigma\\bigl(T_r^4-T_\\infty^4\\bigr),\\quad\\varepsilon_{\\text{grafito}}\\approx0.92`,
    latexCaption: "Rechazo radiativo Stefan-Boltzmann — alta ε del grafito maximiza Q",
    blueprintImage: null,
    specs: [
      { k: "Recubrimiento", v: "Grafito negro de alta ε, ε≈0.92" },
      { k: "T_sumidero", v: "≈4 K espacio profundo (CMB)" },
      { k: "Q/A a 50°C", v: "≈570 W/m² rechazados al espacio" },
      { k: "Montaje", v: "Celosía de titanio — siempre dentro de la umbra del TPS" },
      { k: "Entrada de calor", v: "Bucle de H₂O de refrigeración de paneles solares" },
      { k: "Ley gobernante", v: "Stefan-Boltzmann: Q ∝ ε·A·(T⁴−T_sumidero⁴)" },
    ],
    source: "Real Engineering / NASA APL — VIDEO_COMPLEMENTARY_PARKER_PROBE.TXT"
  }
};
