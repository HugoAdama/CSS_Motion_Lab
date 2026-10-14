export const animations = [
  {
    id: 'fade-in',
    name: 'Fade in',
    category: 'Entrada',
    defaultDuration: 0.7,
    defaultTiming: 'cubic-bezier(0.16, 1, 0.3, 1)',
    timingOptions: ['ease-out', 'ease-in-out', 'linear', 'cubic-bezier(0.16, 1, 0.3, 1)'],
    properties: 'opacity, transform',
    renderCost: 'Composición (GPU)',
    renderCostType: 'composite',
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
    renderCost: 'Composición (GPU)',
    renderCostType: 'composite',
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
    renderCost: 'Composición (GPU)',
    renderCostType: 'composite',
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
    renderCost: 'Composición (GPU)',
    renderCostType: 'composite',
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
    renderCost: 'Composición (GPU)',
    renderCostType: 'composite',
    description: 'Rotación continua de 360 grados sobre un anillo con borde acentuado.',
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
}`,
  },
];

export const categories = ['Todas', 'Entrada', 'Énfasis', 'Carga', 'Texto', 'Interacción'];
