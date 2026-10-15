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
  {
    id: "tada",
    name: "Celebración / Tada Fanfare",
    category: "Énfasis",
    defaultDuration: 0.85,
    defaultTiming: "ease-in-out",
    timingOptions: ["ease-in-out","ease-out","linear"],
    properties: "transform (scale, rotate)",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Oscilación angular rápida combinada con pulsos de escala ejecutados enteramente en el hilo compositor.",
    description: "Sacudida festiva que combina escala y rotación alternante para comunicar logros o premios.",
    targetSelector: ".tada-badge",
    previewClass: "shape--tada",
    htmlSnippet: "<div class=\"tada-badge\">\n  <span class=\"tada-icon\">&#127881;</span>\n  <strong>¡Nivel Completado!</strong>\n</div>",
    previewHtml: "<div class=\"tada-badge is-playing\" data-motion-target>\n  <span class=\"tada-icon\">&#127881;</span>\n  <strong>¡Nivel Completado!</strong>\n</div>",
    generateCss: (dur, timing) => `.tada-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  border-radius: 999px;
  background: #141523;
  border: 1px solid #ffbd2e;
  color: #ffbd2e;
  animation: tada ${dur}s ${timing} infinite;
}

@keyframes tada {
  0% { transform: scale(1); }
  10%, 20% { transform: scale(0.9) rotate(-3deg); }
  30%, 50%, 70%, 90% { transform: scale(1.1) rotate(3deg); }
  40%, 60%, 80% { transform: scale(1.1) rotate(-3deg); }
  100% { transform: scale(1) rotate(0); }
}

@media (prefers-reduced-motion: reduce) {
  .tada-badge { animation: none !important; transform: none !important; }
}`
  },
  {
    id: "swing",
    name: "Péndulo Oscilante / Swing Pendulum",
    category: "Énfasis",
    defaultDuration: 1.2,
    defaultTiming: "ease-in-out",
    timingOptions: ["ease-in-out","ease-out","linear"],
    properties: "transform (rotate)",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Rotación pendular anclada en top center con decremento progresivo sin causar reflujo de maquetación.",
    description: "Oscilación gravitatoria que imita el balanceo natural de un letrero colgante.",
    targetSelector: ".swing-tag",
    previewClass: "shape--swing",
    htmlSnippet: "<div class=\"swing-tag\">\n  <span class=\"swing-pin\"></span>\n  <span>En Venta</span>\n</div>",
    previewHtml: "<div class=\"swing-tag is-playing\" data-motion-target>\n  <span class=\"swing-pin\"></span>\n  <span>En Venta</span>\n</div>",
    generateCss: (dur, timing) => `.swing-tag {
  transform-origin: top center;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 10px;
  background: #141523;
  border: 1px solid rgba(123, 110, 246, 0.4);
  color: #fff;
  animation: swing ${dur}s ${timing} infinite;
}

@keyframes swing {
  20% { transform: rotate(15deg); }
  40% { transform: rotate(-10deg); }
  60% { transform: rotate(5deg); }
  80% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }
}

@media (prefers-reduced-motion: reduce) {
  .swing-tag { animation: none !important; transform: none !important; }
}`
  },
  {
    id: "wobble",
    name: "Bamboleo Combinado / Wobble Tilt",
    category: "Énfasis",
    defaultDuration: 1,
    defaultTiming: "ease-in-out",
    timingOptions: ["ease-in-out","ease-out","linear"],
    properties: "transform",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Combina desplazamiento en translateX() y rotación contraria en GPU de alto rendimiento.",
    description: "Movimiento de vaivén desequilibrado para llamar la atención en botones de acción o carritos.",
    targetSelector: ".wobble-card",
    previewClass: "shape--wobble",
    htmlSnippet: "<div class=\"wobble-card\">\n  <span>&iexcl;Revisa tu carrito!</span>\n</div>",
    previewHtml: "<div class=\"wobble-card is-playing\" data-motion-target>\n  <span>&iexcl;Revisa tu carrito!</span>\n</div>",
    generateCss: (dur, timing) => `.wobble-card {
  display: inline-block;
  padding: 10px 18px;
  border-radius: 12px;
  background: #141523;
  border: 1px solid rgba(255, 110, 101, 0.4);
  color: #ff6e65;
  font-weight: 700;
  animation: wobble ${dur}s ${timing} infinite;
}

@keyframes wobble {
  0%, 100% { transform: translateX(0%); }
  15% { transform: translateX(-15%) rotate(-5deg); }
  30% { transform: translateX(12%) rotate(3deg); }
  45% { transform: translateX(-8%) rotate(-3deg); }
  60% { transform: translateX(5%) rotate(2deg); }
  75% { transform: translateX(-2%) rotate(-1deg); }
}

@media (prefers-reduced-motion: reduce) {
  .wobble-card { animation: none !important; transform: none !important; }
}`
  },
  {
    id: "vibrate",
    name: "Micro-vibración Háptica (Haptic Buzz)",
    category: "Énfasis",
    defaultDuration: 0.3,
    defaultTiming: "linear",
    timingOptions: ["linear","ease-in-out"],
    properties: "transform",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Oscilación microscópica rápida de 2px en el hilo del compositor gráfico.",
    description: "Vibración de alta frecuencia que simula el motor háptico de un teléfono o aviso crítico.",
    targetSelector: ".vibrate-pill",
    previewClass: "shape--vibrate",
    htmlSnippet: "<div class=\"vibrate-pill\">\n  <span class=\"vibrate-dot\"></span>\n  <strong>Alarma Silenciosa</strong>\n</div>",
    previewHtml: "<div class=\"vibrate-pill is-playing\" data-motion-target>\n  <span class=\"vibrate-dot\"></span>\n  <strong>Alarma Silenciosa</strong>\n</div>",
    generateCss: (dur, timing) => `.vibrate-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 999px;
  background: #141523;
  border: 1px solid rgba(255, 110, 101, 0.5);
  color: #ff6e65;
  animation: vibrateBuzz ${dur}s ${timing} infinite;
}

@keyframes vibrateBuzz {
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
}

@media (prefers-reduced-motion: reduce) {
  .vibrate-pill { animation: none !important; transform: none !important; }
}`
  },
  {
    id: "glitch-shake",
    name: "Sacudida Glitch Cyberpunk (Digital Glitch)",
    category: "Énfasis",
    defaultDuration: 0.8,
    defaultTiming: "steps(2, start)",
    timingOptions: ["steps(2, start)","linear","ease-in-out"],
    properties: "transform, clip-path",
    renderCost: "Repintado / Paint",
    renderCostType: "paint",
    costExplanation: "Saltos discretos con steps() alterando clip-path y desplazamientos horizontales súbitos.",
    description: "Distorsión tecnológica digital abrupta que evoca pantallas CRT o anomalías del sistema.",
    targetSelector: ".glitch-box",
    previewClass: "shape--glitch-shake",
    htmlSnippet: "<div class=\"glitch-box\">\n  <span class=\"glitch-core\">SYSTEM_ERR</span>\n</div>",
    previewHtml: "<div class=\"glitch-box is-playing\" data-motion-target>\n  <span class=\"glitch-core\">SYSTEM_ERR</span>\n</div>",
    generateCss: (dur, timing) => `.glitch-box {
  display: inline-block;
  padding: 8px 18px;
  background: #0f101a;
  border: 1px solid #3ddda8;
  color: #3ddda8;
  font-family: monospace;
  font-weight: 800;
  letter-spacing: 0.1em;
  animation: glitchShake ${dur}s ${timing} infinite;
}

@keyframes glitchShake {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-3px, 1px); }
  40% { transform: translate(3px, -1px); }
  60% { transform: translate(-2px, -2px); }
  80% { transform: translate(2px, 1px); }
}

@media (prefers-reduced-motion: reduce) {
  .glitch-box { animation: none !important; transform: none !important; }
}`
  },
  {
    id: "breathing-glow",
    name: "Respiración Lumínica Suave (Ambient Breathing)",
    category: "Énfasis",
    defaultDuration: 2.8,
    defaultTiming: "ease-in-out",
    timingOptions: ["ease-in-out","linear","ease-out"],
    properties: "box-shadow, transform",
    renderCost: "Composición y Repintado",
    renderCostType: "paint",
    costExplanation: "Expansión sinusoidal suave de resplandor difuso con escala mínima para no estresar el navegador.",
    description: "Ritmo respiratorio zen que infunde vida ambiental a chips de estado o tarjetas de meditación.",
    targetSelector: ".breathing-pill",
    previewClass: "shape--breathing-glow",
    htmlSnippet: "<div class=\"breathing-pill\">\n  <span class=\"breathing-dot\"></span>\n  <span>Modo Enfoque</span>\n</div>",
    previewHtml: "<div class=\"breathing-pill is-playing\" data-motion-target>\n  <span class=\"breathing-dot\"></span>\n  <span>Modo Enfoque</span>\n</div>",
    generateCss: (dur, timing) => `.breathing-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 18px;
  border-radius: 999px;
  background: #141523;
  border: 1px solid rgba(61, 221, 168, 0.4);
  color: #3ddda8;
  animation: breathingGlow ${dur}s ${timing} infinite;
}

@keyframes breathingGlow {
  0%, 100% {
    box-shadow: 0 0 10px rgba(61, 221, 168, 0.2);
    transform: scale(1);
  }
  50% {
    box-shadow: 0 0 25px rgba(61, 221, 168, 0.6);
    transform: scale(1.04);
  }
}

@media (prefers-reduced-motion: reduce) {
  .breathing-pill { animation: none !important; transform: none !important; }
}`
  },
  {
    id: "ring-ping",
    name: "Onda Sonar Concéntrica (Sonar Ping)",
    category: "Énfasis",
    defaultDuration: 1.8,
    defaultTiming: "cubic-bezier(0, 0, 0.2, 1)",
    timingOptions: ["cubic-bezier(0, 0, 0.2, 1)","ease-out","linear"],
    properties: "transform (scale), opacity",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Expansión del pseudo-anillo en transform: scale(2.2) y desvanecimiento a opacity: 0 en GPU.",
    description: "Pulso de sonar náutico expansivo para balizas en vivo, coordenadas o puntos de interés en mapas.",
    targetSelector: ".sonar-node",
    previewClass: "shape--ring-ping",
    htmlSnippet: "<div class=\"sonar-node\">\n  <span class=\"sonar-wave\"></span>\n  <span class=\"sonar-dot\"></span>\n</div>",
    previewHtml: "<div class=\"sonar-node is-playing\" data-motion-target>\n  <span class=\"sonar-wave\"></span>\n  <span class=\"sonar-dot\"></span>\n</div>",
    generateCss: (dur, timing) => `.sonar-node {
  position: relative;
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
}

.sonar-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #ff6e65;
}

.sonar-wave {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: rgba(255, 110, 101, 0.6);
  animation: sonarPing ${dur}s ${timing} infinite;
}

@keyframes sonarPing {
  0% { transform: scale(0.6); opacity: 1; }
  100% { transform: scale(2.4); opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .sonar-wave { animation: none !important; }
}`
  },
  {
    id: "jelly-bounce",
    name: "Gelatina Elástica (Jelly Squash)",
    category: "Énfasis",
    defaultDuration: 0.9,
    defaultTiming: "ease-in-out",
    timingOptions: ["ease-in-out","ease-out","linear"],
    properties: "transform (scaleX, scaleY)",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Deformación asimétrica coordinando scaleX y scaleY conservando el volumen visual total.",
    description: "Efecto gomoso cómico que aplasta y estira el componente como si fuera gelatina o caucho suave.",
    targetSelector: ".jelly-pill",
    previewClass: "shape--jelly-bounce",
    htmlSnippet: "<div class=\"jelly-pill\">\n  <span>&iexcl;Presióname!</span>\n</div>",
    previewHtml: "<div class=\"jelly-pill is-playing\" data-motion-target>\n  <span>&iexcl;Presióname!</span>\n</div>",
    generateCss: (dur, timing) => `.jelly-pill {
  display: inline-block;
  padding: 10px 20px;
  border-radius: 999px;
  background: #7b6ef6;
  color: #fff;
  font-weight: 700;
  animation: jellySquash ${dur}s ${timing} infinite;
  transform-origin: center center;
}

@keyframes jellySquash {
  0%, 100% { transform: scale(1, 1); }
  25% { transform: scale(1.25, 0.75); }
  50% { transform: scale(0.75, 1.25); }
  75% { transform: scale(1.1, 0.9); }
}

@media (prefers-reduced-motion: reduce) {
  .jelly-pill { animation: none !important; transform: none !important; }
}`
  },
  {
    id: "beacon-radar",
    name: "Faro Giratorio (Sweeping Beacon)",
    category: "Énfasis",
    defaultDuration: 2.2,
    defaultTiming: "linear",
    timingOptions: ["linear","ease-in-out"],
    properties: "transform (rotate)",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Giro continuo de un gradiente cónico angular sobre el compositor sin repintado de píxeles.",
    description: "Haz de luz rotatorio de 360 grados como una torre de control o faro de navegación costero.",
    targetSelector: ".beacon-orb",
    previewClass: "shape--beacon-radar",
    htmlSnippet: "<div class=\"beacon-orb\">\n  <div class=\"beacon-sweep\"></div>\n  <div class=\"beacon-core-dot\"></div>\n</div>",
    previewHtml: "<div class=\"beacon-orb is-playing\" data-motion-target>\n  <div class=\"beacon-sweep\"></div>\n  <div class=\"beacon-core-dot\"></div>\n</div>",
    generateCss: (dur, timing) => `.beacon-orb {
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #10111d;
  border: 1px solid rgba(123, 110, 246, 0.3);
  display: grid;
  place-items: center;
  overflow: hidden;
}

.beacon-sweep {
  position: absolute;
  inset: 0;
  background: conic-gradient(from 0deg, transparent 0deg, transparent 270deg, rgba(123, 110, 246, 0.8) 360deg);
  animation: beaconRotate ${dur}s ${timing} infinite;
}

.beacon-core-dot {
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #3ddda8;
  z-index: 1;
}

@keyframes beaconRotate {
  to { transform: rotate(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .beacon-sweep { animation: none !important; }
}`
  },
  {
    id: "spotlight-sweep",
    name: "Barrido de Reflector (Spotlight Scan)",
    category: "Énfasis",
    defaultDuration: 2.4,
    defaultTiming: "ease-in-out",
    timingOptions: ["ease-in-out","linear","ease-out"],
    properties: "transform (translateX)",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Capa diagonal semitransparente que se traslada sobre transform: translateX() en GPU.",
    description: "Haz de luz diagonal que barre periódicamente el componente para evocar novedad o exclusividad.",
    targetSelector: ".spotlight-card",
    previewClass: "shape--spotlight-sweep",
    htmlSnippet: "<div class=\"spotlight-card\">\n  <div class=\"spotlight-beam\"></div>\n  <strong>EDICIÓN ESPECIAL</strong>\n</div>",
    previewHtml: "<div class=\"spotlight-card is-playing\" data-motion-target>\n  <div class=\"spotlight-beam\"></div>\n  <strong>EDICIÓN ESPECIAL</strong>\n</div>",
    generateCss: (dur, timing) => `.spotlight-card {
  position: relative;
  padding: 14px 24px;
  border-radius: 12px;
  background: #141523;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
}

.spotlight-beam {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 40px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.25), transparent);
  transform: skewX(-25deg);
  animation: spotSweep ${dur}s ${timing} infinite;
}

@keyframes spotSweep {
  0% { transform: translateX(-150px) skewX(-25deg); }
  50%, 100% { transform: translateX(250px) skewX(-25deg); }
}

@media (prefers-reduced-motion: reduce) {
  .spotlight-beam { animation: none !important; }
}`
  },
  {
    id: "radar-ping-triple",
    name: "Onda de Radar Concéntrica (Radar Ping)",
    category: "Énfasis",
    defaultDuration: 1.5,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","linear"],
    properties: "transform (scale), opacity",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Anillos circulares generados con transform: scale() continuo sin recálculo de geometría.",
    description: "Sonar de triple halo que pulsa suavemente para destacar estados activos o ubicaciones en vivo.",
    targetSelector: ".radar-ping-cluster",
    previewClass: "shape--radar-ping-triple",
    htmlSnippet: "<div class=\"radar-ping-cluster\">\n  <span class=\"radar-ring r1\"></span>\n  <span class=\"radar-ring r2\"></span>\n  <span class=\"radar-core-dot\"></span>\n</div>",
    previewHtml: "<div class=\"radar-ping-cluster is-playing\" data-motion-target>\n  <span class=\"radar-ring r1\"></span>\n  <span class=\"radar-ring r2\"></span>\n  <span class=\"radar-core-dot\"></span>\n</div>",
    generateCss: (dur, timing) => `.radar-ring {
  position: absolute;
  inset: -8px;
  border-radius: 50%;
  border: 2px solid #7b6ef6;
  animation: radarExpand ${dur}s ${timing} infinite;
}

.radar-ring.r2 {
  animation-delay: calc(${dur}s * 0.4);
}

@keyframes radarExpand {
  0% { transform: scale(0.6); opacity: 0.9; }
  100% { transform: scale(2.2); opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .radar-ring { animation: none !important; opacity: 0.3 !important; }
}`
  },
  {
    id: "neon-outline-glow",
    name: "Resplandor de Neón Pulsante (Neon Glow)",
    category: "Énfasis",
    defaultDuration: 1.2,
    defaultTiming: "ease-in-out",
    timingOptions: ["ease-in-out","linear","cubic-bezier(0.16, 1, 0.3, 1)"],
    properties: "box-shadow, border-color, filter",
    renderCost: "Repintado y Composición",
    renderCostType: "paint",
    costExplanation: "Modulación del radio y dispersión de box-shadow con destellos tipo tubo de neón.",
    description: "Marco fluorescente con parpadeo de voltaje y resplandor cian para destacar elementos VIP.",
    targetSelector: ".neon-glow-card",
    previewClass: "shape--neon-outline-glow",
    htmlSnippet: "<div class=\"neon-glow-card\">\n  <span class=\"neon-glow-text\">NEON PULSE</span>\n</div>",
    previewHtml: "<div class=\"neon-glow-card is-playing\" data-motion-target>\n  <span class=\"neon-glow-text\">NEON PULSE</span>\n</div>",
    generateCss: (dur, timing) => `.neon-glow-card {
  padding: 12px 24px;
  border-radius: 10px;
  background: #08090f;
  border: 1px solid #3ddda8;
  box-shadow: 0 0 14px rgba(61, 221, 168, 0.6);
  animation: neonPulse ${dur}s ${timing} infinite alternate;
}

@keyframes neonPulse {
  0% { box-shadow: 0 0 8px rgba(61, 221, 168, 0.3); border-color: rgba(61, 221, 168, 0.4); }
  100% { box-shadow: 0 0 24px rgba(61, 221, 168, 0.8), inset 0 0 10px rgba(61, 221, 168, 0.3); border-color: #3ddda8; }
}

@media (prefers-reduced-motion: reduce) {
  .neon-glow-card { animation: none !important; }
}`
  },
  {
    id: "magnetic-tilt-hover",
    name: "Inclinación Reactiva (Magnetic Tilt)",
    category: "Énfasis",
    defaultDuration: 0.8,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "transform, box-shadow",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Inclinación angular tridimensional mediante rotateX y rotateY con desplazamiento de sombra.",
    description: "Sensación de respuesta táctil en perspectiva simulando atracción magnética.",
    targetSelector: ".magnetic-tilt-badge",
    previewClass: "shape--magnetic-tilt-hover",
    htmlSnippet: "<div class=\"magnetic-tilt-badge\">\n  <strong>Atracción 3D</strong>\n</div>",
    previewHtml: "<div class=\"magnetic-tilt-badge is-playing\" data-motion-target>\n  <strong>Atracción 3D</strong>\n</div>",
    generateCss: (dur, timing) => `.magnetic-tilt-badge {
  padding: 12px 22px;
  border-radius: 12px;
  background: #141523;
  border: 1px solid rgba(123, 110, 246, 0.4);
  color: #fff;
  font-weight: 700;
  animation: magneticWobble ${dur}s ${timing} infinite alternate;
}

@keyframes magneticWobble {
  0% { transform: perspective(400px) rotateX(10deg) rotateY(-12deg); }
  100% { transform: perspective(400px) rotateX(-10deg) rotateY(12deg); }
}

@media (prefers-reduced-motion: reduce) {
  .magnetic-tilt-badge { animation: none !important; transform: none !important; }
}`
  },
  {
    id: "energy-spark-pulse",
    name: "Chispazo de Energía (Energy Spark)",
    category: "Énfasis",
    defaultDuration: 0.6,
    defaultTiming: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    timingOptions: ["cubic-bezier(0.34, 1.56, 0.64, 1)","ease-out","ease-in-out"],
    properties: "transform, filter",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Contracción breve con sobre-expansión instantánea de escala que simula una descarga.",
    description: "Sacudida enérgica de escala y destello luminoso perfecta para premios, logros o aciertos.",
    targetSelector: ".energy-spark-pill",
    previewClass: "shape--energy-spark-pulse",
    htmlSnippet: "<div class=\"energy-spark-pill\">\n  <span class=\"spark-icon\">&#9733;</span>\n  <strong>¡Nivel Superado!</strong>\n</div>",
    previewHtml: "<div class=\"energy-spark-pill is-playing\" data-motion-target>\n  <span class=\"spark-icon\">&#9733;</span>\n  <strong>¡Nivel Superado!</strong>\n</div>",
    generateCss: (dur, timing) => `.energy-spark-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 18px;
  border-radius: 999px;
  background: #ffbd2e;
  color: #08090f;
  font-weight: 800;
  animation: energySpark ${dur}s ${timing} infinite;
}

@keyframes energySpark {
  0%, 100% { transform: scale(1); filter: brightness(1); }
  30% { transform: scale(0.9); filter: brightness(0.9); }
  50% { transform: scale(1.15); filter: brightness(1.3); }
}

@media (prefers-reduced-motion: reduce) {
  .energy-spark-pill { animation: none !important; }
}`
  },
  {
    id: "pendulum-sway",
    name: "Oscilación de Péndulo (Pendulum Sway)",
    category: "Énfasis",
    defaultDuration: 1.4,
    defaultTiming: "ease-in-out",
    timingOptions: ["ease-in-out","linear","cubic-bezier(0.16, 1, 0.3, 1)"],
    properties: "transform (rotate)",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Rotación armónica simple alrededor del anclaje superior con aceleración por gravedad.",
    description: "Balanceo hipnótico y continuo para insignias colgantes, etiquetas de descuento o campanas.",
    targetSelector: ".pendulum-sway-badge",
    previewClass: "shape--pendulum-sway",
    htmlSnippet: "<div class=\"pendulum-sway-badge\">\n  <span>Oferta Especial</span>\n</div>",
    previewHtml: "<div class=\"pendulum-sway-badge is-playing\" data-motion-target>\n  <span>Oferta Especial</span>\n</div>",
    generateCss: (dur, timing) => `.pendulum-sway-badge {
  display: inline-block;
  padding: 8px 16px;
  border-radius: 8px;
  background: #ff6e65;
  color: #fff;
  font-weight: 700;
  transform-origin: top center;
  animation: pendulumSway ${dur}s ${timing} infinite alternate;
}

@keyframes pendulumSway {
  0% { transform: rotate(14deg); }
  100% { transform: rotate(-14deg); }
}

@media (prefers-reduced-motion: reduce) {
  .pendulum-sway-badge { animation: none !important; transform: none !important; }
}`
  },
  {
    id: "badge-notification-pop",
    name: "Rebote de Notificación (Notification Pop)",
    category: "Énfasis",
    defaultDuration: 0.7,
    defaultTiming: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    timingOptions: ["cubic-bezier(0.34, 1.56, 0.64, 1)","ease-out","ease-in-out"],
    properties: "transform",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Doble ciclo de contracción y expansión elástica sin alterar la cuadrícula.",
    description: "Efecto de salto gelatinoso para alertar al usuario sobre mensajes nuevos o tareas pendientes.",
    targetSelector: ".notify-bubble-box",
    previewClass: "shape--badge-notification-pop",
    htmlSnippet: "<div class=\"notify-bubble-box\">\n  <span class=\"notify-count-badge\">3</span>\n  <span class=\"notify-label-text\">Mensajes nuevos</span>\n</div>",
    previewHtml: "<div class=\"notify-bubble-box is-playing\" data-motion-target>\n  <span class=\"notify-count-badge\">3</span>\n  <span class=\"notify-label-text\">Mensajes nuevos</span>\n</div>",
    generateCss: (dur, timing) => `.notify-count-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #7b6ef6;
  color: #fff;
  font-weight: 800;
  animation: badgePopPulse ${dur}s ${timing} infinite;
}

@keyframes badgePopPulse {
  0%, 100% { transform: scale(1); }
  40% { transform: scale(1.3); }
  60% { transform: scale(0.9); }
}

@media (prefers-reduced-motion: reduce) {
  .notify-count-badge { animation: none !important; }
}`
  },
  {
    id: "outline-travel-beam",
    name: "Haz Perimetral en Recorrido (Outline Travel)",
    category: "Énfasis",
    defaultDuration: 2,
    defaultTiming: "linear",
    timingOptions: ["linear","ease-in-out","cubic-bezier(0.16, 1, 0.3, 1)"],
    properties: "background-position, border-color",
    renderCost: "Repintado y Composición",
    renderCostType: "paint",
    costExplanation: "Gradiente cónico rotado alrededor del borde exterior del contenedor.",
    description: "Línea luminosa que viaja continuamente alrededor del borde exterior creando un efecto vanguardista.",
    targetSelector: ".outline-travel-card",
    previewClass: "shape--outline-travel-beam",
    htmlSnippet: "<div class=\"outline-travel-card\">\n  <strong>Contorno Dinámico</strong>\n</div>",
    previewHtml: "<div class=\"outline-travel-card is-playing\" data-motion-target>\n  <strong>Contorno Dinámico</strong>\n</div>",
    generateCss: (dur, timing) => `.outline-travel-card {
  position: relative;
  padding: 14px 24px;
  border-radius: 12px;
  background: #141523;
  color: #fff;
  font-weight: 700;
  border: 1px solid transparent;
  background-image: linear-gradient(#141523, #141523), linear-gradient(90deg, #7b6ef6, #3ddda8, #7b6ef6);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  background-size: 200% 100%;
  animation: outlineTravel ${dur}s ${timing} infinite;
}

@keyframes outlineTravel {
  0% { background-position: 0% 0%; }
  100% { background-position: 200% 0%; }
}

@media (prefers-reduced-motion: reduce) {
  .outline-travel-card { animation: none !important; }
}`
  },
  {
    id: "heartbeat-double-thump",
    name: "Doble Latido Cardíaco (Double Heartbeat)",
    category: "Énfasis",
    defaultDuration: 1.1,
    defaultTiming: "ease-in-out",
    timingOptions: ["ease-in-out","cubic-bezier(0.34, 1.56, 0.64, 1)","linear"],
    properties: "transform, filter",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Patrón biológico sístole-diástole mediante scale(1.22) y scale(1.1) con pausa intermedia.",
    description: "Latido realista con dos pulsos rítmicos sucesivos para iconos de salud, favoritos o me gusta.",
    targetSelector: ".heartbeat-double-icon",
    previewClass: "shape--heartbeat-double-thump",
    htmlSnippet: "<div class=\"heartbeat-double-icon\">\n  <span class=\"heart-glyph\">&#9829;</span>\n</div>",
    previewHtml: "<div class=\"heartbeat-double-icon is-playing\" data-motion-target>\n  <span class=\"heart-glyph\">&#9829;</span>\n</div>",
    generateCss: (dur, timing) => `.heart-glyph {
  display: inline-block;
  color: #ff6e65;
  font-size: 32px;
  animation: doubleHeartbeat ${dur}s ${timing} infinite;
}

@keyframes doubleHeartbeat {
  0%, 100% { transform: scale(1); }
  14% { transform: scale(1.28); }
  28% { transform: scale(1); }
  42% { transform: scale(1.18); }
  70% { transform: scale(1); }
}

@media (prefers-reduced-motion: reduce) {
  .heart-glyph { animation: none !important; }
}`
  },
  {
    id: "wobble-horizontal-spring",
    name: "Sacudida Horizontal Elástica (Wobble Spring)",
    category: "Énfasis",
    defaultDuration: 0.65,
    defaultTiming: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    timingOptions: ["cubic-bezier(0.34, 1.56, 0.64, 1)","ease-out","ease-in-out"],
    properties: "transform (translateX)",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Oscilación amortiguada en translateX de amplitud decreciente.",
    description: "Vibración horizontal elástica para alertar sobre credenciales incorrectas o campos requeridos.",
    targetSelector: ".wobble-spring-pill",
    previewClass: "shape--wobble-horizontal-spring",
    htmlSnippet: "<div class=\"wobble-spring-pill\">\n  <span>¡Dato Inválido!</span>\n</div>",
    previewHtml: "<div class=\"wobble-spring-pill is-playing\" data-motion-target>\n  <span>¡Dato Inválido!</span>\n</div>",
    generateCss: (dur, timing) => `.wobble-spring-pill {
  padding: 8px 18px;
  border-radius: 999px;
  background: #ff6e65;
  color: #fff;
  font-weight: 700;
  animation: wobbleSpring ${dur}s ${timing} infinite;
}

@keyframes wobbleSpring {
  0%, 100% { transform: translateX(0); }
  15% { transform: translateX(-10px); }
  30% { transform: translateX(8px); }
  45% { transform: translateX(-5px); }
  60% { transform: translateX(3px); }
  75% { transform: translateX(-1px); }
}

@media (prefers-reduced-motion: reduce) {
  .wobble-spring-pill { animation: none !important; }
}`
  },
  {
    id: "aurora-shimmer-glow",
    name: "Reflejo Iridiscente Aurora (Aurora Shimmer)",
    category: "Énfasis",
    defaultDuration: 2.2,
    defaultTiming: "linear",
    timingOptions: ["linear","ease-in-out","cubic-bezier(0.16, 1, 0.3, 1)"],
    properties: "background-position, filter",
    renderCost: "Repintado y Composición",
    renderCostType: "paint",
    costExplanation: "Desplazamiento horizontal de gradiente multicolor con destello reflectivo.",
    description: "Efecto de aurora boreal que barre la superficie con tonalidades violetas, turquesas y corales.",
    targetSelector: ".aurora-glow-box",
    previewClass: "shape--aurora-shimmer-glow",
    htmlSnippet: "<div class=\"aurora-glow-box\">\n  <span>AURORA EDITION</span>\n</div>",
    previewHtml: "<div class=\"aurora-glow-box is-playing\" data-motion-target>\n  <span>AURORA EDITION</span>\n</div>",
    generateCss: (dur, timing) => `.aurora-glow-box {
  padding: 12px 24px;
  border-radius: 12px;
  color: #fff;
  font-weight: 800;
  letter-spacing: 0.05em;
  background: linear-gradient(120deg, #7b6ef6, #3ddda8, #ff6e65, #7b6ef6);
  background-size: 300% 100%;
  animation: auroraShimmer ${dur}s ${timing} infinite;
}

@keyframes auroraShimmer {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}

@media (prefers-reduced-motion: reduce) {
  .aurora-glow-box { animation: none !important; }
}`
  }
];
