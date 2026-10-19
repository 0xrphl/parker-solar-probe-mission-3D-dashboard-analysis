import { eqEN_part1 } from './eqEN_part1.js';
import { eqEN_part2 } from './eqEN_part2.js';
export const eqEN = [...eqEN_part1, ...eqEN_part2];

const _unused = [
  {
    id: "rad-balance",
    title: "1. TPS Surface Radiative Equilibrium",
    category: "Radiative Thermodynamics",
    formula: "α_s · [S_0 / (r / 1 AU)^2] · cos(θ) = ε · σ · T_s^4 + q_cond",
    variables: [
      { sym: "α_s", desc: "Solar absorptance of white alumina coating (~0.18)" },
      { sym: "S_0", desc: "Solar constant at 1 AU (1361 W/m²)" },
      { sym: "r", desc: "Minimum perihelion distance: 0.041 AU (6.16×10⁶ km)" },
      { sym: "ε", desc: "Hemispherical infrared emittance (~0.86)" },
      { sym: "σ", desc: "Stefan-Boltzmann constant (5.670374×10⁻⁸ W/m²K⁴)" },
      { sym: "T_s", desc: "Equilibrium surface temperature (~1,650 K / 1,377°C)" }
    ],
    insight: "At 8.86 solar radii, incident solar flux reaches 475 times that of Earth (~650 kW/m²). The white Al2O3 coating reflects 82% of visible sunlight while emitting intensely in IR."
  },
  {
    id: "fourier-conduction",
    title: "2. Conduction Through 97% Porous Carbon Foam",
    category: "Conduction Heat Transfer",
    formula: "q_cond = -k_eff(T) · (dT / dx) ==> T_back = T_front - [q · L / k_eff]",
    variables: [
      { sym: "k_eff", desc: "Effective thermal conductivity: 0.05 to 0.12 W/(m·K)" },
      { sym: "L", desc: "Heat shield thickness (11.4 cm)" },
      { sym: "T_front", desc: "Exposed carbon facesheet (~1,370°C / 1,643 K)" },
      { sym: "T_back", desc: "Shadowed instrument bus face (~30°C / 303 K)" }
    ],
    insight: "Ultramet's open cellular structure virtually eliminates solid conduction paths and scatters thermal photons, establishing a steep 1,340°C temperature drop across just 11.4 cm."
  },
  {
    id: "active-water-cooling",
    title: "3. Active Water Cooling Loop for Solar Cells",
    category: "Active Thermal Control",
    formula: "Q_abs = m_dot · C_p · (T_out - T_in) = ε_rad · A_rad · σ · (T_rad^4 - T_sp^4)",
    variables: [
      { sym: "m_dot", desc: "Pressurized demineralized water flow rate (kg/s)" },
      { sym: "C_p", desc: "Specific heat of liquid water (4,184 J/kg·K)" },
      { sym: "T_rad", desc: "Titanium/graphite radiator panel temperature" },
      { sym: "A_rad", desc: "Truss-mounted radiant dissipation surface area" }
    ],
    insight: "Water offers unmatched volumetric heat capacity compared to toxic ammonia. Fluid circulating through titanium conduits dumps solar panel heat into space via truss radiators."
  },
  {
    id: "knudsen-coronal",
    title: "4. Rarefied Coronal Free-Molecular Flow (Knudsen)",
    category: "Plasma Kinetics",
    formula: "Kn = λ_mfp / L_char >> 10 ; q_conv = α_acc · 0.5 · n_p · m_p · v_th^3",
    variables: [
      { sym: "Kn", desc: "Knudsen number (free-molecular flow regime)" },
      { sym: "n_p", desc: "Coronal particle density (~10⁴ to 10⁶ protons/cm³)" },
      { sym: "v_th", desc: "Thermal velocity: sqrt(8 k_B T / π m)" },
      { sym: "α_acc", desc: "Thermal accommodation coefficient (~0.8)" }
    ],
    insight: "Although kinetic temperature exceeds 1,000,000 K, density is negligible (Kn >> 10). Convective heat flux onto the craft is less than 0.02 W/m², dwarfed entirely by solar photon radiation."
  },
  {
    id: "orbital-hohmann-venus",
    title: "5. Hohmann Transfer Delta-V & 7 Venus Gravity Assists",
    category: "Astrodynamics & Delta-V",
    formula: "Δv = sqrt(μ_☉ / r_1) · [1 - sqrt(2·r_2 / (r_1 + r_2))] ; Δv_total = 21.4 km/s",
    variables: [
      { sym: "μ_☉", desc: "Solar gravitational parameter (1.327×10¹¹ km³/s²)" },
      { sym: "r_1", desc: "Earth departure orbit (1.00 AU = 1.496×10⁸ km)" },
      { sym: "r_2", desc: "Parker perihelion (0.041 AU = 6.16×10⁶ km)" },
      { sym: "Δv", desc: "Total heliocentric velocity change required" }
    ],
    insight: "A direct chemical launch would require prohibitive propellant mass. Combining a Delta IV Heavy + Star 48BV stage with 7 Venus gravity flybys shed the 21.4 km/s required."
  }
];
