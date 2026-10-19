export const sdHeatShield = {
  en: {
    title: "Thermal Protection System (TPS) — C-C / Ultramet Carbon Foam",
    desc: `The TPS is an 11.4 cm-thick sandwich: a 2 mm Carbon-Carbon (C-C) composite front facesheet coated in white Al₂O₃ ceramic (α_s≈0.18), a 97%-porous Ultramet carbon foam core (k_eff≈0.08 W/m·K), and a 2 mm C-C rear facesheet. At 8.86 R☉ (0.041 AU) the front surface reaches ~1,377°C while the instrument bus stays below 30°C — a 1,340°C drop across 11 cm. Under SEM the foam is 97% open void space — a graphite ligament network that blocks solid conduction and scatters internal IR photons via the Rosseland mechanism. The white ceramic reflects 82% of visible solar radiation before it enters the carbon layers. (Source: VIDEO_COMPLEMENTARY_PARKER_PROBE — Ultramet, NASA APL)`,
    latex: `\\alpha_s\\!\\frac{S_0}{(r/1\\,\\text{AU})^2}=\\varepsilon\\sigma T_s^4+q_\\text{cond},\\quad q_\\text{cond}=-k_\\text{eff}\\frac{dT}{dx}`,
    latexCaption: "Radiative equilibrium + Fourier conduction through TPS layers",
    blueprintImage: null,
    specs: [
      { k: "Front coating", v: "Al₂O₃ white ceramic, α_s=0.18, ε=0.86" },
      { k: "Foam core", v: "Ultramet carbon foam, 97% open porosity, ρ=0.16 g/cm³" },
      { k: "k_eff foam", v: "0.05–0.12 W/(m·K) temperature-dependent" },
      { k: "Shield thickness", v: "11.4 cm (4.5 in)" },
      { k: "Front T_max", v: "≈1,377°C (1,650 K) at perihelion" },
      { k: "Bus T (shadow)", v: "<30°C — safe electronics zone" },
    ],
    source: "Real Engineering / NASA APL — VIDEO_COMPLEMENTARY_PARKER_PROBE.TXT"
  },
  es: {
    title: "Sistema de Protección Térmica (TPS) — C-C / Espuma de Carbono Ultramet",
    desc: `El TPS es un sándwich de 11.4 cm: una cara frontal de 2 mm de compuesto Carbono-Carbono (C-C) recubierta con cerámica blanca Al₂O₃ (α_s≈0.18), un núcleo de espuma de carbono Ultramet con 97% de porosidad (k_eff≈0.08 W/m·K), y una cara trasera de 2 mm de C-C. A 8.86 R☉ (0.041 AU) la superficie frontal alcanza ~1.377°C mientras el bus de instrumentos se mantiene por debajo de 30°C — una caída de 1.340°C en 11 cm. Bajo el SEM la espuma es 97% vacío — una red de ligamentos de grafito que bloquea la conducción sólida y dispersa los fotones IR internos por el mecanismo de Rosseland. La cerámica blanca refleja el 82% de la radiación solar visible. (Fuente: VIDEO_COMPLEMENTARY_PARKER_PROBE — Ultramet, NASA APL)`,
    latex: `\\alpha_s\\!\\frac{S_0}{(r/1\\,\\text{AU})^2}=\\varepsilon\\sigma T_s^4+q_\\text{cond},\\quad q_\\text{cond}=-k_\\text{eff}\\frac{dT}{dx}`,
    latexCaption: "Equilibrio radiativo + conducción de Fourier a través de las capas del TPS",
    blueprintImage: null,
    specs: [
      { k: "Recubrimiento frontal", v: "Cerámica Al₂O₃ blanca, α_s=0.18, ε=0.86" },
      { k: "Núcleo de espuma", v: "Espuma de carbono Ultramet, 97% de porosidad" },
      { k: "k_eff espuma", v: "0.05–0.12 W/(m·K) dependiente de temperatura" },
      { k: "Espesor", v: "11.4 cm (4.5 pulg.)" },
      { k: "T_max frontal", v: "≈1.377°C (1.650 K) en perihelio" },
      { k: "T del bus (sombra)", v: "<30°C — zona segura de electrónica" },
    ],
    source: "Real Engineering / NASA APL — VIDEO_COMPLEMENTARY_PARKER_PROBE.TXT"
  }
};
