// Catálogo completo de animaciones y patrones de interfaz para CSS Motion Lab
// 10 animaciones por cada una de las 6 categorías (Total: 60 animaciones)

export const categories = [
  'Todas',
  'Patrones UI',
  'Entrada',
  'Énfasis',
  'Carga',
  'Texto',
  'Interacción'
];

export const animations = [
  {
    "id": "staggered-reveal",
    "name": "Staggered reveal",
    "category": "Patrones UI",
    "defaultDuration": 0.5,
    "defaultTiming": "cubic-bezier(0.16, 1, 0.3, 1)",
    "timingOptions": [
      "cubic-bezier(0.16, 1, 0.3, 1)",
      "ease-out",
      "ease-in-out",
      "linear"
    ],
    "properties": "opacity, transform",
    "renderCost": "Favorables para composición",
    "renderCostType": "composite",
    "costExplanation": "Cada elemento anima su propia opacidad y desplazamiento usando una variable de retraso escalonado (--stagger-delay).",
    "description": "Aparición secuencial y ordenada de elementos de una lista o menú para guiar el flujo visual del usuario.",
    "targetSelector": ".stagger-list",
    "previewClass": "shape--stagger",
    "defaultStaggerDelay": 0.1,
    "hasStaggerControl": true,
    "htmlSnippet": "<ul class=\"stagger-list\">\n  <li class=\"stagger-item\" style=\"--stagger-index: 0;\">\n    <span class=\"stagger-bullet\">1</span>\n    <span class=\"stagger-text\">Primer elemento cargado</span>\n  </li>\n  <li class=\"stagger-item\" style=\"--stagger-index: 1;\">\n    <span class=\"stagger-bullet\">2</span>\n    <span class=\"stagger-text\">Segundo elemento cargado</span>\n  </li>\n  <li class=\"stagger-item\" style=\"--stagger-index: 2;\">\n    <span class=\"stagger-bullet\">3</span>\n    <span class=\"stagger-text\">Tercer elemento cargado</span>\n  </li>\n</ul>",
    "previewHtml": "<ul class=\"stagger-list is-playing\" data-motion-target>\n  <li class=\"stagger-item\" style=\"--stagger-index: 0;\">\n    <span class=\"stagger-bullet\">1</span>\n    <span class=\"stagger-text\">Primer elemento cargado</span>\n  </li>\n  <li class=\"stagger-item\" style=\"--stagger-index: 1;\">\n    <span class=\"stagger-bullet\">2</span>\n    <span class=\"stagger-text\">Segundo elemento cargado</span>\n  </li>\n  <li class=\"stagger-item\" style=\"--stagger-index: 2;\">\n    <span class=\"stagger-bullet\">3</span>\n    <span class=\"stagger-text\">Tercer elemento cargado</span>\n  </li>\n</ul>",
    "generateCss": (dur, timing, stagger = 0.1) => `.stagger-list {
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
    "id": "toast-lifecycle",
    "name": "Toast entrada y salida",
    "category": "Patrones UI",
    "defaultDuration": 3.5,
    "defaultTiming": "cubic-bezier(0.16, 1, 0.3, 1)",
    "timingOptions": [
      "cubic-bezier(0.16, 1, 0.3, 1)",
      "ease-in-out",
      "ease-out"
    ],
    "properties": "opacity, transform",
    "renderCost": "Favorables para composición",
    "renderCostType": "composite",
    "costExplanation": "Ciclo completo de vida de una notificación flotante: entrada suave, pausa de lectura y salida hacia el margen.",
    "description": "Notificación temporal completa con transición coordinada de entrada, permanencia y salida automática.",
    "targetSelector": ".toast-banner",
    "previewClass": "shape--toast-lifecycle",
    "htmlSnippet": "<div class=\"toast-lifecycle\">\n  <div class=\"toast-banner\">\n    <span class=\"toast-badge\">Info</span>\n    <div class=\"toast-msg\">\n      <strong>Proceso finalizado</strong>\n      <p>El archivo se descargó correctamente.</p>\n    </div>\n    <button class=\"toast-close-btn\" type=\"button\" aria-label=\"Cerrar notificación\">&times;</button>\n  </div>\n</div>",
    "previewHtml": "<div class=\"toast-lifecycle-preview\" data-motion-target>\n  <div class=\"toast-banner is-playing\">\n    <span class=\"toast-badge\">Info</span>\n    <div class=\"toast-msg\">\n      <strong>Proceso finalizado</strong>\n      <p>El archivo se descargó correctamente.</p>\n    </div>\n    <button class=\"toast-close-btn\" type=\"button\" aria-label=\"Cerrar notificación\">&times;</button>\n  </div>\n</div>",
    "generateCss": (dur, timing) => `.toast-banner {
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
    "id": "skeleton-shimmer",
    "name": "Skeleton shimmer",
    "category": "Patrones UI",
    "defaultDuration": 1.8,
    "defaultTiming": "ease-in-out",
    "timingOptions": [
      "ease-in-out",
      "linear",
      "ease-out"
    ],
    "properties": "background-position",
    "renderCost": "Repintado / Paint (gradiente)",
    "renderCostType": "paint",
    "costExplanation": "El brillo reflectante anima la propiedad background-position sobre un gradiente de 200% de anchura, requiriendo rasterizado de color continuo.",
    "description": "Marcador de posición con onda de luz continua que comunica carga de datos estructurados.",
    "targetSelector": ".skeleton-card",
    "previewClass": "shape--skeleton",
    "htmlSnippet": "<div class=\"skeleton-card\" role=\"status\" aria-label=\"Cargando contenido\">\n  <div class=\"skeleton-avatar\"></div>\n  <div class=\"skeleton-lines\">\n    <div class=\"skeleton-line skeleton-line--title\"></div>\n    <div class=\"skeleton-line skeleton-line--body\"></div>\n  </div>\n</div>",
    "previewHtml": "<div class=\"skeleton-card is-playing\" data-motion-target role=\"status\" aria-label=\"Cargando contenido\">\n  <div class=\"skeleton-avatar\"></div>\n  <div class=\"skeleton-lines\">\n    <div class=\"skeleton-line skeleton-line--title\"></div>\n    <div class=\"skeleton-line skeleton-line--body\"></div>\n  </div>\n</div>",
    "generateCss": (dur, timing) => `.skeleton-card .skeleton-avatar,
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
    "id": "accordion",
    "name": "Acordeón colapsable",
    "category": "Patrones UI",
    "defaultDuration": 0.35,
    "defaultTiming": "cubic-bezier(0.16, 1, 0.3, 1)",
    "timingOptions": [
      "cubic-bezier(0.16, 1, 0.3, 1)",
      "ease-out",
      "ease-in-out",
      "linear"
    ],
    "properties": "grid-template-rows, transform",
    "renderCost": "Layout y Composición",
    "renderCostType": "layout",
    "costExplanation": "Usa CSS Grid con grid-template-rows (0fr a 1fr) para una expansión suave a altura intrínseca sin depender de alturas fijas en JavaScript.",
    "description": "Panel de contenido que se expande y contrae con transición fluida y rotación de indicador.",
    "targetSelector": ".accordion-item",
    "previewClass": "shape--accordion",
    "htmlSnippet": "<div class=\"accordion-item is-open\">\n  <button class=\"accordion-trigger\" type=\"button\" aria-expanded=\"true\">\n    <span>¿Cómo integrar esta animación?</span>\n    <span class=\"accordion-arrow\">&darr;</span>\n  </button>\n  <div class=\"accordion-content\">\n    <div class=\"accordion-inner\">\n      <p>Copia el bloque completo de HTML y CSS coordinados y pégalo directamente en tu proyecto.</p>\n    </div>\n  </div>\n</div>",
    "previewHtml": "<div class=\"accordion-item is-open\" data-motion-target data-accordion-widget>\n  <button class=\"accordion-trigger\" type=\"button\" aria-expanded=\"true\">\n    <span>¿Cómo integrar esta animación?</span>\n    <span class=\"accordion-arrow\">&darr;</span>\n  </button>\n  <div class=\"accordion-content\">\n    <div class=\"accordion-inner\">\n      <p>Copia el bloque completo de HTML y CSS coordinados y pégalo directamente en tu proyecto.</p>\n    </div>\n  </div>\n</div>",
    "generateCss": (dur, timing) => `.accordion-item {
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
    "id": "modal-backdrop",
    "name": "Modal con Desenfoque y Pop",
    "category": "Patrones UI",
    "defaultDuration": 0.4,
    "defaultTiming": "cubic-bezier(0.16, 1, 0.3, 1)",
    "timingOptions": [
      "cubic-bezier(0.16, 1, 0.3, 1)",
      "ease-out",
      "ease-in-out",
      "linear"
    ],
    "properties": "opacity, transform, backdrop-filter",
    "renderCost": "Favorables para composición",
    "renderCostType": "composite",
    "costExplanation": "Combina desvanecimiento en el overlay y escala con transform en el diálogo, delegando la animación al hilo compositor.",
    "description": "Apertura de ventana modal con fondo oscurecido, desenfoque progresivo y entrada por escala con rebote contenido.",
    "targetSelector": ".dialog-surface",
    "previewClass": "shape--modal",
    "htmlSnippet": "<div class=\"dialog-overlay\">\n  <div class=\"dialog-surface\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"dialog-title\">\n    <div class=\"dialog-header\">\n      <span class=\"dialog-title\" id=\"dialog-title\">Confirmar cambios</span>\n      <span class=\"dialog-badge\">Producción</span>\n    </div>\n    <p class=\"dialog-desc\">¿Deseas desplegar la nueva versión al servidor público?</p>\n    <div class=\"dialog-actions\">\n      <button class=\"dialog-btn dialog-btn--ghost\" type=\"button\">Cancelar</button>\n      <button class=\"dialog-btn dialog-btn--primary\" type=\"button\">Confirmar</button>\n    </div>\n  </div>\n</div>",
    "previewHtml": "<div class=\"dialog-overlay is-playing\" data-motion-target>\n  <div class=\"dialog-surface\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"dialog-title-preview\">\n    <div class=\"dialog-header\">\n      <span class=\"dialog-title\" id=\"dialog-title-preview\">Confirmar cambios</span>\n      <span class=\"dialog-badge\">Producción</span>\n    </div>\n    <p class=\"dialog-desc\">¿Deseas desplegar la nueva versión al servidor público?</p>\n    <div class=\"dialog-actions\">\n      <button class=\"dialog-btn dialog-btn--ghost\" type=\"button\">Cancelar</button>\n      <button class=\"dialog-btn dialog-btn--primary\" type=\"button\">Confirmar</button>\n    </div>\n  </div>\n</div>",
    "generateCss": (dur, timing) => `.dialog-overlay {
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
    "id": "bottom-sheet",
    "name": "Bottom Sheet Móvil",
    "category": "Patrones UI",
    "defaultDuration": 0.45,
    "defaultTiming": "cubic-bezier(0.16, 1, 0.3, 1)",
    "timingOptions": [
      "cubic-bezier(0.16, 1, 0.3, 1)",
      "ease-out",
      "ease-in-out"
    ],
    "properties": "transform, opacity",
    "renderCost": "Favorables para composición",
    "renderCostType": "composite",
    "costExplanation": "El panel asciende desde el borde inferior de la pantalla utilizando translateY(), manteniendo la fluidez a 60 fps en móviles.",
    "description": "Hoja de acciones contextual deslizante desde la parte inferior, con tirador táctil y opciones rápidas.",
    "targetSelector": ".sheet-drawer",
    "previewClass": "shape--bottom-sheet",
    "htmlSnippet": "<div class=\"sheet-container\">\n  <div class=\"sheet-drawer\">\n    <div class=\"sheet-handle\"></div>\n    <div class=\"sheet-header\">\n      <strong>Opciones del recurso</strong>\n      <span class=\"sheet-meta\">3 acciones disponibles</span>\n    </div>\n    <div class=\"sheet-options\">\n      <div class=\"sheet-option\">\n        <span class=\"sheet-icon\">1</span>\n        <span>Compartir enlace</span>\n      </div>\n      <div class=\"sheet-option\">\n        <span class=\"sheet-icon\">2</span>\n        <span>Duplicar configuración</span>\n      </div>\n    </div>\n  </div>\n</div>",
    "previewHtml": "<div class=\"sheet-container\" data-motion-target>\n  <div class=\"sheet-drawer is-playing\">\n    <div class=\"sheet-handle\"></div>\n    <div class=\"sheet-header\">\n      <strong>Opciones del recurso</strong>\n      <span class=\"sheet-meta\">3 acciones disponibles</span>\n    </div>\n    <div class=\"sheet-options\">\n      <div class=\"sheet-option\">\n        <span class=\"sheet-icon\">1</span>\n        <span>Compartir enlace</span>\n      </div>\n      <div class=\"sheet-option\">\n        <span class=\"sheet-icon\">2</span>\n        <span>Duplicar configuración</span>\n      </div>\n    </div>\n  </div>\n</div>",
    "generateCss": (dur, timing) => `.sheet-drawer {
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
    "id": "tabs-indicator",
    "name": "Pestañas con Indicador Deslizante",
    "category": "Patrones UI",
    "defaultDuration": 0.3,
    "defaultTiming": "cubic-bezier(0.16, 1, 0.3, 1)",
    "timingOptions": [
      "cubic-bezier(0.16, 1, 0.3, 1)",
      "ease-out",
      "ease-in-out"
    ],
    "properties": "transform, opacity",
    "renderCost": "Favorables para composición",
    "renderCostType": "composite",
    "costExplanation": "El indicador de píldora activa se desliza horizontalmente mediante translateX() en lugar de recalcular posiciones left.",
    "description": "Navegación por pestañas con píldora flotante que viaja con aceleración suave entre opciones activas.",
    "targetSelector": ".tab-nav-bar",
    "previewClass": "shape--tabs-indicator",
    "htmlSnippet": "<nav class=\"tab-nav-bar\">\n  <div class=\"tab-slider-pill\"></div>\n  <button class=\"tab-nav-item is-active\" type=\"button\">General</button>\n  <button class=\"tab-nav-item\" type=\"button\">Métricas</button>\n  <button class=\"tab-nav-item\" type=\"button\">Ajustes</button>\n</nav>",
    "previewHtml": "<nav class=\"tab-nav-bar is-playing\" data-motion-target>\n  <div class=\"tab-slider-pill\"></div>\n  <button class=\"tab-nav-item is-active\" type=\"button\">General</button>\n  <button class=\"tab-nav-item\" type=\"button\">Métricas</button>\n  <button class=\"tab-nav-item\" type=\"button\">Ajustes</button>\n</nav>",
    "generateCss": (dur, timing) => `.tab-nav-bar {
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
    "id": "notification-stack",
    "name": "Pila de Notificaciones Desplegable",
    "category": "Patrones UI",
    "defaultDuration": 0.4,
    "defaultTiming": "cubic-bezier(0.16, 1, 0.3, 1)",
    "timingOptions": [
      "cubic-bezier(0.16, 1, 0.3, 1)",
      "ease-out",
      "ease-in-out"
    ],
    "properties": "transform, opacity",
    "renderCost": "Favorables para composición",
    "renderCostType": "composite",
    "costExplanation": "Tarjetas superpuestas que se expanden verticalmente usando translateY() y scale() coordinados.",
    "description": "Tarjetas apiladas en cascada tridimensional que se abren como abanico al interactuar o activarse.",
    "targetSelector": ".card-stack-group",
    "previewClass": "shape--notification-stack",
    "htmlSnippet": "<div class=\"card-stack-group\">\n  <div class=\"stack-card stack-card--3\"><span>Aviso de seguridad</span></div>\n  <div class=\"stack-card stack-card--2\"><span>Copia de respaldo lista</span></div>\n  <div class=\"stack-card stack-card--1\"><span>3 nuevas alertas</span></div>\n</div>",
    "previewHtml": "<div class=\"card-stack-group is-playing\" data-motion-target>\n  <div class=\"stack-card stack-card--3\"><span>Aviso de seguridad</span></div>\n  <div class=\"stack-card stack-card--2\"><span>Copia de respaldo lista</span></div>\n  <div class=\"stack-card stack-card--1\"><span>3 nuevas alertas</span></div>\n</div>",
    "generateCss": (dur, timing) => `.card-stack-group {
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
    "id": "stepper-progress",
    "name": "Stepper de Pasos Consecutivos",
    "category": "Patrones UI",
    "defaultDuration": 0.6,
    "defaultTiming": "cubic-bezier(0.16, 1, 0.3, 1)",
    "timingOptions": [
      "cubic-bezier(0.16, 1, 0.3, 1)",
      "ease-out",
      "linear"
    ],
    "properties": "transform (scaleX)",
    "renderCost": "Favorables para composición",
    "renderCostType": "composite",
    "costExplanation": "La barra conectora escala en X desde scaleX(0) hasta scaleX(1) con transform-origin: left, evitando el recalculo de ancho en layout.",
    "description": "Indicador de proceso de múltiples fases con línea de progreso animada y nodos numerados.",
    "targetSelector": ".wizard-stepper",
    "previewClass": "shape--stepper",
    "htmlSnippet": "<div class=\"wizard-stepper\">\n  <div class=\"step-connector\">\n    <div class=\"step-connector-fill\"></div>\n  </div>\n  <div class=\"step-node is-done\">1</div>\n  <div class=\"step-node is-active\">2</div>\n  <div class=\"step-node\">3</div>\n</div>",
    "previewHtml": "<div class=\"wizard-stepper is-playing\" data-motion-target>\n  <div class=\"step-connector\">\n    <div class=\"step-connector-fill\"></div>\n  </div>\n  <div class=\"step-node is-done\">1</div>\n  <div class=\"step-node is-active\">2</div>\n  <div class=\"step-node\">3</div>\n</div>",
    "generateCss": (dur, timing) => `.wizard-stepper {
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
    "id": "dropdown-reveal",
    "name": "Menú Desplegable con Escala y Desenfoque",
    "category": "Patrones UI",
    "defaultDuration": 0.3,
    "defaultTiming": "cubic-bezier(0.16, 1, 0.3, 1)",
    "timingOptions": [
      "cubic-bezier(0.16, 1, 0.3, 1)",
      "ease-out",
      "ease-in-out"
    ],
    "properties": "opacity, transform, filter",
    "renderCost": "Favorables para composición",
    "renderCostType": "composite",
    "costExplanation": "Abre el menú con transform-origin superior, escalando desde 0.92 con aumento rápido de opacidad sin alterar el flujo DOM.",
    "description": "Menú emergente contextual con anclaje visual superior y ligera desaceleración elástica.",
    "targetSelector": ".menu-popover",
    "previewClass": "shape--dropdown-reveal",
    "htmlSnippet": "<div class=\"menu-popover\">\n  <div class=\"menu-item\"><span class=\"menu-dot\"></span><span>Editar perfil</span></div>\n  <div class=\"menu-item\"><span class=\"menu-dot\"></span><span>Facturación</span></div>\n  <div class=\"menu-item menu-item--danger\"><span class=\"menu-dot\"></span><span>Cerrar sesión</span></div>\n</div>",
    "previewHtml": "<div class=\"menu-popover is-playing\" data-motion-target>\n  <div class=\"menu-item\"><span class=\"menu-dot\"></span><span>Editar perfil</span></div>\n  <div class=\"menu-item\"><span class=\"menu-dot\"></span><span>Facturación</span></div>\n  <div class=\"menu-item menu-item--danger\"><span class=\"menu-dot\"></span><span>Cerrar sesión</span></div>\n</div>",
    "generateCss": (dur, timing) => `.menu-popover {
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
    "id": "fade-in",
    "name": "Fade in",
    "category": "Entrada",
    "defaultDuration": 0.7,
    "defaultTiming": "cubic-bezier(0.16, 1, 0.3, 1)",
    "timingOptions": [
      "ease-out",
      "ease-in-out",
      "linear",
      "cubic-bezier(0.16, 1, 0.3, 1)"
    ],
    "properties": "opacity, transform",
    "renderCost": "Favorables para composición",
    "renderCostType": "composite",
    "costExplanation": "Propiedades como transform y opacity suelen delegarse al hilo compositor sin recalcular la geometría.",
    "description": "Aparición suave con incremento de opacidad y desplazamiento vertical leve.",
    "targetSelector": ".toast-card",
    "previewClass": "shape--fade-in",
    "htmlSnippet": "<div class=\"toast-card\">\n  <span class=\"toast-icon\">OK</span>\n  <div class=\"toast-info\">\n    <strong>Guardado con éxito</strong>\n    <p>Tus cambios han sido sincronizados.</p>\n  </div>\n</div>",
    "previewHtml": "<div class=\"toast-card is-playing\" data-motion-target>\n  <span class=\"toast-icon\">\n    <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><polyline points=\"20 6 9 17 4 12\"></polyline></svg>\n  </span>\n  <div class=\"toast-info\">\n    <strong>Guardado con éxito</strong>\n    <span>Tus cambios han sido sincronizados</span>\n  </div>\n</div>",
    "generateCss": (dur, timing) => `.toast-card {
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

@media (prefers-reduced-motion: reduce) {
  .toast-card {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}`
  },
  {
    "id": "slide-in",
    "name": "Slide in",
    "category": "Entrada",
    "defaultDuration": 0.65,
    "defaultTiming": "cubic-bezier(0.16, 1, 0.3, 1)",
    "timingOptions": [
      "ease-out",
      "ease-in-out",
      "linear",
      "cubic-bezier(0.16, 1, 0.3, 1)"
    ],
    "properties": "opacity, transform",
    "renderCost": "Favorables para composición",
    "renderCostType": "composite",
    "costExplanation": "Usa transform en lugar de left o margin-left para evitar disparar la fase de layout en cada cuadro.",
    "description": "Desplazamiento lateral desde el margen con aceleración natural y desaceleración suave.",
    "targetSelector": ".nav-chip",
    "previewClass": "shape--slide-in",
    "htmlSnippet": "<div class=\"nav-chip\">\n  <span class=\"chip-dot\"></span>\n  <span class=\"chip-text\">Panel lateral activo</span>\n  <span class=\"chip-arrow\">&rarr;</span>\n</div>",
    "previewHtml": "<div class=\"nav-chip is-playing\" data-motion-target>\n  <span class=\"chip-dot\"></span>\n  <span class=\"chip-text\">Panel lateral activo</span>\n  <span class=\"chip-arrow\">&rarr;</span>\n</div>",
    "generateCss": (dur, timing) => `.nav-chip {
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
}`
  },
  {
    "id": "scale-up",
    "name": "Scale Up / Pop In",
    "category": "Entrada",
    "defaultDuration": 0.45,
    "defaultTiming": "cubic-bezier(0.16, 1, 0.3, 1)",
    "timingOptions": [
      "cubic-bezier(0.16, 1, 0.3, 1)",
      "ease-out",
      "ease-in-out"
    ],
    "properties": "opacity, transform",
    "renderCost": "Favorables para composición",
    "renderCostType": "composite",
    "costExplanation": "Escalado directo desde 0.65 hasta 1.0 mediante transform: scale() en el hilo compositor.",
    "description": "Aparición centrada expansiva con ligero rebote para ventanas emergentes o tarjetas de confirmación.",
    "targetSelector": ".pop-badge",
    "previewClass": "shape--scale-up",
    "htmlSnippet": "<div class=\"pop-badge\">\n  <span class=\"pop-icon\">&#10003;</span>\n  <strong>Acción Confirmada</strong>\n</div>",
    "previewHtml": "<div class=\"pop-badge is-playing\" data-motion-target>\n  <span class=\"pop-icon\">&#10003;</span>\n  <strong>Acción Confirmada</strong>\n</div>",
    "generateCss": (dur, timing) => `.pop-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 18px;
  background: #141523;
  border: 1px solid rgba(61, 221, 168, 0.4);
  border-radius: 999px;
  animation: scaleUp ${dur}s ${timing} both;
}

@keyframes scaleUp {
  from {
    opacity: 0;
    transform: scale(0.65);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .pop-badge { animation: none !important; opacity: 1 !important; transform: none !important; }
}`
  },
  {
    "id": "rotate-in",
    "name": "Rotate In",
    "category": "Entrada",
    "defaultDuration": 0.55,
    "defaultTiming": "cubic-bezier(0.16, 1, 0.3, 1)",
    "timingOptions": [
      "cubic-bezier(0.16, 1, 0.3, 1)",
      "ease-out",
      "ease-in-out"
    ],
    "properties": "opacity, transform",
    "renderCost": "Favorables para composición",
    "renderCostType": "composite",
    "costExplanation": "Rotación angular combinada con escala en transform sobre la GPU sin modificar el layout.",
    "description": "Entrada angular con giro controlado y escala para insignias, sellos o premios desbloqueados.",
    "targetSelector": ".reward-badge",
    "previewClass": "shape--rotate-in",
    "htmlSnippet": "<div class=\"reward-badge\">\n  <span class=\"reward-star\">&#9733;</span>\n  <span>Nivel Pro Desbloqueado</span>\n</div>",
    "previewHtml": "<div class=\"reward-badge is-playing\" data-motion-target>\n  <span class=\"reward-star\">&#9733;</span>\n  <span>Nivel Pro Desbloqueado</span>\n</div>",
    "generateCss": (dur, timing) => `.reward-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 12px;
  background: rgba(123, 110, 246, 0.15);
  border: 1px solid rgba(123, 110, 246, 0.4);
  animation: rotateIn ${dur}s ${timing} both;
}

@keyframes rotateIn {
  from {
    opacity: 0;
    transform: rotate(-15deg) scale(0.8);
  }
  to {
    opacity: 1;
    transform: rotate(0deg) scale(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .reward-badge { animation: none !important; opacity: 1 !important; transform: none !important; }
}`
  },
  {
    "id": "flip-in-x",
    "name": "Flip In X / Volteo Horizontal",
    "category": "Entrada",
    "defaultDuration": 0.6,
    "defaultTiming": "cubic-bezier(0.16, 1, 0.3, 1)",
    "timingOptions": [
      "cubic-bezier(0.16, 1, 0.3, 1)",
      "ease-out",
      "ease-in-out"
    ],
    "properties": "transform (rotateX), opacity",
    "renderCost": "Favorables para composición",
    "renderCostType": "composite",
    "costExplanation": "Giro tridimensional alrededor del eje X con perspective, ejecutado enteramente en el hilo compositor.",
    "description": "Volteo 3D que cae como pestaña de marcador de panel para tarjetas de estadísticas.",
    "targetSelector": ".kpi-card",
    "previewClass": "shape--flip-in-x",
    "htmlSnippet": "<div class=\"kpi-card\">\n  <span class=\"kpi-label\">Usuarios Activos</span>\n  <strong class=\"kpi-value\">+24,850</strong>\n</div>",
    "previewHtml": "<div class=\"kpi-card is-playing\" data-motion-target>\n  <span class=\"kpi-label\">Usuarios Activos</span>\n  <strong class=\"kpi-value\">+24,850</strong>\n</div>",
    "generateCss": (dur, timing) => `.kpi-card {
  perspective: 600px;
  padding: 12px 18px;
  border-radius: 12px;
  background: #141523;
  border: 1px solid rgba(123, 110, 246, 0.3);
  animation: flipInX ${dur}s ${timing} both;
}

@keyframes flipInX {
  from {
    opacity: 0;
    transform: perspective(600px) rotateX(-70deg);
  }
  to {
    opacity: 1;
    transform: perspective(600px) rotateX(0deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .kpi-card { animation: none !important; opacity: 1 !important; transform: none !important; }
}`
  },
  {
    "id": "slide-up",
    "name": "Slide Up / Deslizamiento Ascendente",
    "category": "Entrada",
    "defaultDuration": 0.5,
    "defaultTiming": "cubic-bezier(0.16, 1, 0.3, 1)",
    "timingOptions": [
      "cubic-bezier(0.16, 1, 0.3, 1)",
      "ease-out",
      "ease-in-out"
    ],
    "properties": "opacity, transform",
    "renderCost": "Favorables para composición",
    "renderCostType": "composite",
    "costExplanation": "Desplaza desde translateY(32px) a 0 con fade in en compositor sin forzar reflow.",
    "description": "Elevación limpia desde abajo para componentes que ingresan al viewport.",
    "targetSelector": ".action-pill",
    "previewClass": "shape--slide-up",
    "htmlSnippet": "<div class=\"action-pill\">\n  <span class=\"pill-dot\"></span>\n  <span>Sincronización en curso</span>\n</div>",
    "previewHtml": "<div class=\"action-pill is-playing\" data-motion-target>\n  <span class=\"pill-dot\"></span>\n  <span>Sincronización en curso</span>\n</div>",
    "generateCss": (dur, timing) => `.action-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 999px;
  background: #141523;
  border: 1px solid rgba(61, 221, 168, 0.3);
  animation: slideUp ${dur}s ${timing} both;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(32px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .action-pill { animation: none !important; opacity: 1 !important; transform: none !important; }
}`
  },
  {
    "id": "blur-in",
    "name": "Blur In / Desenfoque Progresivo",
    "category": "Entrada",
    "defaultDuration": 0.6,
    "defaultTiming": "cubic-bezier(0.16, 1, 0.3, 1)",
    "timingOptions": [
      "cubic-bezier(0.16, 1, 0.3, 1)",
      "ease-out",
      "ease-in-out"
    ],
    "properties": "filter, opacity",
    "renderCost": "Repintado / Paint (filtro)",
    "renderCostType": "paint",
    "costExplanation": "Anima filter: blur() requiriendo rasterización de filtros por convolución en los cuadros iniciales.",
    "description": "Transición elegante desde desenfoque profundo hacia nitidez fotográfica.",
    "targetSelector": ".glass-quote",
    "previewClass": "shape--blur-in",
    "htmlSnippet": "<div class=\"glass-quote\">\n  <p>\"Diseño en movimiento sin fricción.\"</p>\n</div>",
    "previewHtml": "<div class=\"glass-quote is-playing\" data-motion-target>\n  <p>\"Diseño en movimiento sin fricción.\"</p>\n</div>",
    "generateCss": (dur, timing) => `.glass-quote {
  padding: 12px 18px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: blurIn ${dur}s ${timing} both;
}

@keyframes blurIn {
  from {
    opacity: 0;
    filter: blur(14px);
  }
  to {
    opacity: 1;
    filter: blur(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .glass-quote { animation: none !important; opacity: 1 !important; filter: none !important; }
}`
  },
  {
    "id": "curtain-reveal",
    "name": "Curtain Reveal / Recorte en Cortina",
    "category": "Entrada",
    "defaultDuration": 0.55,
    "defaultTiming": "cubic-bezier(0.16, 1, 0.3, 1)",
    "timingOptions": [
      "cubic-bezier(0.16, 1, 0.3, 1)",
      "ease-out",
      "ease-in-out"
    ],
    "properties": "clip-path",
    "renderCost": "Repintado / Paint (máscara)",
    "renderCostType": "paint",
    "costExplanation": "Utiliza clip-path: inset() para recortar geométricamente la vista del elemento sin moverlo del flujo.",
    "description": "Despliegue horizontal que descorre una cortina visual para desvelar contenido.",
    "targetSelector": ".curtain-panel",
    "previewClass": "shape--curtain-reveal",
    "htmlSnippet": "<div class=\"curtain-panel\">\n  <strong>Módulo Verificado</strong>\n  <span>100% código nativo</span>\n</div>",
    "previewHtml": "<div class=\"curtain-panel is-playing\" data-motion-target>\n  <strong>Módulo Verificado</strong>\n  <span>100% código nativo</span>\n</div>",
    "generateCss": (dur, timing) => `.curtain-panel {
  padding: 12px 18px;
  border-radius: 12px;
  background: #141523;
  border: 1px solid rgba(123, 110, 246, 0.3);
  animation: curtain ${dur}s ${timing} both;
}

@keyframes curtain {
  from {
    clip-path: inset(0 100% 0 0);
  }
  to {
    clip-path: inset(0 0 0 0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .curtain-panel { animation: none !important; clip-path: none !important; }
}`
  },
  {
    "id": "bounce-in",
    "name": "Bounce In / Entrada con Rebote",
    "category": "Entrada",
    "defaultDuration": 0.7,
    "defaultTiming": "cubic-bezier(0.28, 0.84, 0.42, 1)",
    "timingOptions": [
      "cubic-bezier(0.28, 0.84, 0.42, 1)",
      "ease-out",
      "ease-in-out"
    ],
    "properties": "transform, opacity",
    "renderCost": "Favorables para composición",
    "renderCostType": "composite",
    "costExplanation": "Rebote elástico sobre scale() que oscila en torno a 1.0 sin disparar reflow.",
    "description": "Aparición enérgica con sobreimpulso elástico para botones primarios o alertas destacadas.",
    "targetSelector": ".bounce-in-box",
    "previewClass": "shape--bounce-in",
    "htmlSnippet": "<div class=\"bounce-in-box\">\n  <span class=\"badge-icon\">!</span>\n  <span>Actualización Disponible</span>\n</div>",
    "previewHtml": "<div class=\"bounce-in-box is-playing\" data-motion-target>\n  <span class=\"badge-icon\">!</span>\n  <span>Actualización Disponible</span>\n</div>",
    "generateCss": (dur, timing) => `.bounce-in-box {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 18px;
  border-radius: 12px;
  background: #141523;
  border: 1px solid rgba(255, 110, 101, 0.4);
  animation: bounceIn ${dur}s ${timing} both;
}

@keyframes bounceIn {
  0% { opacity: 0; transform: scale(0.3); }
  50% { opacity: 1; transform: scale(1.08); }
  70% { transform: scale(0.94); }
  100% { transform: scale(1); }
}

@media (prefers-reduced-motion: reduce) {
  .bounce-in-box { animation: none !important; opacity: 1 !important; transform: none !important; }
}`
  },
  {
    "id": "drop-in",
    "name": "Drop In / Descenso con Impacto",
    "category": "Entrada",
    "defaultDuration": 0.5,
    "defaultTiming": "cubic-bezier(0.16, 1, 0.3, 1)",
    "timingOptions": [
      "cubic-bezier(0.16, 1, 0.3, 1)",
      "ease-out",
      "ease-in-out"
    ],
    "properties": "transform, opacity",
    "renderCost": "Favorables para composición",
    "renderCostType": "composite",
    "costExplanation": "Caída desde el margen superior con parada elástica en translateY() delegada al hilo compositor.",
    "description": "Descenso vertical rápido que simula gravedad para cabeceras o banners flotantes.",
    "targetSelector": ".drop-card",
    "previewClass": "shape--drop-in",
    "htmlSnippet": "<div class=\"drop-card\">\n  <strong>Alerta del Servidor</strong>\n  <small>Latencia normalizada</small>\n</div>",
    "previewHtml": "<div class=\"drop-card is-playing\" data-motion-target>\n  <strong>Alerta del Servidor</strong>\n  <small>Latencia normalizada</small>\n</div>",
    "generateCss": (dur, timing) => `.drop-card {
  padding: 10px 16px;
  border-radius: 12px;
  background: #141523;
  border: 1px solid rgba(123, 110, 246, 0.3);
  animation: dropIn ${dur}s ${timing} both;
}

@keyframes dropIn {
  from {
    opacity: 0;
    transform: translateY(-44px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .drop-card { animation: none !important; opacity: 1 !important; transform: none !important; }
}`
  },
  {
    "id": "bounce",
    "name": "Bounce",
    "category": "Énfasis",
    "defaultDuration": 0.85,
    "defaultTiming": "cubic-bezier(0.28, 0.84, 0.42, 1)",
    "timingOptions": [
      "cubic-bezier(0.28, 0.84, 0.42, 1)",
      "ease-out",
      "ease-in-out",
      "linear"
    ],
    "properties": "transform",
    "renderCost": "Favorables para composición",
    "renderCostType": "composite",
    "costExplanation": "Anima translateY y scaleY sobre el compositor sin alterar la posición de los elementos adyacentes en el DOM.",
    "description": "Rebote elástico en el eje vertical para capturar la atención en alertas o notificaciones.",
    "targetSelector": ".bell-badge",
    "previewClass": "shape--bounce",
    "htmlSnippet": "<div class=\"bell-badge\">\n  <div class=\"bell-icon\">Aviso</div>\n  <span class=\"bell-count\">3</span>\n</div>",
    "previewHtml": "<div class=\"bell-badge is-playing\" data-motion-target>\n  <div class=\"bell-icon\">\n    <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9\"></path><path d=\"M13.73 21a2 2 0 0 1-3.46 0\"></path></svg>\n  </div>\n  <span class=\"bell-count\">3</span>\n</div>",
    "generateCss": (dur, timing) => `.bell-badge {
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
    "id": "pulse",
    "name": "Pulse",
    "category": "Énfasis",
    "defaultDuration": 1.6,
    "defaultTiming": "ease-in-out",
    "timingOptions": [
      "ease-in-out",
      "ease-out",
      "linear",
      "cubic-bezier(0.16, 1, 0.3, 1)"
    ],
    "properties": "transform, box-shadow",
    "renderCost": "Composición y Repintado",
    "renderCostType": "paint",
    "costExplanation": "transform escala el núcleo de forma económica, pero animar el radio de box-shadow requiere rasterizado adicional (paint) en cada ciclo.",
    "description": "Efecto de latido continuo con onda expansiva para estados activos o transmisiones en directo.",
    "targetSelector": ".status-beacon",
    "previewClass": "shape--pulse",
    "htmlSnippet": "<div class=\"status-beacon\">\n  <span class=\"beacon-ring\"></span>\n  <span class=\"beacon-dot\"></span>\n  <span class=\"beacon-label\">SISTEMA ONLINE</span>\n</div>",
    "previewHtml": "<div class=\"status-beacon is-playing\" data-motion-target>\n  <span class=\"beacon-ring\"></span>\n  <span class=\"beacon-dot\"></span>\n  <span class=\"beacon-label\">SISTEMA ONLINE</span>\n</div>",
    "generateCss": (dur, timing) => `.status-beacon {
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
    "id": "shake",
    "name": "Shake",
    "category": "Énfasis",
    "defaultDuration": 0.5,
    "defaultTiming": "ease-in-out",
    "timingOptions": [
      "ease-in-out",
      "linear",
      "ease-out",
      "cubic-bezier(0.16, 1, 0.3, 1)"
    ],
    "properties": "transform",
    "renderCost": "Favorables para composición",
    "renderCostType": "composite",
    "costExplanation": "Oscila translateX sin desplazar ni afectar el flujo del documento.",
    "description": "Oscilación horizontal enérgica para comunicar accesos denegados o validaciones erróneas.",
    "targetSelector": ".input-alert",
    "previewClass": "shape--shake",
    "htmlSnippet": "<div class=\"input-alert\">\n  <span class=\"alert-icon\">!</span>\n  <span class=\"alert-text\">Error de acceso</span>\n</div>",
    "previewHtml": "<div class=\"input-alert is-playing\" data-motion-target>\n  <span class=\"alert-icon\">\n    <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z\"></path><line x1=\"12\" y1=\"9\" x2=\"12\" y2=\"13\"></line><line x1=\"12\" y1=\"17\" x2=\"12.01\" y2=\"17\"></line></svg>\n  </span>\n  <span class=\"alert-text\">Error de acceso</span>\n</div>",
    "generateCss": (dur, timing) => `.input-alert {
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
    "id": "border-beam",
    "name": "Borde Radiante (Conic Beam)",
    "category": "Énfasis",
    "defaultDuration": 3,
    "defaultTiming": "linear",
    "timingOptions": [
      "linear",
      "ease-in-out",
      "ease-out"
    ],
    "properties": "transform (rotate)",
    "renderCost": "Favorables para composición",
    "renderCostType": "composite",
    "costExplanation": "Gira un plano degradado cónico mediante rotate() detrás de una máscara interior, generando el haz de luz sin repintar bordes.",
    "description": "Haz luminoso continuo que recorre el perímetro de la tarjeta para destacar elementos premium o planes destacados.",
    "targetSelector": ".radiant-card",
    "previewClass": "shape--border-beam",
    "htmlSnippet": "<div class=\"radiant-card\">\n  <div class=\"radiant-beam\"></div>\n  <div class=\"radiant-body\">\n    <span class=\"radiant-badge\">DESTACADO</span>\n    <strong>Plan Ilimitado</strong>\n    <p>Rendimiento acelerado y soporte técnico.</p>\n  </div>\n</div>",
    "previewHtml": "<div class=\"radiant-card is-playing\" data-motion-target>\n  <div class=\"radiant-beam\"></div>\n  <div class=\"radiant-body\">\n    <span class=\"radiant-badge\">DESTACADO</span>\n    <strong>Plan Ilimitado</strong>\n    <p>Rendimiento acelerado y soporte técnico.</p>\n  </div>\n</div>",
    "generateCss": (dur, timing) => `.radiant-card {
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
    "id": "heartbeat",
    "name": "Latido / Heartbeat",
    "category": "Énfasis",
    "defaultDuration": 1.3,
    "defaultTiming": "ease-in-out",
    "timingOptions": [
      "ease-in-out",
      "ease-out",
      "linear"
    ],
    "properties": "transform (scale)",
    "renderCost": "Favorables para composición",
    "renderCostType": "composite",
    "costExplanation": "Doble pulso sincopado con scale() que simula sístole y diástole directamente en el hilo compositor.",
    "description": "Doble pulsación rítmica para llamadas a la acción críticas o contadores de favoritos.",
    "targetSelector": ".heart-badge",
    "previewClass": "shape--heartbeat",
    "htmlSnippet": "<div class=\"heart-badge\">\n  <span class=\"heart-icon\">&hearts;</span>\n  <strong>Llamada en Espera</strong>\n</div>",
    "previewHtml": "<div class=\"heart-badge is-playing\" data-motion-target>\n  <span class=\"heart-icon\">&hearts;</span>\n  <strong>Llamada en Espera</strong>\n</div>",
    "generateCss": (dur, timing) => `.heart-badge {
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
    "id": "flash",
    "name": "Destello de Alerta / Flash",
    "category": "Énfasis",
    "defaultDuration": 0.9,
    "defaultTiming": "ease-out",
    "timingOptions": [
      "ease-out",
      "ease-in-out",
      "linear"
    ],
    "properties": "opacity",
    "renderCost": "Favorables para composición",
    "renderCostType": "composite",
    "costExplanation": "Parpadeo rápido exclusivamente de opacidad, ligero y económico para avisos en tiempo real.",
    "description": "Destellos intermitentes rápidos para advertencias de conexión o batería baja.",
    "targetSelector": ".flash-pill",
    "previewClass": "shape--flash",
    "htmlSnippet": "<div class=\"flash-pill\">\n  <span class=\"flash-dot\"></span>\n  <span>Grabando en vivo</span>\n</div>",
    "previewHtml": "<div class=\"flash-pill is-playing\" data-motion-target>\n  <span class=\"flash-dot\"></span>\n  <span>Grabando en vivo</span>\n</div>",
    "generateCss": (dur, timing) => `.flash-pill {
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
    "id": "jiggle",
    "name": "Deformación Elástica / Jiggle Wobble",
    "category": "Énfasis",
    "defaultDuration": 0.8,
    "defaultTiming": "ease-in-out",
    "timingOptions": [
      "ease-in-out",
      "ease-out",
      "linear"
    ],
    "properties": "transform (skew, rotate)",
    "renderCost": "Favorables para composición",
    "renderCostType": "composite",
    "costExplanation": "Modulación de skewX() y rotate() que distorsiona los ángulos sin recalcular dimensiones físicas.",
    "description": "Efecto gelatinoso divertido para iconos arrastrables o elementos en modo edición.",
    "targetSelector": ".wobble-item",
    "previewClass": "shape--jiggle",
    "htmlSnippet": "<div class=\"wobble-item\">\n  <span>Modo Edición</span>\n</div>",
    "previewHtml": "<div class=\"wobble-item is-playing\" data-motion-target>\n  <span>Modo Edición</span>\n</div>",
    "generateCss": (dur, timing) => `.wobble-item {
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
    "id": "glow-pulse",
    "name": "Aura de Neón / Glow Pulse",
    "category": "Énfasis",
    "defaultDuration": 2,
    "defaultTiming": "ease-in-out",
    "timingOptions": [
      "ease-in-out",
      "ease-out",
      "linear"
    ],
    "properties": "box-shadow",
    "renderCost": "Repintado / Paint (sombra)",
    "renderCostType": "paint",
    "costExplanation": "Expande y contrae el radio de desenfoque de sombras superpuestas con box-shadow en cada ciclo de pintado.",
    "description": "Respiración luminosa con halo de neón para botones de compra o elementos prémium.",
    "targetSelector": ".glow-btn",
    "previewClass": "shape--glow-pulse",
    "htmlSnippet": "<button class=\"glow-btn\" type=\"button\">\n  <span>Suscribirse Ahora</span>\n</button>",
    "previewHtml": "<button class=\"glow-btn is-playing\" type=\"button\" data-motion-target>\n  <span>Suscribirse Ahora</span>\n</button>",
    "generateCss": (dur, timing) => `.glow-btn {
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
    "id": "rubber-band",
    "name": "Goma Elástica / Rubber Band",
    "category": "Énfasis",
    "defaultDuration": 0.9,
    "defaultTiming": "ease-out",
    "timingOptions": [
      "ease-out",
      "ease-in-out",
      "linear"
    ],
    "properties": "transform (scale3d)",
    "renderCost": "Favorables para composición",
    "renderCostType": "composite",
    "costExplanation": "Estira el eje X mientras aplana el eje Y (conservando el volumen visual) mediante scale3d en GPU.",
    "description": "Efecto de compresión y estiramiento cómico al recibir una interacción importante.",
    "targetSelector": ".elastic-tag",
    "previewClass": "shape--rubber-band",
    "htmlSnippet": "<div class=\"elastic-tag\">\n  <strong>OFERTA FLASH</strong>\n</div>",
    "previewHtml": "<div class=\"elastic-tag is-playing\" data-motion-target>\n  <strong>OFERTA FLASH</strong>\n</div>",
    "generateCss": (dur, timing) => `.elastic-tag {
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
    "id": "float",
    "name": "Flotación Continua / Soft Float",
    "category": "Énfasis",
    "defaultDuration": 3,
    "defaultTiming": "ease-in-out",
    "timingOptions": [
      "ease-in-out",
      "linear",
      "ease-out"
    ],
    "properties": "transform (translateY)",
    "renderCost": "Favorables para composición",
    "renderCostType": "composite",
    "costExplanation": "Movimiento armónico simple sinusoidal vertical ejecutado enteramente en el compositor.",
    "description": "Levitación orgánica relajante para tarjetas héroe, avatares flotantes o nubes informativas.",
    "targetSelector": ".floating-orb",
    "previewClass": "shape--float",
    "htmlSnippet": "<div class=\"floating-orb\">\n  <span class=\"orb-icon\">&oplus;</span>\n  <span>Servicio Activo</span>\n</div>",
    "previewHtml": "<div class=\"floating-orb is-playing\" data-motion-target>\n  <span class=\"orb-icon\">&oplus;</span>\n  <span>Servicio Activo</span>\n</div>",
    "generateCss": (dur, timing) => `.floating-orb {
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
    "id": "spinner",
    "name": "Spinner",
    "category": "Carga",
    "defaultDuration": 0.9,
    "defaultTiming": "linear",
    "timingOptions": [
      "linear",
      "ease-in-out",
      "cubic-bezier(0.5, 0, 0.5, 1)"
    ],
    "properties": "transform",
    "renderCost": "Favorables para composición",
    "renderCostType": "composite",
    "costExplanation": "Giro continuo de 360 grados mediante rotate() que el hilo compositor puede refrescar eficientemente.",
    "description": "Rotación continua sobre un anillo con borde acentuado para indicar estados de espera.",
    "targetSelector": ".spinner-ring",
    "previewClass": "shape--spinner",
    "htmlSnippet": "<div class=\"spinner-ring\" role=\"status\" aria-label=\"Cargando\"></div>",
    "previewHtml": "<div class=\"spinner-stage\" data-motion-target>\n  <div class=\"spinner-ring is-playing\" role=\"status\" aria-label=\"Cargando\"></div>\n</div>",
    "generateCss": (dur, timing) => `.spinner-ring {
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
}`
  },
  {
    "id": "progress-ring",
    "name": "Anillo de Progreso SVG",
    "category": "Carga",
    "defaultDuration": 1.5,
    "defaultTiming": "cubic-bezier(0.16, 1, 0.3, 1)",
    "timingOptions": [
      "cubic-bezier(0.16, 1, 0.3, 1)",
      "ease-out",
      "ease-in-out",
      "linear"
    ],
    "properties": "stroke-dashoffset",
    "renderCost": "Repintado / Paint (SVG)",
    "renderCostType": "paint",
    "costExplanation": "Actualiza el desfase del trazo perimétrico en el espacio vectorial SVG. Ideal para indicadores de carga cuantificables.",
    "description": "Círculo de progreso animado que se llena fluidamente hasta el 80% con indicador de porcentaje central.",
    "targetSelector": ".ring-progress-circle",
    "previewClass": "shape--progress-ring",
    "htmlSnippet": "<div class=\"progress-ring-card\">\n  <div class=\"ring-wrapper\">\n    <svg class=\"ring-svg\" width=\"64\" height=\"64\" viewBox=\"0 0 64 64\">\n      <circle class=\"ring-bg\" cx=\"32\" cy=\"32\" r=\"26\"></circle>\n      <circle class=\"ring-progress-circle\" cx=\"32\" cy=\"32\" r=\"26\"></circle>\n    </svg>\n    <span class=\"ring-percent\">80%</span>\n  </div>\n  <div class=\"ring-info\">\n    <strong>Sincronizando</strong>\n    <p>Descargando paquetes...</p>\n  </div>\n</div>",
    "previewHtml": "<div class=\"progress-ring-card is-playing\" data-motion-target>\n  <div class=\"ring-wrapper\">\n    <svg class=\"ring-svg\" width=\"64\" height=\"64\" viewBox=\"0 0 64 64\" aria-hidden=\"true\">\n      <circle class=\"ring-bg\" cx=\"32\" cy=\"32\" r=\"26\"></circle>\n      <circle class=\"ring-progress-circle\" cx=\"32\" cy=\"32\" r=\"26\"></circle>\n    </svg>\n    <span class=\"ring-percent\">80%</span>\n  </div>\n  <div class=\"ring-info\">\n    <strong>Sincronizando</strong>\n    <p>Descargando paquetes...</p>\n  </div>\n</div>",
    "generateCss": (dur, timing) => `.ring-progress-circle {
  fill: none;
  stroke: #7b6ef6;
  stroke-width: 4.5;
  stroke-linecap: round;
  stroke-dasharray: 163.36;
  stroke-dashoffset: 163.36;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  animation: fillRing ${dur}s ${timing} both;
}

@keyframes fillRing {
  from { stroke-dashoffset: 163.36; }
  to { stroke-dashoffset: 32.67; }
}

@media (prefers-reduced-motion: reduce) {
  .ring-progress-circle {
    animation: none !important;
    stroke-dashoffset: 32.67 !important;
  }
}`
  },
  {
    "id": "dots-wave",
    "name": "Onda de Puntos / Bouncing Dots",
    "category": "Carga",
    "defaultDuration": 1.2,
    "defaultTiming": "ease-in-out",
    "timingOptions": [
      "ease-in-out",
      "ease-out",
      "linear"
    ],
    "properties": "transform (translateY), opacity",
    "renderCost": "Favorables para composición",
    "renderCostType": "composite",
    "costExplanation": "Tres círculos oscilando con retrasos escalonados en translateY() gestionados por el hilo compositor.",
    "description": "Puntos flotantes rítmicos clásicos en interfaces de chat para indicar que alguien está escribiendo.",
    "targetSelector": ".dots-container",
    "previewClass": "shape--dots-wave",
    "htmlSnippet": "<div class=\"dots-container\">\n  <span class=\"dot-bubble dot-bubble--1\"></span>\n  <span class=\"dot-bubble dot-bubble--2\"></span>\n  <span class=\"dot-bubble dot-bubble--3\"></span>\n</div>",
    "previewHtml": "<div class=\"dots-container is-playing\" data-motion-target>\n  <span class=\"dot-bubble dot-bubble--1\"></span>\n  <span class=\"dot-bubble dot-bubble--2\"></span>\n  <span class=\"dot-bubble dot-bubble--3\"></span>\n</div>",
    "generateCss": (dur, timing) => `.dots-container {
  display: inline-flex;
  gap: 8px;
  align-items: center;
  padding: 14px 20px;
  background: #141523;
  border-radius: 999px;
  border: 1px solid rgba(123, 110, 246, 0.25);
}

.dot-bubble {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #7b6ef6;
  animation: dotWave ${dur}s ${timing} infinite;
}

.dot-bubble--2 { animation-delay: 0.18s; }
.dot-bubble--3 { animation-delay: 0.36s; }

@keyframes dotWave {
  0%, 80%, 100% { transform: translateY(0); opacity: 0.5; }
  40% { transform: translateY(-10px); opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .dot-bubble { animation: none !important; opacity: 1 !important; transform: none !important; }
}`
  },
  {
    "id": "pulse-bars",
    "name": "Barras de Ecualizador / Wave Bars",
    "category": "Carga",
    "defaultDuration": 1,
    "defaultTiming": "ease-in-out",
    "timingOptions": [
      "ease-in-out",
      "linear",
      "ease-out"
    ],
    "properties": "transform (scaleY)",
    "renderCost": "Favorables para composición",
    "renderCostType": "composite",
    "costExplanation": "Usa transform: scaleY() con transform-origin: bottom para modular la altura sin forzar reflow de cajas.",
    "description": "Barras verticales de sonido moduladas para carga de audio, streaming o transcripción de voz.",
    "targetSelector": ".equalizer-box",
    "previewClass": "shape--pulse-bars",
    "htmlSnippet": "<div class=\"equalizer-box\">\n  <span class=\"eq-bar eq-bar--1\"></span>\n  <span class=\"eq-bar eq-bar--2\"></span>\n  <span class=\"eq-bar eq-bar--3\"></span>\n  <span class=\"eq-bar eq-bar--4\"></span>\n</div>",
    "previewHtml": "<div class=\"equalizer-box is-playing\" data-motion-target>\n  <span class=\"eq-bar eq-bar--1\"></span>\n  <span class=\"eq-bar eq-bar--2\"></span>\n  <span class=\"eq-bar eq-bar--3\"></span>\n  <span class=\"eq-bar eq-bar--4\"></span>\n</div>",
    "generateCss": (dur, timing) => `.equalizer-box {
  display: inline-flex;
  gap: 5px;
  align-items: flex-end;
  height: 32px;
  padding: 6px 14px;
  background: #141523;
  border-radius: 8px;
}

.eq-bar {
  width: 5px;
  height: 100%;
  background: #3ddda8;
  border-radius: 3px;
  transform-origin: bottom center;
  animation: eqPulse ${dur}s ${timing} infinite;
}

.eq-bar--1 { animation-delay: 0.1s; }
.eq-bar--2 { animation-delay: 0.3s; }
.eq-bar--3 { animation-delay: 0.15s; }
.eq-bar--4 { animation-delay: 0.45s; }

@keyframes eqPulse {
  0%, 100% { transform: scaleY(0.2); }
  50% { transform: scaleY(1); }
}

@media (prefers-reduced-motion: reduce) {
  .eq-bar { animation: none !important; transform: scaleY(0.6) !important; }
}`
  },
  {
    "id": "progress-bar",
    "name": "Barra de Progreso Indeterminada",
    "category": "Carga",
    "defaultDuration": 1.6,
    "defaultTiming": "cubic-bezier(0.65, 0, 0.35, 1)",
    "timingOptions": [
      "cubic-bezier(0.65, 0, 0.35, 1)",
      "linear",
      "ease-in-out"
    ],
    "properties": "transform (translateX, scaleX)",
    "renderCost": "Favorables para composición",
    "renderCostType": "composite",
    "costExplanation": "El haz viaja mediante transform: translateX() y scaleX() a lo largo de un canal fijo con overflow: hidden.",
    "description": "Línea de avance fluido continua que indica actividad en curso sin porcentaje definido.",
    "targetSelector": ".indeterminate-track",
    "previewClass": "shape--progress-bar",
    "htmlSnippet": "<div class=\"indeterminate-track\">\n  <div class=\"indeterminate-bar\"></div>\n</div>",
    "previewHtml": "<div class=\"indeterminate-track is-playing\" data-motion-target>\n  <div class=\"indeterminate-bar\"></div>\n</div>",
    "generateCss": (dur, timing) => `.indeterminate-track {
  width: 220px;
  height: 6px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  overflow: hidden;
  position: relative;
}

.indeterminate-bar {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 45%;
  background: #7b6ef6;
  border-radius: 999px;
  animation: indetProgress ${dur}s ${timing} infinite;
}

@keyframes indetProgress {
  0% { transform: translateX(-100%) scaleX(0.4); }
  50% { transform: translateX(100%) scaleX(1); }
  100% { transform: translateX(300%) scaleX(0.4); }
}

@media (prefers-reduced-motion: reduce) {
  .indeterminate-bar { animation: none !important; width: 60% !important; transform: none !important; }
}`
  },
  {
    "id": "radar-sweep",
    "name": "Barrido de Radar / Radar Sweep",
    "category": "Carga",
    "defaultDuration": 2.2,
    "defaultTiming": "linear",
    "timingOptions": [
      "linear",
      "ease-in-out"
    ],
    "properties": "transform (rotate)",
    "renderCost": "Favorables para composición",
    "renderCostType": "composite",
    "costExplanation": "Rotación continua de un gradiente cónico sobre el compositor simulando un barrido sonar.",
    "description": "Haz circular de escaneo continuo para interfaces de búsqueda geográfica o sensores.",
    "targetSelector": ".radar-dish",
    "previewClass": "shape--radar-sweep",
    "htmlSnippet": "<div class=\"radar-dish\">\n  <div class=\"radar-beam\"></div>\n  <span class=\"radar-center\"></span>\n</div>",
    "previewHtml": "<div class=\"radar-dish is-playing\" data-motion-target>\n  <div class=\"radar-beam\"></div>\n  <span class=\"radar-center\"></span>\n</div>",
    "generateCss": (dur, timing) => `.radar-dish {
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid rgba(61, 221, 168, 0.3);
  background: rgba(61, 221, 168, 0.05);
  overflow: hidden;
}

.radar-beam {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: conic-gradient(from 0deg, rgba(61, 221, 168, 0.4) 0deg, transparent 60deg, transparent 360deg);
  animation: radarSpin ${dur}s ${timing} infinite;
}

.radar-center {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #3ddda8;
  transform: translate(-50%, -50%);
}

@keyframes radarSpin {
  to { transform: rotate(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .radar-beam { animation: none !important; opacity: 0.3 !important; }
}`
  },
  {
    "id": "dual-ring",
    "name": "Doble Anillo Concéntrico",
    "category": "Carga",
    "defaultDuration": 1.2,
    "defaultTiming": "linear",
    "timingOptions": [
      "linear",
      "ease-in-out"
    ],
    "properties": "transform (rotate)",
    "renderCost": "Favorables para composición",
    "renderCostType": "composite",
    "costExplanation": "Dos aros anidados rotando en sentidos opuestos usando transform: rotate().",
    "description": "Spinner moderno de doble giro concéntrico con velocidad contraria para operaciones complejas.",
    "targetSelector": ".dual-ring-wrap",
    "previewClass": "shape--dual-ring",
    "htmlSnippet": "<div class=\"dual-ring-wrap\">\n  <div class=\"dual-ring-outer\"></div>\n  <div class=\"dual-ring-inner\"></div>\n</div>",
    "previewHtml": "<div class=\"dual-ring-wrap is-playing\" data-motion-target>\n  <div class=\"dual-ring-outer\"></div>\n  <div class=\"dual-ring-inner\"></div>\n</div>",
    "generateCss": (dur, timing) => `.dual-ring-wrap {
  position: relative;
  width: 48px;
  height: 48px;
}

.dual-ring-outer {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #7b6ef6;
  border-bottom-color: #7b6ef6;
  animation: spinOuter ${dur}s ${timing} infinite;
}

.dual-ring-inner {
  position: absolute;
  inset: 7px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-left-color: #3ddda8;
  border-right-color: #3ddda8;
  animation: spinInner ${dur * 0.75}s ${timing} infinite reverse;
}

@keyframes spinOuter { to { transform: rotate(360deg); } }
@keyframes spinInner { to { transform: rotate(360deg); } }

@media (prefers-reduced-motion: reduce) {
  .dual-ring-outer, .dual-ring-inner { animation: none !important; opacity: 0.5 !important; }
}`
  },
  {
    "id": "shimmer-box",
    "name": "Bloque de Carga Shimmer",
    "category": "Carga",
    "defaultDuration": 1.6,
    "defaultTiming": "ease-in-out",
    "timingOptions": [
      "ease-in-out",
      "linear",
      "ease-out"
    ],
    "properties": "background-position",
    "renderCost": "Repintado / Paint",
    "renderCostType": "paint",
    "costExplanation": "Reflejo transversal sobre degradado angular con background-position continuo.",
    "description": "Efecto de brillo fotón diagonal sobre rectángulos de carga previa de imágenes.",
    "targetSelector": ".shimmer-thumb",
    "previewClass": "shape--shimmer-box",
    "htmlSnippet": "<div class=\"shimmer-thumb\"></div>",
    "previewHtml": "<div class=\"shimmer-thumb is-playing\" data-motion-target></div>",
    "generateCss": (dur, timing) => `.shimmer-thumb {
  width: 200px;
  height: 70px;
  border-radius: 12px;
  background: linear-gradient(110deg, rgba(255, 255, 255, 0.04) 30%, rgba(255, 255, 255, 0.16) 50%, rgba(255, 255, 255, 0.04) 70%);
  background-size: 200% 100%;
  animation: boxShimmer ${dur}s ${timing} infinite;
}

@keyframes boxShimmer {
  to { background-position: -200% 0; }
}

@media (prefers-reduced-motion: reduce) {
  .shimmer-thumb { animation: none !important; background: rgba(255, 255, 255, 0.07) !important; }
}`
  },
  {
    "id": "orbit-dots",
    "name": "Satélites en Órbita / Orbit Dots",
    "category": "Carga",
    "defaultDuration": 1.8,
    "defaultTiming": "linear",
    "timingOptions": [
      "linear",
      "ease-in-out"
    ],
    "properties": "transform (rotate)",
    "renderCost": "Favorables para composición",
    "renderCostType": "composite",
    "costExplanation": "Giro de elementos esféricos alrededor de un origen central rotando sobre el compositor.",
    "description": "Puntos que rotan orbitalmente alrededor de un núcleo para sincronizaciones en segundo plano.",
    "targetSelector": ".orbit-stage",
    "previewClass": "shape--orbit-dots",
    "htmlSnippet": "<div class=\"orbit-stage\">\n  <div class=\"orbit-center\"></div>\n  <div class=\"orbit-sat orbit-sat--1\"></div>\n  <div class=\"orbit-sat orbit-sat--2\"></div>\n</div>",
    "previewHtml": "<div class=\"orbit-stage is-playing\" data-motion-target>\n  <div class=\"orbit-center\"></div>\n  <div class=\"orbit-sat orbit-sat--1\"></div>\n  <div class=\"orbit-sat orbit-sat--2\"></div>\n</div>",
    "generateCss": (dur, timing) => `.orbit-stage {
  position: relative;
  width: 54px;
  height: 54px;
  display: grid;
  place-items: center;
  animation: orbitRotate ${dur}s ${timing} infinite;
}

.orbit-center {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #7b6ef6;
}

.orbit-sat {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #3ddda8;
}

.orbit-sat--1 { top: 0; }
.orbit-sat--2 { bottom: 0; }

@keyframes orbitRotate { to { transform: rotate(360deg); } }

@media (prefers-reduced-motion: reduce) {
  .orbit-stage { animation: none !important; }
}`
  },
  {
    "id": "sand-timer",
    "name": "Reloj de Arena / Sand Flip",
    "category": "Carga",
    "defaultDuration": 1.4,
    "defaultTiming": "cubic-bezier(0.77, 0, 0.175, 1)",
    "timingOptions": [
      "cubic-bezier(0.77, 0, 0.175, 1)",
      "ease-in-out",
      "linear"
    ],
    "properties": "transform (rotate)",
    "renderCost": "Favorables para composición",
    "renderCostType": "composite",
    "costExplanation": "Rotación con pausas en múltiplos de 180 grados mediante una curva de aceleración cúbica.",
    "description": "Inversión rítmica de 180° que simula el volteo de un reloj de arena tradicional.",
    "targetSelector": ".sand-hourglass",
    "previewClass": "shape--sand-timer",
    "htmlSnippet": "<div class=\"sand-hourglass\">\n  <span class=\"sand-glyph\">&#9203;</span>\n</div>",
    "previewHtml": "<div class=\"sand-hourglass is-playing\" data-motion-target>\n  <span class=\"sand-glyph\">&#9203;</span>\n</div>",
    "generateCss": (dur, timing) => `.sand-hourglass {
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: #141523;
  border: 1px solid rgba(123, 110, 246, 0.3);
  font-size: 20px;
  color: #7b6ef6;
  animation: sandFlip ${dur}s ${timing} infinite;
}

@keyframes sandFlip {
  0% { transform: rotate(0deg); }
  50%, 100% { transform: rotate(180deg); }
}

@media (prefers-reduced-motion: reduce) {
  .sand-hourglass { animation: none !important; }
}`
  },
  {
    "id": "typing",
    "name": "Typing",
    "category": "Texto",
    "defaultDuration": 2.4,
    "defaultTiming": "steps(22, end)",
    "timingOptions": [
      "steps(22, end)",
      "steps(14, end)",
      "linear",
      "ease-out"
    ],
    "properties": "width, border-color",
    "renderCost": "Layout / Reflow (ancho)",
    "renderCostType": "layout",
    "costExplanation": "Animar width altera la geometría de la caja de texto en cada frame, disparando recálculos de diseño (layout).",
    "description": "Revelación secuencial del texto letra por letra mediante recorte de anchura y parpadeo de cursor.",
    "targetSelector": ".typing-text",
    "previewClass": "shape--typing",
    "htmlSnippet": "<div class=\"terminal-box\">\n  <span class=\"terminal-prompt\">$</span>\n  <span class=\"typing-text\">console.log(\"Motion!\");</span>\n</div>",
    "previewHtml": "<div class=\"terminal-box is-playing\" data-motion-target>\n  <div class=\"terminal-bar\">\n    <span></span><span></span><span></span>\n  </div>\n  <div class=\"terminal-body\">\n    <span class=\"terminal-prompt\">$</span>\n    <span class=\"typing-text\">console.log(\"Motion!\");</span>\n  </div>\n</div>",
    "generateCss": (dur, timing) => `.typing-text {
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
    "id": "text-shimmer",
    "name": "Texto con Reflejo Metálico",
    "category": "Texto",
    "defaultDuration": 2.2,
    "defaultTiming": "linear",
    "timingOptions": [
      "linear",
      "ease-in-out",
      "ease-out"
    ],
    "properties": "background-position",
    "renderCost": "Repintado / Paint (texto)",
    "renderCostType": "paint",
    "costExplanation": "Desplaza un degradado lineal sobre el texto usando background-clip: text en cada repintado.",
    "description": "Haz de brillo cromado que viaja sobre el titular como en interfaces de Apple o Linear.",
    "targetSelector": ".shimmer-headline",
    "previewClass": "shape--text-shimmer",
    "htmlSnippet": "<h3 class=\"shimmer-headline\">Diseño de Próxima Generación</h3>",
    "previewHtml": "<h3 class=\"shimmer-headline is-playing\" data-motion-target>Diseño de Próxima Generación</h3>",
    "generateCss": (dur, timing) => `.shimmer-headline {
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
    "id": "word-rotator",
    "name": "Rotador de Palabras / Word Carousel",
    "category": "Texto",
    "defaultDuration": 3.2,
    "defaultTiming": "cubic-bezier(0.16, 1, 0.3, 1)",
    "timingOptions": [
      "cubic-bezier(0.16, 1, 0.3, 1)",
      "ease-in-out",
      "ease-out"
    ],
    "properties": "transform (translateY)",
    "renderCost": "Favorables para composición",
    "renderCostType": "composite",
    "costExplanation": "Desplaza la columna de palabras con translateY() dentro de un marco de recorte overflow: hidden.",
    "description": "Carrusel tipográfico vertical que alterna adjetivos dentro de una frase.",
    "targetSelector": ".word-roller",
    "previewClass": "shape--word-rotator",
    "htmlSnippet": "<div class=\"word-rotator-frame\">\n  <span>Crea interfaces</span>\n  <div class=\"word-roller-mask\">\n    <div class=\"word-roller\">\n      <strong>rápidas</strong>\n      <strong>fluidas</strong>\n      <strong>modernas</strong>\n    </div>\n  </div>\n</div>",
    "previewHtml": "<div class=\"word-rotator-frame is-playing\" data-motion-target>\n  <span>Crea interfaces</span>\n  <div class=\"word-roller-mask\">\n    <div class=\"word-roller\">\n      <strong>rápidas</strong>\n      <strong>fluidas</strong>\n      <strong>modernas</strong>\n    </div>\n  </div>\n</div>",
    "generateCss": (dur, timing) => `.word-roller-mask {
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
    "id": "glitch-text",
    "name": "Glitch Cibernético / Cyber Glitch",
    "category": "Texto",
    "defaultDuration": 1.5,
    "defaultTiming": "ease-in-out",
    "timingOptions": [
      "ease-in-out",
      "linear",
      "step-end"
    ],
    "properties": "clip-path, transform",
    "renderCost": "Repintado / Paint",
    "renderCostType": "paint",
    "costExplanation": "Pseudo-elementos ::before y ::after con desfase cromático rojo/cian y recortes clip-path rápidos.",
    "description": "Distorsión digital retro-futurista con desfase RGB para cabeceras o eventos cyberpunk.",
    "targetSelector": ".glitch-title",
    "previewClass": "shape--glitch-text",
    "htmlSnippet": "<div class=\"glitch-title\" data-text=\"CYBER MOTION\">CYBER MOTION</div>",
    "previewHtml": "<div class=\"glitch-title is-playing\" data-text=\"CYBER MOTION\" data-motion-target>CYBER MOTION</div>",
    "generateCss": (dur, timing) => `.glitch-title {
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
    "id": "text-glow",
    "name": "Letrero de Neón / Neon Flicker",
    "category": "Texto",
    "defaultDuration": 1.8,
    "defaultTiming": "ease-in-out",
    "timingOptions": [
      "ease-in-out",
      "linear",
      "step-end"
    ],
    "properties": "text-shadow, opacity",
    "renderCost": "Repintado / Paint",
    "renderCostType": "paint",
    "costExplanation": "Modulación de múltiples radios de text-shadow para simular el cebado y parpadeo de gas neón.",
    "description": "Efecto de cartel luminoso parpadeante con aura multicolor e iluminación intermitente.",
    "targetSelector": ".neon-text",
    "previewClass": "shape--text-glow",
    "htmlSnippet": "<span class=\"neon-text\">STUDIO LIVE</span>",
    "previewHtml": "<span class=\"neon-text is-playing\" data-motion-target>STUDIO LIVE</span>",
    "generateCss": (dur, timing) => `.neon-text {
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
    "id": "gradient-flow",
    "name": "Gradiente Tipográfico Fluido",
    "category": "Texto",
    "defaultDuration": 4,
    "defaultTiming": "linear",
    "timingOptions": [
      "linear",
      "ease-in-out",
      "ease-out"
    ],
    "properties": "background-position",
    "renderCost": "Repintado / Paint",
    "renderCostType": "paint",
    "costExplanation": "Cicla un degradado multicolor continuo de 300% de tamaño sobre el texto en el hilo de pintado.",
    "description": "Arcoíris suave y calmante que fluye ininterrumpidamente a través del cuerpo tipográfico.",
    "targetSelector": ".gradient-flow-text",
    "previewClass": "shape--gradient-flow",
    "htmlSnippet": "<span class=\"gradient-flow-text\">Creatividad Interactiva</span>",
    "previewHtml": "<span class=\"gradient-flow-text is-playing\" data-motion-target>Creatividad Interactiva</span>",
    "generateCss": (dur, timing) => `.gradient-flow-text {
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
    "id": "wavy-letters",
    "name": "Texto Ondulante / Wave Text",
    "category": "Texto",
    "defaultDuration": 1.2,
    "defaultTiming": "ease-in-out",
    "timingOptions": [
      "ease-in-out",
      "ease-out",
      "linear"
    ],
    "properties": "transform (translateY)",
    "renderCost": "Favorables para composición",
    "renderCostType": "composite",
    "costExplanation": "Cada carácter anima translateY() con un retraso escalonado individual en el hilo compositor.",
    "description": "Onda sinusoidal que viaja por cada letra de la palabra simulando una marea elástica.",
    "targetSelector": ".wave-text-wrap",
    "previewClass": "shape--wavy-letters",
    "htmlSnippet": "<div class=\"wave-text-wrap\">\n  <span style=\"--i:0\">M</span><span style=\"--i:1\">o</span><span style=\"--i:2\">t</span><span style=\"--i:3\">i</span><span style=\"--i:4\">o</span><span style=\"--i:5\">n</span>\n</div>",
    "previewHtml": "<div class=\"wave-text-wrap is-playing\" data-motion-target>\n  <span style=\"--i:0\">M</span><span style=\"--i:1\">o</span><span style=\"--i:2\">t</span><span style=\"--i:3\">i</span><span style=\"--i:4\">o</span><span style=\"--i:5\">n</span>\n</div>",
    "generateCss": (dur, timing) => `.wave-text-wrap {
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
    "id": "split-reveal",
    "name": "Aparición por Línea / Line Reveal",
    "category": "Texto",
    "defaultDuration": 0.6,
    "defaultTiming": "cubic-bezier(0.16, 1, 0.3, 1)",
    "timingOptions": [
      "cubic-bezier(0.16, 1, 0.3, 1)",
      "ease-out",
      "ease-in-out"
    ],
    "properties": "transform (translateY)",
    "renderCost": "Favorables para composición",
    "renderCostType": "composite",
    "costExplanation": "El texto asciende desde detrás de un contenedor con overflow: hidden usando translateY(100%).",
    "description": "Entrada editorial limpia donde los títulos emergen desde el suelo sin alterar márgenes.",
    "targetSelector": ".mask-line-container",
    "previewClass": "shape--split-reveal",
    "htmlSnippet": "<div class=\"mask-line-container\">\n  <div class=\"mask-line-inner\">Arquitectura de Software</div>\n</div>",
    "previewHtml": "<div class=\"mask-line-container is-playing\" data-motion-target>\n  <div class=\"mask-line-inner\">Arquitectura de Software</div>\n</div>",
    "generateCss": (dur, timing) => `.mask-line-container {
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
    "id": "focus-blur-in",
    "name": "Enfoque Progresivo / Focus-in Text",
    "category": "Texto",
    "defaultDuration": 0.7,
    "defaultTiming": "cubic-bezier(0.16, 1, 0.3, 1)",
    "timingOptions": [
      "cubic-bezier(0.16, 1, 0.3, 1)",
      "ease-out",
      "ease-in-out"
    ],
    "properties": "filter, letter-spacing, opacity",
    "renderCost": "Repintado / Paint",
    "renderCostType": "paint",
    "costExplanation": "Combina filter: blur() y ajuste de espaciado letter-spacing para enfocar el titular gradualmente.",
    "description": "Efecto de lente cinematográfica donde las palabras desenfocadas cobran nitidez y se asientan.",
    "targetSelector": ".focus-in-heading",
    "previewClass": "shape--focus-blur-in",
    "htmlSnippet": "<h4 class=\"focus-in-heading\">EXPERIENCIA PREMIUM</h4>",
    "previewHtml": "<h4 class=\"focus-in-heading is-playing\" data-motion-target>EXPERIENCIA PREMIUM</h4>",
    "generateCss": (dur, timing) => `.focus-in-heading {
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
    "id": "counter-spin",
    "name": "Contador Numérico / Number Ticker",
    "category": "Texto",
    "defaultDuration": 1.8,
    "defaultTiming": "cubic-bezier(0.16, 1, 0.3, 1)",
    "timingOptions": [
      "cubic-bezier(0.16, 1, 0.3, 1)",
      "ease-out",
      "ease-in-out"
    ],
    "properties": "transform (translateY)",
    "renderCost": "Favorables para composición",
    "renderCostType": "composite",
    "costExplanation": "Columna numérica que se desplaza en translateY() dentro de una celda de recorte de altura fija.",
    "description": "Efecto de ruleta u odómetro para estadísticas de métricas, precios o contadores de logros.",
    "targetSelector": ".odometer-ticker",
    "previewClass": "shape--counter-spin",
    "htmlSnippet": "<div class=\"odometer-ticker\">\n  <span class=\"ticker-prefix\">$</span>\n  <div class=\"ticker-column-mask\">\n    <div class=\"ticker-digits\">\n      <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>\n    </div>\n  </div>\n  <span class=\"ticker-suffix\">k</span>\n</div>",
    "previewHtml": "<div class=\"odometer-ticker is-playing\" data-motion-target>\n  <span class=\"ticker-prefix\">$</span>\n  <div class=\"ticker-column-mask\">\n    <div class=\"ticker-digits\">\n      <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>\n    </div>\n  </div>\n  <span class=\"ticker-suffix\">k</span>\n</div>",
    "generateCss": (dur, timing) => `.odometer-ticker {
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
    "id": "hover-lift",
    "name": "Hover lift",
    "category": "Interacción",
    "defaultDuration": 0.24,
    "defaultTiming": "cubic-bezier(0.16, 1, 0.3, 1)",
    "timingOptions": [
      "cubic-bezier(0.16, 1, 0.3, 1)",
      "ease-out",
      "ease-in-out",
      "linear"
    ],
    "properties": "transform, box-shadow",
    "renderCost": "Composición y Repintado",
    "renderCostType": "paint",
    "costExplanation": "Se activa solo ante interacción (hover o focus-visible), combinando elevación por transform y proyección de sombra.",
    "description": "Elevación tridimensional con proyección de sombra acentuada ante el puntero o navegación por teclado.",
    "targetSelector": ".card-interactive",
    "previewClass": "shape--hover-lift",
    "htmlSnippet": "<div class=\"card-interactive\" tabindex=\"0\">\n  <strong>Pasa el cursor</strong>\n  <small>o presiona Tab</small>\n</div>",
    "previewHtml": "<div class=\"card-interactive is-playing\" tabindex=\"0\" data-motion-target>\n  <div class=\"card-glow\"></div>\n  <span class=\"card-icon\">\n    <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><polygon points=\"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2\"></polygon></svg>\n  </span>\n  <strong>Pasa el cursor</strong>\n  <small>o presiona Tab</small>\n</div>",
    "generateCss": (dur, timing) => `.card-interactive {
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
    "id": "flip-card",
    "name": "Tarjeta 3D Flip",
    "category": "Interacción",
    "defaultDuration": 0.6,
    "defaultTiming": "cubic-bezier(0.16, 1, 0.3, 1)",
    "timingOptions": [
      "cubic-bezier(0.16, 1, 0.3, 1)",
      "ease-out",
      "ease-in-out"
    ],
    "properties": "transform (rotateY)",
    "renderCost": "Favorables para composición",
    "renderCostType": "composite",
    "costExplanation": "Utiliza perspective: 1000px y rotateY(180deg) con transform-style: preserve-3d para realizar una rotación espacial fluida.",
    "description": "Giro tridimensional que revela información adicional en el reverso al pasar el cursor, presionar Tab o hacer clic.",
    "targetSelector": ".flip-inner",
    "previewClass": "shape--flip-card",
    "htmlSnippet": "<div class=\"flip-wrapper\" tabindex=\"0\">\n  <div class=\"flip-inner\">\n    <div class=\"flip-face flip-front\">\n      <span class=\"flip-tag\">Frente</span>\n      <strong>Pase Digital</strong>\n      <small>Pasa el cursor o presiona Tab</small>\n    </div>\n    <div class=\"flip-face flip-back\">\n      <span class=\"flip-tag flip-tag--alt\">Reverso</span>\n      <strong>Código de Acceso</strong>\n      <code class=\"flip-code\">#CSS-8902</code>\n    </div>\n  </div>\n</div>",
    "previewHtml": "<div class=\"flip-wrapper\" tabindex=\"0\" data-motion-target data-flip-card-widget>\n  <div class=\"flip-inner is-playing\">\n    <div class=\"flip-face flip-front\">\n      <span class=\"flip-tag\">Frente</span>\n      <strong>Pase Digital</strong>\n      <small>Pasa el cursor o presiona Tab</small>\n    </div>\n    <div class=\"flip-face flip-back\">\n      <span class=\"flip-tag flip-tag--alt\">Reverso</span>\n      <strong>Código de Acceso</strong>\n      <code class=\"flip-code\">#CSS-8902</code>\n    </div>\n  </div>\n</div>",
    "generateCss": (dur, timing) => `.flip-wrapper {
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
    "id": "button-press",
    "name": "Pulsación Táctil con Rebote",
    "category": "Interacción",
    "defaultDuration": 0.18,
    "defaultTiming": "cubic-bezier(0.16, 1, 0.3, 1)",
    "timingOptions": [
      "cubic-bezier(0.16, 1, 0.3, 1)",
      "ease-out",
      "ease-in-out"
    ],
    "properties": "transform (scale)",
    "renderCost": "Favorables para composición",
    "renderCostType": "composite",
    "costExplanation": "Respuesta háptica al presionar :active con scale(0.96) que rebota con resorte al soltar.",
    "description": "Micro-interacción táctil que comprime el botón simulando un interruptor físico.",
    "targetSelector": ".tactile-btn",
    "previewClass": "shape--button-press",
    "htmlSnippet": "<button class=\"tactile-btn\" type=\"button\">\n  <span>Haz clic aquí</span>\n</button>",
    "previewHtml": "<button class=\"tactile-btn is-playing\" type=\"button\" data-motion-target>\n  <span>Haz clic aquí</span>\n</button>",
    "generateCss": (dur, timing) => `.tactile-btn {
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
    "id": "magnetic-glow",
    "name": "Glow Magnético / Magnetic Glow",
    "category": "Interacción",
    "defaultDuration": 0.35,
    "defaultTiming": "cubic-bezier(0.16, 1, 0.3, 1)",
    "timingOptions": [
      "cubic-bezier(0.16, 1, 0.3, 1)",
      "ease-out",
      "ease-in-out"
    ],
    "properties": "opacity, transform",
    "renderCost": "Favorables para composición",
    "renderCostType": "composite",
    "costExplanation": "Foco radial difuso posicionado absolutamente que cobra opacidad ante :hover en el hilo compositor.",
    "description": "Iluminación focal que aparece bajo el puntero dentro de la tarjeta al aproximarse.",
    "targetSelector": ".magnetic-card",
    "previewClass": "shape--magnetic-glow",
    "htmlSnippet": "<div class=\"magnetic-card\" tabindex=\"0\">\n  <div class=\"magnetic-aura\"></div>\n  <div class=\"magnetic-inner\">\n    <strong>Tarjeta Interactiva</strong>\n    <p>Iluminación sutil al pasar</p>\n  </div>\n</div>",
    "previewHtml": "<div class=\"magnetic-card is-playing\" tabindex=\"0\" data-motion-target>\n  <div class=\"magnetic-aura\"></div>\n  <div class=\"magnetic-inner\">\n    <strong>Tarjeta Interactiva</strong>\n    <p>Iluminación sutil al pasar</p>\n  </div>\n</div>",
    "generateCss": (dur, timing) => `.magnetic-card {
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
    "id": "ripple-effect",
    "name": "Onda Radial / Click Ripple",
    "category": "Interacción",
    "defaultDuration": 0.6,
    "defaultTiming": "ease-out",
    "timingOptions": [
      "ease-out",
      "ease-in-out",
      "linear"
    ],
    "properties": "transform (scale), opacity",
    "renderCost": "Favorables para composición",
    "renderCostType": "composite",
    "costExplanation": "Expansión de onda circular mediante scale(0) a scale(2.5) con decremento progresivo de opacidad.",
    "description": "Efecto de onda expansiva al hacer clic sobre botones inspirada en Material Design.",
    "targetSelector": ".ripple-btn",
    "previewClass": "shape--ripple-effect",
    "htmlSnippet": "<button class=\"ripple-btn\" type=\"button\">\n  <span class=\"ripple-circle\"></span>\n  <span>Confirmar Envío</span>\n</button>",
    "previewHtml": "<button class=\"ripple-btn is-playing\" type=\"button\" data-motion-target>\n  <span class=\"ripple-circle\"></span>\n  <span>Confirmar Envío</span>\n</button>",
    "generateCss": (dur, timing) => `.ripple-btn {
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
    "id": "tilt-card",
    "name": "Inclinación 3D / Tilt Card",
    "category": "Interacción",
    "defaultDuration": 0.35,
    "defaultTiming": "cubic-bezier(0.16, 1, 0.3, 1)",
    "timingOptions": [
      "cubic-bezier(0.16, 1, 0.3, 1)",
      "ease-out",
      "ease-in-out"
    ],
    "properties": "transform (rotateX, rotateY)",
    "renderCost": "Favorables para composición",
    "renderCostType": "composite",
    "costExplanation": "Rotación angular en dos ejes combinados con perspectiva tridimensional sin recalcular layout.",
    "description": "Efecto holográfico de inclinación espacial al pasar el cursor sobre la tarjeta.",
    "targetSelector": ".tilt-box",
    "previewClass": "shape--tilt-card",
    "htmlSnippet": "<div class=\"tilt-box\" tabindex=\"0\">\n  <div class=\"tilt-glare\"></div>\n  <strong>Tarjeta 3D Parallax</strong>\n  <small>Pasa el puntero sobre los bordes</small>\n</div>",
    "previewHtml": "<div class=\"tilt-box is-playing\" tabindex=\"0\" data-motion-target>\n  <div class=\"tilt-glare\"></div>\n  <strong>Tarjeta 3D Parallax</strong>\n  <small>Pasa el puntero sobre los bordes</small>\n</div>",
    "generateCss": (dur, timing) => `.tilt-box {
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
    "id": "toggle-switch",
    "name": "Interruptor Switch Fluido",
    "category": "Interacción",
    "defaultDuration": 0.3,
    "defaultTiming": "cubic-bezier(0.16, 1, 0.3, 1)",
    "timingOptions": [
      "cubic-bezier(0.16, 1, 0.3, 1)",
      "ease-out",
      "ease-in-out"
    ],
    "properties": "transform (translateX), background-color",
    "renderCost": "Favorables para composición",
    "renderCostType": "composite",
    "costExplanation": "El pomo se traslada con translateX() mientras la base interpola color de fondo suavemente.",
    "description": "Interruptor basculante interactivo con rebote suave de parada para opciones activables.",
    "targetSelector": ".switch-shell",
    "previewClass": "shape--toggle-switch",
    "htmlSnippet": "<label class=\"switch-shell\">\n  <input type=\"checkbox\" class=\"switch-input\" checked />\n  <span class=\"switch-track\">\n    <span class=\"switch-thumb\"></span>\n  </span>\n</label>",
    "previewHtml": "<label class=\"switch-shell is-playing\" data-motion-target>\n  <input type=\"checkbox\" class=\"switch-input\" checked />\n  <span class=\"switch-track\">\n    <span class=\"switch-thumb\"></span>\n  </span>\n</label>",
    "generateCss": (dur, timing) => `.switch-shell {
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
    "id": "fab-expand",
    "name": "Botón Flotante Expansible (FAB)",
    "category": "Interacción",
    "defaultDuration": 0.35,
    "defaultTiming": "cubic-bezier(0.16, 1, 0.3, 1)",
    "timingOptions": [
      "cubic-bezier(0.16, 1, 0.3, 1)",
      "ease-out",
      "ease-in-out"
    ],
    "properties": "transform (rotate, translateY)",
    "renderCost": "Favorables para composición",
    "renderCostType": "composite",
    "costExplanation": "El botón principal rota 45 grados mientras las opciones satélite escalan en cascada.",
    "description": "Botón de acción circular que rota y despliega opciones secundarias ordenadas.",
    "targetSelector": ".fab-cluster",
    "previewClass": "shape--fab-expand",
    "htmlSnippet": "<div class=\"fab-cluster\">\n  <div class=\"fab-action-items\">\n    <div class=\"fab-mini fab-mini--1\">A</div>\n    <div class=\"fab-mini fab-mini--2\">B</div>\n  </div>\n  <button class=\"fab-trigger\" type=\"button\">+</button>\n</div>",
    "previewHtml": "<div class=\"fab-cluster is-playing\" data-motion-target>\n  <div class=\"fab-action-items\">\n    <div class=\"fab-mini fab-mini--1\">A</div>\n    <div class=\"fab-mini fab-mini--2\">B</div>\n  </div>\n  <button class=\"fab-trigger\" type=\"button\">+</button>\n</div>",
    "generateCss": (dur, timing) => `.fab-cluster {
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
    "id": "like-pop",
    "name": "Pop de Confirmación / Like Pop",
    "category": "Interacción",
    "defaultDuration": 0.5,
    "defaultTiming": "cubic-bezier(0.16, 1, 0.3, 1)",
    "timingOptions": [
      "cubic-bezier(0.16, 1, 0.3, 1)",
      "ease-out",
      "ease-in-out"
    ],
    "properties": "transform (scale)",
    "renderCost": "Favorables para composición",
    "renderCostType": "composite",
    "costExplanation": "Expansión con compresión scale(0) a scale(1.3) a scale(1) exclusivamente sobre transform.",
    "description": "Explosión elástica alegre al pulsar botones de Me gusta, favoritos o añadir a biblioteca.",
    "targetSelector": ".like-heart-btn",
    "previewClass": "shape--like-pop",
    "htmlSnippet": "<button class=\"like-heart-btn\" type=\"button\">\n  <span class=\"like-heart-glyph\">&hearts;</span>\n  <span>Me gusta</span>\n</button>",
    "previewHtml": "<button class=\"like-heart-btn is-playing\" type=\"button\" data-motion-target>\n  <span class=\"like-heart-glyph\">&hearts;</span>\n  <span>Me gusta</span>\n</button>",
    "generateCss": (dur, timing) => `.like-heart-btn {
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
    "id": "border-draw",
    "name": "Trazado de Contorno / Border Trace",
    "category": "Interacción",
    "defaultDuration": 0.4,
    "defaultTiming": "ease-out",
    "timingOptions": [
      "ease-out",
      "ease-in-out",
      "linear"
    ],
    "properties": "clip-path",
    "renderCost": "Repintado / Paint",
    "renderCostType": "paint",
    "costExplanation": "Dibuja el perímetro mediante transición en clip-path de un borde exterior decorativo.",
    "description": "Efecto de lápiz digital donde el contorno de la caja se dibuja suavemente ante el cursor.",
    "targetSelector": ".trace-card",
    "previewClass": "shape--border-draw",
    "htmlSnippet": "<div class=\"trace-card\" tabindex=\"0\">\n  <span class=\"trace-line\"></span>\n  <strong>Explorar Documentación</strong>\n</div>",
    "previewHtml": "<div class=\"trace-card is-playing\" tabindex=\"0\" data-motion-target>\n  <span class=\"trace-line\"></span>\n  <strong>Explorar Documentación</strong>\n</div>",
    "generateCss": (dur, timing) => `.trace-card {
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
  }
];
