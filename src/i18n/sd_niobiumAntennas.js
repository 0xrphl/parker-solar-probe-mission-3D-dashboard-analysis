export const sdNiobiumAntennas = {
  en: {
    title: "Niobium C-103 Antennas + Refractory Wire Harness Cross-Section",
    desc: `Four electric field sensor booms extend beyond the TPS umbra, measuring solar magnetic fields and plasma waves. All four are Niobium C-103 (89% Nb / 10% Hf / 1% Ti, T_melt=2,350°C). Every wire in heat-exposed regions of the spacecraft uses Nb C-103 as conductor. Copper (T_melt=1,085°C) and aluminum (T_melt=660°C) would instantly become molten pools. Standard plastic insulation (PTFE melts at 327°C) is completely replaced by monocrystalline sapphire (Al₂O₃) sleeve insulators — machined rings that slide over each wire, providing high dielectric strength and thermal stability past 1,800°C. The cross-section blueprint shows: Nb C-103 inner conductor → sapphire insulator sleeve → Nb C-103 outer sheath — a radically novel wire architecture born of extreme thermal engineering. (Source: VIDEO_COMPLEMENTARY_PARKER_PROBE)`,
    latex: `\\rho_{\\text{Nb}}(T)=\\rho_0[1+\\alpha_0(T-T_0)],\\quad T_{\\text{melt}}^{\\text{NbC103}}=2350^\\circ\\text{C}`,
    latexCaption: "Nb C-103 resistivity vs temperature — remains conductive at 1,400°C",
    blueprintImage: "/blueprints/parker pro wires cross section.png",
    specs: [
      { k: "Antenna alloy", v: "Nb C-103: 89% Nb, 10% Hf, 1% Ti" },
      { k: "T_melt Nb C-103", v: "2,350°C vs Cu at 1,085°C" },
      { k: "Wire insulator", v: "Monocrystalline Sapphire (Al₂O₃), stable to 1,800°C" },
      { k: "Outer sheath", v: "Nb C-103 — replaces plastic conduit" },
      { k: "# Antennas", v: "4 electric field booms (FIELDS instrument)" },
      { k: "Function", v: "Solar B-field, plasma waves, Alfvén waves measurement" },
    ],
    source: "Real Engineering / NASA APL — VIDEO_COMPLEMENTARY_PARKER_PROBE.TXT"
  },
  es: {
    title: "Antenas Niobio C-103 + Sección Transversal del Arnés de Cableado Refractario",
    desc: `Cuatro brazos sensores de campo eléctrico se extienden más allá de la umbra del TPS, midiendo campos magnéticos solares y ondas de plasma. Los cuatro son de Niobio C-103 (89% Nb / 10% Hf / 1% Ti, T_fusión=2.350°C). Cada cable en zonas expuestas al calor usa Nb C-103 como conductor. El cobre (T_fusión=1.085°C) y el aluminio (T_fusión=660°C) se convertirían inmediatamente en charcos fundidos. El aislamiento plástico estándar (el PTFE se funde a 327°C) se reemplaza completamente por manguitos de zafiro monocristalino (Al₂O₃) — anillos mecanizados que se deslizan sobre cada cable, con alta resistencia dieléctrica y estabilidad térmica más allá de 1.800°C. El plano de sección transversal muestra: conductor interior Nb C-103 → manguito aislante de zafiro → vaina exterior Nb C-103 — una arquitectura de cable radicalmente novedosa. (Fuente: VIDEO_COMPLEMENTARY_PARKER_PROBE)`,
    latex: `\\rho_{\\text{Nb}}(T)=\\rho_0[1+\\alpha_0(T-T_0)],\\quad T_{\\text{fusión}}^{\\text{NbC103}}=2350^\\circ\\text{C}`,
    latexCaption: "Resistividad del Nb C-103 vs temperatura — permanece conductor a 1.400°C",
    blueprintImage: "/blueprints/parker pro wires cross section.png",
    specs: [
      { k: "Aleación de antena", v: "Nb C-103: 89% Nb, 10% Hf, 1% Ti" },
      { k: "T_fusión Nb C-103", v: "2.350°C vs Cu a 1.085°C" },
      { k: "Aislante del cable", v: "Zafiro monocristalino (Al₂O₃), estable a 1.800°C" },
      { k: "Vaina exterior", v: "Nb C-103 — reemplaza conducto plástico" },
      { k: "Nº de antenas", v: "4 brazos de campo eléctrico (instrumento FIELDS)" },
      { k: "Función", v: "Campo B solar, ondas de plasma, ondas de Alfvén" },
    ],
    source: "Real Engineering / NASA APL — VIDEO_COMPLEMENTARY_PARKER_PROBE.TXT"
  }
};
