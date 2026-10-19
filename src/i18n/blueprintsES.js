export const bpES = [
  {
    id: "delta-v",
    title: "Modelo de Transferencia Orbital y Presupuesto ΔV",
    file: "/blueprints/delta v for elliptical transfer of orbit model.png",
    tag: "Mecánica Orbital / Astrodinámica",
    desc: "Análisis de la trayectoria de transferencia elíptica y 7 asistencias en Venus. Reduce el semieje mayor orbital desde 1.00 AU hasta 0.041 AU (6.16M km), demandando un ΔV de 21.4 km/s.",
    highlights: [
      "Ecuación vis-viva de energía orbital: v² = μ(2/r - 1/a)",
      "Disipación de momento angular orbital heliocéntrico (h = r × v)",
      "7 asistencias en Venus para frenado gravitacional libre de propelente"
    ]
  },
  {
    id: "wires-cross-section",
    title: "Corte Transversal de Cableado Refractario",
    file: "/blueprints/parker pro wires cross section.png",
    tag: "Materiales / Cableado de Alta Temperatura",
    desc: "Sección transversal de los conductores de Niobio C-103 y casquillos aislantes de Zafiro monocristalino (Al2O3). Operar a 1.400°C prohibió el cobre, aluminio y polímeros.",
    highlights: [
      "Conductor central de aleación Niobio C-103 (89% Nb, 10% Hf, 1% Ti)",
      "Aislamiento dieléctrico con anillos coaxiales de Zafiro puro",
      "Blindaje térmico refractario contra viento solar e iones de alta energía"
    ]
  },
  {
    id: "solar-atmosphere",
    title: "Estructura Estratificada de la Atmósfera Solar",
    file: "/blueprints/solar atmosphere-The Insane Engineering of the Parker Solar Probe - YouTube.png",
    tag: "Astrofísica / Capas de Plasma",
    desc: "Estratificación de la atmósfera solar: Fotosfera, Cromosfera y Corona. Muestra el gradiente térmico inverso donde la corona supera 1.000.000 K a pesar de alejarse del núcleo.",
    highlights: [
      "Fotosfera: base a 6.200°C, mínima térmica a 3.700°C (superficie visible)",
      "Cromosfera: 2.000 km de espesor, transición térmica inducida por magnetismo",
      "Corona: plasma ultra-enrarecido calentado por ondas Alfvén y reconexión"
    ]
  },
  {
    id: "spc-instrument",
    title: "Copa de Faraday / Solar Probe Cup (SPC)",
    file: "/blueprints/SPC instrument.png",
    tag: "Instrumentación Científica In-Situ",
    desc: "Esquema del sensor SPC que asoma directamente fuera de la sombra protectora del escudo, soportando 1.400°C mientras mide iones y electrones del viento solar.",
    highlights: [
      "Rejilla selectora grabada al ácido en Tungsteno a escala de 100 micras",
      "Placa colectora de corriente conectada con conductores Nb C-103",
      "Autodesorción térmica pasiva de contaminantes en vuelo por el calor solar"
    ]
  },
  {
    id: "sun-temp-elevation",
    title: "Perfil de Elevación de Temperatura vs Distancia",
    file: "/blueprints/sun temperature elevation.png",
    tag: "Termodinámica Astrofísica",
    desc: "Gráfica cuantitativa del enigma del calentamiento coronal. Detalla el abrupto salto térmico coronal versus el decaimiento exponencial de la densidad de partículas.",
    highlights: [
      "Paradoja térmica: T(r) asciende rápidamente a distancias r > R☉",
      "Caída exponencial de densidad numérica de partículas (n < 10⁶ cm⁻³)",
      "Demostración física: Temperatura cinética ≠ Tasa de flujo térmico neto"
    ]
  }
];
