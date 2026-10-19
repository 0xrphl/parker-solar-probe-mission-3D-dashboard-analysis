import { eqES_part1 } from './eqES_part1.js';
import { eqES_part2 } from './eqES_part2.js';
export const eqES = [...eqES_part1, ...eqES_part2];

const _legacy = [
  {
    id: "rad-balance",
    title: "1. Equilibrio Radiativo de Superficie (TPS)",
    category: "Termodinámica Radiativa",
    formula: "α_s · [S_0 / (r / 1 AU)^2] · cos(θ) = ε · σ · T_s^4 + q_cond",
    variables: [
      { sym: "α_s", desc: "Absortancia solar de la alúmina blanca (~0.18)" },
      { sym: "S_0", desc: "Constante solar en 1 AU (1361 W/m²)" },
      { sym: "r", desc: "Distancia mínima: 0.041 AU (6.16×10⁶ km)" },
      { sym: "ε", desc: "Emisividad infrarroja hemisférica (~0.86)" },
      { sym: "σ", desc: "Stefan-Boltzmann (5.670374×10⁻⁸ W/m²K⁴)" },
      { sym: "T_s", desc: "Temperatura de equilibrio (~1.650 K / 1.377°C)" }
    ],
    insight: "A 8.86 radios solares, la radiación incidente es 475 veces mayor que en la Tierra (~650 kW/m²). La capa cerámica de alúmina refleja el 82% del espectro solar mientras emite intensamente en infrarrojo."
  },
  {
    id: "fourier-conduction",
    title: "2. Conducción en Espuma de Carbono (97% Aire)",
    category: "Transferencia de Calor",
    formula: "q_cond = -k_eff(T) · (dT / dx) ==> T_back = T_front - [q · L / k_eff]",
    variables: [
      { sym: "k_eff", desc: "Conductividad efectiva: 0.05 a 0.12 W/(m·K)" },
      { sym: "L", desc: "Espesor del escudo térmico (11.4 cm)" },
      { sym: "T_front", desc: "Superficie de carbono (~1.370°C / 1.643 K)" },
      { sym: "T_back", desc: "Cara posterior en la sombra (~30°C / 303 K)" }
    ],
    insight: "La estructura reticular porosa de Ultramet bloquea la conducción sólida directa y atrapa la radiación en los micro-poros, logrando una caída térmica de más de 1.340°C en tan solo 11.4 cm."
  },
  {
    id: "active-water-cooling",
    title: "3. Circulación Activa de Agua en Celdas Fotovoltaicas",
    category: "Termofluidos Activos",
    formula: "Q_abs = m_dot · C_p · (T_out - T_in) = ε_rad · A_rad · σ · (T_rad^4 - T_sp^4)",
    variables: [
      { sym: "m_dot", desc: "Caudal másico de agua líquida presurizada (kg/s)" },
      { sym: "C_p", desc: "Calor específico del agua líquida (4.184 J/kg·K)" },
      { sym: "T_rad", desc: "Temperatura en radiadores de titanio/grafito" },
      { sym: "A_rad", desc: "Área radiativa montada en la celosía" }
    ],
    insight: "El agua líquida desmineralizada posee una capacidad calorífica volumétrica inigualable. Fluye por detrás de los paneles hacia dos radiadores oscuros montados en la estructura de titanio."
  },
  {
    id: "knudsen-coronal",
    title: "4. Régimen de Knudsen en Plasma Coronal Enrarecido",
    category: "Cinética de Plasmas",
    formula: "Kn = λ_mfp / L_char >> 10 ; q_conv = α_acc · 0.5 · n_p · m_p · v_th^3",
    variables: [
      { sym: "Kn", desc: "Número de Knudsen (flujo libre molecular puro)" },
      { sym: "n_p", desc: "Densidad coronal (~10⁴ a 10⁶ protones/cm³)" },
      { sym: "v_th", desc: "Velocidad térmica: sqrt(8 k_B T / π m)" },
      { sym: "α_acc", desc: "Coeficiente de acomodación térmica (~0.8)" }
    ],
    insight: "Aunque la temperatura cinética coronal supere 1.000.000 K, la densidad es casi vacío cuántico. El flujo térmico convectivo resultante es menor a 0.02 W/m², despreciable frente a los fotones del Sol."
  },
  {
    id: "orbital-hohmann-venus",
    title: "5. Ecuación de Maniobra Hohmann y 7 Flybys de Venus",
    category: "Astrodinámica y Δv",
    formula: "Δv = sqrt(μ_☉ / r_1) · [1 - sqrt(2·r_2 / (r_1 + r_2))] ; Δv_total = 21.4 km/s",
    variables: [
      { sym: "μ_☉", desc: "Parámetro gravitacional del Sol (1.327×10¹¹ km³/s²)" },
      { sym: "r_1", desc: "Radio de órbita terrestre (1.00 AU = 1.496×10⁸ km)" },
      { sym: "r_2", desc: "Perihelio Parker (0.041 AU = 6.16×10⁶ km)" },
      { sym: "Δv", desc: "Cambio de velocidad heliocéntrica requerido" }
    ],
    insight: "Un cohete directo necesitaría una masa de combustible inalcanzable. Con 7 asistencias gravitacionales en Venus y un cohete Delta IV Heavy con 3ª etapa Star 48BV, la sonda disipó la energía necesaria."
  }
];
