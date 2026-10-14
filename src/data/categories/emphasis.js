// Catálogo de animaciones: Énfasis (10 ejemplos)

export const emphasisAnimations = [
  {
    id: "bounce",
    name: "Bounce",
    category: "Énfasis",
    defaultDuration: 0.85,
    defaultTiming: "cubic-bezier(0.28, 0.84, 0.42, 1)",
    timingOptions: ["cubic-bezier(0.28, 0.84, 0.42, 1)","ease-out","ease-in-out","linear"],
    properties: "transform",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Anima translateY y scaleY sobre el compositor sin alterar la posición de los elementos adyacentes en el DOM.",
    description: "Rebote elástico en el eje vertical para capturar la atención en alertas o notificaciones.",
    targetSelector: ".bell-badge",
    previewClass: "shape--bounce",
    htmlSnippet: "<div class=\"bell-badge\">\n  <div class=\"bell-icon\">Aviso</div>\n  <span class=\"bell-count\">3</span>\n</div>",
    previewHtml: "<div class=\"bell-badge is-playing\" data-motion-target>\n  <div class=\"bell-icon\">\n    <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9\"></path><path d=\"M13.73 21a2 2 0 0 1-3.46 0\"></path></svg>\n  </div>\n  <span class=\"bell-count\">3</span>\n</div>",
    generateCss: (dur, timing) => `.bell-badge {
  display: inline-flex;
  animation: bounce ${dur}s ${timing} both;
  transform-origin: center bottom;
}

@keyframes bounce {
  0% { transform: translateY(0); }
  25% { transform: translateY(-22px) scaleY(1.05); }
  50% { transform: translateY(0) scaleY(0.95); }
  75% { transform: translateY(-9px) scaleY(1.02); }
  100% { transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .bell-badge {
    animation: none !important;
    transform: none !important;
  }
}`
  },
  {
    id: "pulse",
    name: "Pulse",
    category: "Énfasis",
    defaultDuration: 1.6,
    defaultTiming: "ease-in-out",
    timingOptions: ["ease-in-out","ease-out","linear","cubic-bezier(0.16, 1, 0.3, 1)"],
    properties: "transform, box-shadow",
    renderCost: "Composición y Repintado",
    renderCostType: "paint",
    costExplanation: "transform escala el núcleo de forma económica, pero animar el radio de box-shadow requiere rasterizado adicional (paint) en cada ciclo.",
    description: "Efecto de latido continuo con onda expansiva para estados activos o transmisiones en directo.",
    targetSelector: ".status-beacon",
    previewClass: "shape--pulse",
    htmlSnippet: "<div class=\"status-beacon\">\n  <span class=\"beacon-ring\"></span>\n  <span class=\"beacon-dot\"></span>\n  <span class=\"beacon-label\">SISTEMA ONLINE</span>\n</div>",
    previewHtml: "<div class=\"status-beacon is-playing\" data-motion-target>\n  <span class=\"beacon-ring\"></span>\n  <span class=\"beacon-dot\"></span>\n  <span class=\"beacon-label\">SISTEMA ONLINE</span>\n</div>",
    generateCss: (dur, timing) => `.status-beacon {
  animation: pulse ${dur}s ${timing} infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(123, 110, 246, 0.4);
  }
  50% {
    transform: scale(1.06);
    box-shadow: 0 0 0 14px rgba(123, 110, 246, 0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .status-beacon {
    animation: none !important;
    transform: none !important;
    box-shadow: 0 0 0 2px rgba(123, 110, 246, 0.5) !important;
  }
}`
  },
  {
    id: "shake",
    name: "Shake",
    category: "Énfasis",
    defaultDuration: 0.5,
    defaultTiming: "ease-in-out",
    timingOptions: ["ease-in-out","linear","ease-out","cubic-bezier(0.16, 1, 0.3, 1)"],
    properties: "transform",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Oscila translateX sin desplazar ni afectar el flujo del documento.",
    description: "Oscilación horizontal enérgica para comunicar accesos denegados o validaciones erróneas.",
    targetSelector: ".input-alert",
    previewClass: "shape--shake",
    htmlSnippet: "<div class=\"input-alert\">\n  <span class=\"alert-icon\">!</span>\n  <span class=\"alert-text\">Error de acceso</span>\n</div>",
    previewHtml: "<div class=\"input-alert is-playing\" data-motion-target>\n  <span class=\"alert-icon\">\n    <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z\"></path><line x1=\"12\" y1=\"9\" x2=\"12\" y2=\"13\"></line><line x1=\"12\" y1=\"17\" x2=\"12.01\" y2=\"17\"></line></svg>\n  </span>\n  <span class=\"alert-text\">Error de acceso</span>\n</div>",
    generateCss: (dur, timing) => `.input-alert {
  animation: shake ${dur}s ${timing} both;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-8px); }
  40% { transform: translateX(8px); }
  60% { transform: translateX(-5px); }
  80% { transform: translateX(5px); }
}

@media (prefers-reduced-motion: reduce) {
  .input-alert {
    animation: none !important;
    transform: none !important;
  }
}`
  },
  {
    id: "border-beam",
    name: "Borde Radiante (Conic Beam)",
    category: "Énfasis",
    defaultDuration: 3,
    defaultTiming: "linear",
    timingOptions: ["linear","ease-in-out","ease-out"],
    properties: "transform (rotate)",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Gira un plano degradado cónico mediante rotate() detrás de una máscara interior, generando el haz de luz sin repintar bordes.",
    description: "Haz luminoso continuo que recorre el perímetro de la tarjeta para destacar elementos premium o planes destacados.",
    targetSelector: ".radiant-card",
    previewClass: "shape--border-beam",
    htmlSnippet: "<div class=\"radiant-card\">\n  <div class=\"radiant-beam\"></div>\n  <div class=\"radiant-body\">\n    <span class=\"radiant-badge\">DESTACADO</span>\n    <strong>Plan Ilimitado</strong>\n    <p>Rendimiento acelerado y soporte técnico.</p>\n  </div>\n</div>",
    previewHtml: "<div class=\"radiant-card is-playing\" data-motion-target>\n  <div class=\"radiant-beam\"></div>\n  <div class=\"radiant-body\">\n    <span class=\"radiant-badge\">DESTACADO</span>\n    <strong>Plan Ilimitado</strong>\n    <p>Rendimiento acelerado y soporte técnico.</p>\n  </div>\n</div>",
    generateCss: (dur, timing) => `.radiant-card {
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  padding: 1px;
}

.radiant-beam {
  position: absolute;
  inset: -150%;
  background: conic-gradient(
    from 0deg,
    transparent 0deg,
    transparent 280deg,
    #7b6ef6 320deg,
    #3ddda8 360deg
  );
  animation: rotateBeam ${dur}s ${timing} infinite;
}

.radiant-body {
  position: relative;
  background: #10111d;
  border-radius: 13px;
  padding: 14px 18px;
  z-index: 1;
}

@keyframes rotateBeam {
  to { transform: rotate(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .radiant-beam {
    animation: none !important;
    transform: none !important;
  }
}`
  },
  {
    id: "heartbeat",
    name: "Latido / Heartbeat",
    category: "Énfasis",
    defaultDuration: 1.3,
    defaultTiming: "ease-in-out",
    timingOptions: ["ease-in-out","ease-out","linear"],
    properties: "transform (scale)",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Doble pulso sincopado con scale() que simula sístole y diástole directamente en el hilo compositor.",
    description: "Doble pulsación rítmica para llamadas a la acción críticas o contadores de favoritos.",
    targetSelector: ".heart-badge",
    previewClass: "shape--heartbeat",
    htmlSnippet: "<div class=\"heart-badge\">\n  <span class=\"heart-icon\">&hearts;</span>\n  <strong>Llamada en Espera</strong>\n</div>",
    previewHtml: "<div class=\"heart-badge is-playing\" data-motion-target>\n  <span class=\"heart-icon\">&hearts;</span>\n  <strong>Llamada en Espera</strong>\n</div>",
    generateCss: (dur, timing) => `.heart-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 999px;
  background: rgba(255, 110, 101, 0.12);
  border: 1px solid rgba(255, 110, 101, 0.4);
  color: #ff6e65;
  animation: heartbeat ${dur}s ${timing} infinite;
}

@keyframes heartbeat {
  0% { transform: scale(1); }
  14% { transform: scale(1.18); }
  28% { transform: scale(1); }
  42% { transform: scale(1.14); }
  70% { transform: scale(1); }
}

@media (prefers-reduced-motion: reduce) {
  .heart-badge { animation: none !important; transform: none !important; }
}`
  },
  {
    id: "flash",
    name: "Destello de Alerta / Flash",
    category: "Énfasis",
    defaultDuration: 0.9,
    defaultTiming: "ease-out",
    timingOptions: ["ease-out","ease-in-out","linear"],
    properties: "opacity",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Parpadeo rápido exclusivamente de opacidad, ligero y económico para avisos en tiempo real.",
    description: "Destellos intermitentes rápidos para advertencias de conexión o batería baja.",
    targetSelector: ".flash-pill",
    previewClass: "shape--flash",
    htmlSnippet: "<div class=\"flash-pill\">\n  <span class=\"flash-dot\"></span>\n  <span>Grabando en vivo</span>\n</div>",
    previewHtml: "<div class=\"flash-pill is-playing\" data-motion-target>\n  <span class=\"flash-dot\"></span>\n  <span>Grabando en vivo</span>\n</div>",
    generateCss: (dur, timing) => `.flash-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 999px;
  background: #141523;
  border: 1px solid rgba(255, 189, 46, 0.4);
  color: #ffbd2e;
  animation: flash ${dur}s ${timing} infinite;
}

@keyframes flash {
  0%, 50%, 100% { opacity: 1; }
  25%, 75% { opacity: 0.2; }
}

@media (prefers-reduced-motion: reduce) {
  .flash-pill { animation: none !important; opacity: 1 !important; }
}`
  },
  {
    id: "jiggle",
    name: "Deformación Elástica / Jiggle Wobble",
    category: "Énfasis",
    defaultDuration: 0.8,
    defaultTiming: "ease-in-out",
    timingOptions: ["ease-in-out","ease-out","linear"],
    properties: "transform (skew, rotate)",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Modulación de skewX() y rotate() que distorsiona los ángulos sin recalcular dimensiones físicas.",
    description: "Efecto gelatinoso divertido para iconos arrastrables o elementos en modo edición.",
    targetSelector: ".wobble-item",
    previewClass: "shape--jiggle",
    htmlSnippet: "<div class=\"wobble-item\">\n  <span>Modo Edición</span>\n</div>",
    previewHtml: "<div class=\"wobble-item is-playing\" data-motion-target>\n  <span>Modo Edición</span>\n</div>",
    generateCss: (dur, timing) => `.wobble-item {
  display: inline-block;
  padding: 10px 18px;
  border-radius: 12px;
  background: rgba(123, 110, 246, 0.15);
  border: 1px solid rgba(123, 110, 246, 0.4);
  animation: jiggle ${dur}s ${timing} infinite;
  transform-origin: center center;
}

@keyframes jiggle {
  0%, 100% { transform: rotate(0deg) skew(0deg); }
  20% { transform: rotate(-5deg) skew(-3deg); }
  40% { transform: rotate(4deg) skew(2deg); }
  60% { transform: rotate(-3deg) skew(-1deg); }
  80% { transform: rotate(2deg) skew(1deg); }
}

@media (prefers-reduced-motion: reduce) {
  .wobble-item { animation: none !important; transform: none !important; }
}`
  },
  {
    id: "glow-pulse",
    name: "Aura de Neón / Glow Pulse",
    category: "Énfasis",
    defaultDuration: 2,
    defaultTiming: "ease-in-out",
    timingOptions: ["ease-in-out","ease-out","linear"],
    properties: "box-shadow",
    renderCost: "Repintado / Paint (sombra)",
    renderCostType: "paint",
    costExplanation: "Expande y contrae el radio de desenfoque de sombras superpuestas con box-shadow en cada ciclo de pintado.",
    description: "Respiración luminosa con halo de neón para botones de compra o elementos prémium.",
    targetSelector: ".glow-btn",
    previewClass: "shape--glow-pulse",
    htmlSnippet: "<button class=\"glow-btn\" type=\"button\">\n  <span>Suscribirse Ahora</span>\n</button>",
    previewHtml: "<button class=\"glow-btn is-playing\" type=\"button\" data-motion-target>\n  <span>Suscribirse Ahora</span>\n</button>",
    generateCss: (dur, timing) => `.glow-btn {
  padding: 10px 20px;
  border-radius: 12px;
  background: #7b6ef6;
  color: #fff;
  border: none;
  font-weight: 700;
  animation: glowPulse ${dur}s ${timing} infinite;
}

@keyframes glowPulse {
  0%, 100% {
    box-shadow: 0 0 15px rgba(123, 110, 246, 0.4);
  }
  50% {
    box-shadow: 0 0 30px rgba(123, 110, 246, 0.85), 0 0 10px rgba(61, 221, 168, 0.5);
  }
}

@media (prefers-reduced-motion: reduce) {
  .glow-btn { animation: none !important; box-shadow: 0 0 10px rgba(123, 110, 246, 0.4) !important; }
}`
  },
  {
    id: "rubber-band",
    name: "Goma Elástica / Rubber Band",
    category: "Énfasis",
    defaultDuration: 0.9,
    defaultTiming: "ease-out",
    timingOptions: ["ease-out","ease-in-out","linear"],
    properties: "transform (scale3d)",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Estira el eje X mientras aplana el eje Y (conservando el volumen visual) mediante scale3d en GPU.",
    description: "Efecto de compresión y estiramiento cómico al recibir una interacción importante.",
    targetSelector: ".elastic-tag",
    previewClass: "shape--rubber-band",
    htmlSnippet: "<div class=\"elastic-tag\">\n  <strong>OFERTA FLASH</strong>\n</div>",
    previewHtml: "<div class=\"elastic-tag is-playing\" data-motion-target>\n  <strong>OFERTA FLASH</strong>\n</div>",
    generateCss: (dur, timing) => `.elastic-tag {
  display: inline-block;
  padding: 8px 16px;
  border-radius: 999px;
  background: #141523;
  border: 1px solid #7b6ef6;
  color: #7b6ef6;
  animation: rubberBand ${dur}s ${timing} both;
}

@keyframes rubberBand {
  0% { transform: scale3d(1, 1, 1); }
  30% { transform: scale3d(1.25, 0.75, 1); }
  40% { transform: scale3d(0.75, 1.25, 1); }
  50% { transform: scale3d(1.15, 0.85, 1); }
  65% { transform: scale3d(0.95, 1.05, 1); }
  75% { transform: scale3d(1.05, 0.95, 1); }
  100% { transform: scale3d(1, 1, 1); }
}

@media (prefers-reduced-motion: reduce) {
  .elastic-tag { animation: none !important; transform: none !important; }
}`
  },
  {
    id: "float",
    name: "Flotación Continua / Soft Float",
    category: "Énfasis",
    defaultDuration: 3,
    defaultTiming: "ease-in-out",
    timingOptions: ["ease-in-out","linear","ease-out"],
    properties: "transform (translateY)",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Movimiento armónico simple sinusoidal vertical ejecutado enteramente en el compositor.",
    description: "Levitación orgánica relajante para tarjetas héroe, avatares flotantes o nubes informativas.",
    targetSelector: ".floating-orb",
    previewClass: "shape--float",
    htmlSnippet: "<div class=\"floating-orb\">\n  <span class=\"orb-icon\">&oplus;</span>\n  <span>Servicio Activo</span>\n</div>",
    previewHtml: "<div class=\"floating-orb is-playing\" data-motion-target>\n  <span class=\"orb-icon\">&oplus;</span>\n  <span>Servicio Activo</span>\n</div>",
    generateCss: (dur, timing) => `.floating-orb {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 12px;
  background: #141523;
  border: 1px solid rgba(123, 110, 246, 0.3);
  animation: float ${dur}s ${timing} infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .floating-orb { animation: none !important; transform: none !important; }
}`
  },
];
