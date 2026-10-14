// Catálogo de animaciones: Patrones UI (10 ejemplos)

export const patternsAnimations = [
  {
    id: "staggered-reveal",
    name: "Staggered reveal",
    category: "Patrones UI",
    defaultDuration: 0.5,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out","linear"],
    properties: "opacity, transform",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Cada elemento anima su propia opacidad y desplazamiento usando una variable de retraso escalonado (--stagger-delay).",
    description: "Aparición secuencial y ordenada de elementos de una lista o menú para guiar el flujo visual del usuario.",
    targetSelector: ".stagger-list",
    previewClass: "shape--stagger",
    defaultStaggerDelay: 0.1,
    hasStaggerControl: true,
    htmlSnippet: "<ul class=\"stagger-list\">\n  <li class=\"stagger-item\" style=\"--stagger-index: 0;\">\n    <span class=\"stagger-bullet\">1</span>\n    <span class=\"stagger-text\">Primer elemento cargado</span>\n  </li>\n  <li class=\"stagger-item\" style=\"--stagger-index: 1;\">\n    <span class=\"stagger-bullet\">2</span>\n    <span class=\"stagger-text\">Segundo elemento cargado</span>\n  </li>\n  <li class=\"stagger-item\" style=\"--stagger-index: 2;\">\n    <span class=\"stagger-bullet\">3</span>\n    <span class=\"stagger-text\">Tercer elemento cargado</span>\n  </li>\n</ul>",
    previewHtml: "<ul class=\"stagger-list is-playing\" data-motion-target>\n  <li class=\"stagger-item\" style=\"--stagger-index: 0;\">\n    <span class=\"stagger-bullet\">1</span>\n    <span class=\"stagger-text\">Primer elemento cargado</span>\n  </li>\n  <li class=\"stagger-item\" style=\"--stagger-index: 1;\">\n    <span class=\"stagger-bullet\">2</span>\n    <span class=\"stagger-text\">Segundo elemento cargado</span>\n  </li>\n  <li class=\"stagger-item\" style=\"--stagger-index: 2;\">\n    <span class=\"stagger-bullet\">3</span>\n    <span class=\"stagger-text\">Tercer elemento cargado</span>\n  </li>\n</ul>",
    generateCss: (dur, timing, stagger = 0.1) => `.stagger-list {
  --stagger-delay: ${stagger}s;
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

@media (prefers-reduced-motion: reduce) {
  .stagger-item {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}`
  },
  {
    id: "toast-lifecycle",
    name: "Toast entrada y salida",
    category: "Patrones UI",
    defaultDuration: 3.5,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-in-out","ease-out"],
    properties: "opacity, transform",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Ciclo completo de vida de una notificación flotante: entrada suave, pausa de lectura y salida hacia el margen.",
    description: "Notificación temporal completa con transición coordinada de entrada, permanencia y salida automática.",
    targetSelector: ".toast-banner",
    previewClass: "shape--toast-lifecycle",
    htmlSnippet: "<div class=\"toast-lifecycle\">\n  <div class=\"toast-banner\">\n    <span class=\"toast-badge\">Info</span>\n    <div class=\"toast-msg\">\n      <strong>Proceso finalizado</strong>\n      <p>El archivo se descargó correctamente.</p>\n    </div>\n    <button class=\"toast-close-btn\" type=\"button\" aria-label=\"Cerrar notificación\">&times;</button>\n  </div>\n</div>",
    previewHtml: "<div class=\"toast-lifecycle-preview\" data-motion-target>\n  <div class=\"toast-banner is-playing\">\n    <span class=\"toast-badge\">Info</span>\n    <div class=\"toast-msg\">\n      <strong>Proceso finalizado</strong>\n      <p>El archivo se descargó correctamente.</p>\n    </div>\n    <button class=\"toast-close-btn\" type=\"button\" aria-label=\"Cerrar notificación\">&times;</button>\n  </div>\n</div>",
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
}`
  },
  {
    id: "skeleton-shimmer",
    name: "Skeleton shimmer",
    category: "Patrones UI",
    defaultDuration: 1.8,
    defaultTiming: "ease-in-out",
    timingOptions: ["ease-in-out","linear","ease-out"],
    properties: "background-position",
    renderCost: "Repintado / Paint (gradiente)",
    renderCostType: "paint",
    costExplanation: "El brillo reflectante anima la propiedad background-position sobre un gradiente de 200% de anchura, requiriendo rasterizado de color continuo.",
    description: "Marcador de posición con onda de luz continua que comunica carga de datos estructurados.",
    targetSelector: ".skeleton-card",
    previewClass: "shape--skeleton",
    htmlSnippet: "<div class=\"skeleton-card\" role=\"status\" aria-label=\"Cargando contenido\">\n  <div class=\"skeleton-avatar\"></div>\n  <div class=\"skeleton-lines\">\n    <div class=\"skeleton-line skeleton-line--title\"></div>\n    <div class=\"skeleton-line skeleton-line--body\"></div>\n  </div>\n</div>",
    previewHtml: "<div class=\"skeleton-card is-playing\" data-motion-target role=\"status\" aria-label=\"Cargando contenido\">\n  <div class=\"skeleton-avatar\"></div>\n  <div class=\"skeleton-lines\">\n    <div class=\"skeleton-line skeleton-line--title\"></div>\n    <div class=\"skeleton-line skeleton-line--body\"></div>\n  </div>\n</div>",
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

@media (prefers-reduced-motion: reduce) {
  .skeleton-card .skeleton-avatar,
  .skeleton-card .skeleton-line {
    animation: none !important;
    background: rgba(255, 255, 255, 0.08) !important;
  }
}`
  },
  {
    id: "accordion",
    name: "Acordeón colapsable",
    category: "Patrones UI",
    defaultDuration: 0.35,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out","linear"],
    properties: "grid-template-rows, transform",
    renderCost: "Layout y Composición",
    renderCostType: "layout",
    costExplanation: "Usa CSS Grid con grid-template-rows (0fr a 1fr) para una expansión suave a altura intrínseca sin depender de alturas fijas en JavaScript.",
    description: "Panel de contenido que se expande y contrae con transición fluida y rotación de indicador.",
    targetSelector: ".accordion-item",
    previewClass: "shape--accordion",
    htmlSnippet: "<div class=\"accordion-item is-open\">\n  <button class=\"accordion-trigger\" type=\"button\" aria-expanded=\"true\">\n    <span>¿Cómo integrar esta animación?</span>\n    <span class=\"accordion-arrow\">&darr;</span>\n  </button>\n  <div class=\"accordion-content\">\n    <div class=\"accordion-inner\">\n      <p>Copia el bloque completo de HTML y CSS coordinados y pégalo directamente en tu proyecto.</p>\n    </div>\n  </div>\n</div>",
    previewHtml: "<div class=\"accordion-item is-open\" data-motion-target data-accordion-widget>\n  <button class=\"accordion-trigger\" type=\"button\" aria-expanded=\"true\">\n    <span>¿Cómo integrar esta animación?</span>\n    <span class=\"accordion-arrow\">&darr;</span>\n  </button>\n  <div class=\"accordion-content\">\n    <div class=\"accordion-inner\">\n      <p>Copia el bloque completo de HTML y CSS coordinados y pégalo directamente en tu proyecto.</p>\n    </div>\n  </div>\n</div>",
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

@media (prefers-reduced-motion: reduce) {
  .accordion-arrow,
  .accordion-content {
    transition: none !important;
  }
}`
  },
  {
    id: "modal-backdrop",
    name: "Modal con Desenfoque y Pop",
    category: "Patrones UI",
    defaultDuration: 0.4,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out","linear"],
    properties: "opacity, transform, backdrop-filter",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Combina desvanecimiento en el overlay y escala con transform en el diálogo, delegando la animación al hilo compositor.",
    description: "Apertura de ventana modal con fondo oscurecido, desenfoque progresivo y entrada por escala con rebote contenido.",
    targetSelector: ".dialog-surface",
    previewClass: "shape--modal",
    htmlSnippet: "<div class=\"dialog-overlay\">\n  <div class=\"dialog-surface\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"dialog-title\">\n    <div class=\"dialog-header\">\n      <span class=\"dialog-title\" id=\"dialog-title\">Confirmar cambios</span>\n      <span class=\"dialog-badge\">Producción</span>\n    </div>\n    <p class=\"dialog-desc\">¿Deseas desplegar la nueva versión al servidor público?</p>\n    <div class=\"dialog-actions\">\n      <button class=\"dialog-btn dialog-btn--ghost\" type=\"button\">Cancelar</button>\n      <button class=\"dialog-btn dialog-btn--primary\" type=\"button\">Confirmar</button>\n    </div>\n  </div>\n</div>",
    previewHtml: "<div class=\"dialog-overlay is-playing\" data-motion-target>\n  <div class=\"dialog-surface\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"dialog-title-preview\">\n    <div class=\"dialog-header\">\n      <span class=\"dialog-title\" id=\"dialog-title-preview\">Confirmar cambios</span>\n      <span class=\"dialog-badge\">Producción</span>\n    </div>\n    <p class=\"dialog-desc\">¿Deseas desplegar la nueva versión al servidor público?</p>\n    <div class=\"dialog-actions\">\n      <button class=\"dialog-btn dialog-btn--ghost\" type=\"button\">Cancelar</button>\n      <button class=\"dialog-btn dialog-btn--primary\" type=\"button\">Confirmar</button>\n    </div>\n  </div>\n</div>",
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
}`
  },
  {
    id: "bottom-sheet",
    name: "Bottom Sheet Móvil",
    category: "Patrones UI",
    defaultDuration: 0.45,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "transform, opacity",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "El panel asciende desde el borde inferior de la pantalla utilizando translateY(), manteniendo la fluidez a 60 fps en móviles.",
    description: "Hoja de acciones contextual deslizante desde la parte inferior, con tirador táctil y opciones rápidas.",
    targetSelector: ".sheet-drawer",
    previewClass: "shape--bottom-sheet",
    htmlSnippet: "<div class=\"sheet-container\">\n  <div class=\"sheet-drawer\">\n    <div class=\"sheet-handle\"></div>\n    <div class=\"sheet-header\">\n      <strong>Opciones del recurso</strong>\n      <span class=\"sheet-meta\">3 acciones disponibles</span>\n    </div>\n    <div class=\"sheet-options\">\n      <div class=\"sheet-option\">\n        <span class=\"sheet-icon\">1</span>\n        <span>Compartir enlace</span>\n      </div>\n      <div class=\"sheet-option\">\n        <span class=\"sheet-icon\">2</span>\n        <span>Duplicar configuración</span>\n      </div>\n    </div>\n  </div>\n</div>",
    previewHtml: "<div class=\"sheet-container\" data-motion-target>\n  <div class=\"sheet-drawer is-playing\">\n    <div class=\"sheet-handle\"></div>\n    <div class=\"sheet-header\">\n      <strong>Opciones del recurso</strong>\n      <span class=\"sheet-meta\">3 acciones disponibles</span>\n    </div>\n    <div class=\"sheet-options\">\n      <div class=\"sheet-option\">\n        <span class=\"sheet-icon\">1</span>\n        <span>Compartir enlace</span>\n      </div>\n      <div class=\"sheet-option\">\n        <span class=\"sheet-icon\">2</span>\n        <span>Duplicar configuración</span>\n      </div>\n    </div>\n  </div>\n</div>",
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
}`
  },
  {
    id: "tabs-indicator",
    name: "Pestañas con Indicador Deslizante",
    category: "Patrones UI",
    defaultDuration: 0.3,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "transform, opacity",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "El indicador de píldora activa se desliza horizontalmente mediante translateX() en lugar de recalcular posiciones left.",
    description: "Navegación por pestañas con píldora flotante que viaja con aceleración suave entre opciones activas.",
    targetSelector: ".tab-nav-bar",
    previewClass: "shape--tabs-indicator",
    htmlSnippet: "<nav class=\"tab-nav-bar\">\n  <div class=\"tab-slider-pill\"></div>\n  <button class=\"tab-nav-item is-active\" type=\"button\">General</button>\n  <button class=\"tab-nav-item\" type=\"button\">Métricas</button>\n  <button class=\"tab-nav-item\" type=\"button\">Ajustes</button>\n</nav>",
    previewHtml: "<nav class=\"tab-nav-bar is-playing\" data-motion-target>\n  <div class=\"tab-slider-pill\"></div>\n  <button class=\"tab-nav-item is-active\" type=\"button\">General</button>\n  <button class=\"tab-nav-item\" type=\"button\">Métricas</button>\n  <button class=\"tab-nav-item\" type=\"button\">Ajustes</button>\n</nav>",
    generateCss: (dur, timing) => `.tab-nav-bar {
  position: relative;
  display: inline-flex;
  padding: 4px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.tab-slider-pill {
  position: absolute;
  top: 4px;
  left: 4px;
  width: calc(33.333% - 4px);
  height: calc(100% - 8px);
  background: #7b6ef6;
  border-radius: 999px;
  transition: transform ${dur}s ${timing};
  animation: slidePill ${dur}s ${timing} both;
}

@keyframes slidePill {
  from { transform: translateX(0); }
  to { transform: translateX(100%); }
}

@media (prefers-reduced-motion: reduce) {
  .tab-slider-pill {
    transition: none !important;
    animation: none !important;
  }
}`
  },
  {
    id: "notification-stack",
    name: "Pila de Notificaciones Desplegable",
    category: "Patrones UI",
    defaultDuration: 0.4,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "transform, opacity",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Tarjetas superpuestas que se expanden verticalmente usando translateY() y scale() coordinados.",
    description: "Tarjetas apiladas en cascada tridimensional que se abren como abanico al interactuar o activarse.",
    targetSelector: ".card-stack-group",
    previewClass: "shape--notification-stack",
    htmlSnippet: "<div class=\"card-stack-group\">\n  <div class=\"stack-card stack-card--3\"><span>Aviso de seguridad</span></div>\n  <div class=\"stack-card stack-card--2\"><span>Copia de respaldo lista</span></div>\n  <div class=\"stack-card stack-card--1\"><span>3 nuevas alertas</span></div>\n</div>",
    previewHtml: "<div class=\"card-stack-group is-playing\" data-motion-target>\n  <div class=\"stack-card stack-card--3\"><span>Aviso de seguridad</span></div>\n  <div class=\"stack-card stack-card--2\"><span>Copia de respaldo lista</span></div>\n  <div class=\"stack-card stack-card--1\"><span>3 nuevas alertas</span></div>\n</div>",
    generateCss: (dur, timing) => `.card-stack-group {
  position: relative;
  width: 220px;
  height: 90px;
}

.stack-card {
  position: absolute;
  inset: 0;
  border-radius: 12px;
  padding: 10px 14px;
  background: #141523;
  border: 1px solid rgba(123, 110, 246, 0.25);
  transition: transform ${dur}s ${timing};
}

.stack-card--1 { transform: translateY(0) scale(1); z-index: 3; }
.stack-card--2 { transform: translateY(8px) scale(0.95); z-index: 2; opacity: 0.85; }
.stack-card--3 { transform: translateY(16px) scale(0.9); z-index: 1; opacity: 0.7; }

.card-stack-group:hover .stack-card--2 { transform: translateY(28px) scale(0.97); }
.card-stack-group:hover .stack-card--3 { transform: translateY(56px) scale(0.94); }

@media (prefers-reduced-motion: reduce) {
  .stack-card { transition: none !important; }
}`
  },
  {
    id: "stepper-progress",
    name: "Stepper de Pasos Consecutivos",
    category: "Patrones UI",
    defaultDuration: 0.6,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","linear"],
    properties: "transform (scaleX)",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "La barra conectora escala en X desde scaleX(0) hasta scaleX(1) con transform-origin: left, evitando el recalculo de ancho en layout.",
    description: "Indicador de proceso de múltiples fases con línea de progreso animada y nodos numerados.",
    targetSelector: ".wizard-stepper",
    previewClass: "shape--stepper",
    htmlSnippet: "<div class=\"wizard-stepper\">\n  <div class=\"step-connector\">\n    <div class=\"step-connector-fill\"></div>\n  </div>\n  <div class=\"step-node is-done\">1</div>\n  <div class=\"step-node is-active\">2</div>\n  <div class=\"step-node\">3</div>\n</div>",
    previewHtml: "<div class=\"wizard-stepper is-playing\" data-motion-target>\n  <div class=\"step-connector\">\n    <div class=\"step-connector-fill\"></div>\n  </div>\n  <div class=\"step-node is-done\">1</div>\n  <div class=\"step-node is-active\">2</div>\n  <div class=\"step-node\">3</div>\n</div>",
    generateCss: (dur, timing) => `.wizard-stepper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 220px;
}

