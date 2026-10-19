export const eqES_part2 = [
  {
    id: "knudsen",
    title: "6. Flujo Libre Molecular Coronal — Régimen de Knudsen",
    category: "Cinética de Plasmas",
    formula: "Kn = λ_mfp/L >> 10;  q_conv = (α_a/2)·n_p·m_p·v_th³ ≈ 0.02 W/m²",
    latex: "\\mathrm{Kn}=\\frac{\\lambda}{L}\\gg10;\\;q_\\text{conv}=\\tfrac{\\alpha_a}{2}n_p m_p v_{\\text{th}}^3",
    variables: [
      { sym: "n_p", desc: "Densidad coronal: ~10⁴–10⁶ protones/cm³" },
      { sym: "v_\\text{th}", desc: "Velocidad térmica: √(8k_B T/πm)" },
    ],
    insight: "Aunque la corona esté a 1.000.000 K, Kn>>10 significa casi cero colisiones de partículas con el TPS — entregando solo ~0.02 W/m² de flujo convectivo vs. 650 kW/m² de radiación fotónica solar. Esto resuelve la paradoja 'corona caliente, sonda superviviente'."
  },
  {
    id: "spc-tungsten",
    title: "7. Balance Térmico de la Rejilla de Tungsteno del SPC a 1.400°C",
    category: "Instrumentación de Alta Temperatura",
    formula: "q_abs = ε_W·σ·T_W⁴;  T_W ≤ 3.695 K  (W se funde a 3.422°C)",
    latex: "q_\\text{abs}=\\varepsilon_W\\sigma T_W^4;\\quad T_W\\leq3695\\,\\text{K}",
    variables: [
      { sym: "\\varepsilon_W", desc: "Emisividad del W a 1.673 K (~0.35)" },
      { sym: "T_W", desc: "T de operación de la rejilla (1.400°C = 1.673 K)" },
    ],
    insight: "La rejilla del SPC a 1.400°C está al 83% de su punto de fusión. Solo el tungsteno (T_fusión = 3.422°C, el más alto de todos los elementos) + grabado ácido (los láseres no pueden fundir el W para cortarlo) hace factible una rejilla de 100 µm."
  },
  {
    id: "hohmann",
    title: "8. Transferencia de Hohmann ΔV + 7 Asistencias Gravitatorias de Venus",
    category: "Astrodinámica",
    formula: "Δv = √(μ☉/r₁)·[1 − √(2r₂/(r₁+r₂))] = 21.4 km/s",
    latex: "\\Delta v=\\sqrt{\\frac{\\mu_\\odot}{r_1}}\\!\\left(1-\\sqrt{\\frac{2r_2}{r_1+r_2}}\\right)=21.4\\,\\text{km/s}",
    variables: [
      { sym: "\\mu_\\odot", desc: "Parámetro gravitacional solar: 1.327×10¹¹ km³/s²" },
      { sym: "r_1", desc: "Órbita terrestre: 1.00 AU = 1.496×10⁸ km" },
      { sym: "r_2", desc: "Perihelio Parker: 0.041 AU = 6.16×10⁶ km" },
    ],
    insight: "21.4 km/s equivale a 8.5× el ΔV necesario para alcanzar Venus — más allá de cualquier cohete único. Delta IV Heavy + etapa sólida Star 48BV + 7 asistencias gravitatorias de Venus disipan sistemáticamente el momento angular heliocéntrico h = r×v."
  },
  {
    id: "vis-viva",
    title: "9. Vis-Viva — Velocidad Récord de Parker: 192 km/s",
    category: "Mecánica Orbital",
    formula: "v² = μ☉·(2/r − 1/a);  v_perihelio = 192 km/s (objeto más rápido de la historia)",
    latex: "v^2=\\mu_\\odot\\!\\left(\\frac{2}{r}-\\frac{1}{a}\\right);\\quad v_\\text{peri}=192\\,\\text{km/s}",
    variables: [
      { sym: "a", desc: "Semieje mayor de la órbita final de Parker" },
      { sym: "r", desc: "Distancia heliocéntrica (m)" },
    ],
    insight: "La variación de velocidad de 11× de Parker (192 km/s en perihelio → 17 km/s en afelio) está impulsada por la conservación de la energía orbital E = ½v² − μ/r = const. Es el objeto de fabricación humana más rápido de la historia."
  }
];
