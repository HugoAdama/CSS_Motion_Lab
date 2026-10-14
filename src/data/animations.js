export const animations = [
  {
    id: 'fade-in',
    name: 'Fade in',
    category: 'Entrada',
    duration: '700ms',
    timing: 'ease-out',
    description: 'Aparición suave con aumento progresivo de opacidad y una leve elevación vertical.',
    previewClass: 'shape--fade-in',
    htmlSnippet: `<div class="toast-card">\n  <span class="icon">✓</span>\n  <div class="content">\n    <strong>¡Guardado con éxito!</strong>\n    <p>Tus cambios han sido sincronizados.</p>\n  </div>\n</div>`,
    code: `/* Animación Fade In */
.elemento {
  animation: fadeIn 700ms cubic-bezier(0.16, 1, 0.3, 1) both;
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
    duration: '650ms',
    timing: 'cubic-bezier(0.16, 1, 0.3, 1)',
    description: 'Entrada lateral dinámica con aceleración natural y amortiguación al llegar a la posición.',
    previewClass: 'shape--slide-in',
    htmlSnippet: `<div class="nav-chip">\n  <span class="badge">Nuevo</span>\n  <span>Panel de control</span>\n  <span class="arrow">→</span>\n</div>`,
    code: `/* Animación Slide In */
.elemento {
  animation: slideIn 650ms cubic-bezier(0.16, 1, 0.3, 1) both;
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
    duration: '850ms',
    timing: 'cubic-bezier(0.28, 0.84, 0.42, 1)',
    description: 'Rebote elástico y enérgico, ideal para destacar alertas, notificaciones o botones de acción.',
    previewClass: 'shape--bounce',
    htmlSnippet: `<div class="bell-badge">\n  <span class="bell-icon">🔔</span>\n  <span class="counter">+3</span>\n</div>`,
    code: `/* Animación Bounce */
.elemento {
  animation: bounce 850ms cubic-bezier(0.28, 0.84, 0.42, 1) both;
  transform-origin: center bottom;
}

@keyframes bounce {
  0% { transform: translateY(0); }
  25% { transform: translateY(-22px) scaleY(1.05); }
  50% { transform: translateY(0) scaleY(0.95); }
  75% { transform: translateY(-9px) scaleY(1.02); }
  100% { transform: translateY(0) scaleY(1); }
}`,
  },
  {
    id: 'pulse',
    name: 'Pulse',
    category: 'Énfasis',
    duration: '1.6s',
    timing: 'ease-in-out',
    description: 'Latido continuo y armonioso con halo difuso para estados en vivo o elementos que requieren foco.',
    previewClass: 'shape--pulse',
    htmlSnippet: `<div class="status-beacon">\n  <span class="halo"></span>\n  <span class="dot"></span>\n  <span class="label">En vivo</span>\n</div>`,
    code: `/* Animación Pulse */
.elemento {
  animation: pulse 1.6s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(105, 92, 245, 0.4);
  }
  50% {
    transform: scale(1.06);
    box-shadow: 0 0 0 14px rgba(105, 92, 245, 0);
  }
}`,
  },
  {
    id: 'shake',
    name: 'Shake',
    category: 'Énfasis',
    duration: '500ms',
    timing: 'ease-in-out',
    description: 'Sacudida horizontal rápida para indicar validación fallida, contraseñas erróneas o restricciones.',
    previewClass: 'shape--shake',
    htmlSnippet: `<div class="input-alert">\n  <span class="icon">⚠️</span>\n  <span>Acceso denegado</span>\n</div>`,
    code: `/* Animación Shake */
.elemento.error {
  animation: shake 500ms ease-in-out both;
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
    duration: '900ms',
    timing: 'linear',
    description: 'Indicador giratorio continuo con anillo cónico y resplandor, comunicando carga o procesamiento.',
    previewClass: 'shape--spinner',
    htmlSnippet: `<div class="loader" role="status" aria-label="Cargando">\n  <span class="spinner-ring"></span>\n</div>`,
    code: `/* Animación Spinner */
.spinner {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 3px solid rgba(105, 92, 245, 0.18);
  border-top-color: #695cf5;
  animation: spin 900ms linear infinite;
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
    duration: '2.4s',
    timing: 'steps(24, end)',
    description: 'Efecto de máquina de escribir con cursor parpadeante, perfecto para títulos o terminales.',
    previewClass: 'shape--typing',
    htmlSnippet: `<div class="terminal-box">\n  <span class="prompt">$</span>\n  <span class="typing-text">console.log("Motion!");</span>\n</div>`,
    code: `/* Animación Typing */
.texto-tipeado {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid #695cf5;
  animation:
    typing 2.4s steps(24, end) both,
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
    duration: '240ms',
    timing: 'cubic-bezier(0.16, 1, 0.3, 1)',
    description: 'Elevación tridimensional con sombra expansiva al interactuar con cursor o foco del teclado.',
    previewClass: 'shape--hover-lift',
    htmlSnippet: `<div class="card" tabindex="0">\n  <h3>Tarjeta Pro</h3>\n  <p>Pasa el cursor para elevar</p>\n</div>`,
    code: `/* Interacción Hover Lift */
.tarjeta {
  transition:
    transform 240ms cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 240ms cubic-bezier(0.16, 1, 0.3, 1);
}

.tarjeta:hover,
.tarjeta:focus-visible {
  transform: translateY(-8px) scale(1.01);
  box-shadow: 0 20px 35px -8px rgba(105, 92, 245, 0.22);
}`,
  },
];

export const categories = ['Todas', 'Entrada', 'Énfasis', 'Carga', 'Texto', 'Interacción'];