.step-connector {
  position: absolute;
  top: 50%;
  left: 15px;
  right: 15px;
  height: 3px;
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-50%);
  z-index: 1;
}

.step-connector-fill {
  height: 100%;
  width: 50%;
  background: #7b6ef6;
  transform-origin: left center;
  animation: fillStepper ${dur}s ${timing} both;
}

@keyframes fillStepper {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}

@media (prefers-reduced-motion: reduce) {
  .step-connector-fill { animation: none !important; transform: scaleX(1) !important; }
}`
  },
  {
    id: "dropdown-reveal",
    name: "Menú Desplegable con Escala y Desenfoque",
    category: "Patrones UI",
    defaultDuration: 0.3,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "opacity, transform, filter",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Abre el menú con transform-origin superior, escalando desde 0.92 con aumento rápido de opacidad sin alterar el flujo DOM.",
    description: "Menú emergente contextual con anclaje visual superior y ligera desaceleración elástica.",
    targetSelector: ".menu-popover",
    previewClass: "shape--dropdown-reveal",
    htmlSnippet: "<div class=\"menu-popover\">\n  <div class=\"menu-item\"><span class=\"menu-dot\"></span><span>Editar perfil</span></div>\n  <div class=\"menu-item\"><span class=\"menu-dot\"></span><span>Facturación</span></div>\n  <div class=\"menu-item menu-item--danger\"><span class=\"menu-dot\"></span><span>Cerrar sesión</span></div>\n</div>",
    previewHtml: "<div class=\"menu-popover is-playing\" data-motion-target>\n  <div class=\"menu-item\"><span class=\"menu-dot\"></span><span>Editar perfil</span></div>\n  <div class=\"menu-item\"><span class=\"menu-dot\"></span><span>Facturación</span></div>\n  <div class=\"menu-item menu-item--danger\"><span class=\"menu-dot\"></span><span>Cerrar sesión</span></div>\n</div>",
    generateCss: (dur, timing) => `.menu-popover {
  width: 200px;
  background: #141523;
  border: 1px solid rgba(123, 110, 246, 0.25);
  border-radius: 12px;
  padding: 6px;
  transform-origin: top center;
  animation: dropMenu ${dur}s ${timing} both;
}

@keyframes dropMenu {
  from {
    opacity: 0;
    transform: scale(0.92) translateY(-8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .menu-popover {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}`
  },
];
