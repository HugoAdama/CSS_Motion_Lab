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
  {
    id: "drawer-sidebar",
    name: "Panel Lateral Deslizable (Off-canvas Drawer)",
    category: "Patrones UI",
    defaultDuration: 0.45,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "transform, opacity",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "El panel utiliza transform: translateX() y el telón de fondo usa opacity, manteniendo 60fps constantes en GPU.",
    description: "Panel de navegación lateral que emerge desde el borde con oscurecimiento sincronizado del fondo.",
    targetSelector: ".drawer-preview",
    previewClass: "shape--drawer-sidebar",
    htmlSnippet: "<div class=\"drawer-preview\">\n  <div class=\"drawer-backdrop\"></div>\n  <aside class=\"drawer-panel\">\n    <div class=\"drawer-header\">\n      <strong>Navegación</strong>\n      <span class=\"drawer-chip\">Activo</span>\n    </div>\n    <ul class=\"drawer-menu\">\n      <li><span>Resumen</span></li>\n      <li><span>Proyectos</span></li>\n      <li><span>Ajustes</span></li>\n    </ul>\n  </aside>\n</div>",
    previewHtml: "<div class=\"drawer-preview is-playing\" data-motion-target>\n  <div class=\"drawer-backdrop\"></div>\n  <aside class=\"drawer-panel\">\n    <div class=\"drawer-header\">\n      <strong>Navegación</strong>\n      <span class=\"drawer-chip\">Pro</span>\n    </div>\n    <ul class=\"drawer-menu\">\n      <li><span>Resumen</span></li>\n      <li><span>Proyectos</span></li>\n      <li><span>Ajustes</span></li>\n    </ul>\n  </aside>\n</div>",
    generateCss: (dur, timing) => `.drawer-preview {
  position: relative;
  width: 100%;
  max-width: 260px;
  height: 120px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.drawer-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  animation: drawerBackdrop ${dur}s ${timing} both;
}

.drawer-panel {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 70%;
  background: #141523;
  border-right: 1px solid rgba(123, 110, 246, 0.3);
  padding: 10px;
  animation: drawerSlide ${dur}s ${timing} both;
}

@keyframes drawerSlide {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}

@keyframes drawerBackdrop {
  from { opacity: 0; }
  to { opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .drawer-panel, .drawer-backdrop { animation: none !important; opacity: 1 !important; transform: none !important; }
}`
  },
  {
    id: "tooltip-anchor",
    name: "Tooltip con Anclaje y Despegue Elástico",
    category: "Patrones UI",
    defaultDuration: 0.35,
    defaultTiming: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    timingOptions: ["cubic-bezier(0.34, 1.56, 0.64, 1)","ease-out","cubic-bezier(0.16, 1, 0.3, 1)"],
    properties: "transform, opacity",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Aparición de globo con escala elástica (scale y translateY) sin recalcular dimensiones físicas.",
    description: "Burbuja de ayuda contextual con anclaje superior, flecha direccional y efecto de amortiguación viva.",
    targetSelector: ".tooltip-container",
    previewClass: "shape--tooltip-anchor",
    htmlSnippet: "<div class=\"tooltip-container\">\n  <div class=\"tooltip-bubble\">\n    <span>Guardado en la nube</span>\n    <div class=\"tooltip-arrow\"></div>\n  </div>\n  <button class=\"tooltip-trigger-btn\" type=\"button\">Ver estado</button>\n</div>",
    previewHtml: "<div class=\"tooltip-container is-playing\" data-motion-target>\n  <div class=\"tooltip-bubble\">\n    <span>Guardado en la nube</span>\n    <div class=\"tooltip-arrow\"></div>\n  </div>\n  <button class=\"tooltip-trigger-btn\" type=\"button\">Ver estado</button>\n</div>",
    generateCss: (dur, timing) => `.tooltip-bubble {
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform-origin: bottom center;
  background: #7b6ef6;
  color: #fff;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 11px;
  font-weight: 700;
  white-space: nowrap;
  box-shadow: 0 8px 20px rgba(123, 110, 246, 0.35);
  animation: tooltipSpring ${dur}s ${timing} both;
}

@keyframes tooltipSpring {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(6px) scale(0.85);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .tooltip-bubble { animation: none !important; opacity: 1 !important; transform: translateX(-50%) !important; }
}`
  },
  {
    id: "badge-counter",
    name: "Contador Pop con Rebote Dinámico",
    category: "Patrones UI",
    defaultDuration: 0.5,
    defaultTiming: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    timingOptions: ["cubic-bezier(0.34, 1.56, 0.64, 1)","ease-out","ease-in-out"],
    properties: "transform, opacity",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Rebote con resorte (overshoot) directamente sobre transform: scale(), manteniendo la animación en GPU.",
    description: "Insignia circular de notificaciones no leídas con salto elástico para capturar atención inmediata.",
    targetSelector: ".badge-box",
    previewClass: "shape--badge-counter",
    htmlSnippet: "<div class=\"badge-box\">\n  <div class=\"badge-base-icon\">Bandeja de entrada</div>\n  <span class=\"badge-ping-pill\">+9</span>\n</div>",
    previewHtml: "<div class=\"badge-box is-playing\" data-motion-target>\n  <div class=\"badge-base-icon\">Bandeja de entrada</div>\n  <span class=\"badge-ping-pill\">+9</span>\n</div>",
    generateCss: (dur, timing) => `.badge-ping-pill {
  position: absolute;
  top: -8px;
  right: -8px;
  padding: 3px 8px;
  border-radius: 999px;
  background: #ff6e65;
  color: #fff;
  font-size: 10px;
  font-weight: 800;
  border: 2px solid #0f101a;
  animation: badgePop ${dur}s ${timing} both;
}

@keyframes badgePop {
  0% { transform: scale(0); opacity: 0; }
  60% { transform: scale(1.3); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .badge-ping-pill { animation: none !important; opacity: 1 !important; transform: scale(1) !important; }
}`
  },
  {
    id: "segmented-control",
    name: "Selector Segmentado con Pastilla Deslizante",
    category: "Patrones UI",
    defaultDuration: 0.4,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "transform, opacity",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "La pastilla indicadora se desplaza horizontalmente con translateX() detrás de las etiquetas de opción.",
    description: "Interruptor multidireccional donde una pastilla luminosa se desliza suavemente al segmento seleccionado.",
    targetSelector: ".segmented-bar",
    previewClass: "shape--segmented-control",
    htmlSnippet: "<div class=\"segmented-bar\">\n  <div class=\"segment-pill\"></div>\n  <button class=\"segment-item\" type=\"button\">Día</button>\n  <button class=\"segment-item is-active\" type=\"button\">Semana</button>\n  <button class=\"segment-item\" type=\"button\">Mes</button>\n</div>",
    previewHtml: "<div class=\"segmented-bar is-playing\" data-motion-target>\n  <div class=\"segment-pill\"></div>\n  <button class=\"segment-item\" type=\"button\">Día</button>\n  <button class=\"segment-item is-active\" type=\"button\">Semana</button>\n  <button class=\"segment-item\" type=\"button\">Mes</button>\n</div>",
    generateCss: (dur, timing) => `.segmented-bar {
  position: relative;
  display: inline-flex;
  padding: 4px;
  border-radius: 12px;
  background: #141523;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.segment-pill {
  position: absolute;
  top: 4px;
  bottom: 4px;
  left: 4px;
  width: calc(33.333% - 2.6px);
  background: #7b6ef6;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(123, 110, 246, 0.3);
  animation: slidePill ${dur}s ${timing} both;
}

@keyframes slidePill {
  from { transform: translateX(0); }
  to { transform: translateX(100%); } /* Hacia 'Semana' */
}

@media (prefers-reduced-motion: reduce) {
  .segment-pill { animation: none !important; transform: translateX(100%) !important; }
}`
  },
  {
    id: "collapsible-card",
    name: "Tarjeta Colapsable con Despliegue Suave",
    category: "Patrones UI",
    defaultDuration: 0.4,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "grid-template-rows, opacity",
    renderCost: "Diseño por filas CSS Grid",
    renderCostType: "layout",
    costExplanation: "Transición nativa de 0fr a 1fr en grid-template-rows para animar altura dinámica sin valores fijos.",
    description: "Contenedor de información con cabecera interactiva y despliegue elástico de detalles interiores.",
    targetSelector: ".collapsible-card",
    previewClass: "shape--collapsible-card",
    htmlSnippet: "<div class=\"collapsible-card\">\n  <div class=\"collapsible-head\">\n    <span>Detalles del plan</span>\n    <span class=\"collapsible-arrow\">&darr;</span>\n  </div>\n  <div class=\"collapsible-body\">\n    <div class=\"collapsible-content\">\n      <p>Almacenamiento SSD 500GB con respaldo diario continuo.</p>\n    </div>\n  </div>\n</div>",
    previewHtml: "<div class=\"collapsible-card is-playing\" data-motion-target>\n  <div class=\"collapsible-head\">\n    <span>Detalles del plan</span>\n    <span class=\"collapsible-arrow\">&darr;</span>\n  </div>\n  <div class=\"collapsible-body\">\n    <div class=\"collapsible-content\">\n      <p>Almacenamiento SSD 500GB con respaldo diario continuo.</p>\n    </div>\n  </div>\n</div>",
    generateCss: (dur, timing) => `.collapsible-card {
  width: 100%;
  max-width: 250px;
  background: #141523;
  border: 1px solid rgba(123, 110, 246, 0.25);
  border-radius: 12px;
  overflow: hidden;
}

.collapsible-body {
  display: grid;
  grid-template-rows: 0fr;
  animation: expandGrid ${dur}s ${timing} both;
}

.collapsible-content {
  overflow: hidden;
}

@keyframes expandGrid {
  from { grid-template-rows: 0fr; opacity: 0; }
  to { grid-template-rows: 1fr; opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .collapsible-body { animation: none !important; grid-template-rows: 1fr !important; opacity: 1 !important; }
}`
  },
  {
    id: "floating-action-menu",
    name: "Menú Flotante Radial (Speed Dial FAB)",
    category: "Patrones UI",
    defaultDuration: 0.45,
    defaultTiming: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    timingOptions: ["cubic-bezier(0.34, 1.56, 0.64, 1)","ease-out","ease-in-out"],
    properties: "transform, opacity",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Cada botón secundario se proyecta en translateY con retardo y escalado sobre capas compositadas.",
    description: "Botón circular principal que despliega en abanico vertical acciones secundarias con rotación de icono.",
    targetSelector: ".speed-dial-box",
    previewClass: "shape--floating-action-menu",
    htmlSnippet: "<div class=\"speed-dial-box\">\n  <div class=\"speed-items\">\n    <button class=\"speed-mini-btn\" style=\"--i: 2;\" type=\"button\" aria-label=\"Mensaje\">M</button>\n    <button class=\"speed-mini-btn\" style=\"--i: 1;\" type=\"button\" aria-label=\"Adjuntar\">A</button>\n  </div>\n  <button class=\"speed-main-btn\" type=\"button\" aria-label=\"Acciones\">+</button>\n</div>",
    previewHtml: "<div class=\"speed-dial-box is-playing\" data-motion-target>\n  <div class=\"speed-items\">\n    <button class=\"speed-mini-btn\" style=\"--i: 2;\" type=\"button\" aria-label=\"Mensaje\">M</button>\n    <button class=\"speed-mini-btn\" style=\"--i: 1;\" type=\"button\" aria-label=\"Adjuntar\">A</button>\n  </div>\n  <button class=\"speed-main-btn\" type=\"button\" aria-label=\"Acciones\">+</button>\n</div>",
    generateCss: (dur, timing) => `.speed-mini-btn {
  animation: popItem ${dur}s ${timing} both;
  animation-delay: calc(var(--i, 1) * 0.08s);
}

.speed-main-btn {
  animation: rotateFab ${dur}s ${timing} both;
}

@keyframes popItem {
  from { opacity: 0; transform: translateY(16px) scale(0.6); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

@keyframes rotateFab {
  from { transform: rotate(0deg); }
  to { transform: rotate(45deg); }
}

@media (prefers-reduced-motion: reduce) {
  .speed-mini-btn, .speed-main-btn { animation: none !important; opacity: 1 !important; transform: none !important; }
}`
  },
  {
    id: "drag-drop-zone",
    name: "Zona de Carga con Pulso Magnético (Dropzone)",
    category: "Patrones UI",
    defaultDuration: 1.6,
    defaultTiming: "ease-in-out",
    timingOptions: ["ease-in-out","ease-out","linear"],
    properties: "border-color, box-shadow, transform",
    renderCost: "Composición y Repintado",
    renderCostType: "paint",
    costExplanation: "Pulso rítmico en box-shadow y resplandor de borde discontinuo para invitar al arrastre de archivos.",
    description: "Contenedor de carga de archivos que respira magnéticamente comunicando interactividad receptiva.",
    targetSelector: ".dropzone-box",
    previewClass: "shape--drag-drop-zone",
    htmlSnippet: "<div class=\"dropzone-box\">\n  <div class=\"dropzone-icon\">&uarr;</div>\n  <strong>Arrastra tus archivos aquí</strong>\n  <span>o examina desde tu dispositivo</span>\n</div>",
    previewHtml: "<div class=\"dropzone-box is-playing\" data-motion-target>\n  <div class=\"dropzone-icon\">&uarr;</div>\n  <strong>Arrastra tus archivos aquí</strong>\n  <span>o examina desde tu dispositivo</span>\n</div>",
    generateCss: (dur, timing) => `.dropzone-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 20px;
  border-radius: 14px;
  border: 2px dashed rgba(123, 110, 246, 0.4);
  background: rgba(123, 110, 246, 0.04);
  animation: dropzoneGlow ${dur}s ${timing} infinite;
}

@keyframes dropzoneGlow {
  0%, 100% {
    border-color: rgba(123, 110, 246, 0.35);
    box-shadow: 0 0 0 0 rgba(123, 110, 246, 0.2);
    transform: scale(1);
  }
  50% {
    border-color: rgba(61, 221, 168, 0.8);
    box-shadow: 0 0 18px rgba(61, 221, 168, 0.25);
    transform: scale(1.02);
  }
}

@media (prefers-reduced-motion: reduce) {
  .dropzone-box { animation: none !important; transform: none !important; }
}`
  },
  {
    id: "dock-magnification",
    name: "Barra Flotante con Magnificación (Dock)",
    category: "Patrones UI",
    defaultDuration: 0.35,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "transform",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Escala fluida mediante transform: scale() e inclinación leve en GPU con anclaje visual inferior.",
    description: "Bandeja flotante de accesos directos estilo dock donde los iconos se magnifican ordenadamente.",
    targetSelector: ".dock-shelf",
    previewClass: "shape--dock-magnification",
    htmlSnippet: "<div class=\"dock-shelf\">\n  <div class=\"dock-app-icon\" style=\"--bg: #7b6ef6;\">A</div>\n  <div class=\"dock-app-icon is-focused\" style=\"--bg: #3ddda8;\">B</div>\n  <div class=\"dock-app-icon\" style=\"--bg: #ff6e65;\">C</div>\n  <div class=\"dock-app-icon\" style=\"--bg: #ffbd2e;\">D</div>\n</div>",
    previewHtml: "<div class=\"dock-shelf is-playing\" data-motion-target>\n  <div class=\"dock-app-icon\" style=\"--bg: #7b6ef6;\">A</div>\n  <div class=\"dock-app-icon is-focused\" style=\"--bg: #3ddda8;\">B</div>\n  <div class=\"dock-app-icon\" style=\"--bg: #ff6e65;\">C</div>\n  <div class=\"dock-app-icon\" style=\"--bg: #ffbd2e;\">D</div>\n</div>",
    generateCss: (dur, timing) => `.dock-shelf {
  display: inline-flex;
  align-items: flex-end;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 20px;
  background: rgba(20, 21, 35, 0.85);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.dock-app-icon.is-focused {
  animation: dockZoom ${dur}s ${timing} both;
}

@keyframes dockZoom {
  from { transform: translateY(0) scale(1); }
  to { transform: translateY(-8px) scale(1.3); }
}

@media (prefers-reduced-motion: reduce) {
  .dock-app-icon.is-focused { animation: none !important; transform: none !important; }
}`
  },
  {
    id: "command-palette",
    name: "Paleta de Comandos (Spotlight Modal)",
    category: "Patrones UI",
    defaultDuration: 0.3,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "transform, opacity, filter",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Aparición instantánea de diálogo flotante con scale() y desvanecimiento de desenfoque.",
    description: "Buscador global rápido con barra de búsqueda, atajo de teclado ⌘K y resultados indexados.",
    targetSelector: ".cmd-dialog",
    previewClass: "shape--command-palette",
    htmlSnippet: "<div class=\"cmd-dialog\">\n  <div class=\"cmd-bar\">\n    <span class=\"cmd-icon\">&sect;</span>\n    <input type=\"text\" placeholder=\"Buscar comando...\" value=\"Cambiar tema\" readonly />\n    <kbd>ESC</kbd>\n  </div>\n  <div class=\"cmd-row is-active\">\n    <span>Alternar modo oscuro</span>\n    <span class=\"cmd-arrow\">&crarr;</span>\n  </div>\n</div>",
    previewHtml: "<div class=\"cmd-dialog is-playing\" data-motion-target>\n  <div class=\"cmd-bar\">\n    <span class=\"cmd-icon\">&sect;</span>\n    <input type=\"text\" placeholder=\"Buscar comando...\" value=\"Cambiar tema\" readonly />\n    <kbd>ESC</kbd>\n  </div>\n  <div class=\"cmd-row is-active\">\n    <span>Alternar modo oscuro</span>\n    <span class=\"cmd-arrow\">&crarr;</span>\n  </div>\n</div>",
    generateCss: (dur, timing) => `.cmd-dialog {
  width: 100%;
  max-width: 250px;
  border-radius: 14px;
  background: #141523;
  border: 1px solid rgba(123, 110, 246, 0.35);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.5);
  animation: cmdAppear ${dur}s ${timing} both;
}

@keyframes cmdAppear {
  from {
    opacity: 0;
    transform: scale(0.94) translateY(-10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .cmd-dialog { animation: none !important; opacity: 1 !important; transform: none !important; }
}`
  },
  {
    id: "rating-stars",
    name: "Calificación Estelar en Cascada (Rating Stars)",
    category: "Patrones UI",
    defaultDuration: 0.5,
    defaultTiming: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    timingOptions: ["cubic-bezier(0.34, 1.56, 0.64, 1)","ease-out","ease-in-out"],
    properties: "transform, opacity",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Cada estrella se infla elásticamente con retardo escalonado mediante calc(var(--star-idx) * delay).",
    description: "Secuencia jubilosa de estrellas doradas que caen y botan al confirmar una puntuación o reseña.",
    targetSelector: ".star-rating",
    previewClass: "shape--rating-stars",
    htmlSnippet: "<div class=\"star-rating\">\n  <span class=\"star-glyph\" style=\"--star-idx: 0;\">&#9733;</span>\n  <span class=\"star-glyph\" style=\"--star-idx: 1;\">&#9733;</span>\n  <span class=\"star-glyph\" style=\"--star-idx: 2;\">&#9733;</span>\n  <span class=\"star-glyph\" style=\"--star-idx: 3;\">&#9733;</span>\n  <span class=\"star-glyph\" style=\"--star-idx: 4;\">&#9733;</span>\n</div>",
    previewHtml: "<div class=\"star-rating is-playing\" data-motion-target>\n  <span class=\"star-glyph\" style=\"--star-idx: 0;\">&#9733;</span>\n  <span class=\"star-glyph\" style=\"--star-idx: 1;\">&#9733;</span>\n  <span class=\"star-glyph\" style=\"--star-idx: 2;\">&#9733;</span>\n  <span class=\"star-glyph\" style=\"--star-idx: 3;\">&#9733;</span>\n  <span class=\"star-glyph\" style=\"--star-idx: 4;\">&#9733;</span>\n</div>",
    generateCss: (dur, timing) => `.star-glyph {
  display: inline-block;
  color: #ffbd2e;
  font-size: 20px;
  animation: starPop ${dur}s ${timing} both;
  animation-delay: calc(var(--star-idx, 0) * 0.08s);
}

@keyframes starPop {
  0% { transform: scale(0.2); opacity: 0; }
  60% { transform: scale(1.35); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .star-glyph { animation: none !important; opacity: 1 !important; transform: none !important; }
}`
  },
  {
    id: "expandable-search",
    name: "Barra de Búsqueda Expansiva (Expandable Search)",
    category: "Patrones UI",
    defaultDuration: 0.4,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)", "ease-out", "ease-in-out"],
    properties: "width, transform, opacity",
    renderCost: "Maquetación y Composición",
    renderCostType: "layout",
    costExplanation: "Transición animada de width con revelado suave de placeholder e icono de limpieza.",
    description: "Caja de búsqueda compacta que se expande horizontalmente al interactuar facilitando el ingreso de texto.",
    targetSelector: ".expandable-search-box",
    previewClass: "shape--expandable-search",
    htmlSnippet: "<div class=\"expandable-search-box\">\n  <span class=\"search-lead-icon\">&#128269;</span>\n  <input class=\"search-input-field\" type=\"text\" placeholder=\"Buscar componentes...\" />\n  <button class=\"search-close-btn\" type=\"button\">&times;</button>\n</div>",
    previewHtml: "<div class=\"expandable-search-box is-playing\" data-motion-target>\n  <span class=\"search-lead-icon\">&#128269;</span>\n  <input class=\"search-input-field\" type=\"text\" placeholder=\"Buscar componentes...\" />\n  <button class=\"search-close-btn\" type=\"button\">&times;</button>\n</div>",
    generateCss: (dur, timing) => `.expandable-search-box {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 38px;
  padding: 0 12px;
  border-radius: 999px;
  background: #141523;
  border: 1px solid rgba(123, 110, 246, 0.4);
  animation: searchExpand ${dur}s ${timing} both;
}

@keyframes searchExpand {
  from { width: 50px; }
  to { width: 220px; }
}

@media (prefers-reduced-motion: reduce) {
  .expandable-search-box { animation: none !important; width: 220px !important; }
}`
  },
  {
    id: "otp-verification-field",
    name: "Celdas de Código OTP (OTP Verification Field)",
    category: "Patrones UI",
    defaultDuration: 0.45,
    defaultTiming: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    timingOptions: ["cubic-bezier(0.34, 1.56, 0.64, 1)", "ease-out", "ease-in-out"],
    properties: "transform, box-shadow, border-color",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Entrada escalonada de 4 casillas con pulso de enfoque en transform y box-shadow.",
    description: "Conjunto de casillas para autenticación en dos pasos con salto elástico individual y cursor parpadeante.",
    targetSelector: ".otp-container",
    previewClass: "shape--otp-field",
    htmlSnippet: "<div class=\"otp-container\">\n  <span class=\"otp-cell is-filled\" style=\"--cell-idx: 0;\">4</span>\n  <span class=\"otp-cell is-filled\" style=\"--cell-idx: 1;\">8</span>\n  <span class=\"otp-cell is-active\" style=\"--cell-idx: 2;\">|</span>\n  <span class=\"otp-cell\" style=\"--cell-idx: 3;\"></span>\n</div>",
    previewHtml: "<div class=\"otp-container is-playing\" data-motion-target>\n  <span class=\"otp-cell is-filled\" style=\"--cell-idx: 0;\">4</span>\n  <span class=\"otp-cell is-filled\" style=\"--cell-idx: 1;\">8</span>\n  <span class=\"otp-cell is-active\" style=\"--cell-idx: 2;\">|</span>\n  <span class=\"otp-cell\" style=\"--cell-idx: 3;\"></span>\n</div>",
    generateCss: (dur, timing) => `.otp-cell {
  width: 36px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: #141523;
  border: 1px solid rgba(123, 110, 246, 0.3);
  font-family: monospace;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  animation: otpPop ${dur}s ${timing} both;
  animation-delay: calc(var(--cell-idx, 0) * 0.08s);
}

@keyframes otpPop {
  0% { transform: scale(0.6); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .otp-cell { animation: none !important; opacity: 1 !important; transform: none !important; }
}`
  },
  {
    id: "segmented-pill-capsule",
    name: "Cápsula Selectora Segmentada (Pill Capsule)",
    category: "Patrones UI",
    defaultDuration: 0.35,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)", "ease-out", "ease-in-out"],
    properties: "transform, opacity",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Fondo indicador deslizante animado en transform: translateX sin repintado de píxeles.",
    description: "Selector de modo dual en cápsula con burbuja iluminada que se desliza suavemente entre opciones.",
    targetSelector: ".capsule-switch",
    previewClass: "shape--capsule-switch",
    htmlSnippet: "<div class=\"capsule-switch\">\n  <span class=\"capsule-thumb\"></span>\n  <span class=\"capsule-opt is-active\">Mensual</span>\n  <span class=\"capsule-opt\">Anual -20%</span>\n</div>",
    previewHtml: "<div class=\"capsule-switch is-playing\" data-motion-target>\n  <span class=\"capsule-thumb\"></span>\n  <span class=\"capsule-opt is-active\">Mensual</span>\n  <span class=\"capsule-opt\">Anual -20%</span>\n</div>",
    generateCss: (dur, timing) => `.capsule-thumb {
  position: absolute;
  top: 3px;
  bottom: 3px;
  left: 3px;
  width: calc(50% - 3px);
  border-radius: 999px;
  background: #7b6ef6;
  box-shadow: 0 2px 8px rgba(123, 110, 246, 0.4);
  animation: capsuleSlide ${dur}s ${timing} both;
}

@keyframes capsuleSlide {
  0% { transform: translateX(100%); }
  100% { transform: translateX(0); }
}

@media (prefers-reduced-motion: reduce) {
  .capsule-thumb { animation: none !important; transform: none !important; }
}`
  },
  {
    id: "credit-card-3d",
    name: "Tarjeta Bancaria en Perspectiva 3D (Credit Card 3D)",
    category: "Patrones UI",
    defaultDuration: 0.6,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)", "ease-out", "ease-in-out"],
    properties: "transform, box-shadow",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Giro en perspectiva 3D mediante rotateY y rotateX acelerado en hardware.",
    description: "Tarjeta de crédito interactiva con brillo metalizado y balanceo suave en tres dimensiones.",
    targetSelector: ".bank-card-3d",
    previewClass: "shape--credit-card-3d",
    htmlSnippet: "<div class=\"bank-card-3d\">\n  <div class=\"card-chip-gold\"></div>\n  <div class=\"card-number-dots\">&bull;&bull;&bull;&bull; 4242</div>\n  <div class=\"card-holder-name\">HUGO ADAMA</div>\n</div>",
    previewHtml: "<div class=\"bank-card-3d is-playing\" data-motion-target>\n  <div class=\"card-chip-gold\"></div>\n  <div class=\"card-number-dots\">&bull;&bull;&bull;&bull; 4242</div>\n  <div class=\"card-holder-name\">HUGO ADAMA</div>\n</div>",
    generateCss: (dur, timing) => `.bank-card-3d {
  width: 170px;
  height: 105px;
  border-radius: 12px;
  background: linear-gradient(135deg, #1f2138 0%, #0d0e17 100%);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.4);
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  animation: cardTilt3D ${dur}s ${timing} both;
}

@keyframes cardTilt3D {
  0% { transform: perspective(600px) rotateY(-25deg) rotateX(15deg); }
  50% { transform: perspective(600px) rotateY(15deg) rotateX(-10deg); }
  100% { transform: perspective(600px) rotateY(0deg) rotateX(0deg); }
}

@media (prefers-reduced-motion: reduce) {
  .bank-card-3d { animation: none !important; transform: none !important; }
}`
  },
  {
    id: "bottom-nav-dock",
    name: "Barra de Navegación Móvil (Bottom Nav Dock)",
    category: "Patrones UI",
    defaultDuration: 0.4,
    defaultTiming: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    timingOptions: ["cubic-bezier(0.34, 1.56, 0.64, 1)", "ease-out", "ease-in-out"],
    properties: "transform, opacity",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Salto elástico de la burbuja activa de destino con rebote suave sin recálculo de layout.",
    description: "Dock de navegación móvil con burbuja circular que salta y acoge al elemento seleccionado.",
    targetSelector: ".bottom-dock-nav",
    previewClass: "shape--bottom-nav-dock",
    htmlSnippet: "<nav class=\"bottom-dock-nav\">\n  <button class=\"dock-tab is-active\" type=\"button\">&#8962;</button>\n  <button class=\"dock-tab\" type=\"button\">&#128269;</button>\n  <button class=\"dock-tab\" type=\"button\">&#9829;</button>\n  <button class=\"dock-tab\" type=\"button\">&#9881;</button>\n</nav>",
    previewHtml: "<nav class=\"bottom-dock-nav is-playing\" data-motion-target>\n  <button class=\"dock-tab is-active\" type=\"button\">&#8962;</button>\n  <button class=\"dock-tab\" type=\"button\">&#128269;</button>\n  <button class=\"dock-tab\" type=\"button\">&#9829;</button>\n  <button class=\"dock-tab\" type=\"button\">&#9881;</button>\n</nav>",
    generateCss: (dur, timing) => `.dock-tab.is-active {
  color: #fff;
  background: #7b6ef6;
  border-radius: 50%;
  animation: dockTabPop ${dur}s ${timing} both;
}

@keyframes dockTabPop {
  0% { transform: scale(0.6) translateY(4px); }
  60% { transform: scale(1.15) translateY(-4px); }
  100% { transform: scale(1) translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .dock-tab.is-active { animation: none !important; transform: none !important; }
}`
  },
  {
    id: "split-action-menu",
    name: "Botón de Acción Dividida (Split Action Menu)",
    category: "Patrones UI",
    defaultDuration: 0.35,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)", "ease-out", "ease-in-out"],
    properties: "transform, opacity",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Despliegue del submenú en escala y traslación vertical con rotación de chevron.",
    description: "Botón primario emparejado con selector secundario que despliega un menú desplegable coordinado.",
    targetSelector: ".split-btn-group",
    previewClass: "shape--split-action-menu",
    htmlSnippet: "<div class=\"split-btn-group\">\n  <button class=\"split-main-btn\" type=\"button\">Publicar</button>\n  <button class=\"split-toggle-btn\" type=\"button\">&#9662;</button>\n  <div class=\"split-menu-dropdown\">\n    <span class=\"split-item\">Guardar borrador</span>\n    <span class=\"split-item\">Programar</span>\n  </div>\n</div>",
    previewHtml: "<div class=\"split-btn-group is-playing\" data-motion-target>\n  <button class=\"split-main-btn\" type=\"button\">Publicar</button>\n  <button class=\"split-toggle-btn\" type=\"button\">&#9662;</button>\n  <div class=\"split-menu-dropdown\">\n    <span class=\"split-item\">Guardar borrador</span>\n    <span class=\"split-item\">Programar</span>\n  </div>\n</div>",
    generateCss: (dur, timing) => `.split-menu-dropdown {
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  width: 140px;
  background: #141523;
  border: 1px solid rgba(123, 110, 246, 0.3);
  border-radius: 8px;
  padding: 6px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  animation: splitMenuReveal ${dur}s ${timing} both;
}

@keyframes splitMenuReveal {
  from { opacity: 0; transform: translateY(-8px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

@media (prefers-reduced-motion: reduce) {
  .split-menu-dropdown { animation: none !important; opacity: 1 !important; transform: none !important; }
}`
  },
  {
    id: "status-beacon-banner",
    name: "Banner de Alerta con Faro Lumínico (Status Beacon)",
    category: "Patrones UI",
    defaultDuration: 0.5,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)", "ease-out", "ease-in-out"],
    properties: "transform, opacity, box-shadow",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Deslizamiento superior con pulso continuo de halo concéntrico en GPU.",
    description: "Cinta informativa de estado de servidor con indicador activo parpadeante y entrada en cortina.",
    targetSelector: ".beacon-banner-strip",
    previewClass: "shape--status-beacon-banner",
    htmlSnippet: "<div class=\"beacon-banner-strip\">\n  <span class=\"beacon-pulse-core\"></span>\n  <span class=\"beacon-text\">Todos los sistemas operativos</span>\n</div>",
    previewHtml: "<div class=\"beacon-banner-strip is-playing\" data-motion-target>\n  <span class=\"beacon-pulse-core\"></span>\n  <span class=\"beacon-text\">Todos los sistemas operativos</span>\n</div>",
    generateCss: (dur, timing) => `.beacon-banner-strip {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px;
  border-radius: 999px;
  background: rgba(34, 197, 94, 0.12);
  border: 1px solid rgba(34, 197, 94, 0.35);
  color: #4ade80;
  font-size: 11px;
  font-weight: 700;
  animation: bannerSlideIn ${dur}s ${timing} both;
}

@keyframes bannerSlideIn {
  from { opacity: 0; transform: translateY(-12px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .beacon-banner-strip { animation: none !important; opacity: 1 !important; transform: none !important; }
}`
  },
  {
    id: "dialog-surface-pop",
    name: "Ventana Modal con Rebote de Superficie (Dialog Surface)",
    category: "Patrones UI",
    defaultDuration: 0.45,
    defaultTiming: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    timingOptions: ["cubic-bezier(0.34, 1.56, 0.64, 1)", "ease-out", "ease-in-out"],
    properties: "transform, opacity",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Escalado elástico con origen centrado ejecutado en capa de composición independiente.",
    description: "Apertura modal con efecto elástico y ligera inclinación de perspectiva que centra la atención del usuario.",
    targetSelector: ".dialog-card-surface",
    previewClass: "shape--dialog-surface-pop",
    htmlSnippet: "<div class=\"dialog-card-surface\">\n  <div class=\"dialog-head-row\">\n    <strong>¿Confirmar acción?</strong>\n  </div>\n  <p class=\"dialog-msg\">Esta operación sincronizará tu catálogo.</p>\n  <div class=\"dialog-btn-row\">\n    <button class=\"dialog-btn-ok\" type=\"button\">Continuar</button>\n  </div>\n</div>",
    previewHtml: "<div class=\"dialog-card-surface is-playing\" data-motion-target>\n  <div class=\"dialog-head-row\">\n    <strong>¿Confirmar acción?</strong>\n  </div>\n  <p class=\"dialog-msg\">Esta operación sincronizará tu catálogo.</p>\n  <div class=\"dialog-btn-row\">\n    <button class=\"dialog-btn-ok\" type=\"button\">Continuar</button>\n  </div>\n</div>",
    generateCss: (dur, timing) => `.dialog-card-surface {
  width: 190px;
  padding: 12px 14px;
  border-radius: 12px;
  background: #141523;
  border: 1px solid rgba(123, 110, 246, 0.4);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.5);
  animation: dialogScalePop ${dur}s ${timing} both;
}

@keyframes dialogScalePop {
  0% { opacity: 0; transform: scale(0.8) translateY(12px); }
  100% { opacity: 1; transform: scale(1) translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .dialog-card-surface { animation: none !important; opacity: 1 !important; transform: none !important; }
}`
  },
  {
    id: "inline-alert-dismiss",
    name: "Alerta Contextual con Desvanecimiento (Inline Alert)",
    category: "Patrones UI",
    defaultDuration: 0.4,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)", "ease-out", "ease-in-out"],
    properties: "transform, opacity, max-height",
    renderCost: "Maquetación y Composición",
    renderCostType: "layout",
    costExplanation: "Transición combinada de opacity y max-height para un plegado suave.",
    description: "Notificación en línea que entra lateralmente y se retrae armónicamente sin alterar el flujo visual.",
    targetSelector: ".inline-alert-box",
    previewClass: "shape--inline-alert-dismiss",
    htmlSnippet: "<div class=\"inline-alert-box\">\n  <span class=\"alert-icon-sym\">&#9888;</span>\n  <div class=\"alert-content-wrap\">\n    <strong>Cambios guardados</strong>\n    <small>Versión 2.4 activa</small>\n  </div>\n  <span class=\"alert-dismiss-x\">&times;</span>\n</div>",
    previewHtml: "<div class=\"inline-alert-box is-playing\" data-motion-target>\n  <span class=\"alert-icon-sym\">&#9888;</span>\n  <div class=\"alert-content-wrap\">\n    <strong>Cambios guardados</strong>\n    <small>Versión 2.4 activa</small>\n  </div>\n  <span class=\"alert-dismiss-x\">&times;</span>\n</div>",
    generateCss: (dur, timing) => `.inline-alert-box {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 8px;
  background: rgba(234, 179, 8, 0.12);
  border: 1px solid rgba(234, 179, 8, 0.35);
  color: #facc15;
  animation: alertSlideIn ${dur}s ${timing} both;
}

@keyframes alertSlideIn {
  from { opacity: 0; transform: translateX(-16px); }
  to { opacity: 1; transform: translateX(0); }
}

@media (prefers-reduced-motion: reduce) {
  .inline-alert-box { animation: none !important; opacity: 1 !important; transform: none !important; }
}`
  },
  {
    id: "progress-stepper-line",
    name: "Barra de Pasos con Avance Coordinado (Progress Stepper)",
    category: "Patrones UI",
    defaultDuration: 0.55,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)", "ease-out", "ease-in-out"],
    properties: "transform, background-color",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Línea conectora escalada en scaleX(1) con origen en la izquierda y encendido de nodos.",
    description: "Visualizador de progreso de formulario multipaso con animación secuencial de cableado e hitos.",
    targetSelector: ".stepper-track-wrap",
    previewClass: "shape--stepper-progress-line",
    htmlSnippet: "<div class=\"stepper-track-wrap\">\n  <span class=\"step-circle is-done\">&#10003;</span>\n  <div class=\"step-fill-line\"></div>\n  <span class=\"step-circle is-current\">2</span>\n  <div class=\"step-empty-line\"></div>\n  <span class=\"step-circle\">3</span>\n</div>",
    previewHtml: "<div class=\"stepper-track-wrap is-playing\" data-motion-target>\n  <span class=\"step-circle is-done\">&#10003;</span>\n  <div class=\"step-fill-line\"></div>\n  <span class=\"step-circle is-current\">2</span>\n  <div class=\"step-empty-line\"></div>\n  <span class=\"step-circle\">3</span>\n</div>",
    generateCss: (dur, timing) => `.step-fill-line {
  flex: 1;
  height: 3px;
  background: #7b6ef6;
  transform-origin: left center;
  animation: stepperLineGrow ${dur}s ${timing} both;
}

@keyframes stepperLineGrow {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}

@media (prefers-reduced-motion: reduce) {
  .step-fill-line { animation: none !important; transform: scaleX(1) !important; }
}`
  }
];