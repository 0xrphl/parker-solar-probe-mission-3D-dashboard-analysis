export const bpEN = [
  {
    id: "delta-v",
    title: "Orbital Transfer Model & Delta-V Budget",
    file: "/blueprints/delta v for elliptical transfer of orbit model.png",
    tag: "Orbital Mechanics / Astrodynamics",
    desc: "Analysis of the Hohmann elliptical transfer and 7 Venus gravity assists. Drops the orbit semimajor axis from 1.00 AU to 0.041 AU (6.16M km), requiring 21.4 km/s ΔV.",
    highlights: [
      "Vis-viva orbital energy relation: v² = μ(2/r - 1/a)",
      "Systematic dissipation of heliocentric angular momentum (h = r × v)",
      "7 Venus flybys providing propellant-free orbital braking"
    ]
  },
  {
    id: "wires-cross-section",
    title: "High-Temperature Wiring & Insulation Cross-Section",
    file: "/blueprints/parker pro wires cross section.png",
    tag: "Materials Science / High-Temp Wiring",
    desc: "Cross-section of Niobium C-103 conductors and monocrystalline sapphire insulators. 1,400°C temperatures banned copper, aluminum, and polymers.",
    highlights: [
      "Niobium C-103 conductor core (89% Nb, 10% Hf, 1% Ti)",
      "Pure monocrystalline sapphire dielectric insulator rings",
      "Refractory protective sheath against high-energy solar wind ions"
    ]
  },
  {
    id: "solar-atmosphere",
    title: "Stratified Solar Atmospheric Layer Model",
    file: "/blueprints/solar atmosphere-The Insane Engineering of the Parker Solar Probe - YouTube.png",
    tag: "Solar Astrophysics / Plasma Layers",
    desc: "Stratification of the solar atmosphere: Photosphere, Chromosphere, and Corona. Highlights the anomalous thermal inversion where the corona exceeds 1,000,000 K.",
    highlights: [
      "Photosphere: 6,200°C base to 3,700°C top (visible surface)",
      "Chromosphere: ~2,000 km depth with magnetic dissipation heating",
      "Corona: superheated rarefied plasma heated by Alfvén waves & reconnection"
    ]
  },
  {
    id: "spc-instrument",
    title: "Solar Probe Cup (SPC) Faraday Instrument Blueprint",
    file: "/blueprints/SPC instrument.png",
    tag: "In-Situ Scientific Instrumentation",
    desc: "Engineering blueprint of the Faraday cup peaking outside the heat shield umbra. Withstands 1,400°C while measuring ion and electron solar fluxes.",
    highlights: [
      "100-micron acid-etched tungsten modulator grid",
      "Current collector plate wired with sapphire-insulated Niobium C-103",
      "Passive thermal self-decontamination under raw solar illumination"
    ]
  },
  {
    id: "sun-temp-elevation",
    title: "Solar Temperature Elevation vs Distance Curve",
    file: "/blueprints/sun temperature elevation.png",
    tag: "Astrophysical Thermodynamics",
    desc: "Quantitative curve detailing the coronal heating riddle. Contrasts the temperature spike in the corona against the precipitous drop in particle density.",
    highlights: [
      "Thermal paradox: T(r) skyrockets with increasing heliocentric distance",
      "Particle number density drops exponentially (n < 10⁶ cm⁻³)",
      "Physical proof: Kinetic temperature does not equate to severe heat flux"
    ]
  }
];
