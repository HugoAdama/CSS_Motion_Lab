// Catálogo de animaciones: Entrada (10 ejemplos)

export const entrancesAnimations = [
  {
    id: "fade-in",
    name: "Fade in",
    category: "Entrada",
    defaultDuration: 0.7,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["ease-out","ease-in-out","linear","cubic-bezier(0.16, 1, 0.3, 1)"],
    properties: "opacity, transform",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Propiedades como transform y opacity suelen delegarse al hilo compositor sin recalcular la geometría.",
    description: "Aparición suave con incremento de opacidad y desplazamiento vertical leve.",
    targetSelector: ".toast-card",
    previewClass: "shape--fade-in",
    htmlSnippet: "<div class=\"toast-card\">\n  <span class=\"toast-icon\">OK</span>\n  <div class=\"toast-info\">\n    <strong>Guardado con éxito</strong>\n    <p>Tus cambios han sido sincronizados.</p>\n  </div>\n</div>",
    previewHtml: "<div class=\"toast-card is-playing\" data-motion-target>\n  <span class=\"toast-icon\">\n    <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><polyline points=\"20 6 9 17 4 12\"></polyline></svg>\n  </span>\n  <div class=\"toast-info\">\n    <strong>Guardado con éxito</strong>\n    <span>Tus cambios han sido sincronizados</span>\n  </div>\n</div>",
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

@media (prefers-reduced-motion: reduce) {
  .toast-card {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}`
  },
  {
    id: "slide-in",
    name: "Slide in",
    category: "Entrada",
    defaultDuration: 0.65,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["ease-out","ease-in-out","linear","cubic-bezier(0.16, 1, 0.3, 1)"],
    properties: "opacity, transform",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Usa transform en lugar de left o margin-left para evitar disparar la fase de layout en cada cuadro.",
    description: "Desplazamiento lateral desde el margen con aceleración natural y desaceleración suave.",
    targetSelector: ".nav-chip",
    previewClass: "shape--slide-in",
    htmlSnippet: "<div class=\"nav-chip\">\n  <span class=\"chip-dot\"></span>\n  <span class=\"chip-text\">Panel lateral activo</span>\n  <span class=\"chip-arrow\">&rarr;</span>\n</div>",
    previewHtml: "<div class=\"nav-chip is-playing\" data-motion-target>\n  <span class=\"chip-dot\"></span>\n  <span class=\"chip-text\">Panel lateral activo</span>\n  <span class=\"chip-arrow\">&rarr;</span>\n</div>",
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
}`
  },
  {
    id: "scale-up",
    name: "Scale Up / Pop In",
    category: "Entrada",
    defaultDuration: 0.45,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "opacity, transform",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Escalado directo desde 0.65 hasta 1.0 mediante transform: scale() en el hilo compositor.",
    description: "Aparición centrada expansiva con ligero rebote para ventanas emergentes o tarjetas de confirmación.",
    targetSelector: ".pop-badge",
    previewClass: "shape--scale-up",
    htmlSnippet: "<div class=\"pop-badge\">\n  <span class=\"pop-icon\">&#10003;</span>\n  <strong>Acción Confirmada</strong>\n</div>",
    previewHtml: "<div class=\"pop-badge is-playing\" data-motion-target>\n  <span class=\"pop-icon\">&#10003;</span>\n  <strong>Acción Confirmada</strong>\n</div>",
    generateCss: (dur, timing) => `.pop-badge {
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
    id: "rotate-in",
    name: "Rotate In",
    category: "Entrada",
    defaultDuration: 0.55,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "opacity, transform",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Rotación angular combinada con escala en transform sobre la GPU sin modificar el layout.",
    description: "Entrada angular con giro controlado y escala para insignias, sellos o premios desbloqueados.",
    targetSelector: ".reward-badge",
    previewClass: "shape--rotate-in",
    htmlSnippet: "<div class=\"reward-badge\">\n  <span class=\"reward-star\">&#9733;</span>\n  <span>Nivel Pro Desbloqueado</span>\n</div>",
    previewHtml: "<div class=\"reward-badge is-playing\" data-motion-target>\n  <span class=\"reward-star\">&#9733;</span>\n  <span>Nivel Pro Desbloqueado</span>\n</div>",
    generateCss: (dur, timing) => `.reward-badge {
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
    id: "flip-in-x",
    name: "Flip In X / Volteo Horizontal",
    category: "Entrada",
    defaultDuration: 0.6,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "transform (rotateX), opacity",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Giro tridimensional alrededor del eje X con perspective, ejecutado enteramente en el hilo compositor.",
    description: "Volteo 3D que cae como pestaña de marcador de panel para tarjetas de estadísticas.",
    targetSelector: ".kpi-card",
    previewClass: "shape--flip-in-x",
    htmlSnippet: "<div class=\"kpi-card\">\n  <span class=\"kpi-label\">Usuarios Activos</span>\n  <strong class=\"kpi-value\">+24,850</strong>\n</div>",
    previewHtml: "<div class=\"kpi-card is-playing\" data-motion-target>\n  <span class=\"kpi-label\">Usuarios Activos</span>\n  <strong class=\"kpi-value\">+24,850</strong>\n</div>",
    generateCss: (dur, timing) => `.kpi-card {
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
    id: "slide-up",
    name: "Slide Up / Deslizamiento Ascendente",
    category: "Entrada",
    defaultDuration: 0.5,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "opacity, transform",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Desplaza desde translateY(32px) a 0 con fade in en compositor sin forzar reflow.",
    description: "Elevación limpia desde abajo para componentes que ingresan al viewport.",
    targetSelector: ".action-pill",
    previewClass: "shape--slide-up",
    htmlSnippet: "<div class=\"action-pill\">\n  <span class=\"pill-dot\"></span>\n  <span>Sincronización en curso</span>\n</div>",
    previewHtml: "<div class=\"action-pill is-playing\" data-motion-target>\n  <span class=\"pill-dot\"></span>\n  <span>Sincronización en curso</span>\n</div>",
    generateCss: (dur, timing) => `.action-pill {
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
    id: "blur-in",
    name: "Blur In / Desenfoque Progresivo",
    category: "Entrada",
    defaultDuration: 0.6,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "filter, opacity",
    renderCost: "Repintado / Paint (filtro)",
    renderCostType: "paint",
    costExplanation: "Anima filter: blur() requiriendo rasterización de filtros por convolución en los cuadros iniciales.",
    description: "Transición elegante desde desenfoque profundo hacia nitidez fotográfica.",
    targetSelector: ".glass-quote",
    previewClass: "shape--blur-in",
    htmlSnippet: "<div class=\"glass-quote\">\n  <p>\"Diseño en movimiento sin fricción.\"</p>\n</div>",
    previewHtml: "<div class=\"glass-quote is-playing\" data-motion-target>\n  <p>\"Diseño en movimiento sin fricción.\"</p>\n</div>",
    generateCss: (dur, timing) => `.glass-quote {
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
    id: "curtain-reveal",
    name: "Curtain Reveal / Recorte en Cortina",
    category: "Entrada",
    defaultDuration: 0.55,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "clip-path",
    renderCost: "Repintado / Paint (máscara)",
    renderCostType: "paint",
    costExplanation: "Utiliza clip-path: inset() para recortar geométricamente la vista del elemento sin moverlo del flujo.",
    description: "Despliegue horizontal que descorre una cortina visual para desvelar contenido.",
    targetSelector: ".curtain-panel",
    previewClass: "shape--curtain-reveal",
    htmlSnippet: "<div class=\"curtain-panel\">\n  <strong>Módulo Verificado</strong>\n  <span>100% código nativo</span>\n</div>",
    previewHtml: "<div class=\"curtain-panel is-playing\" data-motion-target>\n  <strong>Módulo Verificado</strong>\n  <span>100% código nativo</span>\n</div>",
    generateCss: (dur, timing) => `.curtain-panel {
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
    id: "bounce-in",
    name: "Bounce In / Entrada con Rebote",
    category: "Entrada",
    defaultDuration: 0.7,
    defaultTiming: "cubic-bezier(0.28, 0.84, 0.42, 1)",
    timingOptions: ["cubic-bezier(0.28, 0.84, 0.42, 1)","ease-out","ease-in-out"],
    properties: "transform, opacity",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Rebote elástico sobre scale() que oscila en torno a 1.0 sin disparar reflow.",
    description: "Aparición enérgica con sobreimpulso elástico para botones primarios o alertas destacadas.",
    targetSelector: ".bounce-in-box",
    previewClass: "shape--bounce-in",
    htmlSnippet: "<div class=\"bounce-in-box\">\n  <span class=\"badge-icon\">!</span>\n  <span>Actualización Disponible</span>\n</div>",
    previewHtml: "<div class=\"bounce-in-box is-playing\" data-motion-target>\n  <span class=\"badge-icon\">!</span>\n  <span>Actualización Disponible</span>\n</div>",
    generateCss: (dur, timing) => `.bounce-in-box {
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
    id: "drop-in",
    name: "Drop In / Descenso con Impacto",
    category: "Entrada",
    defaultDuration: 0.5,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "transform, opacity",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Caída desde el margen superior con parada elástica en translateY() delegada al hilo compositor.",
    description: "Descenso vertical rápido que simula gravedad para cabeceras o banners flotantes.",
    targetSelector: ".drop-card",
    previewClass: "shape--drop-in",
    htmlSnippet: "<div class=\"drop-card\">\n  <strong>Alerta del Servidor</strong>\n  <small>Latencia normalizada</small>\n</div>",
    previewHtml: "<div class=\"drop-card is-playing\" data-motion-target>\n  <strong>Alerta del Servidor</strong>\n  <small>Latencia normalizada</small>\n</div>",
    generateCss: (dur, timing) => `.drop-card {
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
    id: "zoom-in-down",
    name: "Zoom In Down / Descenso Proyectado",
    category: "Entrada",
    defaultDuration: 0.6,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "transform, opacity",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Combina translateY(-50px) y scale(0.45) delegados al procesador gráfico.",
    description: "Aparición proyectada desde el fondo superior con aumento de escala y amortiguación frontal.",
    targetSelector: ".zoom-down-card",
    previewClass: "shape--zoom-in-down",
    htmlSnippet: "<div class=\"zoom-down-card\">\n  <span class=\"zoom-icon\">&darr;</span>\n  <strong>Descarga completada</strong>\n</div>",
    previewHtml: "<div class=\"zoom-down-card is-playing\" data-motion-target>\n  <span class=\"zoom-icon\">&darr;</span>\n  <strong>Descarga completada</strong>\n</div>",
    generateCss: (dur, timing) => `.zoom-down-card {
  padding: 12px 20px;
  border-radius: 12px;
  background: #141523;
  border: 1px solid rgba(123, 110, 246, 0.35);
  animation: zoomInDown ${dur}s ${timing} both;
}

@keyframes zoomInDown {
  0% {
    opacity: 0;
    transform: translateY(-50px) scale(0.45);
  }
  60% {
    opacity: 1;
    transform: translateY(8px) scale(1.05);
  }
  100% {
    transform: translateY(0) scale(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .zoom-down-card { animation: none !important; opacity: 1 !important; transform: none !important; }
}`
  },
  {
    id: "slide-in-right",
    name: "Slide In Right / Entrada Lateral Derecha",
    category: "Entrada",
    defaultDuration: 0.55,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "transform, opacity",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Usa translateX() sin alterar el flujo de maquetación ni disparar recálculos de geometría.",
    description: "Desplazamiento horizontal fluido desde el margen derecho con desaceleración natural.",
    targetSelector: ".slide-right-card",
    previewClass: "shape--slide-in-right",
    htmlSnippet: "<div class=\"slide-right-card\">\n  <span class=\"slide-right-indicator\"></span>\n  <span>Notificación entrante</span>\n</div>",
    previewHtml: "<div class=\"slide-right-card is-playing\" data-motion-target>\n  <span class=\"slide-right-indicator\"></span>\n  <span>Notificación entrante</span>\n</div>",
    generateCss: (dur, timing) => `.slide-right-card {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 18px;
  border-radius: 12px;
  background: #141523;
  border: 1px solid rgba(61, 221, 168, 0.3);
  animation: slideInRight ${dur}s ${timing} both;
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(45px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .slide-right-card { animation: none !important; opacity: 1 !important; transform: none !important; }
}`
  },
  {
    id: "expand-horizontally",
    name: "Apertura Expansiva Horizontal (Iris Reveal)",
    category: "Entrada",
    defaultDuration: 0.5,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "clip-path",
    renderCost: "Repintado / Paint",
    renderCostType: "paint",
    costExplanation: "Transición de recorte geométrico con inset(0 50% 0 50%) a inset(0 0 0 0) sin reflow.",
    description: "Revelado en telón horizontal desde el centro hacia los extremos como un diafragma cinematográfico.",
    targetSelector: ".iris-banner",
    previewClass: "shape--expand-horizontally",
    htmlSnippet: "<div class=\"iris-banner\">\n  <strong>CONFIRMACIÓN OFICIAL</strong>\n</div>",
    previewHtml: "<div class=\"iris-banner is-playing\" data-motion-target>\n  <strong>CONFIRMACIÓN OFICIAL</strong>\n</div>",
    generateCss: (dur, timing) => `.iris-banner {
  padding: 12px 24px;
  border-radius: 12px;
  background: linear-gradient(135deg, #7b6ef6, #3ddda8);
  color: #fff;
  font-weight: 800;
  letter-spacing: 0.05em;
  animation: irisExpand ${dur}s ${timing} both;
}

@keyframes irisExpand {
  from {
    clip-path: inset(0 50% 0 50% round 12px);
    opacity: 0;
  }
  to {
    clip-path: inset(0 0 0 0 round 12px);
    opacity: 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .iris-banner { animation: none !important; clip-path: none !important; opacity: 1 !important; }
}`
  },
  {
    id: "flip-in-y",
    name: "Giro 3D en Eje Y (Flip In Y)",
    category: "Entrada",
    defaultDuration: 0.65,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "transform (rotateY), opacity",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Rotación en perspectiva espacial sobre rotateY() ejecutada en hardware 3D.",
    description: "Volteo vertical tridimensional similar al giro de una tarjeta de presentación física.",
    targetSelector: ".flip-y-card",
    previewClass: "shape--flip-in-y",
    htmlSnippet: "<div class=\"flip-y-card\">\n  <span class=\"flip-badge\">3D</span>\n  <strong>Tarjeta Virtual</strong>\n</div>",
    previewHtml: "<div class=\"flip-y-card is-playing\" data-motion-target>\n  <span class=\"flip-badge\">3D</span>\n  <strong>Tarjeta Virtual</strong>\n</div>",
    generateCss: (dur, timing) => `.flip-y-card {
  perspective: 600px;
  padding: 14px 22px;
  border-radius: 12px;
  background: #141523;
  border: 1px solid rgba(123, 110, 246, 0.35);
  animation: flipInY ${dur}s ${timing} both;
}

@keyframes flipInY {
  from {
    opacity: 0;
    transform: perspective(600px) rotateY(-80deg);
  }
  to {
    opacity: 1;
    transform: perspective(600px) rotateY(0deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .flip-y-card { animation: none !important; transform: none !important; opacity: 1 !important; }
}`
  },
  {
    id: "roll-in",
    name: "Rodamiento Dinámico (Roll In)",
    category: "Entrada",
    defaultDuration: 0.6,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "transform, opacity",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Sincroniza translateX(-100%) con rotate(-120deg) directamente en el hilo compositor.",
    description: "Rodamiento elástico desde el lateral izquierdo con giro dinámico de rueda de engranaje.",
    targetSelector: ".roll-pill",
    previewClass: "shape--roll-in",
    htmlSnippet: "<div class=\"roll-pill\">\n  <span class=\"roll-icon\">&sect;</span>\n  <span>Modo Activo</span>\n</div>",
    previewHtml: "<div class=\"roll-pill is-playing\" data-motion-target>\n  <span class=\"roll-icon\">&sect;</span>\n  <span>Modo Activo</span>\n</div>",
    generateCss: (dur, timing) => `.roll-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 999px;
  background: #141523;
  border: 1px solid rgba(61, 221, 168, 0.4);
  animation: rollIn ${dur}s ${timing} both;
}

@keyframes rollIn {
  from {
    opacity: 0;
    transform: translateX(-60px) rotate(-120deg);
  }
  to {
    opacity: 1;
    transform: translateX(0) rotate(0deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .roll-pill { animation: none !important; transform: none !important; opacity: 1 !important; }
}`
  },
  {
    id: "spiral-in",
    name: "Entrada en Espiral (Spiral Twist)",
    category: "Entrada",
    defaultDuration: 0.7,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "transform, opacity",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Giro centrípeto continuo con rotación combinada y escala progresiva de 0.2 a 1.",
    description: "Entrada arremolinada con giro de 180° y expansión centrada para elementos emblemáticos.",
    targetSelector: ".spiral-box",
    previewClass: "shape--spiral-in",
    htmlSnippet: "<div class=\"spiral-box\">\n  <div class=\"spiral-core\">NUEVO</div>\n</div>",
    previewHtml: "<div class=\"spiral-box is-playing\" data-motion-target>\n  <div class=\"spiral-core\">NUEVO</div>\n</div>",
    generateCss: (dur, timing) => `.spiral-box {
  display: grid;
  place-items: center;
  animation: spiralIn ${dur}s ${timing} both;
}

@keyframes spiralIn {
  from {
    opacity: 0;
    transform: rotate(-180deg) scale(0.2);
  }
  to {
    opacity: 1;
    transform: rotate(0deg) scale(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .spiral-box { animation: none !important; transform: none !important; opacity: 1 !important; }
}`
  },
  {
    id: "swirl-in",
    name: "Remolino con Desenfoque (Swirl Blur)",
    category: "Entrada",
    defaultDuration: 0.65,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "transform, opacity, filter",
    renderCost: "Composición y Repintado",
    renderCostType: "paint",
    costExplanation: "Transición coordinada de filter: blur() y rotación con escalado sobre la capa gráfica.",
    description: "Vórtice visual con desenfoque que se disipa con nitidez al estabilizar la orientación final.",
    targetSelector: ".swirl-card",
    previewClass: "shape--swirl-in",
    htmlSnippet: "<div class=\"swirl-card\">\n  <span class=\"swirl-tag\">LAB</span>\n  <strong>Efecto Vórtice</strong>\n</div>",
    previewHtml: "<div class=\"swirl-card is-playing\" data-motion-target>\n  <span class=\"swirl-tag\">LAB</span>\n  <strong>Efecto Vórtice</strong>\n</div>",
    generateCss: (dur, timing) => `.swirl-card {
  padding: 12px 20px;
  border-radius: 12px;
  background: #141523;
  border: 1px solid rgba(123, 110, 246, 0.3);
  animation: swirlIn ${dur}s ${timing} both;
}

@keyframes swirlIn {
  from {
    opacity: 0;
    filter: blur(10px);
    transform: rotate(35deg) scale(0.7);
  }
  to {
    opacity: 1;
    filter: blur(0);
    transform: rotate(0deg) scale(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .swirl-card { animation: none !important; filter: none !important; transform: none !important; opacity: 1 !important; }
}`
  },
  {
    id: "fold-in",
    name: "Despliegue 3D Origami (Fold In Top)",
    category: "Entrada",
    defaultDuration: 0.55,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "transform (rotateX), opacity",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Anclaje en top center con rotación negativa en rotateX() simulando una bisagra superior.",
    description: "Despliegue hacia abajo en perspectiva como una página doblada o marquesina abatible.",
    targetSelector: ".fold-panel",
    previewClass: "shape--fold-in",
    htmlSnippet: "<div class=\"fold-panel\">\n  <strong>Aviso Importante</strong>\n  <p>Actualización en curso</p>\n</div>",
    previewHtml: "<div class=\"fold-panel is-playing\" data-motion-target>\n  <strong>Aviso Importante</strong>\n  <p>Actualización en curso</p>\n</div>",
    generateCss: (dur, timing) => `.fold-panel {
  transform-origin: top center;
  perspective: 700px;
  padding: 12px 18px;
  border-radius: 12px;
  background: #141523;
  border: 1px solid rgba(255, 189, 46, 0.4);
  animation: foldIn ${dur}s ${timing} both;
}

@keyframes foldIn {
  from {
    opacity: 0;
    transform: perspective(700px) rotateX(-90deg);
  }
  to {
    opacity: 1;
    transform: perspective(700px) rotateX(0deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .fold-panel { animation: none !important; transform: none !important; opacity: 1 !important; }
}`
  },
  {
    id: "stamp-in",
    name: "Impacto Sello (Stamp Slam)",
    category: "Entrada",
    defaultDuration: 0.45,
    defaultTiming: "cubic-bezier(0.2, 0.8, 0.2, 1)",
    timingOptions: ["cubic-bezier(0.2, 0.8, 0.2, 1)","ease-out","cubic-bezier(0.16, 1, 0.3, 1)"],
    properties: "transform, opacity",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Contracción violenta de escala (1.8 a 1.0) con giro leve de 4 grados que simula un cuño de tinta.",
    description: "Golpe contundente desde el frente con inclinación orgánica para sellos de estado o aprobación.",
    targetSelector: ".stamp-box",
    previewClass: "shape--stamp-in",
    htmlSnippet: "<div class=\"stamp-box\">\n  <span>APROBADO</span>\n</div>",
    previewHtml: "<div class=\"stamp-box is-playing\" data-motion-target>\n  <span>APROBADO</span>\n</div>",
    generateCss: (dur, timing) => `.stamp-box {
  display: inline-block;
  padding: 8px 18px;
  border: 2px solid #3ddda8;
  border-radius: 8px;
  color: #3ddda8;
  font-weight: 800;
  letter-spacing: 0.1em;
  animation: stampImpact ${dur}s ${timing} both;
}

@keyframes stampImpact {
  0% {
    opacity: 0;
    transform: scale(1.9) rotate(-10deg);
  }
  70% {
    opacity: 1;
    transform: scale(0.95) rotate(-3deg);
  }
  100% {
    transform: scale(1) rotate(-4deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .stamp-box { animation: none !important; transform: rotate(-4deg) !important; opacity: 1 !important; }
}`
  },
  {
    id: "pop-spring",
    name: "Salto Elástico (Overshoot Spring Pop)",
    category: "Entrada",
    defaultDuration: 0.5,
    defaultTiming: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    timingOptions: ["cubic-bezier(0.34, 1.56, 0.64, 1)","ease-out","ease-in-out"],
    properties: "transform, opacity",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Ecuación de rebote elástico mediante curva Bezier con rebasamiento superior (1.56).",
    description: "Aparición instantánea y elástica que supera su tamaño natural antes de reposar suavemente.",
    targetSelector: ".spring-chip",
    previewClass: "shape--pop-spring",
    htmlSnippet: "<div class=\"spring-chip\">\n  <span class=\"spring-dot\"></span>\n  <strong>Elemento Activo</strong>\n</div>",
    previewHtml: "<div class=\"spring-chip is-playing\" data-motion-target>\n  <span class=\"spring-dot\"></span>\n  <strong>Elemento Activo</strong>\n</div>",
    generateCss: (dur, timing) => `.spring-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 999px;
  background: #7b6ef6;
  color: #fff;
  animation: springPop ${dur}s ${timing} both;
}

@keyframes springPop {
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .spring-chip { animation: none !important; transform: scale(1) !important; opacity: 1 !important; }
}`
  },
  {
    id: "skew-in-left",
    name: "Entrada Inclinada en Eje X (Skew In)",
    category: "Entrada",
    defaultDuration: 0.5,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "transform (skewX, translateX), opacity",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Transformación geométrica sobre skewX(-20deg) y translateX con aceleración GPU.",
    description: "Aparición dinámica con sesgo angular lateral que se endereza suavemente hasta su posición recta.",
    targetSelector: ".skew-in-badge",
    previewClass: "shape--skew-in-left",
    htmlSnippet: "<div class=\"skew-in-badge\">\n  <span class=\"skew-sym\">&#9889;</span>\n  <strong>Activación Rápida</strong>\n</div>",
    previewHtml: "<div class=\"skew-in-badge is-playing\" data-motion-target>\n  <span class=\"skew-sym\">&#9889;</span>\n  <strong>Activación Rápida</strong>\n</div>",
    generateCss: (dur, timing) => `.skew-in-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 18px;
  border-radius: 8px;
  background: #7b6ef6;
  color: #fff;
  animation: skewInLeft ${dur}s ${timing} both;
}

@keyframes skewInLeft {
  from { opacity: 0; transform: translateX(-40px) skewX(-20deg); }
  to { opacity: 1; transform: translateX(0) skewX(0deg); }
}

@media (prefers-reduced-motion: reduce) {
  .skew-in-badge { animation: none !important; opacity: 1 !important; transform: none !important; }
}`
  },
  {
    id: "zoom-in-rotate",
    name: "Zoom con Rotación Angular (Zoom In Rotate)",
    category: "Entrada",
    defaultDuration: 0.55,
    defaultTiming: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    timingOptions: ["cubic-bezier(0.34, 1.56, 0.64, 1)","ease-out","ease-in-out"],
    properties: "transform (scale, rotate), opacity",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Combinación de escala y rotación de 45deg ejecutada completamente en el compositor.",
    description: "Efecto de enfoque dinámico con giro inicial y desaceleración elástica pronunciada.",
    targetSelector: ".zoom-rotate-card",
    previewClass: "shape--zoom-in-rotate",
    htmlSnippet: "<div class=\"zoom-rotate-card\">\n  <div class=\"zoom-icon-box\">&#9670;</div>\n  <span>Insignia Pro</span>\n</div>",
    previewHtml: "<div class=\"zoom-rotate-card is-playing\" data-motion-target>\n  <div class=\"zoom-icon-box\">&#9670;</div>\n  <span>Insignia Pro</span>\n</div>",
    generateCss: (dur, timing) => `.zoom-rotate-card {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 18px;
  border-radius: 12px;
  background: #141523;
  border: 1px solid rgba(123, 110, 246, 0.35);
  animation: zoomInRotate ${dur}s ${timing} both;
}

@keyframes zoomInRotate {
  from { opacity: 0; transform: scale(0.3) rotate(-45deg); }
  to { opacity: 1; transform: scale(1) rotate(0deg); }
}

@media (prefers-reduced-motion: reduce) {
  .zoom-rotate-card { animation: none !important; opacity: 1 !important; transform: none !important; }
}`
  },
  {
    id: "slide-fade-diag",
    name: "Entrada Diagonal con Desvanecimiento",
    category: "Entrada",
    defaultDuration: 0.45,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "transform (translate), opacity",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Desplazamiento bidimensional simultáneo en X e Y optimizado para 60 FPS.",
    description: "Trayectoria diagonal suave desde la esquina superior izquierda con aumento continuo de opacidad.",
    targetSelector: ".diag-slide-pill",
    previewClass: "shape--slide-fade-diag",
    htmlSnippet: "<div class=\"diag-slide-pill\">\n  <span>Confirmación Diagonal</span>\n</div>",
    previewHtml: "<div class=\"diag-slide-pill is-playing\" data-motion-target>\n  <span>Confirmación Diagonal</span>\n</div>",
    generateCss: (dur, timing) => `.diag-slide-pill {
  padding: 8px 18px;
  border-radius: 999px;
  background: #3ddda8;
  color: #0b0c14;
  font-weight: 700;
  animation: slideFadeDiag ${dur}s ${timing} both;
}

@keyframes slideFadeDiag {
  from { opacity: 0; transform: translate(-30px, -30px); }
  to { opacity: 1; transform: translate(0, 0); }
}

@media (prefers-reduced-motion: reduce) {
  .diag-slide-pill { animation: none !important; opacity: 1 !important; transform: none !important; }
}`
  },
  {
    id: "elastic-snap-in",
    name: "Enganche Elástico Instantáneo (Elastic Snap)",
    category: "Entrada",
    defaultDuration: 0.6,
    defaultTiming: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    timingOptions: ["cubic-bezier(0.34, 1.56, 0.64, 1)","ease-out","ease-in-out"],
    properties: "transform, opacity",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Ecuación de rebote con sobrepaso de escala 1.25 antes de regresar a la dimensión unitaria.",
    description: "Aparición tipo muelle que se estira y contrae velozmente hasta fijarse firmemente en el lienzo.",
    targetSelector: ".elastic-snap-box",
    previewClass: "shape--elastic-snap-in",
    htmlSnippet: "<div class=\"elastic-snap-box\">\n  <span class=\"snap-icon\">&#10004;</span>\n  <strong>Completado</strong>\n</div>",
    previewHtml: "<div class=\"elastic-snap-box is-playing\" data-motion-target>\n  <span class=\"snap-icon\">&#10004;</span>\n  <strong>Completado</strong>\n</div>",
    generateCss: (dur, timing) => `.elastic-snap-box {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 12px;
  background: #141523;
  border: 1px solid rgba(61, 221, 168, 0.4);
  color: #3ddda8;
  animation: elasticSnapIn ${dur}s ${timing} both;
}

@keyframes elasticSnapIn {
  0% { opacity: 0; transform: scale(0.2); }
  70% { opacity: 1; transform: scale(1.18); }
  100% { opacity: 1; transform: scale(1); }
}

@media (prefers-reduced-motion: reduce) {
  .elastic-snap-box { animation: none !important; opacity: 1 !important; transform: none !important; }
}`
  },
  {
    id: "slide-drop-blur",
    name: "Caída con Desenfoque Cinético (Drop Blur)",
    category: "Entrada",
    defaultDuration: 0.5,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "transform, opacity, filter",
    renderCost: "Repintado y Composición",
    renderCostType: "paint",
    costExplanation: "Filtro blur() gradual durante el recorrido vertical en translateY.",
    description: "Descenso desde la parte superior con desenfoque de velocidad que se disuelve al tocar el suelo.",
    targetSelector: ".drop-blur-card",
    previewClass: "shape--slide-drop-blur",
    htmlSnippet: "<div class=\"drop-blur-card\">\n  <strong>Alerta de Sistema</strong>\n</div>",
    previewHtml: "<div class=\"drop-blur-card is-playing\" data-motion-target>\n  <strong>Alerta de Sistema</strong>\n</div>",
    generateCss: (dur, timing) => `.drop-blur-card {
  padding: 12px 24px;
  border-radius: 10px;
  background: #ff6e65;
  color: #fff;
  font-weight: 700;
  animation: dropBlurIn ${dur}s ${timing} both;
}

@keyframes dropBlurIn {
  from { opacity: 0; transform: translateY(-40px); filter: blur(8px); }
  to { opacity: 1; transform: translateY(0); filter: blur(0); }
}

@media (prefers-reduced-motion: reduce) {
  .drop-blur-card { animation: none !important; filter: none !important; opacity: 1 !important; transform: none !important; }
}`
  },
  {
    id: "pivot-down-in",
    name: "Pivoteo Colgante (Pivot Down In)",
    category: "Entrada",
    defaultDuration: 0.65,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "transform (rotate), opacity",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Rotación angular con punto de pivote en transform-origin: top left.",
    description: "Caída angular como un cuadro sostenido de una esquina superior que oscila hasta estabilizarse.",
    targetSelector: ".pivot-tag-item",
    previewClass: "shape--pivot-down-in",
    htmlSnippet: "<div class=\"pivot-tag-item\">\n  <span>Etiqueta Colgante</span>\n</div>",
    previewHtml: "<div class=\"pivot-tag-item is-playing\" data-motion-target>\n  <span>Etiqueta Colgante</span>\n</div>",
    generateCss: (dur, timing) => `.pivot-tag-item {
  display: inline-block;
  padding: 8px 16px;
  border-radius: 6px;
  background: #141523;
  border: 1px solid rgba(123, 110, 246, 0.4);
  color: #fff;
  transform-origin: top left;
  animation: pivotDownIn ${dur}s ${timing} both;
}

@keyframes pivotDownIn {
  0% { opacity: 0; transform: rotate(-60deg); }
  60% { opacity: 1; transform: rotate(12deg); }
  100% { opacity: 1; transform: rotate(0deg); }
}

@media (prefers-reduced-motion: reduce) {
  .pivot-tag-item { animation: none !important; opacity: 1 !important; transform: none !important; }
}`
  },
  {
    id: "expand-vertical-wipe",
    name: "Apertura en Cortina Vertical (Vertical Wipe)",
    category: "Entrada",
    defaultDuration: 0.5,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "clip-path, opacity",
    renderCost: "Repintado de máscara",
    renderCostType: "paint",
    costExplanation: "Uso de clip-path: inset(0 0 100% 0) progresivo para revelar el elemento de arriba hacia abajo.",
    description: "Revelado en persiana vertical sin desplazar los elementos adyacentes del flujo DOM.",
    targetSelector: ".vertical-wipe-card",
    previewClass: "shape--expand-vertical-wipe",
    htmlSnippet: "<div class=\"vertical-wipe-card\">\n  <strong>Contenido Revelado</strong>\n</div>",
    previewHtml: "<div class=\"vertical-wipe-card is-playing\" data-motion-target>\n  <strong>Contenido Revelado</strong>\n</div>",
    generateCss: (dur, timing) => `.vertical-wipe-card {
  padding: 14px 24px;
  border-radius: 10px;
  background: linear-gradient(135deg, #7b6ef6, #ff6e65);
  color: #fff;
  font-weight: 700;
  animation: verticalWipe ${dur}s ${timing} both;
}

@keyframes verticalWipe {
  from { clip-path: inset(0 0 100% 0); opacity: 0.4; }
  to { clip-path: inset(0 0 0 0); opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .vertical-wipe-card { animation: none !important; clip-path: none !important; opacity: 1 !important; }
}`
  },
  {
    id: "card-deck-deal",
    name: "Reparto de Baraja (Card Deck Deal)",
    category: "Entrada",
    defaultDuration: 0.55,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "transform (translate, rotate), opacity",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Deslizamiento desde el lateral derecho combinado con rotate(8deg) hacia la posición cero.",
    description: "Entrada similar al reparto de una baraja de naipes que desliza y asienta la tarjeta con elegancia.",
    targetSelector: ".deck-deal-card",
    previewClass: "shape--card-deck-deal",
    htmlSnippet: "<div class=\"deck-deal-card\">\n  <div class=\"deck-card-top\">&#9824;</div>\n  <span>Carta de Juego</span>\n</div>",
    previewHtml: "<div class=\"deck-deal-card is-playing\" data-motion-target>\n  <div class=\"deck-card-top\">&#9824;</div>\n  <span>Carta de Juego</span>\n</div>",
    generateCss: (dur, timing) => `.deck-deal-card {
  width: 140px;
  padding: 12px;
  border-radius: 10px;
  background: #141523;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  animation: deckDeal ${dur}s ${timing} both;
}

@keyframes deckDeal {
  from { opacity: 0; transform: translate(50px, -20px) rotate(12deg); }
  to { opacity: 1; transform: translate(0, 0) rotate(0deg); }
}

@media (prefers-reduced-motion: reduce) {
  .deck-deal-card { animation: none !important; opacity: 1 !important; transform: none !important; }
}`
  },
  {
    id: "puff-in-smoke",
    name: "Contracción desde Humo (Puff In)",
    category: "Entrada",
    defaultDuration: 0.45,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "transform (scale), filter, opacity",
    renderCost: "Repintado y Composición",
    renderCostType: "paint",
    costExplanation: "Contracción de escala de 1.4 a 1.0 combinada con desenfoque decreciente de 6px a 0.",
    description: "Aparición densa y cinematográfica que condensa el elemento desde un estado expandido y etéreo.",
    targetSelector: ".puff-in-badge",
    previewClass: "shape--puff-in-smoke",
    htmlSnippet: "<div class=\"puff-in-badge\">\n  <span>Aparición Mágica</span>\n</div>",
    previewHtml: "<div class=\"puff-in-badge is-playing\" data-motion-target>\n  <span>Aparición Mágica</span>\n</div>",
    generateCss: (dur, timing) => `.puff-in-badge {
  padding: 10px 20px;
  border-radius: 999px;
  background: linear-gradient(135deg, #7b6ef6, #a79bfd);
  color: #fff;
  font-weight: 700;
  animation: puffInSmoke ${dur}s ${timing} both;
}

@keyframes puffInSmoke {
  from { opacity: 0; transform: scale(1.4); filter: blur(6px); }
  to { opacity: 1; transform: scale(1); filter: blur(0); }
}

@media (prefers-reduced-motion: reduce) {
  .puff-in-badge { animation: none !important; filter: none !important; opacity: 1 !important; transform: none !important; }
}`
  },
  {
    id: "swing-in-top",
    name: "Descenso Oscilante (Swing In Top)",
    category: "Entrada",
    defaultDuration: 0.65,
    defaultTiming: "cubic-bezier(0.16, 1, 0.3, 1)",
    timingOptions: ["cubic-bezier(0.16, 1, 0.3, 1)","ease-out","ease-in-out"],
    properties: "transform (rotateX), opacity",
    renderCost: "Favorables para composición",
    renderCostType: "composite",
    costExplanation: "Rotación en perspectiva 3D sobre el eje X con transform-origin: top.",
    description: "Entrada como trampilla de techo o cartel abatible que cae y oscila armónicamente en su bisagra.",
    targetSelector: ".swing-in-sign",
    previewClass: "shape--swing-in-top",
    htmlSnippet: "<div class=\"swing-in-sign\">\n  <span>Letrero Abatible</span>\n</div>",
    previewHtml: "<div class=\"swing-in-sign is-playing\" data-motion-target>\n  <span>Letrero Abatible</span>\n</div>",
    generateCss: (dur, timing) => `.swing-in-sign {
  padding: 12px 24px;
  border-radius: 8px;
  background: #141523;
  border: 1px solid rgba(123, 110, 246, 0.4);
  color: #fff;
  font-weight: 700;
  transform-origin: top center;
  animation: swingInTop ${dur}s ${timing} both;
}

@keyframes swingInTop {
  0% { opacity: 0; transform: perspective(400px) rotateX(-90deg); }
  50% { transform: perspective(400px) rotateX(20deg); }
  100% { opacity: 1; transform: perspective(400px) rotateX(0deg); }
}

@media (prefers-reduced-motion: reduce) {
  .swing-in-sign { animation: none !important; opacity: 1 !important; transform: none !important; }
}`
  }
];
