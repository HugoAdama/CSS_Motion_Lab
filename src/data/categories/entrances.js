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
];
