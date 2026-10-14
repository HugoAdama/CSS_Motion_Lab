export const animations = [
  {
    id: 'fade-in',
    name: 'Fade in',
    category: 'Entrada',
    defaultDuration: 0.7,
    defaultTiming: 'cubic-bezier(0.16, 1, 0.3, 1)',
    timingOptions: ['ease-out', 'ease-in-out', 'linear', 'cubic-bezier(0.16, 1, 0.3, 1)'],
    properties: 'opacity, transform',
    renderCost: 'Favorables para composición',
    renderCostType: 'composite',
    costExplanation: 'Propiedades como transform y opacity suelen delegarse al hilo compositor sin recalcular la geometría. El navegador decide en cada dispositivo y contexto si las promueve a una capa acelerada.',
    description: 'Aparición suave con incremento de opacidad y desplazamiento vertical leve.',
    targetSelector: '.toast-card',
    previewClass: 'shape--fade-in',
    htmlSnippet: `<div class="toast-card">
  <span class="toast-icon">OK</span>
  <div class="toast-info">
    <strong>Guardado con éxito</strong>
    <p>Tus cambios han sido sincronizados.</p>
  </div>
</div>`,
    generateCss: (dur, timing) => `.toast-card {
  animation: fadeIn ${dur}s ${timing} both;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Modo movimiento reducido */
@media (prefers-reduced-motion: reduce) {
  .toast-card {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}`,
  },
  {
    id: 'slide-in',
    name: 'Slide in',
    category: 'Entrada',
    defaultDuration: 0.65,
    defaultTiming: 'cubic-bezier(0.16, 1, 0.3, 1)',
    timingOptions: ['ease-out', 'ease-in-out', 'linear', 'cubic-bezier(0.16, 1, 0.3, 1)'],
    properties: 'opacity, transform',
    renderCost: 'Favorables para composición',
    renderCostType: 'composite',
    costExplanation: 'Usa transform en lugar de left o margin-left para evitar disparar la fase de layout en cada cuadro.',
    description: 'Desplazamiento lateral desde el margen con aceleración natural y desaceleración suave.',
    targetSelector: '.nav-chip',
    previewClass: 'shape--slide-in',
    htmlSnippet: `<div class="nav-chip">
  <span class="chip-dot"></span>
  <span class="chip-text">Panel lateral activo</span>
  <span class="chip-arrow">&rarr;</span>
</div>`,
    generateCss: (dur, timing) => `.nav-chip {
  animation: slideIn ${dur}s ${timing} both;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-36px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .nav-chip {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}`,
  },
  {
    id: 'bounce',
    name: 'Bounce',
    category: 'Énfasis',
    defaultDuration: 0.85,
    defaultTiming: 'cubic-bezier(0.28, 0.84, 0.42, 1)',
    timingOptions: ['cubic-bezier(0.28, 0.84, 0.42, 1)', 'ease-out', 'ease-in-out', 'linear'],
    properties: 'transform',
    renderCost: 'Favorables para composición',
    renderCostType: 'composite',
    costExplanation: 'Anima translateY y scaleY sobre el compositor sin alterar la posición de los elementos adyacentes en el DOM.',
    description: 'Rebote elástico en el eje vertical para capturar la atención en alertas o notificaciones.',
    targetSelector: '.bell-badge',
    previewClass: 'shape--bounce',
    htmlSnippet: `<div class="bell-badge">
  <div class="bell-icon">Aviso</div>
  <span class="bell-count">3</span>
</div>`,
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
}`,
  },
  {
    id: 'pulse',
    name: 'Pulse',
    category: 'Énfasis',
    defaultDuration: 1.6,
    defaultTiming: 'ease-in-out',
    timingOptions: ['ease-in-out', 'ease-out', 'linear', 'cubic-bezier(0.16, 1, 0.3, 1)'],
    properties: 'transform, box-shadow',
    renderCost: 'Composición y Repintado',
    renderCostType: 'paint',
    costExplanation: 'transform escala el núcleo de forma económica, pero animar el radio de box-shadow requiere rasterizado adicional (paint) en cada ciclo.',
    description: 'Efecto de latido continuo con onda expansiva para estados activos o transmisiones en directo.',
    targetSelector: '.status-beacon',
    previewClass: 'shape--pulse',
    htmlSnippet: `<div class="status-beacon">
  <span class="beacon-ring"></span>
  <span class="beacon-dot"></span>
  <span class="beacon-label">SISTEMA ONLINE</span>
</div>`,
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
}`,
  },
  {
    id: 'shake',
    name: 'Shake',
    category: 'Énfasis',
    defaultDuration: 0.5,
    defaultTiming: 'ease-in-out',
    timingOptions: ['ease-in-out', 'linear', 'ease-out', 'cubic-bezier(0.16, 1, 0.3, 1)'],
    properties: 'transform',
    renderCost: 'Favorables para composición',
    renderCostType: 'composite',
    costExplanation: 'Oscila translateX sin desplazar ni afectar el flujo del documento.',
    description: 'Oscilación horizontal enérgica para comunicar accesos denegados o validaciones erróneas.',
    targetSelector: '.input-alert',
    previewClass: 'shape--shake',
    htmlSnippet: `<div class="input-alert">
  <span class="alert-icon">!</span>
  <span class="alert-text">Error de acceso</span>
</div>`,
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
}`,
  },
  {
    id: 'spinner',
    name: 'Spinner',
    category: 'Carga',
    defaultDuration: 0.9,
    defaultTiming: 'linear',
    timingOptions: ['linear', 'ease-in-out', 'cubic-bezier(0.5, 0, 0.5, 1)'],
    properties: 'transform',
    renderCost: 'Favorables para composición',
    renderCostType: 'composite',
    costExplanation: 'Giro continuo de 360 grados mediante rotate() que el hilo compositor puede refrescar eficientemente.',
    description: 'Rotación continua sobre un anillo con borde acentuado para indicar estados de espera.',
    targetSelector: '.spinner-ring',
    previewClass: 'shape--spinner',
    htmlSnippet: `<div class="spinner-ring" role="status" aria-label="Cargando"></div>`,
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
}`,
  },
  {
    id: 'typing',
    name: 'Typing',
    category: 'Texto',
    defaultDuration: 2.4,
    defaultTiming: 'steps(22, end)',
    timingOptions: ['steps(22, end)', 'steps(14, end)', 'linear', 'ease-out'],
    properties: 'width, border-color',
    renderCost: 'Layout / Reflow (ancho)',
    renderCostType: 'layout',
    costExplanation: 'Animar width altera la geometría de la caja de texto en cada frame, disparando recálculos de diseño (layout).',
    description: 'Revelación secuencial del texto letra por letra mediante recorte de anchura y parpadeo de cursor.',
    targetSelector: '.typing-text',
    previewClass: 'shape--typing',
    htmlSnippet: `<div class="terminal-box">
  <span class="terminal-prompt">$</span>
  <span class="typing-text">console.log("Motion!");</span>
</div>`,
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
}`,
  },
  {
    id: 'hover-lift',
    name: 'Hover lift',
    category: 'Interacción',
    defaultDuration: 0.24,
    defaultTiming: 'cubic-bezier(0.16, 1, 0.3, 1)',
    timingOptions: ['cubic-bezier(0.16, 1, 0.3, 1)', 'ease-out', 'ease-in-out', 'linear'],
    properties: 'transform, box-shadow',
    renderCost: 'Composición y Repintado',
    renderCostType: 'paint',
    costExplanation: 'Se activa solo ante interacción (hover o focus-visible), combinando elevación por transform y proyección de sombra.',
    description: 'Elevación tridimensional con proyección de sombra acentuada ante el puntero o navegación por teclado.',
    targetSelector: '.card-interactive',
    previewClass: 'shape--hover-lift',
    htmlSnippet: `<div class="card-interactive" tabindex="0">
  <strong>Pasa el cursor</strong>
  <small>o presiona Tab</small>
