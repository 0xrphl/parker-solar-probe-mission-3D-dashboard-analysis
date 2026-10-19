export const sdFaradayCup = {
  en: {
    title: "Solar Probe Cup (SPC) — Faraday Cup at 1,400°C",
    desc: `The SPC protrudes beyond the heat shield umbra and faces the full corona directly. It measures electrons and ions from the solar wind by applying an electric field over acid-etched 100-micron tungsten modulator grids. Varying the grid voltage selects which particles enter — striking the Nb C-103 collector plate to produce a measurable current. At 1,400°C (just below pure iron's melting point of 1,538°C), copper and aluminum wiring would instantly liquefy. Tungsten grids (T_melt=3,422°C) are acid-etched since lasers cannot melt W. All cables are Niobium C-103 (89% Nb / 10% Hf / 1% Ti). Standard plastic insulation is replaced by monocrystalline sapphire sleeve insulators. Remarkably, the SPC performs BETTER when hot — thermal desorption removes adsorbed surface contaminants. (Source: VIDEO_COMPLEMENTARY_PARKER_PROBE)`,
    latex: `I_{\\text{SPC}}=n_i q v_d A_{\\text{eff}}\\cdot f(V_{\\text{grid}}),\\quad T_W\\leq 3695\\,\\text{K}\\;(W_{\\text{melt}})`,
    latexCaption: "SPC collected current vs grid voltage — proton/electron velocity distribution",
    blueprintImage: "/blueprints/SPC instrument.png",
    specs: [
      { k: "Operating T", v: "1,400°C (1,673 K) — direct solar exposure" },
      { k: "Grid material", v: "Tungsten, acid-etched 100 µm mesh" },
      { k: "Conductor", v: "Niobium C-103: 89% Nb / 10% Hf / 1% Ti" },
      { k: "Insulator", v: "Monocrystalline Al₂O₃ (Sapphire) sleeves" },
      { k: "W melting point", v: "3,422°C — highest of all elements" },
      { k: "Self-cleaning T", v: ">600°C — thermal desorption of contaminants" },
    ],
    source: "Real Engineering / NASA APL — VIDEO_COMPLEMENTARY_PARKER_PROBE.TXT"
  },
  es: {
    title: "Copa Sonda Solar (SPC) — Copa de Faraday a 1.400°C",
    desc: `El SPC sobresale más allá de la sombra del escudo y enfrenta la corona directamente. Mide electrones e iones del viento solar aplicando un campo eléctrico sobre rejillas de tungsteno grabadas al ácido de 100 micras. Variando el voltaje de la rejilla se seleccionan las partículas que entran — golpean la placa colectora de Nb C-103 produciendo una corriente medible. A 1.400°C (justo por debajo del punto de fusión del hierro puro, 1.538°C), el cobre y el aluminio se licuarían al instante. Las rejillas de tungsteno (T_fusión=3.422°C) se graban al ácido ya que los láseres no pueden fundir el W. Todos los cables son Niobio C-103 (89% Nb / 10% Hf / 1% Ti). El aislamiento plástico estándar se reemplaza por manguitos de zafiro monocristalino. Notablemente, el SPC funciona MEJOR en caliente — la desorción térmica elimina contaminantes adsorbidos. (Fuente: VIDEO_COMPLEMENTARY_PARKER_PROBE)`,
    latex: `I_{\\text{SPC}}=n_i q v_d A_{\\text{eff}}\\cdot f(V_{\\text{grid}}),\\quad T_W\\leq 3695\\,\\text{K}\\;(W_{\\text{fusión}})`,
    latexCaption: "Corriente SPC vs voltaje de rejilla — distribución de velocidades de iones/electrones",
    blueprintImage: "/blueprints/SPC instrument.png",
    specs: [
      { k: "T de operación", v: "1.400°C (1.673 K) — exposición solar directa" },
      { k: "Material de la rejilla", v: "Tungsteno, grabado ácido a 100 µm" },
      { k: "Conductor", v: "Niobio C-103: 89% Nb / 10% Hf / 1% Ti" },
      { k: "Aislante", v: "Al₂O₃ monocristalino (Zafiro)" },
      { k: "Punto de fusión W", v: "3.422°C — el más alto de todos los elementos" },
      { k: "T de autolimpieza", v: ">600°C — desorción térmica de contaminantes" },
    ],
    source: "Real Engineering / NASA APL — VIDEO_COMPLEMENTARY_PARKER_PROBE.TXT"
  }
};
