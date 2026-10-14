// Catálogo de animaciones: Interacción (10 ejemplos)

export const interactionAnimations = [
  {
    id: "hover-lift",
    name: "Hover lift",
    category: "Interacción",
    defaultDuration: 0.24,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out","linear"],
    properties: "transform, box-shadow",
    renderCost: "Composición y Repintado",
    renderCostType: "paint",
    costExplanation: "Se activa solo ante interacción (hover o focus-visible), combinando elevación por transform y proyección de sombra.",
    description: "Elevación tridimensional con proyección de sombra acentuada ante el puntero o navegación por teclado.",
    targetSelector: ".card-interactive",
    previewClass: "shape--hover-lift",
    htmlSnippet: "<div class=\"card-interactive\" tabindex=\"0\">\n  <strong>Pasa el cursor</strong>\n  <small>o presiona Tab</small>\n</div>",
    previewHtml: "<div class=\"card-interactive is-playing\" tabindex=\"0\" data-motion-target>\n  <div class=\"card-glow\"></div>\n  <span class=\"card-icon\">\n    <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><polygon points=\"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2\"></polygon></svg>\n  </span>\n  <strong>Pasa el cursor</strong>\n  <small>o presiona Tab</small>\n</div>",
    generateCss: (dur, timing) => `.card-interactive {
  transition:
    transform ${dur}s ${timing},
    box-shadow ${dur}s ${timing};
}

.card-interactive:hover,
.card-interactive:focus-visible {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 35px -8px rgba(123, 110, 246, 0.3);
}

@media (prefers-reduced-motion: reduce) {
  .card-interactive {
    transition: none !important;
    transform: none !important;
    outline: 2px solid #7b6ef6 !important;
  }
}`
  },
  {
    id: "flip-card",
    name: "Tarjeta 3D Flip",
    category: "Interacción",
    defaultDuration: 0.6,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "transform (rotateY)",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Utiliza perspective: 1000px y rotateY(180deg) con transform-style: preserve-3d para realizar una rotación espacial fluida.",
    description: "Giro tridimensional que revela información adicional en el reverso al pasar el cursor, presionar Tab o hacer clic.",
    targetSelector: ".flip-inner",
    previewClass: "shape--flip-card",
    htmlSnippet: "<div class=\"flip-wrapper\" tabindex=\"0\">\n  <div class=\"flip-inner\">\n    <div class=\"flip-face flip-front\">\n      <span class=\"flip-tag\">Frente</span>\n      <strong>Pase Digital</strong>\n      <small>Pasa el cursor o presiona Tab</small>\n    </div>\n    <div class=\"flip-face flip-back\">\n      <span class=\"flip-tag flip-tag--alt\">Reverso</span>\n      <strong>Código de Acceso</strong>\n      <code class=\"flip-code\">#CSS-8902</code>\n    </div>\n  </div>\n</div>",
    previewHtml: "<div class=\"flip-wrapper\" tabindex=\"0\" data-motion-target data-flip-card-widget>\n  <div class=\"flip-inner is-playing\">\n    <div class=\"flip-face flip-front\">\n      <span class=\"flip-tag\">Frente</span>\n      <strong>Pase Digital</strong>\n      <small>Pasa el cursor o presiona Tab</small>\n    </div>\n    <div class=\"flip-face flip-back\">\n      <span class=\"flip-tag flip-tag--alt\">Reverso</span>\n      <strong>Código de Acceso</strong>\n      <code class=\"flip-code\">#CSS-8902</code>\n    </div>\n  </div>\n</div>",
    generateCss: (dur, timing) => `.flip-wrapper {
  perspective: 1000px;
  width: 220px;
  height: 110px;
  cursor: pointer;
}

.flip-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform ${dur}s ${timing};
  transform-style: preserve-3d;
}

.flip-wrapper:hover .flip-inner,
.flip-wrapper:focus-visible .flip-inner,
.flip-wrapper.is-flipped .flip-inner {
  transform: rotateY(180deg);
}

.flip-face {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px;
}

.flip-front {
  background: #141523;
  border: 1px solid rgba(123, 110, 246, 0.3);
}

.flip-back {
  background: #101a2b;
  border: 1px solid rgba(61, 221, 168, 0.3);
  transform: rotateY(180deg);
}

@media (prefers-reduced-motion: reduce) {
  .flip-inner {
    transition: none !important;
  }
}`
  },
  {
    id: "button-press",
    name: "Pulsación Táctil con Rebote",
    category: "Interacción",
    defaultDuration: 0.18,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "transform (scale)",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Respuesta háptica al presionar :active con scale(0.96) que rebota con resorte al soltar.",
    description: "Micro-interacción táctil que comprime el botón simulando un interruptor físico.",
    targetSelector: ".tactile-btn",
    previewClass: "shape--button-press",
    htmlSnippet: "<button class=\"tactile-btn\" type=\"button\">\n  <span>Haz clic aquí</span>\n</button>",
    previewHtml: "<button class=\"tactile-btn is-playing\" type=\"button\" data-motion-target>\n  <span>Haz clic aquí</span>\n</button>",
    generateCss: (dur, timing) => `.tactile-btn {
  padding: 10px 22px;
  border-radius: 12px;
  background: #7b6ef6;
  color: #fff;
  border: none;
  font-weight: 700;
  cursor: pointer;
  transition: transform ${dur}s ${timing}, box-shadow ${dur}s ${timing};
}

.tactile-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(123, 110, 246, 0.4);
}

.tactile-btn:active {
  transform: scale(0.94) translateY(1px);
  box-shadow: 0 2px 8px rgba(123, 110, 246, 0.3);
}

@media (prefers-reduced-motion: reduce) {
  .tactile-btn { transition: none !important; transform: none !important; }
}`
  },
  {
    id: "magnetic-glow",
    name: "Glow Magnético / Magnetic Glow",
    category: "Interacción",
    defaultDuration: 0.35,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "opacity, transform",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Foco radial difuso posicionado absolutamente que cobra opacidad ante :hover en el hilo compositor.",
    description: "Iluminación focal que aparece bajo el puntero dentro de la tarjeta al aproximarse.",
    targetSelector: ".magnetic-card",
    previewClass: "shape--magnetic-glow",
    htmlSnippet: "<div class=\"magnetic-card\" tabindex=\"0\">\n  <div class=\"magnetic-aura\"></div>\n  <div class=\"magnetic-inner\">\n    <strong>Tarjeta Interactiva</strong>\n    <p>Iluminación sutil al pasar</p>\n  </div>\n</div>",
    previewHtml: "<div class=\"magnetic-card is-playing\" tabindex=\"0\" data-motion-target>\n  <div class=\"magnetic-aura\"></div>\n  <div class=\"magnetic-inner\">\n    <strong>Tarjeta Interactiva</strong>\n    <p>Iluminación sutil al pasar</p>\n  </div>\n</div>",
    generateCss: (dur, timing) => `.magnetic-card {
  position: relative;
  overflow: hidden;
  border-radius: 14px;
  background: #141523;
  border: 1px solid rgba(123, 110, 246, 0.25);
  padding: 14px 18px;
  cursor: pointer;
}

.magnetic-aura {
  position: absolute;
  top: -20px;
  left: 50%;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(123, 110, 246, 0.45) 0%, transparent 70%);
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity ${dur}s ${timing};
}

.magnetic-card:hover .magnetic-aura {
  opacity: 1;
}

@media (prefers-reduced-motion: reduce) {
  .magnetic-aura { transition: none !important; }
}`
  },
  {
    id: "ripple-effect",
    name: "Onda Radial / Click Ripple",
    category: "Interacción",
    defaultDuration: 0.6,
    defaultTiming: "ease-out",
    timingOptions: ["ease-out","ease-in-out","linear"],
    properties: "transform (scale), opacity",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Expansión de onda circular mediante scale(0) a scale(2.5) con decremento progresivo de opacidad.",
    description: "Efecto de onda expansiva al hacer clic sobre botones inspirada en Material Design.",
    targetSelector: ".ripple-btn",
    previewClass: "shape--ripple-effect",
    htmlSnippet: "<button class=\"ripple-btn\" type=\"button\">\n  <span class=\"ripple-circle\"></span>\n  <span>Confirmar Envío</span>\n</button>",
    previewHtml: "<button class=\"ripple-btn is-playing\" type=\"button\" data-motion-target>\n  <span class=\"ripple-circle\"></span>\n  <span>Confirmar Envío</span>\n</button>",
    generateCss: (dur, timing) => `.ripple-btn {
  position: relative;
  overflow: hidden;
  padding: 10px 22px;
  border-radius: 12px;
  background: #7b6ef6;
  color: #fff;
  border: none;
  font-weight: 700;
  cursor: pointer;
}

.ripple-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  transform: translate(-50%, -50%) scale(0);
  animation: rippleSpread ${dur}s ${timing} infinite;
}

@keyframes rippleSpread {
  0% { transform: translate(-50%, -50%) scale(0); opacity: 0.8; }
  100% { transform: translate(-50%, -50%) scale(3.5); opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .ripple-circle { animation: none !important; display: none !important; }
}`
  },
  {
    id: "tilt-card",
    name: "Inclinación 3D / Tilt Card",
    category: "Interacción",
    defaultDuration: 0.35,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "transform (rotateX, rotateY)",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Rotación angular en dos ejes combinados con perspectiva tridimensional sin recalcular layout.",
    description: "Efecto holográfico de inclinación espacial al pasar el cursor sobre la tarjeta.",
    targetSelector: ".tilt-box",
    previewClass: "shape--tilt-card",
    htmlSnippet: "<div class=\"tilt-box\" tabindex=\"0\">\n  <div class=\"tilt-glare\"></div>\n  <strong>Tarjeta 3D Parallax</strong>\n  <small>Pasa el puntero sobre los bordes</small>\n</div>",
    previewHtml: "<div class=\"tilt-box is-playing\" tabindex=\"0\" data-motion-target>\n  <div class=\"tilt-glare\"></div>\n  <strong>Tarjeta 3D Parallax</strong>\n  <small>Pasa el puntero sobre los bordes</small>\n</div>",
    generateCss: (dur, timing) => `.tilt-box {
  perspective: 800px;
  padding: 14px 20px;
  border-radius: 14px;
  background: #141523;
  border: 1px solid rgba(123, 110, 246, 0.3);
  transition: transform ${dur}s ${timing};
  transform-style: preserve-3d;
  cursor: pointer;
}

.tilt-box:hover {
  transform: perspective(800px) rotateX(12deg) rotateY(-10deg) scale(1.03);
}

@media (prefers-reduced-motion: reduce) {
  .tilt-box { transition: none !important; transform: none !important; }
}`
  },
  {
    id: "toggle-switch",
    name: "Interruptor Switch Fluido",
    category: "Interacción",
    defaultDuration: 0.3,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "transform (translateX), background-color",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "El pomo se traslada con translateX() mientras la base interpola color de fondo suavemente.",
    description: "Interruptor basculante interactivo con rebote suave de parada para opciones activables.",
    targetSelector: ".switch-shell",
    previewClass: "shape--toggle-switch",
    htmlSnippet: "<label class=\"switch-shell\">\n  <input type=\"checkbox\" class=\"switch-input\" checked />\n  <span class=\"switch-track\">\n    <span class=\"switch-thumb\"></span>\n  </span>\n</label>",
    previewHtml: "<label class=\"switch-shell is-playing\" data-motion-target>\n  <input type=\"checkbox\" class=\"switch-input\" checked />\n  <span class=\"switch-track\">\n    <span class=\"switch-thumb\"></span>\n  </span>\n</label>",
    generateCss: (dur, timing) => `.switch-shell {
  display: inline-flex;
  cursor: pointer;
}

.switch-input { display: none; }

.switch-track {
  width: 52px;
  height: 28px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.15);
  padding: 2px;
  transition: background-color ${dur}s ${timing};
}

.switch-thumb {
  display: block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #fff;
  transition: transform ${dur}s ${timing};
}

.switch-input:checked + .switch-track {
  background: #3ddda8;
}

.switch-input:checked + .switch-track .switch-thumb {
  transform: translateX(24px);
}

@media (prefers-reduced-motion: reduce) {
  .switch-track, .switch-thumb { transition: none !important; }
}`
  },
  {
    id: "fab-expand",
    name: "Botón Flotante Expansible (FAB)",
    category: "Interacción",
    defaultDuration: 0.35,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "transform (rotate, translateY)",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "El botón principal rota 45 grados mientras las opciones satélite escalan en cascada.",
    description: "Botón de acción circular que rota y despliega opciones secundarias ordenadas.",
    targetSelector: ".fab-cluster",
    previewClass: "shape--fab-expand",
    htmlSnippet: "<div class=\"fab-cluster\">\n  <div class=\"fab-action-items\">\n    <div class=\"fab-mini fab-mini--1\">A</div>\n    <div class=\"fab-mini fab-mini--2\">B</div>\n  </div>\n  <button class=\"fab-trigger\" type=\"button\">+</button>\n</div>",
    previewHtml: "<div class=\"fab-cluster is-playing\" data-motion-target>\n  <div class=\"fab-action-items\">\n    <div class=\"fab-mini fab-mini--1\">A</div>\n    <div class=\"fab-mini fab-mini--2\">B</div>\n  </div>\n  <button class=\"fab-trigger\" type=\"button\">+</button>\n</div>",
    generateCss: (dur, timing) => `.fab-cluster {
  position: relative;
  width: 50px;
  height: 50px;
}

.fab-trigger {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #7b6ef6;
  color: #fff;
  font-size: 24px;
  border: none;
  cursor: pointer;
  transition: transform ${dur}s ${timing};
}

.fab-cluster:hover .fab-trigger {
  transform: rotate(45deg);
}

.fab-action-items {
  position: absolute;
  bottom: 60px;
  left: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  opacity: 0;
  pointer-events: none;
  transform: translateY(12px);
  transition: opacity ${dur}s ${timing}, transform ${dur}s ${timing};
}

.fab-cluster:hover .fab-action-items {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}

.fab-mini {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #141523;
  border: 1px solid #7b6ef6;
  display: grid;
  place-items: center;
  font-size: 11px;
}

@media (prefers-reduced-motion: reduce) {
  .fab-trigger, .fab-action-items { transition: none !important; }
}`
  },
  {
    id: "like-pop",
    name: "Pop de Confirmación / Like Pop",
    category: "Interacción",
    defaultDuration: 0.5,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "transform (scale)",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Expansión con compresión scale(0) a scale(1.3) a scale(1) exclusivamente sobre transform.",
    description: "Explosión elástica alegre al pulsar botones de Me gusta, favoritos o añadir a biblioteca.",
    targetSelector: ".like-heart-btn",
    previewClass: "shape--like-pop",
    htmlSnippet: "<button class=\"like-heart-btn\" type=\"button\">\n  <span class=\"like-heart-glyph\">&hearts;</span>\n  <span>Me gusta</span>\n</button>",
    previewHtml: "<button class=\"like-heart-btn is-playing\" type=\"button\" data-motion-target>\n  <span class=\"like-heart-glyph\">&hearts;</span>\n  <span>Me gusta</span>\n</button>",
    generateCss: (dur, timing) => `.like-heart-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 999px;
  background: rgba(255, 110, 101, 0.12);
  border: 1px solid rgba(255, 110, 101, 0.4);
  color: #ff6e65;
  cursor: pointer;
  font-weight: 700;
}

.like-heart-glyph {
  font-size: 16px;
  animation: heartPop ${dur}s ${timing} both;
}

@keyframes heartPop {
  0% { transform: scale(0.2); }
  50% { transform: scale(1.4); }
  100% { transform: scale(1); }
}

@media (prefers-reduced-motion: reduce) {
  .like-heart-glyph { animation: none !important; transform: none !important; }
}`
  },
  {
    id: "border-draw",
    name: "Trazado de Contorno / Border Trace",
    category: "Interacción",
    defaultDuration: 0.4,
    defaultTiming: "ease-out",
    timingOptions: ["ease-out","ease-in-out","linear"],
    properties: "clip-path",
    renderCost: "Repintado / Paint",
    renderCostType: "paint",
    costExplanation: "Dibuja el perímetro mediante transición en clip-path de un borde exterior decorativo.",
    description: "Efecto de lápiz digital donde el contorno de la caja se dibuja suavemente ante el cursor.",
    targetSelector: ".trace-card",
    previewClass: "shape--border-draw",
    htmlSnippet: "<div class=\"trace-card\" tabindex=\"0\">\n  <span class=\"trace-line\"></span>\n  <strong>Explorar Documentación</strong>\n</div>",
    previewHtml: "<div class=\"trace-card is-playing\" tabindex=\"0\" data-motion-target>\n  <span class=\"trace-line\"></span>\n  <strong>Explorar Documentación</strong>\n</div>",
    generateCss: (dur, timing) => `.trace-card {
  position: relative;
  padding: 12px 20px;
  border-radius: 12px;
  background: #141523;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.trace-line {
  position: absolute;
  inset: 0;
  border: 2px solid #7b6ef6;
  border-radius: 12px;
  clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
  transition: clip-path ${dur}s ${timing};
}

.trace-card:hover .trace-line,
.trace-card:focus-visible .trace-line {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}

@media (prefers-reduced-motion: reduce) {
  .trace-line { transition: none !important; }
}`
  },
];