</div>`,
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
}`,
  },

  /* =======================================================
     NUEVOS PATRONES DE INTERFAZ (ANIMACIONES COMPUESTAS)
     ======================================================= */
  {
    id: 'staggered-reveal',
    name: 'Staggered reveal',
    category: 'Patrones UI',
    defaultDuration: 0.5,
    defaultTiming: 'cubic-bezier(0.16, 1, 0.3, 1)',
    timingOptions: ['cubic-bezier(0.16, 1, 0.3, 1)', 'ease-out', 'ease-in-out', 'linear'],
    properties: 'opacity, transform',
    renderCost: 'Favorables para composición',
    renderCostType: 'composite',
    costExplanation: 'Cada elemento anima su propia opacidad y desplazamiento usando una variable de retraso escalonado (--stagger-delay).',
    description: 'Aparición secuencial y ordenada de elementos de una lista o menú para guiar el flujo visual del usuario.',
    targetSelector: '.stagger-list',
    previewClass: 'shape--stagger',
    defaultStaggerDelay: 0.1,
    hasStaggerControl: true,
    htmlSnippet: `<ul class="stagger-list">
  <li class="stagger-item" style="--stagger-index: 0;">
    <span class="stagger-bullet">1</span>
    <span class="stagger-text">Primer elemento cargado</span>
  </li>
  <li class="stagger-item" style="--stagger-index: 1;">
    <span class="stagger-bullet">2</span>
    <span class="stagger-text">Segundo elemento cargado</span>
  </li>
  <li class="stagger-item" style="--stagger-index: 2;">
    <span class="stagger-bullet">3</span>
    <span class="stagger-text">Tercer elemento cargado</span>
  </li>
</ul>`,
    generateCss: (dur, timing, staggerDelay = 0.1) => `.stagger-list {
  --stagger-delay: ${staggerDelay}s;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.stagger-item {
  animation: staggerFadeIn ${dur}s ${timing} both;
  animation-delay: calc(var(--stagger-index, 0) * var(--stagger-delay, 0.1s));
}

@keyframes staggerFadeIn {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Modo movimiento reducido: Muestra todos los elementos al instante */
@media (prefers-reduced-motion: reduce) {
  .stagger-item {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}`,
  },
  {
    id: 'toast-lifecycle',
    name: 'Toast entrada y salida',
    category: 'Patrones UI',
    defaultDuration: 3.5,
    defaultTiming: 'cubic-bezier(0.16, 1, 0.3, 1)',
    timingOptions: ['cubic-bezier(0.16, 1, 0.3, 1)', 'ease-in-out', 'ease-out'],
    properties: 'opacity, transform',
    renderCost: 'Favorables para composición',
    renderCostType: 'composite',
    costExplanation: 'Ciclo completo de vida de una notificación flotante: entrada suave, pausa de lectura y salida hacia el margen.',
    description: 'Notificación temporal completa con transición coordinada de entrada, permanencia y salida automática.',
    targetSelector: '.toast-lifecycle',
    previewClass: 'shape--toast-lifecycle',
    htmlSnippet: `<div class="toast-lifecycle">
  <div class="toast-banner">
    <span class="toast-badge">Info</span>
    <div class="toast-msg">
      <strong>Proceso finalizado</strong>
      <p>El archivo se descargó correctamente.</p>
    </div>
    <button class="toast-close-btn" type="button" aria-label="Cerrar notificación">&times;</button>
  </div>
</div>`,
    generateCss: (dur, timing) => `.toast-banner {
  display: flex;
  align-items: center;
  gap: 12px;
  animation: toastCycle ${dur}s ${timing} both;
}

@keyframes toastCycle {
  0% {
    opacity: 0;
    transform: translateY(24px) scale(0.95);
  }
  14%, 82% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  100% {
    opacity: 0;
    transform: translateY(-16px) scale(0.98);
  }
}

@media (prefers-reduced-motion: reduce) {
  .toast-banner {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}`,
  },
  {
    id: 'skeleton-shimmer',
    name: 'Skeleton shimmer',
    category: 'Patrones UI',
    defaultDuration: 1.8,
    defaultTiming: 'ease-in-out',
    timingOptions: ['ease-in-out', 'linear', 'ease-out'],
    properties: 'background-position',
    renderCost: 'Repintado / Paint (gradiente)',
    renderCostType: 'paint',
    costExplanation: 'El brillo reflectante anima la propiedad background-position sobre un gradiente de 200% de anchura, requiriendo rasterizado de color continuo.',
    description: 'Marcador de posición con onda de luz continua que comunica carga de datos estructurados.',
    targetSelector: '.skeleton-card',
    previewClass: 'shape--skeleton',
    htmlSnippet: `<div class="skeleton-card" role="status" aria-label="Cargando contenido">
  <div class="skeleton-avatar"></div>
  <div class="skeleton-lines">
    <div class="skeleton-line skeleton-line--title"></div>
    <div class="skeleton-line skeleton-line--body"></div>
  </div>
</div>`,
    generateCss: (dur, timing) => `.skeleton-card .skeleton-avatar,
.skeleton-card .skeleton-line {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.18) 50%,
    rgba(255, 255, 255, 0.05) 100%
  );
  background-size: 200% 100%;
  animation: shimmer ${dur}s ${timing} infinite;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* Modo movimiento reducido: Mantiene un color neutro fijo sin oscilaciones */
@media (prefers-reduced-motion: reduce) {
  .skeleton-card .skeleton-avatar,
  .skeleton-card .skeleton-line {
    animation: none !important;
    background: rgba(255, 255, 255, 0.08) !important;
  }
}`,
  },
  {
    id: 'accordion',
    name: 'Acordeón colapsable',
    category: 'Patrones UI',
    defaultDuration: 0.35,
    defaultTiming: 'cubic-bezier(0.16, 1, 0.3, 1)',
    timingOptions: ['cubic-bezier(0.16, 1, 0.3, 1)', 'ease-out', 'ease-in-out', 'linear'],
    properties: 'grid-template-rows, transform',
    renderCost: 'Layout y Composición',
    renderCostType: 'layout',
    costExplanation: 'Usa CSS Grid con grid-template-rows (0fr a 1fr) para una expansión suave a altura intrínseca sin depender de alturas fijas en JavaScript.',
    description: 'Panel de contenido que se expande y contrae con transición fluida y rotación de indicador.',
    targetSelector: '.accordion-item',
    previewClass: 'shape--accordion',
    htmlSnippet: `<div class="accordion-item is-open">
  <button class="accordion-trigger" type="button" aria-expanded="true">
    <span>¿Cómo integrar esta animación?</span>
    <span class="accordion-arrow">&darr;</span>
  </button>
  <div class="accordion-content">
    <div class="accordion-inner">
      <p>Copia el bloque completo de HTML y CSS coordinados y pégalo directamente en tu proyecto.</p>
    </div>
  </div>
</div>`,
    generateCss: (dur, timing) => `.accordion-item {
  border-radius: 12px;
  overflow: hidden;
}

.accordion-trigger {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
}

.accordion-arrow {
  transition: transform ${dur}s ${timing};
}

.accordion-item.is-open .accordion-arrow {
  transform: rotate(180deg);
}

.accordion-content {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows ${dur}s ${timing};
}

.accordion-item.is-open .accordion-content {
  grid-template-rows: 1fr;
}

.accordion-inner {
  overflow: hidden;
}

/* Modo movimiento reducido: Expansión instantánea sin transición */
@media (prefers-reduced-motion: reduce) {
  .accordion-arrow,
  .accordion-content {
    transition: none !important;
  }
}`,
  },
];

export const categories = ['Todas', 'Patrones UI', 'Entrada', 'Énfasis', 'Carga', 'Texto', 'Interacción'];
