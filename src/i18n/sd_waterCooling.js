export const sdWaterCooling = {
  en: {
    title: "Active Water Cooling Loop — Solar Array Thermal Management",
    desc: `Two small secondary solar panels remain exposed at closest approach, powering instruments. They would overheat without active cooling. Pressurized demineralized water flows through titanium microchannels behind the photovoltaic cells, absorbing parasitic heat (sensible heat: Q = m_dot × Cp × ΔT). The hot water travels to black graphite radiator panels on the titanium truss where it rejects heat to space by radiation. Water was chosen over ammonia (used by ISS) because its volumetric heat capacity (Cp×ρ) is ~2× higher — critical when mass is constrained. The titanium truss routing the water intentionally weighs only 22.7 kg (50 lbs) to minimize solid conduction heat leakage from TPS to bus. (Source: VIDEO_COMPLEMENTARY_PARKER_PROBE)`,
    latex: `\\dot{Q}=\\dot{m}C_p(T_{\\text{out}}-T_{\\text{in}})=\\varepsilon_r A_r\\sigma(T_r^4-T_\\infty^4)`,
    latexCaption: "Sensible heat absorbed by water = radiative heat rejected by radiator panels",
    blueprintImage: null,
    specs: [
      { k: "Coolant", v: "Pressurized demineralized H₂O" },
      { k: "C_p water", v: "4,184 J/(kg·K)" },
      { k: "Panel T (cooled)", v: "≈70°C vs >150°C without cooling" },
      { k: "Radiator coating", v: "High-ε black graphite (ε≈0.92)" },
      { k: "Truss mass", v: "22.7 kg (50 lbs)" },
      { k: "T_space sink", v: "≈4 K deep space CMB" },
    ],
    source: "Real Engineering / NASA APL — VIDEO_COMPLEMENTARY_PARKER_PROBE.TXT"
  },
  es: {
    title: "Bucle de Refrigeración Activa con Agua — Gestión Térmica de Paneles Solares",
    desc: `Dos pequeños paneles solares secundarios permanecen expuestos en el acercamiento máximo, alimentando los instrumentos. Se sobrecalentarían sin refrigeración activa. Agua desmineralizada presurizada fluye a través de microcanales de titanio detrás de las células fotovoltaicas, absorbiendo calor parásito (calor sensible: Q = m_dot × Cp × ΔT). El agua caliente viaja a paneles radiadores de grafito negro en la celosía de titanio donde rechaza calor al espacio por radiación. Se eligió agua en lugar de amoníaco (usado por la ISS) porque su capacidad calorífica volumétrica (Cp×ρ) es ~2× mayor — crítico con masa restringida. La celosía de titanio que conduce el agua pesa intencionalmente solo 22.7 kg (50 lbs) para minimizar la fuga de calor por conducción sólida. (Fuente: VIDEO_COMPLEMENTARY_PARKER_PROBE)`,
    latex: `\\dot{Q}=\\dot{m}C_p(T_{\\text{out}}-T_{\\text{in}})=\\varepsilon_r A_r\\sigma(T_r^4-T_\\infty^4)`,
    latexCaption: "Calor sensible absorbido por agua = calor radiativo rechazado por los radiadores",
    blueprintImage: null,
    specs: [
      { k: "Refrigerante", v: "H₂O desmineralizada presurizada" },
      { k: "C_p del agua", v: "4.184 J/(kg·K)" },
      { k: "T del panel (refrigerado)", v: "≈70°C vs >150°C sin refrigeración" },
      { k: "Recubrimiento radiador", v: "Grafito negro de alta ε (ε≈0.92)" },
      { k: "Masa de la celosía", v: "22.7 kg (50 lbs)" },
      { k: "T_sumidero espacio", v: "≈4 K CMB espacio profundo" },
    ],
    source: "Real Engineering / NASA APL — VIDEO_COMPLEMENTARY_PARKER_PROBE.TXT"
  }
};
