export const sdTitaniumTruss = {
  en: {
    title: "Titanium Isogrid Truss — Ultra-Light Thermal Isolator (22.7 kg / 50 lbs)",
    desc: `The titanium truss connects the TPS heat shield to the spacecraft bus below, while deliberately minimizing heat conduction between them. It weighs only 22.7 kg (50 lbs) despite spanning over 2 m — extraordinary for structural titanium. NASA engineers ran exhaustive FEM stress analyses to shave every gram of material. The isogrid triangular pattern provides maximum stiffness per unit mass while the minimal cross-section area A_cs minimizes the conduction heat leak: Q_truss = k_Ti × A_cs/L × ΔT. Ti-6Al-4V has the lowest thermal conductivity (k=6.7 W/(m·K)) among structural aerospace alloys. The truss also routes the water cooling conduits. Saving launch mass is critical — it allowed more science instruments and fuel for 7 Venus gravity assists. (Source: VIDEO_COMPLEMENTARY_PARKER_PROBE)`,
    latex: `Q_{\\text{truss}}=k_{\\text{Ti}}\\frac{A_{\\text{cs}}}{L}\\Delta T,\\quad k_{\\text{Ti}}=6.7\\,\\text{W/(m·K)}`,
    latexCaption: "Conductive heat leak — minimized by tiny cross-section A_cs and low k_Ti",
    blueprintImage: null,
    specs: [
      { k: "Material", v: "Ti-6Al-4V Grade 5 (isogrid triangular webs)" },
      { k: "Mass", v: "22.7 kg (50 lbs) for entire truss" },
      { k: "k_Ti", v: "6.7 W/(m·K) — lowest k of structural alloys" },
      { k: "Function", v: "Structural bridge TPS→bus + thermal isolator" },
      { k: "Secondary role", v: "Routes H₂O cooling conduits to radiators" },
      { k: "Design driver", v: "Minimize A_cs to minimize Q_cond from TPS" },
    ],
    source: "Real Engineering / NASA APL — VIDEO_COMPLEMENTARY_PARKER_PROBE.TXT"
  },
  es: {
    title: "Celosía de Titanio Isogrid — Aislador Térmico Ultraligero (22.7 kg / 50 lbs)",
    desc: `La celosía de titanio conecta el escudo TPS con el bus de la nave por debajo, minimizando deliberadamente la conducción de calor entre ellos. Pesa solo 22.7 kg (50 lbs) a pesar de abarcar más de 2 m — extraordinario para titanio estructural. Los ingenieros de la NASA realizaron exhaustivos análisis FEM para eliminar cada gramo. El patrón triangular isogrid proporciona máxima rigidez por unidad de masa mientras la mínima área de sección transversal A_cs minimiza la fuga de calor por conducción: Q_celosía = k_Ti × A_cs/L × ΔT. El Ti-6Al-4V tiene la menor conductividad térmica (k=6.7 W/(m·K)) entre las aleaciones aeroespaciales estructurales. La celosía también conduce los tubos de refrigeración de agua. Ahorrar masa de lanzamiento fue crítico — permitió más instrumentos científicos y combustible para 7 asistencias de Venus. (Fuente: VIDEO_COMPLEMENTARY_PARKER_PROBE)`,
    latex: `Q_{\\text{celosía}}=k_{\\text{Ti}}\\frac{A_{\\text{cs}}}{L}\\Delta T,\\quad k_{\\text{Ti}}=6.7\\,\\text{W/(m·K)}`,
    latexCaption: "Fuga de calor por conducción — minimizada por pequeña A_cs y baja k_Ti",
    blueprintImage: null,
    specs: [
      { k: "Material", v: "Ti-6Al-4V Grado 5 (nervios triangulares isogrid)" },
      { k: "Masa", v: "22.7 kg (50 lbs) para toda la celosía" },
      { k: "k_Ti", v: "6.7 W/(m·K) — menor k de aleaciones estructurales" },
      { k: "Función", v: "Puente estructural TPS→bus + aislador térmico" },
      { k: "Función secundaria", v: "Conduce tubos de refrigeración H₂O a radiadores" },
      { k: "Factor de diseño", v: "Minimizar A_cs para minimizar Q_cond desde TPS" },
    ],
    source: "Real Engineering / NASA APL — VIDEO_COMPLEMENTARY_PARKER_PROBE.TXT"
  }
};
