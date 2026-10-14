// tuner.ts — Calibración interactiva en vivo de duración, timing, escalonamiento y visualizador Bézier
import { replayCard } from './motion';
import { showToast } from './toast';
import { eventBus } from './events';
import type { AnimationDefinition, BezierCoordinates, BezierSvgPlot } from '../types';

export function parseTimingCoordinates(timing: string): BezierCoordinates {
  const clean = timing.trim();
  if (clean === 'linear') return { x1: 0, y1: 0, x2: 1, y2: 1 };
  if (clean === 'ease') return { x1: 0.25, y1: 0.1, x2: 0.25, y2: 1 };
  if (clean === 'ease-in') return { x1: 0.42, y1: 0, x2: 1, y2: 1 };
  if (clean === 'ease-out') return { x1: 0, y1: 0, x2: 0.58, y2: 1 };
  if (clean === 'ease-in-out') return { x1: 0.42, y1: 0, x2: 0.58, y2: 1 };
  if (clean.startsWith('step')) return { x1: 0.05, y1: 0.95, x2: 0.05, y2: 0.95 };

  const match = clean.match(/cubic-bezier\(\s*([\d.-]+)\s*,\s*([\d.-]+)\s*,\s*([\d.-]+)\s*,\s*([\d.-]+)\s*\)/);
  if (match) {
    return {
      x1: parseFloat(match[1]),
      y1: parseFloat(match[2]),
      x2: parseFloat(match[3]),
      y2: parseFloat(match[4]),
    };
  }

  return { x1: 0.25, y1: 0.1, x2: 0.25, y2: 1 };
}

/**
 * Función pura desacoplada para calcular los atributos SVG de la curva Bézier
 */
export function calculateBezierSvgPlot(timing: string): BezierSvgPlot {
  const { x1, y1, x2, y2 } = parseTimingCoordinates(timing);

  // Mapear de [0..1] a coordenadas dentro de viewBox [10..90, 50..10]
  const p1x = 10 + x1 * 80;
  const p1y = Math.max(2, Math.min(58, 50 - y1 * 40));
  const p2x = 10 + x2 * 80;
  const p2y = Math.max(2, Math.min(58, 50 - y2 * 40));

  return {
    pathD: `M 10 50 C ${p1x.toFixed(1)} ${p1y.toFixed(1)}, ${p2x.toFixed(1)} ${p2y.toFixed(1)}, 90 10`,
    tangentD: `M 10 50 L ${p1x.toFixed(1)} ${p1y.toFixed(1)} M 90 10 L ${p2x.toFixed(1)} ${p2y.toFixed(1)}`,
    cp1: { x: p1x, y: p1y },
    cp2: { x: p2x, y: p2y },
  };
}

export function updateBezierVisualizer(card: HTMLElement, timing: string, duration: number): void {
  const curvePath = card.querySelector<SVGPathElement>('[data-curve-path]');
  const curveTangent = card.querySelector<SVGPathElement>('[data-curve-tangent]');
  const curveDot = card.querySelector<SVGCircleElement>('[data-curve-dot]');
  const curveName = card.querySelector<HTMLElement>('[data-curve-name]');
  const cp1 = card.querySelector<SVGCircleElement>('[data-curve-cp1]');
  const cp2 = card.querySelector<SVGCircleElement>('[data-curve-cp2]');

  if (!curvePath) return;

  const plot = calculateBezierSvgPlot(timing);

  curvePath.setAttribute('d', plot.pathD);

  if (curveTangent) {
    curveTangent.setAttribute('d', plot.tangentD);
  }

  if (cp1) {
    cp1.setAttribute('cx', plot.cp1.x.toFixed(1));
    cp1.setAttribute('cy', plot.cp1.y.toFixed(1));
  }
  if (cp2) {
    cp2.setAttribute('cx', plot.cp2.x.toFixed(1));
    cp2.setAttribute('cy', plot.cp2.y.toFixed(1));
  }

  if (cp1) {
    cp1.setAttribute('cx', p1x.toFixed(1));
    cp1.setAttribute('cy', p1y.toFixed(1));
  }
  if (cp2) {
    cp2.setAttribute('cx', p2x.toFixed(1));
    cp2.setAttribute('cy', p2y.toFixed(1));
  }

  if (curveName) {
    curveName.textContent = timing;
  }

  // Animar la bolita indicadora a lo largo del tiempo de la animación
  if (curveDot) {
    curveDot.style.animation = 'none';
    void curveDot.getBoundingClientRect();
    curveDot.style.animation = `curveTravel ${duration}s ${timing} both`;
  }
}

