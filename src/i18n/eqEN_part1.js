export const eqEN_part1 = [
  {
    id: "rad-balance",
    title: "1. TPS Radiative Equilibrium",
    category: "Radiative Thermodynamics",
    formula: "α_s·S_0/(r/AU)² = ε·σ·T_s⁴ + q_cond",
    latex: "\\alpha_s\\frac{S_0}{(r/1\\,\\text{AU})^2}=\\varepsilon\\sigma T_s^4+q_\\text{cond}",
    variables: [
      { sym: "\\alpha_s", desc: "Solar absorptance Al₂O₃ (~0.18)" },
      { sym: "S_0", desc: "Solar constant 1361 W/m² at 1 AU" },
      { sym: "r", desc: "Perihelion: 0.041 AU = 8.86 R☉" },
      { sym: "\\varepsilon,\\sigma", desc: "IR emittance 0.86, Stefan-Boltzmann 5.67×10⁻⁸ W/m²K⁴" },
    ],
    insight: "At 8.86 R☉ flux is 475× Earth (~650 kW/m²). White Al₂O₃ reflects 82%, TPS front surface equilibrates at ~1,377°C while the bus behind stays <30°C."
  },
  {
    id: "fourier-conduction",
    title: "2. Fourier Conduction — 97% Porous Carbon Foam",
    category: "Conduction Heat Transfer",
    formula: "q = −k_eff·dT/dx → ΔT = 1,340°C across 11.4 cm",
    latex: "q=-k_\\text{eff}(T)\\frac{dT}{dx}\\;\\Rightarrow\\;T_b=T_f-\\frac{qL}{k_\\text{eff}}",
    variables: [
      { sym: "k_\\text{eff}", desc: "Ultramet foam conductivity: 0.05–0.12 W/(m·K)" },
      { sym: "L", desc: "TPS thickness: 0.114 m (11.4 cm)" },
    ],
    insight: "Ultramet foam's 97% void eliminates bulk solid conduction. Rosseland IR photon diffusion through graphite micro-ligaments enables a 1,340°C drop across 11.4 cm."
  },
  {
    id: "rosseland",
    title: "3. Rosseland Radiative Conductivity in Carbon Foam",
    category: "Radiation-Conduction Coupling",
    formula: "k_rad = 16n²σT³ / (3β_R);  k_eff = k_solid + k_rad",
    latex: "k_\\text{rad}=\\frac{16n^2\\sigma T^3}{3\\beta_R};\\quad k_\\text{eff}=k_s+k_\\text{rad}",
    variables: [
      { sym: "n", desc: "Carbon refractive index (~1.5)" },
      { sym: "\\beta_R", desc: "Rosseland mean extinction coefficient (m⁻¹)" },
    ],
    insight: "At 1,400 K, radiative contribution k_rad dominates solid conduction by 10–100× in the foam. This is WHY porous carbon foam works — high-T Rosseland photon diffusion IS the insulation mechanism."
  },
  {
    id: "water-cooling",
    title: "4. Active Water Cooling Loop",
    category: "Active Thermal Control",
    formula: "Q = ṁCp(T_out−T_in) = ε_r·A_r·σ·(T_r⁴ − T_∞⁴)",
    latex: "\\dot{Q}=\\dot{m}C_p(T_o-T_i)=\\varepsilon_r A_r\\sigma(T_r^4-T_\\infty^4)",
    variables: [
      { sym: "\\dot{m}", desc: "Water mass flow rate (kg/s)" },
      { sym: "C_p", desc: "Water specific heat: 4,184 J/(kg·K)" },
      { sym: "T_\\infty", desc: "Deep space sink: ~4 K (CMB)" },
    ],
    insight: "Pressurized water absorbs PV parasitic heat (sensible), then graphite radiators on the 22.7 kg Ti truss reject it radiatively to space. Water's Cp·ρ is 2× ammonia — critical mass advantage."
  },
  {
    id: "view-factor",
    title: "5. Radiative View Factor — Multi-Surface Enclosure",
    category: "Radiation Heat Transfer",
    formula: "q_12 = F_12·A_1·σ·(T_1⁴ − T_2⁴);  ΣF_ij = 1",
    latex: "q_{12}=F_{12}A_1\\sigma(T_1^4-T_2^4),\\quad\\sum_j F_{ij}=1",
    variables: [
      { sym: "F_{12}", desc: "Geometric view factor surface 1→2" },
      { sym: "A_1", desc: "Area of radiating surface 1 (m²)" },
    ],
    insight: "Within the bus enclosure, view factors govern inter-component IR exchange. The TPS back face (~30°C) exchanges IR with electronics — managed with MLI blankets to prevent hot spots."
  }
];
