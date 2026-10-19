export const sdWireHarness = {
  en: {
    title: "Coaxial Refractory Cable: Niobium C-103 + Monocrystalline Sapphire",
    desc: `Every electrical cable exposed outside the TPS shadow experiences up to 1,400°C and intense solar wind ion bombardment. Standard aerospace copper (melts at 1,085°C), aluminum (melts at 660°C), and PTFE polymer insulation (melts at 327°C) would turn into molten pools immediately. NASA engineers designed a coaxial refractory wire: an inner conductor of Niobium C-103 alloy (89% Nb, 10% Hf, 1% Ti; T_melt = 2,350°C), electrically insulated by precision-machined monocrystalline Sapphire (Al₂O₃; T_melt = 2,040°C) spacer sleeves, all enclosed inside an outer protective Niobium C-103 metallic sheath. This coaxial assembly feeds the high-voltage Tungsten modulator grid and carries picoampere current signals from the Solar Probe Cup (SPC) and FIELDS antennas back to the shadowed electronics bus.`,
    latex: `R_{\\text{ins}}(T)=\\frac{\\ln(r_o/r_i)}{2\\pi L\\,\\sigma_{\\text{Al}_2\\text{O}_3}(T)},\\quad T_{\\text{melt}}^{\\text{NbC103}}=2350^\\circ\\text{C},\\;T_{\\text{melt}}^{\\text{Sapphire}}=2040^\\circ\\text{C}`,
    latexCaption: "Cylindrical dielectric insulation resistance & refractory melting limits",
    blueprintImage: "/blueprints/parker pro wires cross section.png",
    specs: [
      { k: "Inner Conductor", v: "Niobium C-103 core (89% Nb, 10% Hf, 1% Ti)" },
      { k: "Dielectric Ring", v: "Monocrystalline Sapphire (Al₂O₃) coaxial tubes" },
      { k: "Outer Jacket", v: "Niobium C-103 refractory radiation shield" },
      { k: "Nb C-103 Melting Pt", v: "2,350°C (vs Copper at 1,085°C, Al at 660°C)" },
      { k: "Sapphire Stability", v: "2,040°C melt; high dielectric breakdown at 1,400°C" },
      { k: "Routing Path", v: "SPC Faraday Cup & 4 FIELDS booms → Bus electronics" },
    ],
    source: "Real Engineering / NASA APL — VIDEO_COMPLEMENTARY_PARKER_PROBE.TXT"
  },
  es: {
    title: "Cable Coaxial Refractario: Niobio C-103 + Zafiro Monocristalino",
    desc: `Cada cable eléctrico expuesto fuera de la sombra del escudo térmico experimenta hasta 1.400°C y bombardeo directo de iones del viento solar. El cobre aeroespacial estándar (se funde a 1.085°C), el aluminio (660°C) y los polímeros aislantes como el teflón PTFE (327°C) se derretirían al instante. Los ingenieros de la NASA diseñaron un cable coaxial refractario: un núcleo conductor central de aleación Niobio C-103 (89% Nb, 10% Hf, 1% Ti; T_fusión = 2.350°C), aislado eléctricamente mediante cilindros coaxiales de Zafiro monocristalino (Al₂O₃; T_fusión = 2.040°C), todo blindado por una camisa exterior de Niobio C-103. Este arnés coaxial alimenta la rejilla de Tungsteno y transmite las señales desde la Copa de Faraday (SPC) y las 4 antenas hacia el bus en la sombra.`,
    latex: `R_{\\text{aisl}}(T)=\\frac{\\ln(r_o/r_i)}{2\\pi L\\,\\sigma_{\\text{Al}_2\\text{O}_3}(T)},\\quad T_{\\text{fusión}}^{\\text{NbC103}}=2350^\\circ\\text{C},\\;T_{\\text{fusión}}^{\\text{Zafiro}}=2040^\\circ\\text{C}`,
    latexCaption: "Resistencia dieléctrica cilíndrica coaxial y límites de fusión refractarios",
    blueprintImage: "/blueprints/parker pro wires cross section.png",
    specs: [
      { k: "Conductor Central", v: "Núcleo de Niobio C-103 (89% Nb, 10% Hf, 1% Ti)" },
      { k: "Anillo Dieléctrico", v: "Tubos coaxiales de Zafiro monocristalino (Al₂O₃)" },
      { k: "Blindaje Exterior", v: "Camisa metálica refractaria de Niobio C-103" },
      { k: "Fusión Nb C-103", v: "2.350°C (frente al Cobre a 1.085°C y Al a 660°C)" },
      { k: "Estabilidad Zafiro", v: "Fusión a 2.040°C; rigidez dieléctrica a 1.400°C" },
      { k: "Enrutamiento", v: "Copa de Faraday SPC y 4 antenas FIELDS → Bus" },
    ],
    source: "Real Engineering / NASA APL — VIDEO_COMPLEMENTARY_PARKER_PROBE.TXT"
  }
};
