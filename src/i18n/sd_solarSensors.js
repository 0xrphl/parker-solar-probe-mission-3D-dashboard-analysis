export const sdSolarSensors = {
  en: {
    title: "Solar Limb Sensors — Autonomous Attitude Control (ACSW)",
    desc: `Parker operates autonomously — Earth is 8–15 light-minutes away. Solar limb sensors are small photodetectors at the exact umbra/penumbra boundary of the TPS cone. If any sensor detects direct sunlight (shield misaligned), the onboard Autonomy Control Software (ACSW) fires attitude thrusters in under one second to realign the probe. The spacecraft can NEVER allow instruments behind the shield to see direct sunlight near perihelion — temperatures would catastrophically exceed limits in seconds. These sensors are the probe's survival reflex. They continuously monitor the shadow boundary at ~5× per second, cross-referencing with star trackers and IMU for attitude estimation. The system also autonomously detects faults in other subsystems and implements pre-programmed safing sequences. (Source: video_tc_task.txt / NASA Parker Mission Design)`,
    latex: `E_{\\text{sensor}}>E_{\\text{thresh}}\\Rightarrow\\text{ACSW}\\;\\Delta\\theta_{\\text{corr}}\\text{ via thrusters},\\;\\tau<1\\,\\text{s}`,
    latexCaption: "Limb sensor trigger: solar flux detection → autonomous thruster correction in <1s",
    blueprintImage: null,
    specs: [
      { k: "Sensor type", v: "Photodetector — direct solar illumination detection" },
      { k: "Position", v: "Umbra/penumbra boundary edge of TPS cone" },
      { k: "Response time", v: "<1 second autonomous thruster correction" },
      { k: "Software", v: "ACSW — Autonomy Control Software (onboard)" },
      { k: "Sample rate", v: "~5 Hz continuous shadow boundary monitoring" },
      { k: "Criticality", v: "PRIMARY survival system — no ground override possible" },
    ],
    source: "video_tc_task.txt — NASA Parker Solar Probe Mission Design"
  },
  es: {
    title: "Sensores de Limbo Solar — Control Autónomo de Actitud (ACSW)",
    desc: `Parker opera de forma autónoma — la Tierra está a 8–15 minutos-luz. Los sensores de limbo solar son pequeños fotodetectores en el límite exacto umbra/penumbra del cono del TPS. Si algún sensor detecta luz solar directa (escudo desalineado), el Software de Control de Autonomía (ACSW) a bordo dispara propulsores de actitud en menos de un segundo para realinear la sonda. La nave NUNCA puede permitir que los instrumentos detrás del escudo vean luz solar directa cerca del perihelio — las temperaturas superarían los límites catastróficamente en segundos. Estos sensores son el reflejo de supervivencia de la sonda. Monitorean continuamente el límite de la sombra ~5 veces por segundo, cruzando referencias con rastreadores de estrellas e IMU para estimar la actitud. El sistema también detecta fallos autónomamente e implementa secuencias de seguridad preprogramadas. (Fuente: video_tc_task.txt / NASA)`,
    latex: `E_{\\text{sensor}}>E_{\\text{umbral}}\\Rightarrow\\text{ACSW}\\;\\Delta\\theta_{\\text{corr}}\\text{ via propulsores},\\;\\tau<1\\,\\text{s}`,
    latexCaption: "Sensor de limbo: detección de flujo solar → corrección autónoma en <1s",
    blueprintImage: null,
    specs: [
      { k: "Tipo de sensor", v: "Fotodetector — detección de iluminación solar directa" },
      { k: "Posición", v: "Borde límite umbra/penumbra del cono del TPS" },
      { k: "Tiempo de respuesta", v: "<1 segundo de corrección autónoma" },
      { k: "Software", v: "ACSW — Software de Control de Autonomía (a bordo)" },
      { k: "Tasa de muestreo", v: "~5 Hz monitoreo continuo del límite de sombra" },
      { k: "Criticidad", v: "Sistema de supervivencia PRIMARIO — sin anulación posible" },
    ],
    source: "video_tc_task.txt — NASA Parker Solar Probe Mission Design"
  }
};
