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
  {
    id: 'modal-backdrop',
    name: 'Modal con Desenfoque y Pop',
    category: 'Patrones UI',
    defaultDuration: 0.4,
    defaultTiming: 'cubic-bezier(0.16, 1, 0.3, 1)',
    timingOptions: ['cubic-bezier(0.16, 1, 0.3, 1)', 'ease-out', 'ease-in-out', 'linear'],
    properties: 'opacity, transform, backdrop-filter',
    renderCost: 'Favorables para composición',
    renderCostType: 'composite',
    costExplanation: 'Combina desvanecimiento en el overlay y escala con transform en el diálogo, delegando la animación al hilo compositor.',
    description: 'Apertura de ventana modal con fondo oscurecido, desenfoque progresivo y entrada por escala con rebote contenido.',
    targetSelector: '.dialog-surface',
    previewClass: 'shape--modal',
    htmlSnippet: `<div class="dialog-overlay">
  <div class="dialog-surface" role="dialog" aria-modal="true" aria-labelledby="dialog-title">
    <div class="dialog-header">
      <span class="dialog-title" id="dialog-title">Confirmar cambios</span>
      <span class="dialog-badge">Producción</span>
    </div>
    <p class="dialog-desc">¿Deseas desplegar la nueva versión al servidor público?</p>
    <div class="dialog-actions">
      <button class="dialog-btn dialog-btn--ghost" type="button">Cancelar</button>
      <button class="dialog-btn dialog-btn--primary" type="button">Confirmar</button>
    </div>
  </div>
</div>`,
    generateCss: (dur, timing) => `.dialog-overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(8, 9, 15, 0.6);
  backdrop-filter: blur(4px);
  animation: overlayFade ${dur}s ${timing} both;
}

.dialog-surface {
  background: #141523;
  border: 1px solid rgba(123, 110, 246, 0.25);
  border-radius: 16px;
  animation: dialogPop ${dur}s ${timing} both;
}

@keyframes overlayFade {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes dialogPop {
  from {
    opacity: 0;
    transform: scale(0.92) translateY(10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .dialog-overlay,
  .dialog-surface {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}`,
  },
  {
    id: 'bottom-sheet',
    name: 'Bottom Sheet Móvil',
    category: 'Patrones UI',
    defaultDuration: 0.45,
    defaultTiming: 'cubic-bezier(0.16, 1, 0.3, 1)',
    timingOptions: ['cubic-bezier(0.16, 1, 0.3, 1)', 'ease-out', 'ease-in-out'],
    properties: 'transform, opacity',
    renderCost: 'Favorables para composición',
    renderCostType: 'composite',
    costExplanation: 'El panel asciende desde el borde inferior de la pantalla utilizando translateY(), manteniendo la fluidez a 60 fps en móviles.',
    description: 'Hoja de acciones contextual deslizante desde la parte inferior, con tirador táctil y opciones rápidas.',
    targetSelector: '.sheet-drawer',
    previewClass: 'shape--bottom-sheet',
    htmlSnippet: `<div class="sheet-container">
  <div class="sheet-drawer">
    <div class="sheet-handle"></div>
    <div class="sheet-header">
      <strong>Opciones del recurso</strong>
      <span class="sheet-meta">3 acciones disponibles</span>
    </div>
    <div class="sheet-options">
      <div class="sheet-option">
        <span class="sheet-icon">1</span>
        <span>Compartir enlace</span>
      </div>
      <div class="sheet-option">
        <span class="sheet-icon">2</span>
        <span>Duplicar configuración</span>
      </div>
    </div>
  </div>
</div>`,
    generateCss: (dur, timing) => `.sheet-drawer {
  width: 100%;
  border-radius: 16px 16px 0 0;
  animation: slideUpSheet ${dur}s ${timing} both;
}

@keyframes slideUpSheet {
  from {
    transform: translateY(100%);
    opacity: 0.4;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .sheet-drawer {
    animation: none !important;
    transform: none !important;
    opacity: 1 !important;
  }
}`,
  },
  {
    id: 'border-beam',
    name: 'Borde Radiante (Conic Beam)',
    category: 'Énfasis',
    defaultDuration: 3.0,
    defaultTiming: 'linear',
    timingOptions: ['linear', 'ease-in-out', 'ease-out'],
    properties: 'transform (rotate)',
    renderCost: 'Favorables para composición',
    renderCostType: 'composite',
    costExplanation: 'Gira un plano degradado cónico mediante rotate() detrás de una máscara interior, generando el haz de luz sin repintar bordes.',
    description: 'Haz luminoso continuo que recorre el perímetro de la tarjeta para destacar elementos premium o planes destacados.',
    targetSelector: '.radiant-card',
    previewClass: 'shape--border-beam',
    htmlSnippet: `<div class="radiant-card">
  <div class="radiant-beam"></div>
  <div class="radiant-body">
    <span class="radiant-badge">DESTACADO</span>
    <strong>Plan Ilimitado</strong>
    <p>Rendimiento acelerado y soporte técnico.</p>
  </div>
</div>`,
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
}`,
  },
  {
    id: 'progress-ring',
    name: 'Anillo de Progreso SVG',
    category: 'Carga',
    defaultDuration: 1.5,
    defaultTiming: 'cubic-bezier(0.16, 1, 0.3, 1)',
    timingOptions: ['cubic-bezier(0.16, 1, 0.3, 1)', 'ease-out', 'ease-in-out', 'linear'],
    properties: 'stroke-dashoffset',
    renderCost: 'Repintado / Paint (SVG)',
    renderCostType: 'paint',
    costExplanation: 'Actualiza el desfase del trazo perimétrico en el espacio vectorial SVG. Ideal para indicadores de carga cuantificables.',
    description: 'Círculo de progreso animado que se llena fluidamente hasta el 80% con indicador de porcentaje central.',
    targetSelector: '.ring-progress-circle',
    previewClass: 'shape--progress-ring',
    htmlSnippet: `<div class="progress-ring-card">
  <div class="ring-wrapper">
    <svg class="ring-svg" width="64" height="64" viewBox="0 0 64 64">
      <circle class="ring-bg" cx="32" cy="32" r="26"></circle>
      <circle class="ring-progress-circle" cx="32" cy="32" r="26"></circle>
    </svg>
    <span class="ring-percent">80%</span>
  </div>
  <div class="ring-info">
    <strong>Sincronizando</strong>
    <p>Descargando paquetes...</p>
  </div>
