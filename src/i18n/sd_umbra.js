export const sdUmbra = {
  en: {
    title: "TPS Umbra/Penumbra Shadow Cone — Spacecraft Protection Geometry",
    desc: `The umbra is the fully-shadowed cone behind the 2.4 m-diameter TPS. All critical systems must fit within it near perihelion. The TPS evolved from the original conical design (for Jupiter flyby) to the current flat circular disk — a critical redesign that enabled a lighter, more compact shield and drove the change to 7 Venus gravity assists. At 0.041 AU the Sun subtends ~5.7° — much larger than from Earth (0.5°). The angular uncertainty in umbra protection is dominated by attitude control precision (±1°). Solar limb sensors sit at the umbra/penumbra boundary. The spacecraft maintains ±1° attitude precision to keep all components within the safe shadow. At closest approach, the half-angle of the umbra cone is set by TPS radius / TPS-to-bus distance, providing ~15° margin to the solar limb. (Source: NASA APL)`,
    latex: `r_{\\text{umbra}}(z)=R_{\\text{TPS}}-z\\tan\\!\\left(\\frac{\\theta_\\odot}{2}\\right),\\quad \\theta_\\odot\\approx5.7^\\circ\\text{ at 0.041 AU}`,
    latexCaption: "Umbra cone half-width vs distance z behind TPS — shrinks with angular Sun size",
    blueprintImage: null,
    specs: [
      { k: "TPS diameter", v: "2.4 m (7.9 ft)" },
      { k: "Umbra width at bus", v: "~2.3 m at 1.5 m behind TPS" },
      { k: "Attitude precision", v: "±1° to stay within umbra" },
      { k: "Sun angular size @ perihelion", v: "~5.7° vs 0.5° from Earth" },
      { k: "Shield shape evolution", v: "Conical (Jupiter) → Flat disk (Venus)" },
      { k: "Protection margin", v: "~15° half-angle over solar limb" },
    ],
    source: "NASA APL / Real Engineering — VIDEO_COMPLEMENTARY_PARKER_PROBE.TXT"
  },
  es: {
    title: "Cono de Sombra Umbra/Penumbra del TPS — Geometría de Protección",
    desc: `La umbra es el cono completamente sombreado detrás del TPS de 2.4 m de diámetro. Todos los sistemas críticos deben caber dentro de él cerca del perihelio. El TPS evolucionó del diseño cónico original (para la asistencia de Júpiter) al disco circular plano actual — un rediseño crítico que habilitó un escudo más ligero y compacto y condujo al cambio a 7 asistencias de Venus. A 0.041 AU el Sol subtiende ~5.7° — mucho mayor que desde la Tierra (0.5°). La incertidumbre angular en la protección de la umbra está dominada por la precisión del control de actitud (±1°). Los sensores de limbo solar están en el límite umbra/penumbra. La nave mantiene una precisión de actitud de ±1° para mantener todos los componentes dentro de la sombra segura. (Fuente: NASA APL)`,
    latex: `r_{\\text{umbra}}(z)=R_{\\text{TPS}}-z\\tan\\!\\left(\\frac{\\theta_\\odot}{2}\\right),\\quad \\theta_\\odot\\approx5.7^\\circ\\text{ a 0.041 AU}`,
    latexCaption: "Anchura del cono de umbra vs distancia z detrás del TPS",
    blueprintImage: null,
    specs: [
      { k: "Diámetro del TPS", v: "2.4 m (7.9 pies)" },
      { k: "Anchura de umbra en bus", v: "~2.3 m a 1.5 m detrás del TPS" },
      { k: "Precisión de actitud", v: "±1° para permanecer en la umbra" },
      { k: "Tamaño angular del Sol @ perihelio", v: "~5.7° vs 0.5° desde la Tierra" },
      { k: "Evolución del escudo", v: "Cónico (Júpiter) → Disco plano (Venus)" },
      { k: "Margen de protección", v: "~15° de semiángulo sobre el limbo solar" },
    ],
    source: "NASA APL / Real Engineering — VIDEO_COMPLEMENTARY_PARKER_PROBE.TXT"
  }
};
