// Catálogo de animaciones: Texto (10 ejemplos)

export const textAnimations = [
  {
    id: "typing",
    name: "Typing",
    category: "Texto",
    defaultDuration: 2.4,
    defaultTiming: "steps(22, end)",
    timingOptions: ["steps(22, end)","steps(14, end)","linear","ease-out"],
    properties: "width, border-color",
    renderCost: "Layout / Reflow (ancho)",
    renderCostType: "layout",
    costExplanation: "Animar width altera la geometría de la caja de texto en cada frame, disparando recálculos de diseño (layout).",
    description: "Revelación secuencial del texto letra por letra mediante recorte de anchura y parpadeo de cursor.",
    targetSelector: ".typing-text",
    previewClass: "shape--typing",
    htmlSnippet: "<div class=\"terminal-box\">\n  <span class=\"terminal-prompt\">$</span>\n  <span class=\"typing-text\">console.log(\"Motion!\");</span>\n</div>",
    previewHtml: "<div class=\"terminal-box is-playing\" data-motion-target>\n  <div class=\"terminal-bar\">\n    <span></span><span></span><span></span>\n  </div>\n  <div class=\"terminal-body\">\n    <span class=\"terminal-prompt\">$</span>\n    <span class=\"typing-text\">console.log(\"Motion!\");</span>\n  </div>\n</div>",
    generateCss: (dur, timing) => `.typing-text {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid #7b6ef6;
  animation:
    typing ${dur}s ${timing} both,
    blinkCaret 750ms step-end infinite;
}

@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blinkCaret {
  50% { border-color: transparent; }
}

@media (prefers-reduced-motion: reduce) {
  .typing-text {
    animation: none !important;
    width: 100% !important;
    border-right-color: transparent !important;
  }
}`
  },
  {
    id: "text-shimmer",
    name: "Texto con Reflejo Metálico",
    category: "Texto",
    defaultDuration: 2.2,
    defaultTiming: "linear",
    timingOptions: ["linear","ease-in-out","ease-out"],
    properties: "background-position",
    renderCost: "Repintado / Paint (texto)",
    renderCostType: "paint",
    costExplanation: "Desplaza un degradado lineal sobre el texto usando background-clip: text en cada repintado.",
    description: "Haz de brillo cromado que viaja sobre el titular como en interfaces de Apple o Linear.",
    targetSelector: ".shimmer-headline",
    previewClass: "shape--text-shimmer",
    htmlSnippet: "<h3 class=\"shimmer-headline\">Diseño de Próxima Generación</h3>",
    previewHtml: "<h3 class=\"shimmer-headline is-playing\" data-motion-target>Diseño de Próxima Generación</h3>",
    generateCss: (dur, timing) => `.shimmer-headline {
  font-size: 16px;
  font-weight: 800;
  background: linear-gradient(90deg, #7b6ef6 0%, #ffffff 50%, #7b6ef6 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textShine ${dur}s ${timing} infinite;
}

@keyframes textShine {
  to { background-position: -200% center; }
}

@media (prefers-reduced-motion: reduce) {
  .shimmer-headline {
    animation: none !important;
    background-position: 0 0 !important;
  }
}`
  },
  {
    id: "word-rotator",
    name: "Rotador de Palabras / Word Carousel",
    category: "Texto",
    defaultDuration: 3.2,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-in-out","ease-out"],
    properties: "transform (translateY)",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Desplaza la columna de palabras con translateY() dentro de un marco de recorte overflow: hidden.",
    description: "Carrusel tipográfico vertical que alterna adjetivos dentro de una frase.",
    targetSelector: ".word-roller",
    previewClass: "shape--word-rotator",
    htmlSnippet: "<div class=\"word-rotator-frame\">\n  <span>Crea interfaces</span>\n  <div class=\"word-roller-mask\">\n    <div class=\"word-roller\">\n      <strong>rápidas</strong>\n      <strong>fluidas</strong>\n      <strong>modernas</strong>\n    </div>\n  </div>\n</div>",
    previewHtml: "<div class=\"word-rotator-frame is-playing\" data-motion-target>\n  <span>Crea interfaces</span>\n  <div class=\"word-roller-mask\">\n    <div class=\"word-roller\">\n      <strong>rápidas</strong>\n      <strong>fluidas</strong>\n      <strong>modernas</strong>\n    </div>\n  </div>\n</div>",
    generateCss: (dur, timing) => `.word-roller-mask {
  height: 22px;
  overflow: hidden;
  display: inline-block;
  vertical-align: bottom;
}

.word-roller {
  display: flex;
  flex-direction: column;
  animation: rollWords ${dur}s ${timing} infinite;
}

.word-roller strong {
  height: 22px;
  line-height: 22px;
  color: #3ddda8;
}

@keyframes rollWords {
  0%, 25% { transform: translateY(0); }
  33%, 58% { transform: translateY(-22px); }
  66%, 92% { transform: translateY(-44px); }
  100% { transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .word-roller { animation: none !important; }
}`
  },
  {
    id: "glitch-text",
    name: "Glitch Cibernético / Cyber Glitch",
    category: "Texto",
    defaultDuration: 1.5,
    defaultTiming: "ease-in-out",
    timingOptions: ["ease-in-out","linear","step-end"],
    properties: "clip-path, transform",
    renderCost: "Repintado / Paint",
    renderCostType: "paint",
    costExplanation: "Pseudo-elementos ::before y ::after con desfase cromático rojo/cian y recortes clip-path rápidos.",
    description: "Distorsión digital retro-futurista con desfase RGB para cabeceras o eventos cyberpunk.",
    targetSelector: ".glitch-title",
    previewClass: "shape--glitch-text",
    htmlSnippet: "<div class=\"glitch-title\" data-text=\"CYBER MOTION\">CYBER MOTION</div>",
    previewHtml: "<div class=\"glitch-title is-playing\" data-text=\"CYBER MOTION\" data-motion-target>CYBER MOTION</div>",
    generateCss: (dur, timing) => `.glitch-title {
  position: relative;
  font-family: 'JetBrains Mono', monospace;
  font-size: 18px;
  font-weight: 800;
  color: #fff;
  letter-spacing: 2px;
}

.glitch-title::before,
.glitch-title::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch-title::before {
  color: #ff5f56;
  clip-path: inset(0 0 50% 0);
  animation: glitchTop ${dur}s ${timing} infinite;
}

.glitch-title::after {
  color: #3ddda8;
  clip-path: inset(50% 0 0 0);
  animation: glitchBottom ${dur}s ${timing} infinite;
}

@keyframes glitchTop {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-3px, -2px); }
  40% { transform: translate(3px, 1px); }
}

@keyframes glitchBottom {
  0%, 100% { transform: translate(0); }
  25% { transform: translate(2px, 2px); }
  45% { transform: translate(-2px, -1px); }
}

@media (prefers-reduced-motion: reduce) {
  .glitch-title::before, .glitch-title::after { animation: none !important; opacity: 0 !important; }
}`
  },
  {
    id: "text-glow",
    name: "Letrero de Neón / Neon Flicker",
    category: "Texto",
    defaultDuration: 1.8,
    defaultTiming: "ease-in-out",
    timingOptions: ["ease-in-out","linear","step-end"],
    properties: "text-shadow, opacity",
    renderCost: "Repintado / Paint",
    renderCostType: "paint",
    costExplanation: "Modulación de múltiples radios de text-shadow para simular el cebado y parpadeo de gas neón.",
    description: "Efecto de cartel luminoso parpadeante con aura multicolor e iluminación intermitente.",
    targetSelector: ".neon-text",
    previewClass: "shape--text-glow",
    htmlSnippet: "<span class=\"neon-text\">STUDIO LIVE</span>",
    previewHtml: "<span class=\"neon-text is-playing\" data-motion-target>STUDIO LIVE</span>",
    generateCss: (dur, timing) => `.neon-text {
  font-family: 'JetBrains Mono', monospace;
  font-size: 16px;
  font-weight: 800;
  color: #fff;
  letter-spacing: 2px;
  animation: neonFlicker ${dur}s ${timing} infinite;
}

@keyframes neonFlicker {
  0%, 18%, 22%, 25%, 53%, 57%, 100% {
    text-shadow: 0 0 6px #7b6ef6, 0 0 16px #7b6ef6, 0 0 30px #7b6ef6;
    opacity: 1;
  }
  20%, 24%, 55% {
    text-shadow: none;
    opacity: 0.4;
  }
}

@media (prefers-reduced-motion: reduce) {
  .neon-text { animation: none !important; text-shadow: 0 0 8px #7b6ef6 !important; opacity: 1 !important; }
}`
  },
  {
    id: "gradient-flow",
    name: "Gradiente Tipográfico Fluido",
    category: "Texto",
    defaultDuration: 4,
    defaultTiming: "linear",
    timingOptions: ["linear","ease-in-out","ease-out"],
    properties: "background-position",
    renderCost: "Repintado / Paint",
    renderCostType: "paint",
    costExplanation: "Cicla un degradado multicolor continuo de 300% de tamaño sobre el texto en el hilo de pintado.",
    description: "Arcoíris suave y calmante que fluye ininterrumpidamente a través del cuerpo tipográfico.",
    targetSelector: ".gradient-flow-text",
    previewClass: "shape--gradient-flow",
    htmlSnippet: "<span class=\"gradient-flow-text\">Creatividad Interactiva</span>",
    previewHtml: "<span class=\"gradient-flow-text is-playing\" data-motion-target>Creatividad Interactiva</span>",
    generateCss: (dur, timing) => `.gradient-flow-text {
  font-size: 17px;
  font-weight: 800;
  background: linear-gradient(135deg, #a79bfd 0%, #3ddda8 33%, #ff6e65 66%, #a79bfd 100%);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: flowGradient ${dur}s ${timing} infinite;
}

@keyframes flowGradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@media (prefers-reduced-motion: reduce) {
  .gradient-flow-text { animation: none !important; }
}`
  },
  {
    id: "wavy-letters",
    name: "Texto Ondulante / Wave Text",
    category: "Texto",
    defaultDuration: 1.2,
    defaultTiming: "ease-in-out",
    timingOptions: ["ease-in-out","ease-out","linear"],
    properties: "transform (translateY)",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Cada carácter anima translateY() con un retraso escalonado individual en el hilo compositor.",
    description: "Onda sinusoidal que viaja por cada letra de la palabra simulando una marea elástica.",
    targetSelector: ".wave-text-wrap",
    previewClass: "shape--wavy-letters",
    htmlSnippet: "<div class=\"wave-text-wrap\">\n  <span style=\"--i:0\">M</span><span style=\"--i:1\">o</span><span style=\"--i:2\">t</span><span style=\"--i:3\">i</span><span style=\"--i:4\">o</span><span style=\"--i:5\">n</span>\n</div>",
    previewHtml: "<div class=\"wave-text-wrap is-playing\" data-motion-target>\n  <span style=\"--i:0\">M</span><span style=\"--i:1\">o</span><span style=\"--i:2\">t</span><span style=\"--i:3\">i</span><span style=\"--i:4\">o</span><span style=\"--i:5\">n</span>\n</div>",
    generateCss: (dur, timing) => `.wave-text-wrap {
  display: inline-flex;
  font-size: 20px;
  font-weight: 800;
  color: #7b6ef6;
}

.wave-text-wrap span {
  display: inline-block;
  animation: letterWave ${dur}s ${timing} infinite;
  animation-delay: calc(var(--i) * 0.1s);
}

@keyframes letterWave {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

@media (prefers-reduced-motion: reduce) {
  .wave-text-wrap span { animation: none !important; transform: none !important; }
}`
  },
  {
    id: "split-reveal",
    name: "Aparición por Línea / Line Reveal",
    category: "Texto",
    defaultDuration: 0.6,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "transform (translateY)",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "El texto asciende desde detrás de un contenedor con overflow: hidden usando translateY(100%).",
    description: "Entrada editorial limpia donde los títulos emergen desde el suelo sin alterar márgenes.",
    targetSelector: ".mask-line-container",
    previewClass: "shape--split-reveal",
    htmlSnippet: "<div class=\"mask-line-container\">\n  <div class=\"mask-line-inner\">Arquitectura de Software</div>\n</div>",
    previewHtml: "<div class=\"mask-line-container is-playing\" data-motion-target>\n  <div class=\"mask-line-inner\">Arquitectura de Software</div>\n</div>",
    generateCss: (dur, timing) => `.mask-line-container {
  overflow: hidden;
  display: inline-block;
}

.mask-line-inner {
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  animation: revealLine ${dur}s ${timing} both;
}

@keyframes revealLine {
  from { transform: translateY(110%); }
  to { transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .mask-line-inner { animation: none !important; transform: none !important; }
}`
  },
  {
    id: "focus-blur-in",
    name: "Enfoque Progresivo / Focus-in Text",
    category: "Texto",
    defaultDuration: 0.7,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "filter, letter-spacing, opacity",
    renderCost: "Repintado / Paint",
    renderCostType: "paint",
    costExplanation: "Combina filter: blur() y ajuste de espaciado letter-spacing para enfocar el titular gradualmente.",
    description: "Efecto de lente cinematográfica donde las palabras desenfocadas cobran nitidez y se asientan.",
    targetSelector: ".focus-in-heading",
    previewClass: "shape--focus-blur-in",
    htmlSnippet: "<h4 class=\"focus-in-heading\">EXPERIENCIA PREMIUM</h4>",
    previewHtml: "<h4 class=\"focus-in-heading is-playing\" data-motion-target>EXPERIENCIA PREMIUM</h4>",
    generateCss: (dur, timing) => `.focus-in-heading {
  font-size: 15px;
  font-weight: 800;
  color: #3ddda8;
  animation: focusIn ${dur}s ${timing} both;
}

@keyframes focusIn {
  from {
    filter: blur(12px);
    opacity: 0;
    letter-spacing: 6px;
  }
  to {
    filter: blur(0);
    opacity: 1;
    letter-spacing: 1px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .focus-in-heading { animation: none !important; filter: none !important; letter-spacing: 1px !important; opacity: 1 !important; }
}`
  },
  {
    id: "counter-spin",
    name: "Contador Numérico / Number Ticker",
    category: "Texto",
    defaultDuration: 1.8,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "transform (translateY)",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Columna numérica que se desplaza en translateY() dentro de una celda de recorte de altura fija.",
    description: "Efecto de ruleta u odómetro para estadísticas de métricas, precios o contadores de logros.",
    targetSelector: ".odometer-ticker",
    previewClass: "shape--counter-spin",
    htmlSnippet: "<div class=\"odometer-ticker\">\n  <span class=\"ticker-prefix\">$</span>\n  <div class=\"ticker-column-mask\">\n    <div class=\"ticker-digits\">\n      <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>\n    </div>\n  </div>\n  <span class=\"ticker-suffix\">k</span>\n</div>",
    previewHtml: "<div class=\"odometer-ticker is-playing\" data-motion-target>\n  <span class=\"ticker-prefix\">$</span>\n  <div class=\"ticker-column-mask\">\n    <div class=\"ticker-digits\">\n      <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>\n    </div>\n  </div>\n  <span class=\"ticker-suffix\">k</span>\n</div>",
    generateCss: (dur, timing) => `.odometer-ticker {
  display: inline-flex;
  align-items: center;
  font-family: 'JetBrains Mono', monospace;
  font-size: 20px;
  font-weight: 800;
  color: #fff;
}

.ticker-column-mask {
  height: 24px;
  overflow: hidden;
}

.ticker-digits {
  display: flex;
  flex-direction: column;
  animation: rollDigits ${dur}s ${timing} both;
}

.ticker-digits span {
  height: 24px;
  line-height: 24px;
}

@keyframes rollDigits {
  from { transform: translateY(0); }
  to { transform: translateY(-192px); } /* Cae al número 8 */
}

@media (prefers-reduced-motion: reduce) {
  .ticker-digits { animation: none !important; transform: translateY(-192px) !important; }
}`
  },
];
