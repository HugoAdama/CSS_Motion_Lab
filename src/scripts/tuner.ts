// tuner.ts — Calibración interactiva en vivo de duración, timing y escalonamiento
import { replayCard } from './motion';
import { showToast } from './toast';

export function updateCardParameters(card: HTMLElement, animMap: Map<string, any>): void {
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
    const newCss = anim.generateCss(duration.toFixed(2), timing, staggerDelay.toFixed(2));
    if (codeCss) codeCss.textContent = newCss;
    if (codeFull && codeHtml) {
      codeFull.textContent = `<!-- HTML -->\n${codeHtml.textContent}\n\n<!-- CSS -->\n<style>\n${newCss}\n</style>`;
    }
  }

  replayCard(card);
}

export function initCardTuning(cards: HTMLElement[], animMap: Map<string, any>): void {
  cards.forEach((card) => {
    const durationInput = card.querySelector<HTMLInputElement>('[data-duration-input]');
    const timingSelect = card.querySelector<HTMLSelectElement>('[data-timing-select]');
    const staggerInput = card.querySelector<HTMLInputElement>('[data-stagger-input]');
    const resetBtn = card.querySelector<HTMLButtonElement>('[data-reset-tuning]');

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
        const defDuration = card.dataset.defaultDuration || '0.7';
        const defTiming = card.dataset.defaultTiming || 'ease-out';
        const defStagger = card.dataset.defaultStagger || '0.1';

        if (durationInput) durationInput.value = defDuration;
        if (timingSelect) timingSelect.value = defTiming;
        if (staggerInput) staggerInput.value = defStagger;

        updateCardParameters(card, animMap);
        showToast('Parámetros restablecidos');
      });
    }
  });
}