</div>`,
    generateCss: (dur, timing) => `.ring-progress-circle {
  fill: none;
  stroke: #7b6ef6;
  stroke-width: 4.5;
  stroke-linecap: round;
  stroke-dasharray: 163.36; /* 2 * PI * 26 */
  stroke-dashoffset: 163.36;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  animation: fillRing ${dur}s ${timing} both;
}

@keyframes fillRing {
  from { stroke-dashoffset: 163.36; }
  to { stroke-dashoffset: 32.67; } /* 80% */
}

@media (prefers-reduced-motion: reduce) {
  .ring-progress-circle {
    animation: none !important;
    stroke-dashoffset: 32.67 !important;
  }
}`,
  },
  {
    id: 'flip-card',
    name: 'Tarjeta 3D Flip',
    category: 'Interacción',
    defaultDuration: 0.6,
    defaultTiming: 'cubic-bezier(0.16, 1, 0.3, 1)',
    timingOptions: ['cubic-bezier(0.16, 1, 0.3, 1)', 'ease-out', 'ease-in-out'],
    properties: 'transform (rotateY)',
    renderCost: 'Favorables para composición',
    renderCostType: 'composite',
    costExplanation: 'Utiliza perspective: 1000px y rotateY(180deg) con transform-style: preserve-3d para realizar una rotación espacial fluida.',
    description: 'Giro tridimensional que revela información adicional en el reverso al pasar el cursor, presionar Tab o hacer clic.',
    targetSelector: '.flip-inner',
    previewClass: 'shape--flip-card',
    htmlSnippet: `<div class="flip-wrapper" tabindex="0">
  <div class="flip-inner">
    <div class="flip-face flip-front">
      <span class="flip-tag">Frente</span>
      <strong>Pase Digital</strong>
      <small>Pasa el cursor o presiona Tab</small>
    </div>
    <div class="flip-face flip-back">
      <span class="flip-tag flip-tag--alt">Reverso</span>
      <strong>Código de Acceso</strong>
      <code class="flip-code">#CSS-8902</code>
    </div>
  </div>
</div>`,
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
}`,
  },
];

export const categories = ['Todas', 'Patrones UI', 'Entrada', 'Énfasis', 'Carga', 'Texto', 'Interacción'];
