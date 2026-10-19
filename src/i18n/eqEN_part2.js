export const eqEN_part2 = [
  {
    id: "knudsen",
    title: "6. Rarefied Coronal Flow — Knudsen Regime",
    category: "Plasma Kinetics",
    formula: "Kn = λ_mfp/L >> 10;  q_conv = (α_a/2)·n_p·m_p·v_th³ ≈ 0.02 W/m²",
    latex: "\\mathrm{Kn}=\\frac{\\lambda}{L}\\gg10;\\;q_\\text{conv}=\\tfrac{\\alpha_a}{2}n_p m_p v_{\\text{th}}^3",
    variables: [
      { sym: "n_p", desc: "Coronal particle density: ~10⁴–10⁶ protons/cm³" },
      { sym: "v_\\text{th}", desc: "Thermal velocity: √(8k_B T/πm)" },
      { sym: "\\alpha_a", desc: "Thermal accommodation coefficient (~0.8)" },
    ],
    insight: "Although the corona is 1,000,000 K, Kn>>10 means near-zero particle collisions with the TPS — delivering only ~0.02 W/m² convective flux vs. 650 kW/m² solar photon radiation. This resolves the 'hot corona, survivable probe' paradox."
  },
  {
    id: "spc-tungsten",
    title: "7. SPC Tungsten Grid Thermal Balance at 1,400°C",
    category: "High-Temperature Instrumentation",
    formula: "q_abs = ε_W·σ·T_W⁴;  T_W ≤ 3,695 K  (W melts at 3,422°C)",
    latex: "q_\\text{abs}=\\varepsilon_W\\sigma T_W^4;\\quad T_W\\leq3695\\,\\text{K}",
    variables: [
      { sym: "\\varepsilon_W", desc: "W emissivity at 1,673 K (~0.35)" },
      { sym: "T_W", desc: "Grid operating temperature (1,400°C = 1,673 K)" },
    ],
    insight: "The SPC grid at 1,400°C is 83% to its melting point. Only tungsten (T_melt = 3,422°C, highest of all elements) + acid etching (lasers can't melt W to cut it) makes 100-µm grids feasible."
  },
  {
    id: "hohmann",
    title: "8. Hohmann Transfer ΔV + 7 Venus Gravity Assists",
    category: "Astrodynamics",
    formula: "Δv = √(μ☉/r₁)·[1 − √(2r₂/(r₁+r₂))] = 21.4 km/s",
    latex: "\\Delta v=\\sqrt{\\frac{\\mu_\\odot}{r_1}}\\!\\left(1-\\sqrt{\\frac{2r_2}{r_1+r_2}}\\right)=21.4\\,\\text{km/s}",
    variables: [
      { sym: "\\mu_\\odot", desc: "Solar parameter: 1.327×10¹¹ km³/s²" },
      { sym: "r_1", desc: "Earth orbit: 1.00 AU = 1.496×10⁸ km" },
      { sym: "r_2", desc: "Parker perihelion: 0.041 AU = 6.16×10⁶ km" },
    ],
    insight: "21.4 km/s is 8.5× the ΔV to Venus — beyond any single rocket. Delta IV Heavy + Star 48BV solid stage + 7 Venus gravity assists systematically shed heliocentric angular momentum h = r×v to achieve perihelion."
  },
  {
    id: "vis-viva",
    title: "9. Vis-Viva — Parker's 192 km/s Record Speed",
    category: "Orbital Mechanics",
    formula: "v² = μ☉·(2/r − 1/a);  v_perihelion = 192 km/s (fastest human-made object)",
    latex: "v^2=\\mu_\\odot\\!\\left(\\frac{2}{r}-\\frac{1}{a}\\right);\\quad v_\\text{peri}=192\\,\\text{km/s}",
    variables: [
      { sym: "a", desc: "Semi-major axis of Parker's final orbit" },
      { sym: "r", desc: "Heliocentric distance (m)" },
    ],
    insight: "Parker's 11× speed swing (192 km/s at perihelion → 17 km/s at aphelion) is driven by orbital energy conservation E = ½v² − μ/r = const. It holds the record as the fastest human-made object in history."
  }
];
