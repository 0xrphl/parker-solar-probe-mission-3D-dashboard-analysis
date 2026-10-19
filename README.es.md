# Parker Solar Probe — Dashboard 3D de Misión y Análisis Termodinámico

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-0.169-black?logo=three.js)](https://threejs.org/)
[![React Three Fiber](https://img.shields.io/badge/R3F-8.17-white?logo=react)](https://docs.pmnd.rs/react-three-fiber/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![KaTeX](https://img.shields.io/badge/KaTeX-LaTeX_Math-007A5A?logo=latex)](https://katex.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

*English: You can read the default English version of this document in [README.md](README.md).*

---

## 🛰 Resumen del Proyecto

Un dashboard interactivo WebGL 3D de última generación (SOTA) construido con **React**, **Three.js / React Three Fiber**, **Tailwind CSS** y **KaTeX**. Diseñado para ingenieros aeroespaciales, astrofísicos y entusiastas del espacio, este proyecto proporciona una exploración científica y técnica profunda de la histórica misión **Parker Solar Probe** de la NASA — la primera nave espacial en la historia de la humanidad en volar a través de la corona solar a **8.86 radios solares** ($0.041\text{ AU} \approx 6.16\times 10^6\text{ km}$) y alcanzar una velocidad heliocéntrica récord de **$192\text{ km/s}$** ($430{,}000\text{ mph}$).

| Modelo CAD 3D de la Nave | Filamentos de Plasma Solar |
|:---:|:---:|
| ![Modelo de la Nave Parker](docs/images/Parker_Solar_Probe_spacecraft_model.png) | ![Parker Solar Probe](docs/images/Parker_Solar_Probe.jpg) |

---

## 🌟 Características Principales

### 1. Sol 3D Multicapa en Corte Transversal (Mapas de Color CFD)
- **Vista en Corte Semiesférico**: Una cuña abierta de $110^\circ$ que expone todas las capas concéntricas internas y atmosféricas simultáneamente:
  1. **Núcleo de Fusión** ($1.5\times 10^7\text{ K}$, $150\text{ g/cm}^3$, cadena $p$-$p$)
  2. **Zona Radiativa** ($7\times 10^6 \rightarrow 2\times 10^6\text{ K}$, difusión de fotones)
  3. **Zona Convectiva** ($2\times 10^6 \rightarrow 6{,}500\text{ K}$, flotabilidad magnética)
  4. **Fotosfera** ($6{,}200^\circ\text{C}$ base $\rightarrow 3{,}700^\circ\text{C}$ cima)
  5. **Cromosfera** ($4{,}000 \rightarrow 20{,}000\text{ K}$, línea de emisión $\text{H}\alpha$)
  6. **Región de Transición** ($20{,}000 \rightarrow 500{,}000\text{ K}$, gradiente abrupto)
  7. **Corona Solar** ($>1{,}000{,}000\text{ K}$, $\text{Kn} \gg 10$)
- **Conmutador CFD en Vivo**:
  - `Natural`: Emisión de plasma realista con shaders procedurales GLSL de granulación y lazos magnéticos coronales.
  - `CFD T(r)`: Escala de temperatura cinética con mapa de color Inferno ($30^\circ\text{C} \rightarrow 1.5\times 10^7\text{ K}$).
  - `CFD |q|`: Magnitud de flujo de calor demostrando $q_{\text{rad}} \propto 1/r^2$ ($63\text{ MW/m}^2$ en la superficie vs. $650\text{ kW/m}^2$ en perihelio) frente al flujo convectivo enrarecido ($q_{\text{conv}} \approx 0.02\text{ W/m}^2$).

### 2. Hardware de la Nave Espacial en Alta Fidelidad 3D
- **Sistema de Protección Térmica (TPS)**: Sándwich de $11.4\text{ cm}$ compuesto por cerámica blanca de $\text{Al}_2\text{O}_3$ ($\alpha_s = 0.18$, $\varepsilon = 0.86$), caras frontal y trasera de Carbono-Carbono (C-C) de $2\text{ mm}$, y núcleo de espuma de carbono Ultramet con $97\%$ de porosidad abierta.
- **Copa Sonda Solar (SPC)**: Malla moduladora de Tungsteno ($W$) cuadricular de $100\,\mu\text{m}$ grabada al ácido, anillos de zafiro y placa colectora de Niobio C-103 en la penumbra.
- **Arnés Coaxial Refractario**: Cable coaxial 3D y corte transversal mostrando el núcleo de Niobio C-103 ($2{,}350^\circ\text{C}$ fusión), manguitos de zafiro ($2{,}040^\circ\text{C}$ fusión) y camisa de Nb C-103.
- **Alas Solares Articuladas y Refrigeración Activa por $\text{H}_2\text{O}$**:
  - Animación suave de retracción ($10^\circ \rightarrow 82^\circ$) dentro del cono de sombra Umbra.
  - Slider interactivo de ángulo con lectura en tiempo real de potencia eléctrica ($W$) y temperatura de celdas ($^\circ\text{C}$).
  - Partículas de refrigerante circulando hacia 4 radiadores piramidales de grafito ($\varepsilon = 0.92$).
- **Sensores Ópticos de Limbo Solar**: $4$ sensores periscópicos con lentes convexos de cuarzo/zafiro apuntando al frente ($+Z$) conectados al software de control autónomo (ACSW).
- **Líneas de Radiación Perpendiculares al TPS**: Rayos animados y pulsos fotónicos incidiendo a $650\text{ kW/m}^2$ y reflejando el $82\%$.


### 3. Trayectoria Kepleriana y 7 Asistencias Gravitatorias en Venus
- Modelo de transferencia elíptica que muestra la reducción del perihelio de $1.00\text{ AU}$ ($150\times 10^6\text{ km}$) a $0.041\text{ AU}$ ($6.16\times 10^6\text{ km}$).
- $7$ puntos de paso interactivos de Venus con $\Delta v$ acumulado y disipación de momento angular orbital ($h = r \times v$).
- Indicador de velocidad Vis-Viva ($17\text{ km/s}$ en afelio $\rightarrow 192\text{ km/s}$ en perihelio).

### 4. Escena de Análisis Atómico y Microestructural de Materiales 3D
- Red cristalina $sp^2$ hexagonal de Carbono-Carbono / Grafeno.
- Jaula microestructural de ligamentos de espuma de carbono Ultramet al $97\%$ de porosidad abierta (dispersión radiativa de Rosseland).
- Corte coaxial atómico y cilíndrico de Niobio C-103 + Zafiro ($\alpha\text{-Al}_2\text{O}_3$).
- Modelo a microescala de la malla cuadricular de Tungsteno ($W$) de $100\,\mu\text{m}$.

### 5. Modales Técnicos Interactivos y Centro de Videos
- **Modal de Planos y Esquemáticos**: 5 esquemáticos de ingeniería en alta resolución provenientes de los archivos de la misión.
- **Modal de Videos y Documentación**: Reproductores embebidos y enlaces directos a:
  - *How NASA's Parker Solar Probe Will Survive the Sun* (NASA Goddard)
  - *The Insane Engineering of the Parker Solar Probe* (Real Engineering)
  - Acceso directo al informe técnico completo en [Google Drive / Docs](https://docs.google.com/document/d/1b7eNMyO5pENDptTPzfeo3wBvgB3_d09c/edit?usp=sharing&ouid=102220368577968794134&rtpof=true&sd=true).
- **Soporte Bilingüe Total**: Conmutador inmediato de 1 clic (`EN / ES`) en cada etiqueta de interfaz, ecuación matemática, tooltip 3D y transcripción.

---

## 📐 Formulaciones Térmicas y de Mecánica Orbital

Todas las fórmulas están renderizadas con **KaTeX LaTeX**:

1. **Equilibrio Radiativo Superficial del TPS**:
   $$\alpha_s \cdot \frac{S_0}{(r / 1\,\text{AU})^2} \cos\theta = \varepsilon \sigma T_s^4 + q_{\text{cond}}$$
2. **Conducción de Fourier y Conductividad Radiativa de Rosseland en Espuma Ultramet**:
   $$q_{\text{cond}} = -k_{\text{eff}}(T)\frac{dT}{dx}, \quad k_{\text{eff}}(T) = k_{\text{sólido}} + \frac{16 n^2 \sigma T^3}{3 \beta_R}$$
3. **Refrigeración Activa por Agua Líquida y Rechazo Radiativo**:
   $$\dot{Q} = \dot{m} C_p (T_{\text{salida}} - T_{\text{entrada}}) = \varepsilon_{\text{rad}} A_{\text{rad}} \sigma (T_{\text{rad}}^4 - T_\infty^4)$$
4. **Flujo Convectivo Coronal Enrarecido (Régimen de Knudsen, $\text{Kn} \gg 10$)**:
   $$\text{Kn} = \frac{\lambda_{\text{mfp}}}{L} \gg 10 \implies q_{\text{conv}} = \frac{\alpha_{\text{acc}}}{2} n_p m_p v_{\text{th}}^3 \approx 0.02\,\text{W/m}^2 \ll q_{\text{rad}}$$
5. **Presupuesto $\Delta v$ de Transferencia de Hohmann**:
   $$\Delta v_1 = \sqrt{\frac{\mu_\odot}{r_1}} \left(1 - \sqrt{\frac{2 r_2}{r_1 + r_2}}\right) = 21.4\,\text{km/s}$$
6. **Velocidad Orbital Vis-Viva**:
   $$v^2 = \mu_\odot \left(\frac{2}{r} - \frac{1}{a}\right) \implies v_{\text{perihelio}} = 192\,\text{km/s}$$

---

## 🗂 Estructura de Directorios del Proyecto

```text
├── docs/
│   ├── images/              # Planos, emblema de la NASA y renders de la nave
│   └── transcripts/         # Guiones y transcripciones originales de la misión
├── public/
│   ├── blueprints/          # Archivos servidos para los modales de planos
│   ├── images/              # Texturas y elementos HUD
│   ├── nasa-6.png           # Emblema oficial de NASA en cabecera
│   └── Parker_Solar_Probe_Informe_Ingenieria_PhD.docx
├── src/
│   ├── components/          # Paneles UI, barras HUD, modales y wrapper KaTeX
│   ├── i18n/                # Diccionarios completos en español e inglés
│   └── scene/               # Componentes 3D Three.js / React Three Fiber
├── README.md                # Documentación en Inglés (Por Defecto)
├── README.es.md             # Documentación Completa en Español
└── package.json
```

---

## 🚀 Inicio Rápido

### Requisitos Previos
- **Node.js**: v18.0.0 o superior
- **npm**: v9.0.0 o superior

### Instalación y Ejecución

```bash
# Clonar el repositorio
git clone https://github.com/0xrphl/parker-solar-probe-mission-3D-dashboard-analysis.git
cd parker-solar-probe-mission-3D-dashboard-analysis

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abre tu navegador en `http://localhost:3000`.

### Compilación para Producción

```bash
npm run build
npm run preview
```

---

## 📚 Referencias y Bibliografía

- **Incropera, F. P., DeWitt, D. P., Bergman, T. L., & Lavine, A. S. (2017).** *Fundamentals of Heat and Mass Transfer* (8th ed.). John Wiley & Sons.
- **NASA Goddard Space Flight Center (2018).** *How NASA's Parker Solar Probe Will Survive the Sun*. [YouTube](https://www.youtube.com/watch?v=RT9laVHZZQo).
- **Real Engineering (2022).** *The Insane Engineering of the Parker Solar Probe*. [YouTube](https://www.youtube.com/watch?v=pOZhPz92Dic).
- **Fox, N. J., et al. (2016).** "The Solar Probe Plus Mission: Humanity's First Visit to Our Star." *Space Science Reviews*, 204(1–4), 7–48.
- **Congdon, E., et al. (2018).** "Solar Probe Plus Thermal Protection System (TPS) Design, Material Characterization, and Qualification." *Johns Hopkins APL Technical Digest*.
- **Case, A. W., et al. (2020).** "The Solar Probe Cup on the Parker Solar Probe." *The Astrophysical Journal Supplement Series*, 246(2), 43.

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.
