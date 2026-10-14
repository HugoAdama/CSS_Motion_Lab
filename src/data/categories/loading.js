// Catálogo de animaciones: Carga (10 ejemplos)

export const loadingAnimations = [
  {
    id: "spinner",
    name: "Spinner",
    category: "Carga",
    defaultDuration: 0.9,
    defaultTiming: "linear",
    timingOptions: ["linear","ease-in-out","cubic-bezier(0.5, 0, 0.5, 1)"],
    properties: "transform",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Giro continuo de 360 grados mediante rotate() que el hilo compositor puede refrescar eficientemente.",
    description: "Rotación continua sobre un anillo con borde acentuado para indicar estados de espera.",
    targetSelector: ".spinner-ring",
    previewClass: "shape--spinner",
    htmlSnippet: "<div class=\"spinner-ring\" role=\"status\" aria-label=\"Cargando\"></div>",
    previewHtml: "<div class=\"spinner-stage\" data-motion-target>\n  <div class=\"spinner-ring is-playing\" role=\"status\" aria-label=\"Cargando\"></div>\n</div>",
    generateCss: (dur, timing) => `.spinner-ring {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 4px solid rgba(123, 110, 246, 0.18);
  border-top-color: #695cf5;
  animation: spin ${dur}s ${timing} infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .spinner-ring {
    animation: none !important;
    opacity: 0.6 !important;
  }
}`
  },
  {
    id: "progress-ring",
    name: "Anillo de Progreso SVG",
    category: "Carga",
    defaultDuration: 1.5,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out","linear"],
    properties: "stroke-dashoffset",
    renderCost: "Repintado / Paint (SVG)",
    renderCostType: "paint",
    costExplanation: "Actualiza el desfase del trazo perimétrico en el espacio vectorial SVG. Ideal para indicadores de carga cuantificables.",
    description: "Círculo de progreso animado que se llena fluidamente hasta el 80% con indicador de porcentaje central.",
    targetSelector: ".ring-progress-circle",
    previewClass: "shape--progress-ring",
    htmlSnippet: "<div class=\"progress-ring-card\">\n  <div class=\"ring-wrapper\">\n    <svg class=\"ring-svg\" width=\"64\" height=\"64\" viewBox=\"0 0 64 64\">\n      <circle class=\"ring-bg\" cx=\"32\" cy=\"32\" r=\"26\"></circle>\n      <circle class=\"ring-progress-circle\" cx=\"32\" cy=\"32\" r=\"26\"></circle>\n    </svg>\n    <span class=\"ring-percent\">80%</span>\n  </div>\n  <div class=\"ring-info\">\n    <strong>Sincronizando</strong>\n    <p>Descargando paquetes...</p>\n  </div>\n</div>",
    previewHtml: "<div class=\"progress-ring-card is-playing\" data-motion-target>\n  <div class=\"ring-wrapper\">\n    <svg class=\"ring-svg\" width=\"64\" height=\"64\" viewBox=\"0 0 64 64\" aria-hidden=\"true\">\n      <circle class=\"ring-bg\" cx=\"32\" cy=\"32\" r=\"26\"></circle>\n      <circle class=\"ring-progress-circle\" cx=\"32\" cy=\"32\" r=\"26\"></circle>\n    </svg>\n    <span class=\"ring-percent\">80%</span>\n  </div>\n  <div class=\"ring-info\">\n    <strong>Sincronizando</strong>\n    <p>Descargando paquetes...</p>\n  </div>\n</div>",
    generateCss: (dur, timing) => `.ring-progress-circle {
  fill: none;
  stroke: #7b6ef6;
  stroke-width: 4.5;
  stroke-linecap: round;
  stroke-dasharray: 163.36;
  stroke-dashoffset: 163.36;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  animation: fillRing ${dur}s ${timing} both;
}

@keyframes fillRing {
  from { stroke-dashoffset: 163.36; }
  to { stroke-dashoffset: 32.67; }
}

@media (prefers-reduced-motion: reduce) {
  .ring-progress-circle {
    animation: none !important;
    stroke-dashoffset: 32.67 !important;
  }
}`
  },
  {
    id: "dots-wave",
    name: "Onda de Puntos / Bouncing Dots",
    category: "Carga",
    defaultDuration: 1.2,
    defaultTiming: "ease-in-out",
    timingOptions: ["ease-in-out","ease-out","linear"],
    properties: "transform (translateY), opacity",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Tres círculos oscilando con retrasos escalonados en translateY() gestionados por el hilo compositor.",
    description: "Puntos flotantes rítmicos clásicos en interfaces de chat para indicar que alguien está escribiendo.",
    targetSelector: ".dots-container",
    previewClass: "shape--dots-wave",
    htmlSnippet: "<div class=\"dots-container\">\n  <span class=\"dot-bubble dot-bubble--1\"></span>\n  <span class=\"dot-bubble dot-bubble--2\"></span>\n  <span class=\"dot-bubble dot-bubble--3\"></span>\n</div>",
    previewHtml: "<div class=\"dots-container is-playing\" data-motion-target>\n  <span class=\"dot-bubble dot-bubble--1\"></span>\n  <span class=\"dot-bubble dot-bubble--2\"></span>\n  <span class=\"dot-bubble dot-bubble--3\"></span>\n</div>",
    generateCss: (dur, timing) => `.dots-container {
  display: inline-flex;
  gap: 8px;
  align-items: center;
  padding: 14px 20px;
  background: #141523;
  border-radius: 999px;
  border: 1px solid rgba(123, 110, 246, 0.25);
}

.dot-bubble {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #7b6ef6;
  animation: dotWave ${dur}s ${timing} infinite;
}

.dot-bubble--2 { animation-delay: 0.18s; }
.dot-bubble--3 { animation-delay: 0.36s; }

@keyframes dotWave {
  0%, 80%, 100% { transform: translateY(0); opacity: 0.5; }
  40% { transform: translateY(-10px); opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .dot-bubble { animation: none !important; opacity: 1 !important; transform: none !important; }
}`
  },
  {
    id: "pulse-bars",
    name: "Barras de Ecualizador / Wave Bars",
    category: "Carga",
    defaultDuration: 1,
    defaultTiming: "ease-in-out",
    timingOptions: ["ease-in-out","linear","ease-out"],
    properties: "transform (scaleY)",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Usa transform: scaleY() con transform-origin: bottom para modular la altura sin forzar reflow de cajas.",
    description: "Barras verticales de sonido moduladas para carga de audio, streaming o transcripción de voz.",
    targetSelector: ".equalizer-box",
    previewClass: "shape--pulse-bars",
    htmlSnippet: "<div class=\"equalizer-box\">\n  <span class=\"eq-bar eq-bar--1\"></span>\n  <span class=\"eq-bar eq-bar--2\"></span>\n  <span class=\"eq-bar eq-bar--3\"></span>\n  <span class=\"eq-bar eq-bar--4\"></span>\n</div>",
    previewHtml: "<div class=\"equalizer-box is-playing\" data-motion-target>\n  <span class=\"eq-bar eq-bar--1\"></span>\n  <span class=\"eq-bar eq-bar--2\"></span>\n  <span class=\"eq-bar eq-bar--3\"></span>\n  <span class=\"eq-bar eq-bar--4\"></span>\n</div>",
    generateCss: (dur, timing) => `.equalizer-box {
  display: inline-flex;
  gap: 5px;
  align-items: flex-end;
  height: 32px;
  padding: 6px 14px;
  background: #141523;
  border-radius: 8px;
}

.eq-bar {
  width: 5px;
  height: 100%;
  background: #3ddda8;
  border-radius: 3px;
  transform-origin: bottom center;
  animation: eqPulse ${dur}s ${timing} infinite;
}

.eq-bar--1 { animation-delay: 0.1s; }
.eq-bar--2 { animation-delay: 0.3s; }
.eq-bar--3 { animation-delay: 0.15s; }
.eq-bar--4 { animation-delay: 0.45s; }

@keyframes eqPulse {
  0%, 100% { transform: scaleY(0.2); }
  50% { transform: scaleY(1); }
}

@media (prefers-reduced-motion: reduce) {
  .eq-bar { animation: none !important; transform: scaleY(0.6) !important; }
}`
  },
  {
    id: "progress-bar",
    name: "Barra de Progreso Indeterminada",
    category: "Carga",
    defaultDuration: 1.6,
    defaultTiming: "cubic-bezier(0.65, 0, 0.35, 1)",
    timingOptions: ["cubic-bezier(0.65, 0, 0.35, 1)","linear","ease-in-out"],
    properties: "transform (translateX, scaleX)",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "El haz viaja mediante transform: translateX() y scaleX() a lo largo de un canal fijo con overflow: hidden.",
    description: "Línea de avance fluido continua que indica actividad en curso sin porcentaje definido.",
    targetSelector: ".indeterminate-track",
    previewClass: "shape--progress-bar",
    htmlSnippet: "<div class=\"indeterminate-track\">\n  <div class=\"indeterminate-bar\"></div>\n</div>",
    previewHtml: "<div class=\"indeterminate-track is-playing\" data-motion-target>\n  <div class=\"indeterminate-bar\"></div>\n</div>",
    generateCss: (dur, timing) => `.indeterminate-track {
  width: 220px;
  height: 6px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  overflow: hidden;
  position: relative;
}

.indeterminate-bar {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 45%;
  background: #7b6ef6;
  border-radius: 999px;
  animation: indetProgress ${dur}s ${timing} infinite;
}

@keyframes indetProgress {
  0% { transform: translateX(-100%) scaleX(0.4); }
  50% { transform: translateX(100%) scaleX(1); }
  100% { transform: translateX(300%) scaleX(0.4); }
}

@media (prefers-reduced-motion: reduce) {
  .indeterminate-bar { animation: none !important; width: 60% !important; transform: none !important; }
}`
  },
  {
    id: "radar-sweep",
    name: "Barrido de Radar / Radar Sweep",
    category: "Carga",
    defaultDuration: 2.2,
    defaultTiming: "linear",
    timingOptions: ["linear","ease-in-out"],
    properties: "transform (rotate)",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Rotación continua de un gradiente cónico sobre el compositor simulando un barrido sonar.",
    description: "Haz circular de escaneo continuo para interfaces de búsqueda geográfica o sensores.",
    targetSelector: ".radar-dish",
    previewClass: "shape--radar-sweep",
    htmlSnippet: "<div class=\"radar-dish\">\n  <div class=\"radar-beam\"></div>\n  <span class=\"radar-center\"></span>\n</div>",
    previewHtml: "<div class=\"radar-dish is-playing\" data-motion-target>\n  <div class=\"radar-beam\"></div>\n  <span class=\"radar-center\"></span>\n</div>",
    generateCss: (dur, timing) => `.radar-dish {
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid rgba(61, 221, 168, 0.3);
  background: rgba(61, 221, 168, 0.05);
  overflow: hidden;
}

.radar-beam {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: conic-gradient(from 0deg, rgba(61, 221, 168, 0.4) 0deg, transparent 60deg, transparent 360deg);
  animation: radarSpin ${dur}s ${timing} infinite;
}

.radar-center {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #3ddda8;
  transform: translate(-50%, -50%);
}

@keyframes radarSpin {
  to { transform: rotate(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .radar-beam { animation: none !important; opacity: 0.3 !important; }
}`
  },
  {
    id: "dual-ring",
    name: "Doble Anillo Concéntrico",
    category: "Carga",
    defaultDuration: 1.2,
    defaultTiming: "linear",
    timingOptions: ["linear","ease-in-out"],
    properties: "transform (rotate)",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Dos aros anidados rotando en sentidos opuestos usando transform: rotate().",
    description: "Spinner moderno de doble giro concéntrico con velocidad contraria para operaciones complejas.",
    targetSelector: ".dual-ring-wrap",
    previewClass: "shape--dual-ring",
    htmlSnippet: "<div class=\"dual-ring-wrap\">\n  <div class=\"dual-ring-outer\"></div>\n  <div class=\"dual-ring-inner\"></div>\n</div>",
    previewHtml: "<div class=\"dual-ring-wrap is-playing\" data-motion-target>\n  <div class=\"dual-ring-outer\"></div>\n  <div class=\"dual-ring-inner\"></div>\n</div>",
    generateCss: (dur, timing) => `.dual-ring-wrap {
  position: relative;
  width: 48px;
  height: 48px;
}

.dual-ring-outer {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #7b6ef6;
  border-bottom-color: #7b6ef6;
  animation: spinOuter ${dur}s ${timing} infinite;
}

.dual-ring-inner {
  position: absolute;
  inset: 7px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-left-color: #3ddda8;
  border-right-color: #3ddda8;
  animation: spinInner ${dur * 0.75}s ${timing} infinite reverse;
}

@keyframes spinOuter { to { transform: rotate(360deg); } }
@keyframes spinInner { to { transform: rotate(360deg); } }

@media (prefers-reduced-motion: reduce) {
  .dual-ring-outer, .dual-ring-inner { animation: none !important; opacity: 0.5 !important; }
}`
  },
  {
    id: "shimmer-box",
    name: "Bloque de Carga Shimmer",
    category: "Carga",
    defaultDuration: 1.6,
    defaultTiming: "ease-in-out",
    timingOptions: ["ease-in-out","linear","ease-out"],
    properties: "background-position",
    renderCost: "Repintado / Paint",
    renderCostType: "paint",
    costExplanation: "Reflejo transversal sobre degradado angular con background-position continuo.",
    description: "Efecto de brillo fotón diagonal sobre rectángulos de carga previa de imágenes.",
    targetSelector: ".shimmer-thumb",
    previewClass: "shape--shimmer-box",
    htmlSnippet: "<div class=\"shimmer-thumb\"></div>",
    previewHtml: "<div class=\"shimmer-thumb is-playing\" data-motion-target></div>",
    generateCss: (dur, timing) => `.shimmer-thumb {
  width: 200px;
  height: 70px;
  border-radius: 12px;
  background: linear-gradient(110deg, rgba(255, 255, 255, 0.04) 30%, rgba(255, 255, 255, 0.16) 50%, rgba(255, 255, 255, 0.04) 70%);
  background-size: 200% 100%;
  animation: boxShimmer ${dur}s ${timing} infinite;
}

@keyframes boxShimmer {
  to { background-position: -200% 0; }
}

@media (prefers-reduced-motion: reduce) {
  .shimmer-thumb { animation: none !important; background: rgba(255, 255, 255, 0.07) !important; }
}`
  },
  {
    id: "orbit-dots",
    name: "Satélites en Órbita / Orbit Dots",
    category: "Carga",
    defaultDuration: 1.8,
    defaultTiming: "linear",
    timingOptions: ["linear","ease-in-out"],
    properties: "transform (rotate)",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Giro de elementos esféricos alrededor de un origen central rotando sobre el compositor.",
    description: "Puntos que rotan orbitalmente alrededor de un núcleo para sincronizaciones en segundo plano.",
    targetSelector: ".orbit-stage",
    previewClass: "shape--orbit-dots",
    htmlSnippet: "<div class=\"orbit-stage\">\n  <div class=\"orbit-center\"></div>\n  <div class=\"orbit-sat orbit-sat--1\"></div>\n  <div class=\"orbit-sat orbit-sat--2\"></div>\n</div>",
    previewHtml: "<div class=\"orbit-stage is-playing\" data-motion-target>\n  <div class=\"orbit-center\"></div>\n  <div class=\"orbit-sat orbit-sat--1\"></div>\n  <div class=\"orbit-sat orbit-sat--2\"></div>\n</div>",
    generateCss: (dur, timing) => `.orbit-stage {
  position: relative;
  width: 54px;
  height: 54px;
  display: grid;
  place-items: center;
  animation: orbitRotate ${dur}s ${timing} infinite;
}

.orbit-center {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #7b6ef6;
}

.orbit-sat {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #3ddda8;
}

.orbit-sat--1 { top: 0; }
.orbit-sat--2 { bottom: 0; }

@keyframes orbitRotate { to { transform: rotate(360deg); } }

@media (prefers-reduced-motion: reduce) {
  .orbit-stage { animation: none !important; }
}`
  },
  {
    id: "sand-timer",
    name: "Reloj de Arena / Sand Flip",
    category: "Carga",
    defaultDuration: 1.4,
    defaultTiming: "cubic-bezier(0.77, 0, 0.175, 1)",
    timingOptions: ["cubic-bezier(0.77, 0, 0.175, 1)","ease-in-out","linear"],
    properties: "transform (rotate)",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Rotación con pausas en múltiplos de 180 grados mediante una curva de aceleración cúbica.",
    description: "Inversión rítmica de 180° que simula el volteo de un reloj de arena tradicional.",
    targetSelector: ".sand-hourglass",
    previewClass: "shape--sand-timer",
    htmlSnippet: "<div class=\"sand-hourglass\">\n  <span class=\"sand-glyph\">&#9203;</span>\n</div>",
    previewHtml: "<div class=\"sand-hourglass is-playing\" data-motion-target>\n  <span class=\"sand-glyph\">&#9203;</span>\n</div>",
    generateCss: (dur, timing) => `.sand-hourglass {
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: #141523;
  border: 1px solid rgba(123, 110, 246, 0.3);
  font-size: 20px;
  color: #7b6ef6;
  animation: sandFlip ${dur}s ${timing} infinite;
}

@keyframes sandFlip {
  0% { transform: rotate(0deg); }
  50%, 100% { transform: rotate(180deg); }
}

@media (prefers-reduced-motion: reduce) {
  .sand-hourglass { animation: none !important; }
}`
  },
  {
    id: "bouncing-cubes",
    name: "Cubos Saltarines (Bouncing Cubes)",
    category: "Carga",
    defaultDuration: 1.2,
    defaultTiming: "ease-in-out",
    timingOptions: ["ease-in-out","linear","ease-out"],
    properties: "transform (translateY), opacity",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Tres cubos sincronizados con calc(var(--cube-idx) * delay) desplazándose en translateY.",
    description: "Trío de cubos geométricos que rebotan en secuencia ondulada para pantallas de espera modernas.",
    targetSelector: ".cubes-loader",
    previewClass: "shape--bouncing-cubes",
    htmlSnippet: "<div class=\"cubes-loader\">\n  <span class=\"cube-item\" style=\"--cube-idx: 0;\"></span>\n  <span class=\"cube-item\" style=\"--cube-idx: 1;\"></span>\n  <span class=\"cube-item\" style=\"--cube-idx: 2;\"></span>\n</div>",
    previewHtml: "<div class=\"cubes-loader is-playing\" data-motion-target>\n  <span class=\"cube-item\" style=\"--cube-idx: 0;\"></span>\n  <span class=\"cube-item\" style=\"--cube-idx: 1;\"></span>\n  <span class=\"cube-item\" style=\"--cube-idx: 2;\"></span>\n</div>",
    generateCss: (dur, timing) => `.cubes-loader {
  display: flex;
  gap: 8px;
  align-items: center;
}

.cube-item {
  width: 14px;
  height: 14px;
  border-radius: 4px;
  background: #7b6ef6;
  animation: cubeBounce ${dur}s ${timing} infinite;
  animation-delay: calc(var(--cube-idx, 0) * 0.16s);
}

@keyframes cubeBounce {
  0%, 80%, 100% {
    transform: translateY(0);
    opacity: 0.5;
  }
  40% {
    transform: translateY(-16px);
    opacity: 1;
    background: #3ddda8;
  }
}

@media (prefers-reduced-motion: reduce) {
  .cube-item { animation: none !important; transform: none !important; opacity: 1 !important; }
}`
  },
  {
    id: "circular-dash",
    name: "Anillo Vectorial (Circular Dash)",
    category: "Carga",
    defaultDuration: 1.6,
    defaultTiming: "ease-in-out",
    timingOptions: ["ease-in-out","linear","cubic-bezier(0.4, 0, 0.2, 1)"],
    properties: "stroke-dashoffset, transform",
    renderCost: "Composición y Repintado",
    renderCostType: "paint",
    costExplanation: "Modulación continua de stroke-dashoffset y rotación 360° sin disparar reflujo.",
    description: "Anillo circular SVG de trazo elástico continuo similar al indicador de carga de Android.",
    targetSelector: ".circular-dash-box",
    previewClass: "shape--circular-dash",
    htmlSnippet: "<div class=\"circular-dash-box\">\n  <svg class=\"dash-svg\" viewBox=\"0 0 50 50\">\n    <circle class=\"dash-track\" cx=\"25\" cy=\"25\" r=\"20\" fill=\"none\" stroke-width=\"4\" />\n    <circle class=\"dash-circle\" cx=\"25\" cy=\"25\" r=\"20\" fill=\"none\" stroke-width=\"4\" />\n  </svg>\n</div>",
    previewHtml: "<div class=\"circular-dash-box is-playing\" data-motion-target>\n  <svg class=\"dash-svg\" viewBox=\"0 0 50 50\">\n    <circle class=\"dash-track\" cx=\"25\" cy=\"25\" r=\"20\" fill=\"none\" stroke-width=\"4\" />\n    <circle class=\"dash-circle\" cx=\"25\" cy=\"25\" r=\"20\" fill=\"none\" stroke-width=\"4\" />\n  </svg>\n</div>",
    generateCss: (dur, timing) => `.dash-svg {
  width: 44px;
  height: 44px;
  animation: dashRotate ${dur}s linear infinite;
}

.dash-circle {
  stroke: #7b6ef6;
  stroke-linecap: round;
  stroke-dasharray: 90, 150;
  stroke-dashoffset: 0;
  animation: dashExpand ${dur}s ${timing} infinite;
}

@keyframes dashRotate {
  100% { transform: rotate(360deg); }
}

@keyframes dashExpand {
  0% { stroke-dasharray: 1, 150; stroke-dashoffset: 0; }
  50% { stroke-dasharray: 90, 150; stroke-dashoffset: -35; }
  100% { stroke-dasharray: 90, 150; stroke-dashoffset: -124; }
}

@media (prefers-reduced-motion: reduce) {
  .dash-svg, .dash-circle { animation: none !important; }
}`
  },
  {
    id: "infinity-loop",
    name: "Bucle Infinito (Infinity Pulse)",
    category: "Carga",
    defaultDuration: 1.5,
    defaultTiming: "ease-in-out",
    timingOptions: ["ease-in-out","linear","ease-out"],
    properties: "transform, opacity, filter",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Respiración lumínica y rotación oscilante mínima sobre el símbolo de infinito.",
    description: "Símbolo de infinito pulsante con brillo neón para procesos perpetuos o sincronización continua.",
    targetSelector: ".infinity-loader",
    previewClass: "shape--infinity-loop",
    htmlSnippet: "<div class=\"infinity-loader\">\n  <span class=\"infinity-glyph\">&infin;</span>\n</div>",
    previewHtml: "<div class=\"infinity-loader is-playing\" data-motion-target>\n  <span class=\"infinity-glyph\">&infin;</span>\n</div>",
    generateCss: (dur, timing) => `.infinity-loader {
  display: grid;
  place-items: center;
}

.infinity-glyph {
  font-size: 38px;
  line-height: 1;
  color: #7b6ef6;
  animation: infinityPulse ${dur}s ${timing} infinite;
}

@keyframes infinityPulse {
  0%, 100% {
    transform: scale(0.9) rotate(0deg);
    opacity: 0.6;
    filter: drop-shadow(0 0 4px rgba(123, 110, 246, 0.4));
  }
  50% {
    transform: scale(1.15) rotate(5deg);
    opacity: 1;
    color: #3ddda8;
    filter: drop-shadow(0 0 16px rgba(61, 221, 168, 0.8));
  }
}

@media (prefers-reduced-motion: reduce) {
  .infinity-glyph { animation: none !important; transform: none !important; opacity: 1 !important; }
}`
  },
  {
    id: "battery-charging",
    name: "Carga de Batería (Battery Flow)",
    category: "Carga",
    defaultDuration: 2,
    defaultTiming: "steps(4, end)",
    timingOptions: ["steps(4, end)","linear","ease-in-out"],
    properties: "width, background-color",
    renderCost: "Repintado / Paint",
    renderCostType: "paint",
    costExplanation: "Incremento escalonado de 4 bloques con steps(4) simulando celdas de batería.",
    description: "Carga progresiva de batería en 4 niveles para indicar subida de archivos o energía del sistema.",
    targetSelector: ".battery-box",
    previewClass: "shape--battery-charging",
    htmlSnippet: "<div class=\"battery-box\">\n  <div class=\"battery-shell\">\n    <div class=\"battery-fill\"></div>\n  </div>\n  <div class=\"battery-terminal\"></div>\n</div>",
    previewHtml: "<div class=\"battery-box is-playing\" data-motion-target>\n  <div class=\"battery-shell\">\n    <div class=\"battery-fill\"></div>\n  </div>\n  <div class=\"battery-terminal\"></div>\n</div>",
    generateCss: (dur, timing) => `.battery-box {
  display: inline-flex;
  align-items: center;
  gap: 2px;
}

.battery-shell {
  width: 48px;
  height: 24px;
  border: 2px solid #7b6ef6;
  border-radius: 6px;
  padding: 2px;
}

.battery-fill {
  height: 100%;
  border-radius: 3px;
  background: #3ddda8;
  animation: batteryCharge ${dur}s ${timing} infinite;
}

.battery-terminal {
  width: 4px;
  height: 10px;
  background: #7b6ef6;
  border-radius: 0 2px 2px 0;
}

@keyframes batteryCharge {
  0% { width: 0%; background: #ff6e65; }
  50% { background: #ffbd2e; }
  100% { width: 100%; background: #3ddda8; }
}

@media (prefers-reduced-motion: reduce) {
  .battery-fill { animation: none !important; width: 100% !important; background: #3ddda8 !important; }
}`
  },
  {
    id: "flip-box",
    name: "Caja Cúbica Giratoria (3D Flip Cube)",
    category: "Carga",
    defaultDuration: 1.2,
    defaultTiming: "ease-in-out",
    timingOptions: ["ease-in-out","linear","cubic-bezier(0.16, 1, 0.3, 1)"],
    properties: "transform (rotateX, rotateY)",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Volteo tridimensional en rotateX y rotateY delegado a la GPU sin recalcular dimensiones.",
    description: "Prisma cuadrado minimalista que rota en el espacio 3D para estados de carga elegantes.",
    targetSelector: ".flip-cube",
    previewClass: "shape--flip-box",
    htmlSnippet: "<div class=\"flip-cube\"></div>",
    previewHtml: "<div class=\"flip-cube is-playing\" data-motion-target></div>",
    generateCss: (dur, timing) => `.flip-cube {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #7b6ef6, #3ddda8);
  border-radius: 6px;
  animation: flipCube ${dur}s ${timing} infinite;
}

@keyframes flipCube {
  0% { transform: perspective(120px) rotateX(0deg) rotateY(0deg); }
  50% { transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg); }
  100% { transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg); }
}

@media (prefers-reduced-motion: reduce) {
  .flip-cube { animation: none !important; }
}`
  },
  {
    id: "ripple-loader",
    name: "Ondas Acuáticas Concéntricas (Ripple Rings)",
    category: "Carga",
    defaultDuration: 1.6,
    defaultTiming: "cubic-bezier(0, 0.2, 0.8, 1)",
    timingOptions: ["cubic-bezier(0, 0.2, 0.8, 1)","ease-out","linear"],
    properties: "transform (scale), opacity",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Dos ondas en contrafase escalando de 0 a 1 con disminución gradual de opacidad.",
    description: "Efecto de gotas cayendo en agua cristalina con anillos transparentes que se propagan.",
    targetSelector: ".ripple-stage",
    previewClass: "shape--ripple-loader",
    htmlSnippet: "<div class=\"ripple-stage\">\n  <div class=\"ripple-ring ripple-ring--1\"></div>\n  <div class=\"ripple-ring ripple-ring--2\"></div>\n</div>",
    previewHtml: "<div class=\"ripple-stage is-playing\" data-motion-target>\n  <div class=\"ripple-ring ripple-ring--1\"></div>\n  <div class=\"ripple-ring ripple-ring--2\"></div>\n</div>",
    generateCss: (dur, timing) => `.ripple-stage {
  position: relative;
  width: 48px;
  height: 48px;
}

.ripple-ring {
  position: absolute;
  inset: 0;
  border: 3px solid #7b6ef6;
  border-radius: 50%;
  animation: rippleGrow ${dur}s ${timing} infinite;
}

.ripple-ring--2 {
  animation-delay: -0.8s;
  border-color: #3ddda8;
}

@keyframes rippleGrow {
  0% { transform: scale(0); opacity: 1; }
  100% { transform: scale(1); opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .ripple-ring { animation: none !important; opacity: 0.5 !important; }
}`
  },
  {
    id: "chase-spinner",
    name: "Puntos en Persecución (Chase Spinner)",
    category: "Carga",
    defaultDuration: 2.2,
    defaultTiming: "linear",
    timingOptions: ["linear","ease-in-out"],
    properties: "transform (rotate)",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Rotación compuesta con puntos orbitando a velocidades desfasadas sobre capas compositadas.",
    description: "Cuatro esferas luminosas que se persiguen rítmicamente en una pista orbital circular.",
    targetSelector: ".chase-stage",
    previewClass: "shape--chase-spinner",
    htmlSnippet: "<div class=\"chase-stage\">\n  <div class=\"chase-dot\" style=\"--i: 1;\"></div>\n  <div class=\"chase-dot\" style=\"--i: 2;\"></div>\n  <div class=\"chase-dot\" style=\"--i: 3;\"></div>\n  <div class=\"chase-dot\" style=\"--i: 4;\"></div>\n</div>",
    previewHtml: "<div class=\"chase-stage is-playing\" data-motion-target>\n  <div class=\"chase-dot\" style=\"--i: 1;\"></div>\n  <div class=\"chase-dot\" style=\"--i: 2;\"></div>\n  <div class=\"chase-dot\" style=\"--i: 3;\"></div>\n  <div class=\"chase-dot\" style=\"--i: 4;\"></div>\n</div>",
    generateCss: (dur, timing) => `.chase-stage {
  position: relative;
  width: 44px;
  height: 44px;
  animation: chaseRotate ${dur}s ${timing} infinite;
}

.chase-dot {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #7b6ef6;
  animation: chaseScale 1.2s ease-in-out infinite alternate;
  animation-delay: calc(var(--i, 1) * -0.3s);
}

.chase-dot:nth-child(1) { top: 0; left: 50%; transform: translateX(-50%); }
.chase-dot:nth-child(2) { top: 50%; right: 0; transform: translateY(-50%); background: #3ddda8; }
.chase-dot:nth-child(3) { bottom: 0; left: 50%; transform: translateX(-50%); }
.chase-dot:nth-child(4) { top: 50%; left: 0; transform: translateY(-50%); background: #3ddda8; }

@keyframes chaseRotate { to { transform: rotate(360deg); } }
@keyframes chaseScale { from { transform: scale(0.6); } to { transform: scale(1.3); } }

@media (prefers-reduced-motion: reduce) {
  .chase-stage, .chase-dot { animation: none !important; }
}`
  },
  {
    id: "dna-helix",
    name: "Hélice de ADN (DNA Helix Loader)",
    category: "Carga",
    defaultDuration: 1.4,
    defaultTiming: "ease-in-out",
    timingOptions: ["ease-in-out","linear"],
    properties: "transform (translateY, scale)",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Pares de puntos que se cruzan verticalmente en oposición de fase simulando doble hélice.",
    description: "Movimiento helicoidal molecular relajante para cálculos científicos o procesamiento bioinformático.",
    targetSelector: ".helix-loader",
    previewClass: "shape--dna-helix",
    htmlSnippet: "<div class=\"helix-loader\">\n  <div class=\"helix-pair\" style=\"--h: 0;\"><i></i><i></i></div>\n  <div class=\"helix-pair\" style=\"--h: 1;\"><i></i><i></i></div>\n  <div class=\"helix-pair\" style=\"--h: 2;\"><i></i><i></i></div>\n</div>",
    previewHtml: "<div class=\"helix-loader is-playing\" data-motion-target>\n  <div class=\"helix-pair\" style=\"--h: 0;\"><i></i><i></i></div>\n  <div class=\"helix-pair\" style=\"--h: 1;\"><i></i><i></i></div>\n  <div class=\"helix-pair\" style=\"--h: 2;\"><i></i><i></i></div>\n</div>",
    generateCss: (dur, timing) => `.helix-loader {
  display: flex;
  gap: 12px;
  align-items: center;
  height: 40px;
}

.helix-pair {
  position: relative;
  width: 10px;
  height: 36px;
}

.helix-pair i:nth-child(1) {
  position: absolute;
  top: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #7b6ef6;
  animation: helixMove1 ${dur}s ${timing} infinite;
  animation-delay: calc(var(--h, 0) * 0.2s);
}

.helix-pair i:nth-child(2) {
  position: absolute;
  bottom: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #3ddda8;
  animation: helixMove2 ${dur}s ${timing} infinite;
  animation-delay: calc(var(--h, 0) * 0.2s);
}

@keyframes helixMove1 {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(28px) scale(0.6); }
}

@keyframes helixMove2 {
  0%, 100% { transform: translateY(0) scale(0.6); }
  50% { transform: translateY(-28px) scale(1); }
}

@media (prefers-reduced-motion: reduce) {
  .helix-pair i { animation: none !important; }
}`
  },
  {
    id: "liquid-fill",
    name: "Nivel Líquido Ondulante (Wave Fill)",
    category: "Carga",
    defaultDuration: 2.5,
    defaultTiming: "linear",
    timingOptions: ["linear","ease-in-out"],
    properties: "transform (rotate)",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Cuadrado redondeado rotando dentro de un contenedor esférico con overflow: hidden.",
    description: "Depósito circular con superficie líquida que oscila y simula el llenado de un tanque.",
    targetSelector: ".liquid-tank",
    previewClass: "shape--liquid-fill",
    htmlSnippet: "<div class=\"liquid-tank\">\n  <div class=\"liquid-wave\"></div>\n  <span class=\"liquid-percent\">75%</span>\n</div>",
    previewHtml: "<div class=\"liquid-tank is-playing\" data-motion-target>\n  <div class=\"liquid-wave\"></div>\n  <span class=\"liquid-percent\">75%</span>\n</div>",
    generateCss: (dur, timing) => `.liquid-tank {
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #141523;
  border: 2px solid #7b6ef6;
  overflow: hidden;
  display: grid;
  place-items: center;
}

.liquid-wave {
  position: absolute;
  width: 100px;
  height: 100px;
  background: rgba(61, 221, 168, 0.4);
  border-radius: 40%;
  top: -45px;
  animation: liquidSpin ${dur}s ${timing} infinite;
}

.liquid-percent {
  position: relative;
  font-size: 11px;
  font-weight: 800;
  color: #fff;
  z-index: 1;
}

@keyframes liquidSpin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .liquid-wave { animation: none !important; }
}`
  },
  {
    id: "typing-dots",
    name: "Puntos de Escritura Activa (Typing Bubble)",
    category: "Carga",
    defaultDuration: 1.2,
    defaultTiming: "ease-in-out",
    timingOptions: ["ease-in-out","linear"],
    properties: "transform (translateY), opacity",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Tres esferas en burbuja de chat con translateY() desfasadas mediante calc().",
    description: "Burbuja de mensajería con puntos elásticos que indican que un participante o IA está escribiendo.",
    targetSelector: ".typing-bubble",
    previewClass: "shape--typing-dots",
    htmlSnippet: "<div class=\"typing-bubble\">\n  <span class=\"dot-pulse\" style=\"--d: 0;\"></span>\n  <span class=\"dot-pulse\" style=\"--d: 1;\"></span>\n  <span class=\"dot-pulse\" style=\"--d: 2;\"></span>\n</div>",
    previewHtml: "<div class=\"typing-bubble is-playing\" data-motion-target>\n  <span class=\"dot-pulse\" style=\"--d: 0;\"></span>\n  <span class=\"dot-pulse\" style=\"--d: 1;\"></span>\n  <span class=\"dot-pulse\" style=\"--d: 2;\"></span>\n</div>",
    generateCss: (dur, timing) => `.typing-bubble {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 16px;
  border-radius: 999px;
  background: #141523;
  border: 1px solid rgba(123, 110, 246, 0.3);
}

.dot-pulse {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #7b6ef6;
  animation: dotJump ${dur}s ${timing} infinite;
  animation-delay: calc(var(--d, 0) * 0.18s);
}

@keyframes dotJump {
  0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
  40% { transform: translateY(-7px); opacity: 1; background: #3ddda8; }
}

@media (prefers-reduced-motion: reduce) {
  .dot-pulse { animation: none !important; opacity: 1 !important; transform: none !important; }
}`
  }
];

