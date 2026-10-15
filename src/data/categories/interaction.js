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
  {
    id: "glow-card-hover",
    name: "Tarjeta con Resplandor Reactivo (Interactive Glow)",
    category: "Interacción",
    defaultDuration: 0.35,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "transform, box-shadow, border-color",
    renderCost: "Composición y Repintado",
    renderCostType: "paint",
    costExplanation: "Elevación en translateY() combinada con halo radial en box-shadow sin causar reflujo de página.",
    description: "Tarjeta interactiva que se eleva y proyecta un halo luminoso perimetral al posar el cursor.",
    targetSelector: ".glow-interactive-card",
    previewClass: "shape--glow-card-hover",
    htmlSnippet: "<div class=\"glow-interactive-card\" tabindex=\"0\">\n  <span class=\"glow-card-chip\">PRO</span>\n  <strong>Componente Activo</strong>\n  <p>Pasa el cursor para ver el halo</p>\n</div>",
    previewHtml: "<div class=\"glow-interactive-card is-playing\" tabindex=\"0\" data-motion-target>\n  <span class=\"glow-card-chip\">PRO</span>\n  <strong>Componente Activo</strong>\n  <p>Pasa el cursor para ver el halo</p>\n</div>",
    generateCss: (dur, timing) => `.glow-interactive-card {
  padding: 14px 18px;
  border-radius: 14px;
  background: #141523;
  border: 1px solid rgba(255, 255, 255, 0.08);
  cursor: pointer;
  transition: transform ${dur}s ${timing}, box-shadow ${dur}s ${timing}, border-color ${dur}s ${timing};
}

.glow-interactive-card:hover,
.glow-interactive-card:focus-visible,
.glow-interactive-card.is-playing {
  transform: translateY(-6px);
  border-color: rgba(123, 110, 246, 0.6);
  box-shadow: 0 12px 30px rgba(123, 110, 246, 0.25), 0 0 15px rgba(61, 221, 168, 0.2);
}

@media (prefers-reduced-motion: reduce) {
  .glow-interactive-card { transition: none !important; transform: none !important; }
}`
  },
  {
    id: "press-rebound",
    name: "Botón Táctil con Profundidad 3D (3D Push Button)",
    category: "Interacción",
    defaultDuration: 0.15,
    defaultTiming: "cubic-bezier(0.2, 0.8, 0.2, 1)",
    timingOptions: ["cubic-bezier(0.2, 0.8, 0.2, 1)","ease-out"],
    properties: "transform, box-shadow",
    renderCost: "Composición y Repintado",
    renderCostType: "paint",
    costExplanation: "Desplazamiento vertical de 4px con reducción simultánea de sombra dura inferior.",
    description: "Botón físico que se comprime mecánicamente contra su base al hacer clic y rebota instantáneamente.",
    targetSelector: ".press-3d-btn",
    previewClass: "shape--press-rebound",
    htmlSnippet: "<button class=\"press-3d-btn\" type=\"button\">\n  <span>Presionar Acción</span>\n</button>",
    previewHtml: "<button class=\"press-3d-btn is-playing\" type=\"button\" data-motion-target>\n  <span>Presionar Acción</span>\n</button>",
    generateCss: (dur, timing) => `.press-3d-btn {
  padding: 10px 22px;
  border-radius: 12px;
  background: #7b6ef6;
  color: #fff;
  font-weight: 800;
  border: none;
  cursor: pointer;
  box-shadow: 0 6px 0 #5444dc, 0 10px 20px rgba(0, 0, 0, 0.4);
  transition: transform ${dur}s ${timing}, box-shadow ${dur}s ${timing};
}

.press-3d-btn:active,
.press-3d-btn.is-playing {
  transform: translateY(4px);
  box-shadow: 0 2px 0 #5444dc, 0 4px 10px rgba(0, 0, 0, 0.3);
}

@media (prefers-reduced-motion: reduce) {
  .press-3d-btn { transition: none !important; transform: none !important; }
}`
  },
  {
    id: "checkbox-bounce",
    name: "Casilla con Check Animado (Bouncy Checkbox)",
    category: "Interacción",
    defaultDuration: 0.35,
    defaultTiming: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    timingOptions: ["cubic-bezier(0.34, 1.56, 0.64, 1)","ease-out"],
    properties: "transform, stroke-dashoffset",
    renderCost: "Composición y Repintado",
    renderCostType: "paint",
    costExplanation: "Rebote elástico del marco exterior con dibujado sincronizado del trazado vectorial SVG.",
    description: "Casilla de verificación interactiva con salto elástico y trazo dinámico al activarse.",
    targetSelector: ".checkbox-interactive",
    previewClass: "shape--checkbox-bounce",
    htmlSnippet: "<label class=\"checkbox-interactive\">\n  <input type=\"checkbox\" checked readonly />\n  <span class=\"check-box-surface\">\n    <svg viewBox=\"0 0 12 10\">\n      <polyline points=\"1.5 6 4.5 9 10.5 1\"></polyline>\n    </svg>\n  </span>\n  <span class=\"check-label\">Aceptar términos</span>\n</label>",
    previewHtml: "<label class=\"checkbox-interactive is-playing\" data-motion-target>\n  <input type=\"checkbox\" checked readonly />\n  <span class=\"check-box-surface\">\n    <svg viewBox=\"0 0 12 10\">\n      <polyline points=\"1.5 6 4.5 9 10.5 1\"></polyline>\n    </svg>\n  </span>\n  <span class=\"check-label\">Aceptar términos</span>\n</label>",
    generateCss: (dur, timing) => `.checkbox-interactive {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.check-box-surface {
  width: 22px;
  height: 22px;
  border-radius: 6px;
  background: #7b6ef6;
  display: grid;
  place-items: center;
  animation: checkBounce ${dur}s ${timing} both;
}

.check-box-surface svg {
  width: 12px;
  height: 10px;
  fill: none;
  stroke: #fff;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 16;
  stroke-dashoffset: 0;
  animation: checkDraw ${dur}s ease-out both;
}

@keyframes checkBounce {
  0% { transform: scale(0.6); }
  60% { transform: scale(1.2); }
  100% { transform: scale(1); }
}

@keyframes checkDraw {
  from { stroke-dashoffset: 16; }
  to { stroke-dashoffset: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .check-box-surface, .check-box-surface svg { animation: none !important; }
}`
  },
  {
    id: "input-floating-label",
    name: "Campo con Etiqueta Flotante (Floating Label)",
    category: "Interacción",
    defaultDuration: 0.25,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "transform, color, font-size",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "La etiqueta se traslada en translateY(-22px) y scale(0.85) sobre GPU sin redibujar el input.",
    description: "Entrada de formulario con etiqueta flotante que asciende automáticamente al enfocar o escribir.",
    targetSelector: ".floating-input-group",
    previewClass: "shape--input-floating-label",
    htmlSnippet: "<div class=\"floating-input-group\">\n  <input type=\"text\" class=\"float-input\" value=\"usuario@dominio.com\" readonly />\n  <label class=\"float-label\">Correo Electrónico</label>\n  <span class=\"float-bar\"></span>\n</div>",
    previewHtml: "<div class=\"floating-input-group is-playing\" data-motion-target>\n  <input type=\"text\" class=\"float-input\" value=\"usuario@dominio.com\" readonly />\n  <label class=\"float-label\">Correo Electrónico</label>\n  <span class=\"float-bar\"></span>\n</div>",
    generateCss: (dur, timing) => `.floating-input-group {
  position: relative;
  width: 220px;
  padding-top: 16px;
}

.float-input {
  width: 100%;
  padding: 8px 0;
  background: none;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  color: #f8f9fe;
  font-size: 13px;
  outline: none;
}

.float-label {
  position: absolute;
  top: 22px;
  left: 0;
  color: #7b6ef6;
  font-size: 11px;
  font-weight: 700;
  transform-origin: left top;
  transform: translateY(-20px) scale(0.85);
  transition: transform ${dur}s ${timing};
}

.float-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: #3ddda8;
  transform: scaleX(1);
  transition: transform ${dur}s ${timing};
}

@media (prefers-reduced-motion: reduce) {
  .float-label, .float-bar { transition: none !important; }
}`
  },
  {
    id: "switch-morph",
    name: "Interruptor Día/Noche Morfológico (Day-Night)",
    category: "Interacción",
    defaultDuration: 0.45,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "transform, background-color, box-shadow",
    renderCost: "Composición y Repintado",
    renderCostType: "paint",
    costExplanation: "Desplazamiento horizontal con cambio de paleta cromática de cielo nocturno a diurno.",
    description: "Conmutador de tema interactivo donde el dial se traslada y transmuta entre un sol y una luna.",
    targetSelector: ".morph-switch",
    previewClass: "shape--switch-morph",
    htmlSnippet: "<button class=\"morph-switch is-checked\" type=\"button\" aria-label=\"Cambiar tema\">\n  <span class=\"morph-track\">\n    <span class=\"morph-thumb\"></span>\n  </span>\n</button>",
    previewHtml: "<button class=\"morph-switch is-checked is-playing\" type=\"button\" aria-label=\"Cambiar tema\" data-motion-target>\n  <span class=\"morph-track\">\n    <span class=\"morph-thumb\"></span>\n  </span>\n</button>",
    generateCss: (dur, timing) => `.morph-track {
  display: block;
  width: 52px;
  height: 28px;
  border-radius: 999px;
  background: #141523;
  border: 1px solid #7b6ef6;
  position: relative;
  transition: background-color ${dur}s ${timing};
}

.morph-thumb {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #ffbd2e;
  box-shadow: 0 0 10px #ffbd2e;
  transform: translateX(24px);
  transition: transform ${dur}s ${timing}, background-color ${dur}s ${timing};
}

@media (prefers-reduced-motion: reduce) {
  .morph-track, .morph-thumb { transition: none !important; }
}`
  },
  {
    id: "swipe-dismiss",
    name: "Descarte Lateral Deslizable (Swipe Dismiss)",
    category: "Interacción",
    defaultDuration: 0.5,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "transform, opacity",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Desplazamiento en translateX(120%) con inclinación angular leve en el eje Z sin reflow.",
    description: "Gesto de deslizamiento rápido que expulsa y descarta un elemento de la lista con rotación ligera.",
    targetSelector: ".swipe-card",
    previewClass: "shape--swipe-dismiss",
    htmlSnippet: "<div class=\"swipe-card\">\n  <span class=\"swipe-icon\">&check;</span>\n  <span>Tarea completada</span>\n</div>",
    previewHtml: "<div class=\"swipe-card is-playing\" data-motion-target>\n  <span class=\"swipe-icon\">&check;</span>\n  <span>Tarea completada</span>\n</div>",
    generateCss: (dur, timing) => `.swipe-card {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  border-radius: 12px;
  background: #141523;
  border: 1px solid rgba(61, 221, 168, 0.4);
  color: #3ddda8;
  font-weight: 700;
  animation: swipeOut ${dur}s ${timing} both;
}

@keyframes swipeOut {
  0% { transform: translateX(0) rotate(0deg); opacity: 1; }
  100% { transform: translateX(90px) rotate(8deg); opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .swipe-card { animation: none !important; opacity: 1 !important; transform: none !important; }
}`
  },
  {
    id: "bookmark-ribbon",
    name: "Cinta de Marcador (Bookmark Ribbon)",
    category: "Interacción",
    defaultDuration: 0.4,
    defaultTiming: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    timingOptions: ["cubic-bezier(0.34, 1.56, 0.64, 1)","ease-out"],
    properties: "transform (translateY, scaleY)",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Descenso con anclaje superior de translateY(-100%) a 0 y rebote elástico en scaleY.",
    description: "Cinta de favorito que cae y se fija firmemente con punta cortada al guardar un artículo.",
    targetSelector: ".ribbon-box",
    previewClass: "shape--bookmark-ribbon",
    htmlSnippet: "<div class=\"ribbon-box\">\n  <div class=\"ribbon-flag\"></div>\n  <span>Guardar artículo</span>\n</div>",
    previewHtml: "<div class=\"ribbon-box is-playing\" data-motion-target>\n  <div class=\"ribbon-flag\"></div>\n  <span>Guardar artículo</span>\n</div>",
    generateCss: (dur, timing) => `.ribbon-box {
  position: relative;
  padding: 12px 24px;
  border-radius: 12px;
  background: #141523;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
}

.ribbon-flag {
  position: absolute;
  top: 0;
  right: 14px;
  width: 14px;
  height: 22px;
  background: #ff6e65;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 75%, 0 100%);
  transform-origin: top center;
  animation: ribbonDrop ${dur}s ${timing} both;
}

@keyframes ribbonDrop {
  from { transform: translateY(-100%) scaleY(0.5); }
  to { transform: translateY(0) scaleY(1); }
}

@media (prefers-reduced-motion: reduce) {
  .ribbon-flag { animation: none !important; transform: none !important; }
}`
  },
  {
    id: "shine-hover-btn",
    name: "Reflejo Cromado al Cursor (Chrome Sheen)",
    category: "Interacción",
    defaultDuration: 0.6,
    defaultTiming: "ease-in-out",
    timingOptions: ["ease-in-out","linear","ease-out"],
    properties: "transform (translateX)",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Franja con gradiente traslúcido desplazada de -100% a 200% sobre capas aceleradas.",
    description: "Botón premium con destello diagonal plateado que lo cruza suavemente al interactuar.",
    targetSelector: ".sheen-btn",
    previewClass: "shape--shine-hover-btn",
    htmlSnippet: "<button class=\"sheen-btn\" type=\"button\">\n  <span class=\"sheen-light\"></span>\n  <span>Desbloquear Acceso</span>\n</button>",
    previewHtml: "<button class=\"sheen-btn is-playing\" type=\"button\" data-motion-target>\n  <span class=\"sheen-light\"></span>\n  <span>Desbloquear Acceso</span>\n</button>",
    generateCss: (dur, timing) => `.sheen-btn {
  position: relative;
  padding: 10px 22px;
  border-radius: 12px;
  background: #7b6ef6;
  color: #fff;
  font-weight: 800;
  border: none;
  overflow: hidden;
  cursor: pointer;
}

.sheen-light {
  position: absolute;
  top: -50%;
  bottom: -50%;
  width: 30px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.45), transparent);
  transform: rotate(25deg);
  animation: sheenSweep ${dur}s ${timing} infinite;
}

@keyframes sheenSweep {
  0% { transform: translateX(-120px) rotate(25deg); }
  100% { transform: translateX(200px) rotate(25deg); }
}

@media (prefers-reduced-motion: reduce) {
  .sheen-light { animation: none !important; }
}`
  },
  {
    id: "chip-toggle",
    name: "Pill Seleccionable Elástica (Selectable Chip)",
    category: "Interacción",
    defaultDuration: 0.35,
    defaultTiming: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    timingOptions: ["cubic-bezier(0.34, 1.56, 0.64, 1)","ease-out"],
    properties: "transform, background-color, border-color",
    renderCost: "Composición y Repintado",
    renderCostType: "paint",
    costExplanation: "Salto elástico con scale(1.1) y transición de paleta a color activo.",
    description: "Etiqueta interactiva de filtrado que salta elásticamente al alternar su selección.",
    targetSelector: ".chip-selector",
    previewClass: "shape--chip-toggle",
    htmlSnippet: "<button class=\"chip-selector is-active\" type=\"button\">\n  <span class=\"chip-check\">&check;</span>\n  <span>Filtro Activo</span>\n</button>",
    previewHtml: "<button class=\"chip-selector is-active is-playing\" type=\"button\" data-motion-target>\n  <span class=\"chip-check\">&check;</span>\n  <span>Filtro Activo</span>\n</button>",
    generateCss: (dur, timing) => `.chip-selector {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 999px;
  background: rgba(61, 221, 168, 0.15);
  border: 1px solid #3ddda8;
  color: #3ddda8;
  font-weight: 700;
  cursor: pointer;
  animation: chipBounce ${dur}s ${timing} both;
}

@keyframes chipBounce {
  0% { transform: scale(0.85); }
  60% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

@media (prefers-reduced-motion: reduce) {
  .chip-selector { animation: none !important; transform: none !important; }
}`
  },
  {
    id: "copy-feedback",
    name: "Botón Copiar con Metamorfosis (Copy State Morph)",
    category: "Interacción",
    defaultDuration: 0.4,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "transform, background-color, color",
    renderCost: "Composición y Repintado",
    renderCostType: "paint",
    costExplanation: "Transición instantánea de color a verde menta con pulso de escala confirmando la copia al portapapeles.",
    description: "Confirmación visual inmediata que transforma el botón 'Copiar' en '¡Copiado!' con destello esmeralda.",
    targetSelector: ".copy-morph-btn",
    previewClass: "shape--copy-feedback",
    htmlSnippet: "<button class=\"copy-morph-btn\" type=\"button\">\n  <span class=\"copy-icon\">&check;</span>\n  <span class=\"copy-text\">&iexcl;Copiado!</span>\n</button>",
    previewHtml: "<button class=\"copy-morph-btn is-playing\" type=\"button\" data-motion-target>\n  <span class=\"copy-icon\">&check;</span>\n  <span class=\"copy-text\">&iexcl;Copiado!</span>\n</button>",
    generateCss: (dur, timing) => `.copy-morph-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 18px;
  border-radius: 10px;
  background: rgba(61, 221, 168, 0.15);
  border: 1px solid #3ddda8;
  color: #3ddda8;
  font-weight: 800;
  cursor: pointer;
  animation: copyPulse ${dur}s ${timing} both;
}

@keyframes copyPulse {
  0% { transform: scale(0.92); }
  50% { transform: scale(1.08); background: rgba(61, 221, 168, 0.3); }
  100% { transform: scale(1); }
}

@media (prefers-reduced-motion: reduce) {
  .copy-morph-btn { animation: none !important; transform: none !important; }
}`
  },
  {
    id: "segmented-button-press",
    name: "Presión Háptica en Botón (Haptic Press)",
    category: "Interacción",
    defaultDuration: 0.3,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "transform, box-shadow",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Hundimiento sutil en transform: scale(0.95) y translateY(2px) con retorno elástico.",
    description: "Sensación de pulsar un interruptor físico con rebote de resistencia al soltar el clic.",
    targetSelector: ".haptic-press-btn",
    previewClass: "shape--segmented-button-press",
    htmlSnippet: "<button class=\"haptic-press-btn\" type=\"button\">\n  <span>Pulsar Botón</span>\n</button>",
    previewHtml: "<button class=\"haptic-press-btn is-playing\" type=\"button\" data-motion-target>\n  <span>Pulsar Botón</span>\n</button>",
    generateCss: (dur, timing) => `.haptic-press-btn {
  padding: 10px 22px;
  border-radius: 10px;
  background: #7b6ef6;
  color: #fff;
  font-weight: 700;
  border: none;
  box-shadow: 0 4px 14px rgba(123, 110, 246, 0.4);
  animation: hapticPulse ${dur}s ${timing} infinite alternate;
}

@keyframes hapticPulse {
  0% { transform: scale(1) translateY(0); box-shadow: 0 4px 14px rgba(123, 110, 246, 0.4); }
  100% { transform: scale(0.95) translateY(2px); box-shadow: 0 1px 4px rgba(123, 110, 246, 0.2); }
}

@media (prefers-reduced-motion: reduce) {
  .haptic-press-btn { animation: none !important; transform: none !important; }
}`
  },
  {
    id: "pill-tab-elastic",
    name: "Pestaña Deslizante Elástica (Elastic Tab)",
    category: "Interacción",
    defaultDuration: 0.45,
    defaultTiming: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    timingOptions: ["cubic-bezier(0.34, 1.56, 0.64, 1)","ease-out","ease-in-out"],
    properties: "transform (scaleX, translateX)",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Deformación elástica que estira el ancho antes de fijar la nueva coordenada horizontal.",
    description: "Indicador de selección que se alarga momentáneamente durante el desplazamiento como una masa elástica.",
    targetSelector: ".elastic-tab-bar",
    previewClass: "shape--pill-tab-elastic",
    htmlSnippet: "<div class=\"elastic-tab-bar\">\n  <div class=\"elastic-pill-indicator\"></div>\n  <span class=\"e-tab is-active\">Diseño</span>\n  <span class=\"e-tab\">Código</span>\n</div>",
    previewHtml: "<div class=\"elastic-tab-bar is-playing\" data-motion-target>\n  <div class=\"elastic-pill-indicator\"></div>\n  <span class=\"e-tab is-active\">Diseño</span>\n  <span class=\"e-tab\">Código</span>\n</div>",
    generateCss: (dur, timing) => `.elastic-pill-indicator {
  position: absolute;
  top: 4px;
  bottom: 4px;
  left: 4px;
  width: calc(50% - 4px);
  border-radius: 999px;
  background: #7b6ef6;
  animation: elasticTabShift ${dur}s ${timing} infinite alternate;
}

@keyframes elasticTabShift {
  0% { transform: translateX(0) scaleX(1); }
  40% { transform: translateX(40px) scaleX(1.3); }
  100% { transform: translateX(100%) scaleX(1); }
}

@media (prefers-reduced-motion: reduce) {
  .elastic-pill-indicator { animation: none !important; transform: none !important; }
}`
  },
  {
    id: "radio-ripple-pulse",
    name: "Onda en Radio Button (Radio Ripple)",
    category: "Interacción",
    defaultDuration: 0.5,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "transform (scale), opacity",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Expansión concéntrica de halo semitransparente al marcar el estado activo.",
    description: "Selector de opción circular con efecto de agua que irradia desde el centro hacia afuera.",
    targetSelector: ".radio-ripple-wrap",
    previewClass: "shape--radio-ripple-pulse",
    htmlSnippet: "<div class=\"radio-ripple-wrap\">\n  <div class=\"radio-circle-outer\">\n    <div class=\"radio-dot-inner\"></div>\n    <div class=\"radio-wave-halo\"></div>\n  </div>\n  <span>Opción Seleccionada</span>\n</div>",
    previewHtml: "<div class=\"radio-ripple-wrap is-playing\" data-motion-target>\n  <div class=\"radio-circle-outer\">\n    <div class=\"radio-dot-inner\"></div>\n    <div class=\"radio-wave-halo\"></div>\n  </div>\n  <span>Opción Seleccionada</span>\n</div>",
    generateCss: (dur, timing) => `.radio-wave-halo {
  position: absolute;
  inset: -6px;
  border-radius: 50%;
  background: rgba(123, 110, 246, 0.35);
  animation: radioWave ${dur}s ${timing} infinite;
}

@keyframes radioWave {
  0% { transform: scale(0.6); opacity: 1; }
  100% { transform: scale(1.8); opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .radio-wave-halo { animation: none !important; opacity: 0 !important; }
}`
  },
  {
    id: "card-spotlight-border",
    name: "Borde con Destello de Linterna (Spotlight Border)",
    category: "Interacción",
    defaultDuration: 2,
    defaultTiming: "linear",
    timingOptions: ["linear","ease-in-out","cubic-bezier(0.16, 1, 0.3, 1)"],
    properties: "transform (rotate), opacity",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Gradiente cónico que rota bajo máscara border-radius sin repintado de textura pesada.",
    description: "Tarjeta moderna donde el borde cobra vida con un haz de luz giratorio que sigue el contorno.",
    targetSelector: ".spotlight-border-card",
    previewClass: "shape--card-spotlight-border",
    htmlSnippet: "<div class=\"spotlight-border-card\">\n  <div class=\"spotlight-inner-content\">\n    <strong>Efecto Spotlight</strong>\n  </div>\n</div>",
    previewHtml: "<div class=\"spotlight-border-card is-playing\" data-motion-target>\n  <div class=\"spotlight-inner-content\">\n    <strong>Efecto Spotlight</strong>\n  </div>\n</div>",
    generateCss: (dur, timing) => `.spotlight-border-card::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  background: conic-gradient(from 0deg, transparent, #7b6ef6, transparent 40%);
  animation: spotlightRotate ${dur}s ${timing} infinite;
}

@keyframes spotlightRotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .spotlight-border-card::before { animation: none !important; }
}`
  },
  {
    id: "download-progress-btn",
    name: "Botón de Descarga con Progreso (Download Btn)",
    category: "Interacción",
    defaultDuration: 1.8,
    defaultTiming: "ease-in-out",
    timingOptions: ["ease-in-out","linear","cubic-bezier(0.16, 1, 0.3, 1)"],
    properties: "transform (scaleX), background-color",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Transición de barra de llenado en transform: scaleX() con cambio de estado de icono.",
    description: "Botón interactivo que al ser pulsado se rellena suavemente hasta mostrar el icono de éxito.",
    targetSelector: ".download-action-btn",
    previewClass: "shape--download-progress-btn",
    htmlSnippet: "<div class=\"download-action-btn\">\n  <div class=\"download-fill-meter\"></div>\n  <span class=\"download-btn-label\">&#10515; Descargar Archivo</span>\n</div>",
    previewHtml: "<div class=\"download-action-btn is-playing\" data-motion-target>\n  <div class=\"download-fill-meter\"></div>\n  <span class=\"download-btn-label\">&#10515; Descargar Archivo</span>\n</div>",
    generateCss: (dur, timing) => `.download-fill-meter {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #3ddda8;
  transform-origin: left center;
  animation: downloadFill ${dur}s ${timing} infinite;
}

@keyframes downloadFill {
  0% { transform: scaleX(0); }
  70% { transform: scaleX(1); }
  100% { transform: scaleX(1); }
}

@media (prefers-reduced-motion: reduce) {
  .download-fill-meter { animation: none !important; transform: scaleX(1) !important; }
}`
  },
  {
    id: "accordion-chevron-rotate",
    name: "Giro de Flecha en Resorte (Chevron Spring)",
    category: "Interacción",
    defaultDuration: 0.45,
    defaultTiming: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    timingOptions: ["cubic-bezier(0.34, 1.56, 0.64, 1)","ease-out","ease-in-out"],
    properties: "transform (rotate)",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Rotación sobre el centro en rotate(180deg) con ligero sobregiro de muelle.",
    description: "Icono de flecha para desplegables y acordeones que gira elásticamente al abrir y cerrar.",
    targetSelector: ".chevron-spring-demo",
    previewClass: "shape--accordion-chevron-rotate",
    htmlSnippet: "<div class=\"chevron-spring-demo\">\n  <span>Detalles avanzados</span>\n  <span class=\"chevron-spring-arrow\">&#9662;</span>\n</div>",
    previewHtml: "<div class=\"chevron-spring-demo is-playing\" data-motion-target>\n  <span>Detalles avanzados</span>\n  <span class=\"chevron-spring-arrow\">&#9662;</span>\n</div>",
    generateCss: (dur, timing) => `.chevron-spring-arrow {
  display: inline-block;
  color: #7b6ef6;
  font-size: 14px;
  animation: chevronFlip ${dur}s ${timing} infinite alternate;
}

@keyframes chevronFlip {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(180deg); }
}

@media (prefers-reduced-motion: reduce) {
  .chevron-spring-arrow { animation: none !important; transform: none !important; }
}`
  },
  {
    id: "star-burst-favorite",
    name: "Estallido Estelar de Favorito (Star Burst)",
    category: "Interacción",
    defaultDuration: 0.6,
    defaultTiming: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    timingOptions: ["cubic-bezier(0.34, 1.56, 0.64, 1)","ease-out","ease-in-out"],
    properties: "transform (scale), color",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Escalado elástico instantáneo de la estrella con anillo de partículas concéntrico.",
    description: "Confirmación visual gratificante para el guardado de elementos en listas de favoritos.",
    targetSelector: ".star-burst-btn",
    previewClass: "shape--star-burst-favorite",
    htmlSnippet: "<div class=\"star-burst-btn\">\n  <span class=\"burst-star-icon\">&#9733;</span>\n</div>",
    previewHtml: "<div class=\"star-burst-btn is-playing\" data-motion-target>\n  <span class=\"burst-star-icon\">&#9733;</span>\n</div>",
    generateCss: (dur, timing) => `.burst-star-icon {
  font-size: 28px;
  color: #ffbd2e;
  display: inline-block;
  animation: starBurstPop ${dur}s ${timing} infinite alternate;
}

@keyframes starBurstPop {
  0% { transform: scale(0.8); opacity: 0.7; }
  50% { transform: scale(1.4); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .burst-star-icon { animation: none !important; transform: none !important; }
}`
  },
  {
    id: "slider-thumb-swell",
    name: "Tirador Expansivo de Deslizador (Thumb Swell)",
    category: "Interacción",
    defaultDuration: 0.4,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "transform (scale), box-shadow",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Expansión de escala del tirador de control con proyección de sombra envolvente.",
    description: "Efecto táctil donde el cabezal de un control deslizante se infla al tocarlo para facilitar el agarre.",
    targetSelector: ".slider-mock-track",
    previewClass: "shape--slider-thumb-swell",
    htmlSnippet: "<div class=\"slider-mock-track\">\n  <div class=\"slider-mock-progress\"></div>\n  <div class=\"slider-mock-thumb\"></div>\n</div>",
    previewHtml: "<div class=\"slider-mock-track is-playing\" data-motion-target>\n  <div class=\"slider-mock-progress\"></div>\n  <div class=\"slider-mock-thumb\"></div>\n</div>",
    generateCss: (dur, timing) => `.slider-mock-thumb {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #7b6ef6;
  box-shadow: 0 0 10px rgba(123, 110, 246, 0.5);
  animation: thumbSwell ${dur}s ${timing} infinite alternate;
}

@keyframes thumbSwell {
  0% { transform: scale(1); box-shadow: 0 0 6px rgba(123, 110, 246, 0.3); }
  100% { transform: scale(1.35); box-shadow: 0 0 16px rgba(123, 110, 246, 0.7); }
}

@media (prefers-reduced-motion: reduce) {
  .slider-mock-thumb { animation: none !important; transform: none !important; }
}`
  },
  {
    id: "neumorphic-press-inset",
    name: "Hundimiento Neumórfico Inset (Neumorphic Inset)",
    category: "Interacción",
    defaultDuration: 0.5,
    defaultTiming: "ease-in-out",
    timingOptions: ["ease-in-out","cubic-bezier(0.16, 1, 0.3, 1)","linear"],
    properties: "box-shadow, transform",
    renderCost: "Repintado de sombras",
    renderCostType: "paint",
    costExplanation: "Alternancia de sombras proyectadas exteriores a sombras inset de bajo relieve.",
    description: "Botón de estilo neumórfico que parece tallado en la superficie y se presiona hacia adentro con suavidad.",
    targetSelector: ".neumorphic-btn-tile",
    previewClass: "shape--neumorphic-press-inset",
    htmlSnippet: "<div class=\"neumorphic-btn-tile\">\n  <span>SUPERFICIE</span>\n</div>",
    previewHtml: "<div class=\"neumorphic-btn-tile is-playing\" data-motion-target>\n  <span>SUPERFICIE</span>\n</div>",
    generateCss: (dur, timing) => `.neumorphic-btn-tile {
  padding: 12px 22px;
  border-radius: 12px;
  background: #141523;
  color: #fff;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 1px;
  animation: neumorphicPress ${dur}s ${timing} infinite alternate;
}

@keyframes neumorphicPress {
  0% {
    box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.5), -5px -5px 12px rgba(255, 255, 255, 0.05);
    transform: translateY(0);
  }
  100% {
    box-shadow: inset 4px 4px 8px rgba(0, 0, 0, 0.6), inset -4px -4px 8px rgba(255, 255, 255, 0.05);
    transform: translateY(1px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .neumorphic-btn-tile { animation: none !important; }
}`
  },
  {
    id: "swipe-to-reveal-action",
    name: "Deslizamiento para Revelar Acción (Swipe to Reveal)",
    category: "Interacción",
    defaultDuration: 1.4,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "transform (translateX)",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Desplazamiento horizontal sobre translateX(-45px) revelando botones inferiores.",
    description: "Patrón móvil de lista deslizable hacia la izquierda para acceder a acciones rápidas como eliminar o editar.",
    targetSelector: ".swipe-item-row",
    previewClass: "shape--swipe-to-reveal-action",
    htmlSnippet: "<div class=\"swipe-item-wrapper\">\n  <div class=\"swipe-bg-actions\">\n    <span class=\"action-del\">&#128465;</span>\n  </div>\n  <div class=\"swipe-item-row\">\n    <span>Desliza para borrar</span>\n  </div>\n</div>",
    previewHtml: "<div class=\"swipe-item-wrapper is-playing\" data-motion-target>\n  <div class=\"swipe-bg-actions\">\n    <span class=\"action-del\">&#128465;</span>\n  </div>\n  <div class=\"swipe-item-row\">\n    <span>Desliza para borrar</span>\n  </div>\n</div>",
    generateCss: (dur, timing) => `.swipe-item-row {
  padding: 10px 14px;
  border-radius: 8px;
  background: #141523;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: swipeRevealMove ${dur}s ${timing} infinite alternate;
}

@keyframes swipeRevealMove {
  0% { transform: translateX(0); }
  60%, 100% { transform: translateX(-40px); }
}

@media (prefers-reduced-motion: reduce) {
  .swipe-item-row { animation: none !important; transform: none !important; }
}`
  }
];
