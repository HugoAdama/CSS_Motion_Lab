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
];
