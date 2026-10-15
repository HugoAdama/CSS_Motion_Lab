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
  {
    id: "kinetic-stagger",
    name: "Caída Tipográfica Cinética (Kinetic Fall)",
    category: "Texto",
    defaultDuration: 0.6,
    defaultTiming: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    timingOptions: ["cubic-bezier(0.34, 1.56, 0.64, 1)","ease-out","ease-in-out"],
    properties: "transform, opacity",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Cada glifo desciende con retraso escalonado en transform: translateY() y rebote elástico en GPU.",
    description: "Letras individuales que caen y se estabilizan con efecto elástico para titulares de impacto.",
    targetSelector: ".kinetic-text",
    previewClass: "shape--kinetic-stagger",
    htmlSnippet: "<div class=\"kinetic-text\">\n  <span style=\"--l: 0;\">M</span>\n  <span style=\"--l: 1;\">O</span>\n  <span style=\"--l: 2;\">T</span>\n  <span style=\"--l: 3;\">I</span>\n  <span style=\"--l: 4;\">O</span>\n  <span style=\"--l: 5;\">N</span>\n</div>",
    previewHtml: "<div class=\"kinetic-text is-playing\" data-motion-target>\n  <span style=\"--l: 0;\">M</span>\n  <span style=\"--l: 1;\">O</span>\n  <span style=\"--l: 2;\">T</span>\n  <span style=\"--l: 3;\">I</span>\n  <span style=\"--l: 4;\">O</span>\n  <span style=\"--l: 5;\">N</span>\n</div>",
    generateCss: (dur, timing) => `.kinetic-text {
  display: inline-flex;
  gap: 2px;
  font-size: 24px;
  font-weight: 800;
  color: #fff;
}

.kinetic-text span {
  display: inline-block;
  animation: kineticDrop ${dur}s ${timing} both;
  animation-delay: calc(var(--l, 0) * 0.08s);
}

@keyframes kineticDrop {
  from {
    opacity: 0;
    transform: translateY(-30px) rotate(-15deg);
  }
  to {
    opacity: 1;
    transform: translateY(0) rotate(0deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .kinetic-text span { animation: none !important; opacity: 1 !important; transform: none !important; }
}`
  },
  {
    id: "neon-flicker",
    name: "Rótulo de Neón Parpadeante (Neon Sign)",
    category: "Texto",
    defaultDuration: 1.8,
    defaultTiming: "ease-in-out",
    timingOptions: ["ease-in-out","linear"],
    properties: "text-shadow, opacity",
    renderCost: "Repintado / Paint (text-shadow)",
    renderCostType: "paint",
    costExplanation: "Oscilación intermitente de resplandores múltiples superpuestos con text-shadow.",
    description: "Letrero de gas neón nocturno con chispas de encendido y luminosidad cian/violeta.",
    targetSelector: ".neon-sign",
    previewClass: "shape--neon-flicker",
    htmlSnippet: "<div class=\"neon-sign\">\n  <span>OPEN 24/7</span>\n</div>",
    previewHtml: "<div class=\"neon-sign is-playing\" data-motion-target>\n  <span>OPEN 24/7</span>\n</div>",
    generateCss: (dur, timing) => `.neon-sign {
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 0.15em;
  color: #fff;
  text-shadow: 0 0 7px #7b6ef6, 0 0 10px #7b6ef6, 0 0 21px #7b6ef6, 0 0 42px #3ddda8;
  animation: neonFlicker ${dur}s ${timing} infinite;
}

@keyframes neonFlicker {
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
    text-shadow: 0 0 7px #7b6ef6, 0 0 10px #7b6ef6, 0 0 21px #7b6ef6, 0 0 42px #3ddda8;
    opacity: 1;
  }
  20%, 24%, 55% {
    text-shadow: none;
    opacity: 0.3;
  }
}

@media (prefers-reduced-motion: reduce) {
  .neon-sign { animation: none !important; opacity: 1 !important; }
}`
  },
  {
    id: "text-mask-slide",
    name: "Revelado con Máscara Inferior (Mask Slide Up)",
    category: "Texto",
    defaultDuration: 0.5,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "transform (translateY)",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Texto ascendiendo en translateY() dentro de un contenedor con overflow: hidden.",
    description: "Aparición limpia de texto que emerge desde una ranura inferior oculta.",
    targetSelector: ".mask-slide-box",
    previewClass: "shape--text-mask-slide",
    htmlSnippet: "<div class=\"mask-slide-box\">\n  <span class=\"mask-slide-text\">Diseño de Interacción</span>\n</div>",
    previewHtml: "<div class=\"mask-slide-box is-playing\" data-motion-target>\n  <span class=\"mask-slide-text\">Diseño de Interacción</span>\n</div>",
    generateCss: (dur, timing) => `.mask-slide-box {
  overflow: hidden;
  display: inline-block;
  padding: 4px 0;
}

.mask-slide-text {
  display: inline-block;
  font-size: 16px;
  font-weight: 700;
  color: #3ddda8;
  animation: maskSlideUp ${dur}s ${timing} both;
}

@keyframes maskSlideUp {
  from { transform: translateY(105%); }
  to { transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .mask-slide-text { animation: none !important; transform: none !important; }
}`
  },
  {
    id: "blur-fade-words",
    name: "Enfoque Progresivo de Texto (Blur to Sharp)",
    category: "Texto",
    defaultDuration: 0.7,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "filter (blur), opacity, letter-spacing",
    renderCost: "Composición y Repintado",
    renderCostType: "paint",
    costExplanation: "Transición de desenfoque de 12px a 0 con contracción simultánea de interletrado.",
    description: "Texto que se materializa desde una niebla borrosa hasta alcanzar definición perfecta.",
    targetSelector: ".blur-focus-text",
    previewClass: "shape--blur-fade-words",
    htmlSnippet: "<div class=\"blur-focus-text\">\n  <span>Sincronizando...</span>\n</div>",
    previewHtml: "<div class=\"blur-focus-text is-playing\" data-motion-target>\n  <span>Sincronizando...</span>\n</div>",
    generateCss: (dur, timing) => `.blur-focus-text {
  font-size: 18px;
  font-weight: 800;
  color: #7b6ef6;
  letter-spacing: 2px;
  animation: blurToSharp ${dur}s ${timing} both;
}

@keyframes blurToSharp {
  from {
    filter: blur(14px);
    opacity: 0;
    letter-spacing: 10px;
  }
  to {
    filter: blur(0);
    opacity: 1;
    letter-spacing: 2px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .blur-focus-text { animation: none !important; filter: none !important; opacity: 1 !important; letter-spacing: 2px !important; }
}`
  },
  {
    id: "retro-arcade-text",
    name: "Texto Arcade Retro 3D (Arcade Pop)",
    category: "Texto",
    defaultDuration: 1.2,
    defaultTiming: "ease-in-out",
    timingOptions: ["ease-in-out","linear","ease-out"],
    properties: "transform, text-shadow",
    renderCost: "Composición y Repintado",
    renderCostType: "paint",
    costExplanation: "Sombras duras en capas y saltos rítmicos que evocan estética de 8 bits sin reflujo.",
    description: "Tipografía retro de videojuego arcade con extrusión 3D escalonada en colores vibrantes.",
    targetSelector: ".arcade-text",
    previewClass: "shape--retro-arcade-text",
    htmlSnippet: "<div class=\"arcade-text\">\n  <span>INSERT COIN</span>\n</div>",
    previewHtml: "<div class=\"arcade-text is-playing\" data-motion-target>\n  <span>INSERT COIN</span>\n</div>",
    generateCss: (dur, timing) => `.arcade-text {
  font-family: monospace;
  font-size: 20px;
  font-weight: 900;
  color: #ffbd2e;
  text-shadow: 2px 2px 0px #ff6e65, 4px 4px 0px #7b6ef6;
  animation: arcadeBounce ${dur}s ${timing} infinite;
}

@keyframes arcadeBounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); text-shadow: 2px 6px 0px #ff6e65, 4px 10px 0px #7b6ef6; }
}

@media (prefers-reduced-motion: reduce) {
  .arcade-text { animation: none !important; transform: none !important; }
}`
  },
  {
    id: "tracking-expand",
    name: "Expansión Cinematográfica (Tracking Spread)",
    category: "Texto",
    defaultDuration: 1.4,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "letter-spacing, opacity",
    renderCost: "Repintado / Paint",
    renderCostType: "paint",
    costExplanation: "Apertura suave del espaciado entre letras desde 0px hasta 8px con incremento de opacidad.",
    description: "Efecto de título cinematográfico donde los caracteres se separan lentamente con aura elegante.",
    targetSelector: ".tracking-text",
    previewClass: "shape--tracking-expand",
    htmlSnippet: "<div class=\"tracking-text\">\n  <span>CINEMATIC</span>\n</div>",
    previewHtml: "<div class=\"tracking-text is-playing\" data-motion-target>\n  <span>CINEMATIC</span>\n</div>",
    generateCss: (dur, timing) => `.tracking-text {
  font-size: 16px;
  font-weight: 800;
  color: #fff;
  text-transform: uppercase;
  animation: trackSpread ${dur}s ${timing} both;
}

@keyframes trackSpread {
  from {
    letter-spacing: -2px;
    opacity: 0;
  }
  to {
    letter-spacing: 8px;
    opacity: 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .tracking-text { animation: none !important; opacity: 1 !important; letter-spacing: 8px !important; }
}`
  },
  {
    id: "cipher-decode",
    name: "Decodificación de Matriz (Cipher Text)",
    category: "Texto",
    defaultDuration: 1.5,
    defaultTiming: "steps(6, end)",
    timingOptions: ["steps(6, end)","linear"],
    properties: "opacity, filter",
    renderCost: "Repintado / Paint",
    renderCostType: "paint",
    costExplanation: "Animación de parpadeo escalonado en código binario o terminal de seguridad.",
    description: "Texto que simula el descifrado secuencial de caracteres en una consola de ciberseguridad.",
    targetSelector: ".cipher-text",
    previewClass: "shape--cipher-decode",
    htmlSnippet: "<div class=\"cipher-text\">\n  <span class=\"cipher-prefix\">&gt;</span>\n  <span class=\"cipher-code\">ACCESS_GRANTED</span>\n</div>",
    previewHtml: "<div class=\"cipher-text is-playing\" data-motion-target>\n  <span class=\"cipher-prefix\">&gt;</span>\n  <span class=\"cipher-code\">ACCESS_GRANTED</span>\n</div>",
    generateCss: (dur, timing) => `.cipher-text {
  font-family: monospace;
  font-size: 15px;
  font-weight: 700;
  color: #3ddda8;
  display: inline-flex;
  gap: 8px;
  align-items: center;
}

.cipher-code {
  animation: cipherReveal ${dur}s ${timing} both;
}

@keyframes cipherReveal {
  0% { opacity: 0.2; filter: blur(4px); }
  50% { opacity: 0.7; filter: blur(2px); }
  100% { opacity: 1; filter: blur(0); }
}

@media (prefers-reduced-motion: reduce) {
  .cipher-code { animation: none !important; opacity: 1 !important; filter: none !important; }
}`
  },
  {
    id: "highlight-brush",
    name: "Subrayado Rotulador (Marker Sweep)",
    category: "Texto",
    defaultDuration: 0.6,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "background-size",
    renderCost: "Repintado / Paint",
    renderCostType: "paint",
    costExplanation: "Expansión horizontal de background-size de 0% a 100% como un trazo de rotulador fluorescente.",
    description: "Trazo de marcador de texto que recorre la palabra enfatizando la idea principal.",
    targetSelector: ".marker-highlight",
    previewClass: "shape--highlight-brush",
    htmlSnippet: "<p class=\"marker-paragraph\">Aprende <span class=\"marker-highlight\">CSS Motion</span> profesional.</p>",
    previewHtml: "<p class=\"marker-paragraph is-playing\" data-motion-target>Aprende <span class=\"marker-highlight\">CSS Motion</span> profesional.</p>",
    generateCss: (dur, timing) => `.marker-highlight {
  background-image: linear-gradient(120deg, rgba(123, 110, 246, 0.45) 0%, rgba(61, 221, 168, 0.45) 100%);
  background-repeat: no-repeat;
  background-size: 100% 40%;
  background-position: 0 88%;
  animation: sweepMarker ${dur}s ${timing} both;
}

@keyframes sweepMarker {
  from { background-size: 0% 40%; }
  to { background-size: 100% 40%; }
}

@media (prefers-reduced-motion: reduce) {
  .marker-highlight { animation: none !important; background-size: 100% 40% !important; }
}`
  },
  {
    id: "stamp-press-text",
    name: "Presión Tipográfica (Letterpress Stamp)",
    category: "Texto",
    defaultDuration: 0.45,
    defaultTiming: "cubic-bezier(0.2, 0.8, 0.2, 1)",
    timingOptions: ["cubic-bezier(0.2, 0.8, 0.2, 1)","ease-out"],
    properties: "transform (scale), opacity",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Impacto frontal con compresión en escala (1.4 a 1.0) y rotación mínima simulando un grabado manual.",
    description: "Letras que se hunden con firmeza comunicando solidez editorial o marca registrada.",
    targetSelector: ".stamp-text",
    previewClass: "shape--stamp-press-text",
    htmlSnippet: "<div class=\"stamp-text\">\n  <span>ORIGINAL</span>\n</div>",
    previewHtml: "<div class=\"stamp-text is-playing\" data-motion-target>\n  <span>ORIGINAL</span>\n</div>",
    generateCss: (dur, timing) => `.stamp-text {
  font-size: 22px;
  font-weight: 900;
  letter-spacing: 0.2em;
  color: #ff6e65;
  animation: stampPress ${dur}s ${timing} both;
}

@keyframes stampPress {
  from {
    transform: scale(1.6);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .stamp-text { animation: none !important; opacity: 1 !important; transform: none !important; }
}`
  },
  {
    id: "floating-words",
    name: "Palabras en Levitación Zen (Floating Words)",
    category: "Texto",
    defaultDuration: 3,
    defaultTiming: "ease-in-out",
    timingOptions: ["ease-in-out","linear"],
    properties: "transform (translateY)",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Oscilación sinusoidal en translateY() sin interferir con otros elementos.",
    description: "Balanceo relajante y fluido de texto que transmite ligereza y concentración mental.",
    targetSelector: ".floating-text",
    previewClass: "shape--floating-words",
    htmlSnippet: "<div class=\"floating-text\">\n  <span>Armonía & Flujo</span>\n</div>",
    previewHtml: "<div class=\"floating-text is-playing\" data-motion-target>\n  <span>Armonía & Flujo</span>\n</div>",
    generateCss: (dur, timing) => `.floating-text {
  font-size: 16px;
  font-weight: 700;
  color: #f8f9fe;
  animation: floatZen ${dur}s ${timing} infinite;
}

@keyframes floatZen {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); color: #3ddda8; }
}

@media (prefers-reduced-motion: reduce) {
  .floating-text { animation: none !important; transform: none !important; }
}`
  },
  {
    id: "typewriter-blink-caret",
    name: "Máquina de Escribir con Cursor (Typewriter Caret)",
    category: "Texto",
    defaultDuration: 2.2,
    defaultTiming: "steps(18, end)",
    timingOptions: ["steps(18, end)","linear","ease-in-out"],
    properties: "width, border-color",
    renderCost: "Maquetación y Pintado",
    renderCostType: "layout",
    costExplanation: "Incremento escalonado de width con border-right animado simulando el cursor.",
    description: "Escritura mecánica clásica carácter por carácter con cursor intermitente de fósforo verde.",
    targetSelector: ".typewriter-frame",
    previewClass: "shape--typewriter-blink-caret",
    htmlSnippet: "<div class=\"typewriter-frame\">\n  <span class=\"typewriter-line\">CSS Motion Lab Pro</span>\n</div>",
    previewHtml: "<div class=\"typewriter-frame is-playing\" data-motion-target>\n  <span class=\"typewriter-line\">CSS Motion Lab Pro</span>\n</div>",
    generateCss: (dur, timing) => `.typewriter-line {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid #3ddda8;
  font-family: monospace;
  font-weight: 700;
  animation: typingWidth ${dur}s ${timing} infinite, caretBlink 0.75s step-end infinite;
}

@keyframes typingWidth {
  0% { width: 0; }
  60%, 100% { width: 100%; }
}

@keyframes caretBlink {
  50% { border-color: transparent; }
}

@media (prefers-reduced-motion: reduce) {
  .typewriter-line { animation: none !important; width: 100% !important; border-right: none !important; }
}`
  },
  {
    id: "letter-bounce-drop",
    name: "Letras en Caída Saltarína (Letter Bounce)",
    category: "Texto",
    defaultDuration: 0.8,
    defaultTiming: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    timingOptions: ["cubic-bezier(0.34, 1.56, 0.64, 1)","ease-out","ease-in-out"],
    properties: "transform (translateY), opacity",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Retardo escalonado en cada glifo en translateY sin causar relayout de línea.",
    description: "Cada letra cae desde arriba y rebota elásticamente formando una palabra con dinamismo jovial.",
    targetSelector: ".bounce-word",
    previewClass: "shape--letter-bounce-drop",
    htmlSnippet: "<div class=\"bounce-word\">\n  <span class=\"b-char\" style=\"--c-idx: 0;\">M</span>\n  <span class=\"b-char\" style=\"--c-idx: 1;\">O</span>\n  <span class=\"b-char\" style=\"--c-idx: 2;\">T</span>\n  <span class=\"b-char\" style=\"--c-idx: 3;\">I</span>\n  <span class=\"b-char\" style=\"--c-idx: 4;\">O</span>\n  <span class=\"b-char\" style=\"--c-idx: 5;\">N</span>\n</div>",
    previewHtml: "<div class=\"bounce-word is-playing\" data-motion-target>\n  <span class=\"b-char\" style=\"--c-idx: 0;\">M</span>\n  <span class=\"b-char\" style=\"--c-idx: 1;\">O</span>\n  <span class=\"b-char\" style=\"--c-idx: 2;\">T</span>\n  <span class=\"b-char\" style=\"--c-idx: 3;\">I</span>\n  <span class=\"b-char\" style=\"--c-idx: 4;\">O</span>\n  <span class=\"b-char\" style=\"--c-idx: 5;\">N</span>\n</div>",
    generateCss: (dur, timing) => `.b-char {
  display: inline-block;
  font-weight: 800;
  font-size: 24px;
  color: #7b6ef6;
  animation: letterDropBounce ${dur}s ${timing} both;
  animation-delay: calc(var(--c-idx, 0) * 0.08s);
}

@keyframes letterDropBounce {
  0% { opacity: 0; transform: translateY(-30px); }
  60% { transform: translateY(6px); }
  100% { opacity: 1; transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .b-char { animation: none !important; opacity: 1 !important; transform: none !important; }
}`
  },
  {
    id: "text-scramble-decrypt",
    name: "Decodificación Cibernética (Cipher Decrypt)",
    category: "Texto",
    defaultDuration: 1.5,
    defaultTiming: "ease-in-out",
    timingOptions: ["ease-in-out","linear","cubic-bezier(0.16, 1, 0.3, 1)"],
    properties: "filter, opacity, text-shadow",
    renderCost: "Repintado y Composición",
    renderCostType: "paint",
    costExplanation: "Filtro blur y text-shadow parpadeante para simular terminal de desencriptado.",
    description: "Efecto estilo Matrix donde caracteres encriptados se estabilizan en una palabra nítida.",
    targetSelector: ".decrypt-string",
    previewClass: "shape--text-scramble-decrypt",
    htmlSnippet: "<div class=\"decrypt-string\">\n  <code>[ACCESS_GRANTED]</code>\n</div>",
    previewHtml: "<div class=\"decrypt-string is-playing\" data-motion-target>\n  <code>[ACCESS_GRANTED]</code>\n</div>",
    generateCss: (dur, timing) => `.decrypt-string code {
  color: #3ddda8;
  font-family: monospace;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 2px;
  animation: cipherGlow ${dur}s ${timing} infinite alternate;
}

@keyframes cipherGlow {
  0% { filter: blur(3px); opacity: 0.5; text-shadow: 0 0 10px #3ddda8; }
  50% { filter: blur(1px); opacity: 0.8; }
  100% { filter: blur(0); opacity: 1; text-shadow: 0 0 2px #3ddda8; }
}

@media (prefers-reduced-motion: reduce) {
  .decrypt-string code { animation: none !important; filter: none !important; }
}`
  },
  {
    id: "aurora-text-gradient",
    name: "Gradiente Fluido en Texto (Aurora Gradient)",
    category: "Texto",
    defaultDuration: 3,
    defaultTiming: "linear",
    timingOptions: ["linear","ease-in-out","cubic-bezier(0.16, 1, 0.3, 1)"],
    properties: "background-position",
    renderCost: "Repintado de píxeles",
    renderCostType: "paint",
    costExplanation: "Desplazamiento horizontal continuo en background-position con background-clip: text.",
    description: "Degradado multicolor etéreo que fluye a través de los glifos tipográficos continuamente.",
    targetSelector: ".aurora-text-span",
    previewClass: "shape--aurora-text-gradient",
    htmlSnippet: "<div class=\"aurora-text-wrapper\">\n  <span class=\"aurora-text-span\">FUTURE MOTION</span>\n</div>",
    previewHtml: "<div class=\"aurora-text-wrapper is-playing\" data-motion-target>\n  <span class=\"aurora-text-span\">FUTURE MOTION</span>\n</div>",
    generateCss: (dur, timing) => `.aurora-text-span {
  font-size: 22px;
  font-weight: 800;
  letter-spacing: 1px;
  background: linear-gradient(90deg, #7b6ef6, #3ddda8, #ff6e65, #7b6ef6);
  background-size: 300% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: auroraFlow ${dur}s ${timing} infinite;
}

@keyframes auroraFlow {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}

@media (prefers-reduced-motion: reduce) {
  .aurora-text-span { animation: none !important; }
}`
  },
  {
    id: "3d-text-popout",
    name: "Texto Extruido en Relieve 3D (Text Popout)",
    category: "Texto",
    defaultDuration: 1.2,
    defaultTiming: "ease-in-out",
    timingOptions: ["ease-in-out","cubic-bezier(0.34, 1.56, 0.64, 1)","linear"],
    properties: "transform, text-shadow",
    renderCost: "Repintado y Composición",
    renderCostType: "paint",
    costExplanation: "Capas acumulativas de text-shadow para simular profundidad isométrica con scale().",
    description: "Tipografía de póster retro con volumen físico y sombra proyectada que parece despegarse del fondo.",
    targetSelector: ".popout-text-title",
    previewClass: "shape--3d-text-popout",
    htmlSnippet: "<div class=\"popout-text-container\">\n  <span class=\"popout-text-title\">IMPACT</span>\n</div>",
    previewHtml: "<div class=\"popout-text-container is-playing\" data-motion-target>\n  <span class=\"popout-text-title\">IMPACT</span>\n</div>",
    generateCss: (dur, timing) => `.popout-text-title {
  font-size: 26px;
  font-weight: 900;
  color: #fff;
  letter-spacing: 2px;
  animation: textPop3D ${dur}s ${timing} infinite alternate;
}

@keyframes textPop3D {
  0% {
    transform: translateY(0);
    text-shadow: 1px 1px 0 #7b6ef6, 2px 2px 0 #7b6ef6;
  }
  100% {
    transform: translateY(-6px);
    text-shadow: 1px 1px 0 #7b6ef6, 2px 2px 0 #7b6ef6, 3px 3px 0 #7b6ef6, 4px 4px 0 #7b6ef6, 5px 5px 12px rgba(123, 110, 246, 0.6);
  }
}

@media (prefers-reduced-motion: reduce) {
  .popout-text-title { animation: none !important; transform: none !important; }
}`
  },
  {
    id: "split-flip-text",
    name: "Marcador de Aeropuerto (Split Flip Text)",
    category: "Texto",
    defaultDuration: 0.7,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "transform (rotateX)",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Rotación en perspectiva de 90deg sobre la bisagra horizontal media.",
    description: "Giro mecánico sobre el eje X imitando los paneles de horarios de las estaciones ferroviarias clásicas.",
    targetSelector: ".split-flip-board",
    previewClass: "shape--split-flip-text",
    htmlSnippet: "<div class=\"split-flip-board\">\n  <div class=\"flip-plate\">PARÍS 09:40</div>\n</div>",
    previewHtml: "<div class=\"split-flip-board is-playing\" data-motion-target>\n  <div class=\"flip-plate\">PARÍS 09:40</div>\n</div>",
    generateCss: (dur, timing) => `.flip-plate {
  display: inline-block;
  padding: 8px 16px;
  border-radius: 6px;
  background: #141523;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffbd2e;
  font-family: monospace;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 2px;
  animation: splitFlipX ${dur}s ${timing} infinite;
}

@keyframes splitFlipX {
  0% { transform: perspective(300px) rotateX(0deg); }
  50% { transform: perspective(300px) rotateX(-90deg); opacity: 0.5; }
  100% { transform: perspective(300px) rotateX(0deg); opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .flip-plate { animation: none !important; }
}`
  },
  {
    id: "text-hologram-flicker",
    name: "Holograma con Parpadeo (Hologram Flicker)",
    category: "Texto",
    defaultDuration: 1.8,
    defaultTiming: "linear",
    timingOptions: ["linear","ease-in-out","cubic-bezier(0.16, 1, 0.3, 1)"],
    properties: "opacity, text-shadow, transform",
    renderCost: "Repintado y Composición",
    renderCostType: "paint",
    costExplanation: "Parpadeo estroboscópico sutil con resplandor cian y desvío mínimo en translateX.",
    description: "Proyección holográfica de ciencia ficción con líneas de escaneo tenues y micro-aberración cromática.",
    targetSelector: ".hologram-word",
    previewClass: "shape--text-hologram-flicker",
    htmlSnippet: "<div class=\"hologram-word\">\n  <span>TRANSMISIÓN VIVA</span>\n</div>",
    previewHtml: "<div class=\"hologram-word is-playing\" data-motion-target>\n  <span>TRANSMISIÓN VIVA</span>\n</div>",
    generateCss: (dur, timing) => `.hologram-word span {
  font-size: 16px;
  font-weight: 800;
  letter-spacing: 3px;
  color: #3ddda8;
  text-shadow: 0 0 8px rgba(61, 221, 168, 0.7);
  animation: holoFlicker ${dur}s ${timing} infinite;
}

@keyframes holoFlicker {
  0%, 100% { opacity: 0.95; transform: skewX(0); }
  23% { opacity: 0.75; transform: skewX(-2deg); }
  24% { opacity: 0.95; transform: skewX(0); }
  68% { opacity: 0.6; transform: skewX(3deg); }
  70% { opacity: 0.95; transform: skewX(0); }
}

@media (prefers-reduced-motion: reduce) {
  .hologram-word span { animation: none !important; }
}`
  },
  {
    id: "underline-draw-brush",
    name: "Subrayado en Trazo de Pincel (Underline Draw)",
    category: "Texto",
    defaultDuration: 0.8,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "transform (scaleX)",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Línea decorativa con scaleX(0) a scaleX(1) y transform-origin: left.",
    description: "Efecto de rotulador que dibuja una línea viva debajo del texto importante para guiar la lectura.",
    targetSelector: ".brush-underline-title",
    previewClass: "shape--underline-draw-brush",
    htmlSnippet: "<div class=\"brush-underline-wrap\">\n  <h4 class=\"brush-underline-title\">Diseño de Vanguardia</h4>\n  <div class=\"brush-line\"></div>\n</div>",
    previewHtml: "<div class=\"brush-underline-wrap is-playing\" data-motion-target>\n  <h4 class=\"brush-underline-title\">Diseño de Vanguardia</h4>\n  <div class=\"brush-line\"></div>\n</div>",
    generateCss: (dur, timing) => `.brush-line {
  height: 3px;
  border-radius: 2px;
  background: #7b6ef6;
  transform-origin: left center;
  animation: lineDraw ${dur}s ${timing} infinite alternate;
}

@keyframes lineDraw {
  0% { transform: scaleX(0); }
  100% { transform: scaleX(1); }
}

@media (prefers-reduced-motion: reduce) {
  .brush-line { animation: none !important; transform: scaleX(1) !important; }
}`
  },
  {
    id: "letter-spread-hover",
    name: "Espaciado Tipográfico Expansivo (Letter Spread)",
    category: "Texto",
    defaultDuration: 1.2,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-in-out","linear"],
    properties: "letter-spacing, opacity",
    renderCost: "Maquetación y Pintado",
    renderCostType: "layout",
    costExplanation: "Modulación de letter-spacing entre 1px y 8px con interpolación tipográfica suave.",
    description: "Apertura cinematográfica del interletrado que confiere un aura de majestuosidad y elegancia.",
    targetSelector: ".letter-spread-box",
    previewClass: "shape--letter-spread-hover",
    htmlSnippet: "<div class=\"letter-spread-box\">\n  <span>MINIMALISMO</span>\n</div>",
    previewHtml: "<div class=\"letter-spread-box is-playing\" data-motion-target>\n  <span>MINIMALISMO</span>\n</div>",
    generateCss: (dur, timing) => `.letter-spread-box span {
  font-size: 16px;
  font-weight: 800;
  color: #fff;
  animation: spreadLetters ${dur}s ${timing} infinite alternate;
}

@keyframes spreadLetters {
  0% { letter-spacing: 1px; }
  100% { letter-spacing: 8px; }
}

@media (prefers-reduced-motion: reduce) {
  .letter-spread-box span { animation: none !important; letter-spacing: 3px !important; }
}`
  },
  {
    id: "smoke-blur-dissolve",
    name: "Dispersión en Humo Suave (Smoke Dissolve)",
    category: "Texto",
    defaultDuration: 1.5,
    defaultTiming: "ease-in-out",
    timingOptions: ["ease-in-out","linear","cubic-bezier(0.16, 1, 0.3, 1)"],
    properties: "filter, transform, opacity",
    renderCost: "Repintado y Composición",
    renderCostType: "paint",
    costExplanation: "Filtro blur() gradual combinado con scale(1.15) y desvanecimiento de opacidad a cero.",
    description: "Desvanecimiento etéreo donde la tipografía parece evaporarse como una bocanada de niebla.",
    targetSelector: ".smoke-dissolve-text",
    previewClass: "shape--smoke-blur-dissolve",
    htmlSnippet: "<div class=\"smoke-dissolve-text\">\n  <span>EFÍMERO</span>\n</div>",
    previewHtml: "<div class=\"smoke-dissolve-text is-playing\" data-motion-target>\n  <span>EFÍMERO</span>\n</div>",
    generateCss: (dur, timing) => `.smoke-dissolve-text span {
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 4px;
  color: #a79bfd;
  animation: smokeDissolve ${dur}s ${timing} infinite alternate;
}

@keyframes smokeDissolve {
  0% { filter: blur(0); opacity: 1; transform: scale(1); }
  100% { filter: blur(10px); opacity: 0.15; transform: scale(1.2); }
}

@media (prefers-reduced-motion: reduce) {
  .smoke-dissolve-text span { animation: none !important; filter: none !important; }
}`
  }
];
