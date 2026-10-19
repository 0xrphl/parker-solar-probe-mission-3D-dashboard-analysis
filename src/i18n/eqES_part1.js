export const eqES_part1 = [
  {
    id: "rad-balance",
    title: "1. Equilibrio Radiativo del TPS",
    category: "Termodinámica Radiativa",
    formula: "α_s·S_0/(r/AU)² = ε·σ·T_s⁴ + q_cond",
    latex: "\\alpha_s\\frac{S_0}{(r/1\\,\\text{AU})^2}=\\varepsilon\\sigma T_s^4+q_\\text{cond}",
    variables: [
      { sym: "\\alpha_s", desc: "Absortancia solar Al₂O₃ (~0.18)" },
      { sym: "S_0", desc: "Constante solar 1361 W/m² a 1 AU" },
      { sym: "r", desc: "Perihelio: 0.041 AU = 8.86 R☉" },
      { sym: "\\varepsilon,\\sigma", desc: "Emisividad IR 0.86, Stefan-Boltzmann 5.67×10⁻⁸ W/m²K⁴" },
    ],
    insight: "A 8.86 R☉ el flujo es 475× el terrestre (~650 kW/m²). La Al₂O₃ blanca refleja el 82%, la superficie frontal del TPS se equilibra a ~1.377°C mientras el bus permanece <30°C."
  },
  {
    id: "fourier-conduction",
    title: "2. Conducción de Fourier — Espuma de Carbono al 97% de Porosidad",
    category: "Transferencia de Calor por Conducción",
    formula: "q = −k_eff·dT/dx → ΔT = 1.340°C en 11.4 cm",
    latex: "q=-k_\\text{eff}(T)\\frac{dT}{dx}\\;\\Rightarrow\\;T_b=T_f-\\frac{qL}{k_\\text{eff}}",
    variables: [
      { sym: "k_\\text{eff}", desc: "Conductividad espuma Ultramet: 0.05–0.12 W/(m·K)" },
      { sym: "L", desc: "Espesor TPS: 0.114 m (11.4 cm)" },
    ],
    insight: "El 97% de vacío de la espuma Ultramet elimina la conducción sólida a granel. La difusión de fotones IR de Rosseland a través de los micro-ligamentos de grafito permite una caída de 1.340°C en 11.4 cm."
  },
  {
    id: "rosseland",
    title: "3. Conductividad Radiativa de Rosseland en Espuma de Carbono",
    category: "Acoplamiento Radiación-Conducción",
    formula: "k_rad = 16n²σT³ / (3β_R);  k_eff = k_sólido + k_rad",
    latex: "k_\\text{rad}=\\frac{16n^2\\sigma T^3}{3\\beta_R};\\quad k_\\text{eff}=k_s+k_\\text{rad}",
    variables: [
      { sym: "n", desc: "Índice de refracción del carbono (~1.5)" },
      { sym: "\\beta_R", desc: "Coeficiente de extinción medio de Rosseland (m⁻¹)" },
    ],
    insight: "A 1.400 K la contribución radiativa k_rad domina la conducción sólida en 10–100× dentro de la espuma. Esta es la razón por la que la espuma de carbono porosa FUNCIONA — la difusión de fotones Rosseland a alta temperatura ES el mecanismo de aislamiento."
  },
  {
    id: "water-cooling",
    title: "4. Bucle de Refrigeración Activa con Agua",
    category: "Control Térmico Activo",
    formula: "Q = ṁCp(T_sal−T_ent) = ε_r·A_r·σ·(T_r⁴ − T_∞⁴)",
    latex: "\\dot{Q}=\\dot{m}C_p(T_o-T_i)=\\varepsilon_r A_r\\sigma(T_r^4-T_\\infty^4)",
    variables: [
      { sym: "\\dot{m}", desc: "Caudal másico del agua (kg/s)" },
      { sym: "C_p", desc: "Calor específico del agua: 4.184 J/(kg·K)" },
      { sym: "T_\\infty", desc: "Sumidero espacio profundo: ~4 K (CMB)" },
    ],
    insight: "El agua presurizada absorbe el calor parásito de los paneles FV (calor sensible), luego los radiadores de grafito en la celosía de 22.7 kg de Ti lo rechazan radiativamente al espacio. La Cp·ρ del agua es 2× mayor que la del amoníaco — ventaja crítica de masa."
  },
  {
    id: "view-factor",
    title: "5. Factor de Vista Radiativo — Recinto Multi-Superficial",
    category: "Transferencia de Calor Radiativo",
    formula: "q_12 = F_12·A_1·σ·(T_1⁴ − T_2⁴);  ΣF_ij = 1",
    latex: "q_{12}=F_{12}A_1\\sigma(T_1^4-T_2^4),\\quad\\sum_j F_{ij}=1",
    variables: [
      { sym: "F_{12}", desc: "Factor de vista geométrico superficie 1→2" },
      { sym: "A_1", desc: "Área de la superficie radiante 1 (m²)" },
    ],
    insight: "Dentro del recinto del bus, los factores de vista gobiernan el intercambio IR entre componentes. La cara trasera del TPS (~30°C) intercambia IR con la electrónica — gestionado con mantas MLI para evitar puntos calientes."
  }
];