export function updateCardParameters(card: HTMLElement, animMap: Map<string, AnimationDefinition>): void {
  const id = card.dataset.id;
  const durationInput = card.querySelector<HTMLInputElement>('[data-duration-input]');
  const timingSelect = card.querySelector<HTMLSelectElement>('[data-timing-select]');
  const staggerInput = card.querySelector<HTMLInputElement>('[data-stagger-input]');
  const durationLabel = card.querySelector<HTMLElement>('[data-duration-value]');
  const staggerLabel = card.querySelector<HTMLElement>('[data-stagger-value]');
  const target = card.querySelector<HTMLElement>('[data-motion-target]');
  const codeCss = card.querySelector<HTMLElement>('[data-code-css]');
  const codeHtml = card.querySelector<HTMLElement>('[data-code-html]');
  const codeFull = card.querySelector<HTMLElement>('[data-code-full]');

  if (!durationInput || !timingSelect || !target || !id) return;

  const duration = parseFloat(durationInput.value);
  const timing = timingSelect.value;
  const staggerDelay = staggerInput ? parseFloat(staggerInput.value) : 0.1;

  if (durationLabel) {
    durationLabel.textContent = `${duration.toFixed(2)}s`;
  }
  if (staggerLabel && staggerInput) {
    staggerLabel.textContent = `${Math.round(staggerDelay * 1000)}ms`;
  }

  // Actualizar el gráfico Bézier de la tarjeta
  updateBezierVisualizer(card, timing, duration);

  // Aplicar variables y propiedades dinámicas a la vista previa
  target.style.animationDuration = `${duration}s`;
  target.style.animationTimingFunction = timing;
  target.style.transitionDuration = `${duration}s`;
  target.style.transitionTimingFunction = timing;

  if (id === 'staggered-reveal') {
    target.style.setProperty('--stagger-delay', `${staggerDelay}s`);
    const items = target.querySelectorAll<HTMLElement>('.stagger-item');
    items.forEach((item) => {
      item.style.animationDuration = `${duration}s`;
      item.style.animationTimingFunction = timing;
    });
  }

  const subAnimated = target.querySelectorAll<HTMLElement>('*');
  subAnimated.forEach((el) => {
    el.style.animationDuration = `${duration}s`;
    el.style.animationTimingFunction = timing;
    el.style.transitionDuration = `${duration}s`;
    el.style.transitionTimingFunction = timing;
  });

  // Regenerar bloques de código interactivos
  const anim = animMap.get(id);
  if (anim && anim.generateCss) {
    const newCss = anim.generateCss(parseFloat(duration.toFixed(2)), timing, parseFloat(staggerDelay.toFixed(2)));
    if (codeCss) codeCss.textContent = newCss;
    if (codeFull && codeHtml) {
      codeFull.textContent = `<!-- HTML -->\n${codeHtml.textContent}\n\n<!-- CSS -->\n<style>\n${newCss}\n</style>`;
    }
  }

  // Notificar al bus desacoplado
  eventBus.emit('tuner:change', { id, duration, timing, stagger: staggerDelay });

  replayCard(card);
}

export function initCardTuning(cards: HTMLElement[], animMap: Map<string, AnimationDefinition>): void {
  cards.forEach((card) => {
    const durationInput = card.querySelector<HTMLInputElement>('[data-duration-input]');
    const timingSelect = card.querySelector<HTMLSelectElement>('[data-timing-select]');
    const staggerInput = card.querySelector<HTMLInputElement>('[data-stagger-input]');
    const resetBtn = card.querySelector<HTMLButtonElement>('[data-reset-tuning]');

    // Inicializar visualizador Bézier con los valores por defecto
    const defDuration = parseFloat(card.dataset.defaultDuration || '0.7');
    const defTiming = card.dataset.defaultTiming || 'ease-out';
    updateBezierVisualizer(card, defTiming, defDuration);

    if (durationInput) {
      durationInput.addEventListener('input', () => updateCardParameters(card, animMap));
    }
    if (timingSelect) {
      timingSelect.addEventListener('change', () => updateCardParameters(card, animMap));
    }
    if (staggerInput) {
      staggerInput.addEventListener('input', () => updateCardParameters(card, animMap));
    }
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        const defDurationVal = card.dataset.defaultDuration || '0.7';
        const defTimingVal = card.dataset.defaultTiming || 'ease-out';
        const defStaggerVal = card.dataset.defaultStagger || '0.1';

        if (durationInput) durationInput.value = defDurationVal;
        if (timingSelect) timingSelect.value = defTimingVal;
        if (staggerInput) staggerInput.value = defStaggerVal;

        updateCardParameters(card, animMap);
        showToast('Parámetros restablecidos');
      });
    }
  });
}
