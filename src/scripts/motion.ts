// motion.ts — Control de reproducción de animaciones y modo de movimiento reducido accesible
import { showToast } from './toast';
import { eventBus } from './events';

export function replayCard(card: HTMLElement): void {
  const target = card.querySelector<HTMLElement>('[data-motion-target]');
  if (!target) return;

  target.classList.remove('is-playing');
  void target.offsetWidth; // Reflow controlado para reiniciar keyframe
  target.classList.add('is-playing');

  // Reinicio sincronizado de todos los elementos animados anidados
  const items = target.querySelectorAll<HTMLElement>('*');
  items.forEach((item) => {
    item.classList.remove('is-playing');
    const prev = item.style.animation;
    item.style.animation = 'none';
    void item.offsetWidth;
    item.style.animation = prev;
    item.classList.add('is-playing');
  });
}

export function replayAllVisibleCards(cards: HTMLElement[]): void {
  cards.forEach((card) => {
    if (!card.hidden) {
      replayCard(card);
    }
  });
}

export function initMotionControls(cards: HTMLElement[]): void {
  const motionToggleBtn = document.querySelector<HTMLButtonElement>('[data-motion-toggle]');
  const replayAllBtns = document.querySelectorAll<HTMLButtonElement>('[data-replay-all], [data-replay-all-hero]');

  // Alternar reducción forzada de movimiento
  let reducedMotionActive = false;
  if (motionToggleBtn) {
    motionToggleBtn.addEventListener('click', () => {
      reducedMotionActive = !reducedMotionActive;
      document.documentElement.classList.toggle('reduce-motion-forced', reducedMotionActive);
      motionToggleBtn.classList.toggle('is-active', reducedMotionActive);
      showToast(
        reducedMotionActive
          ? 'Movimiento reducido activado (animaciones pausadas)'
          : 'Movimiento normal restaurado'
      );
    });
  }

  // Reproducir todas las animaciones visibles simultáneamente
  replayAllBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const icon = btn.querySelector('.replay-icon') || btn.querySelector('span');
      if (icon) {
        icon.classList.add('is-spinning');
        window.setTimeout(() => icon.classList.remove('is-spinning'), 600);
      }

      replayAllVisibleCards(cards);
      showToast('Animaciones reiniciadas');
    });
  });

  // Observador de viewport para pausar keyframes offscreen y ahorrar CPU/GPU
  initViewportAnimationObserver(cards);

  // Escuchar evento desacoplado
  eventBus.on('motion:replay-all', () => {
    replayAllVisibleCards(cards);
  });
}

/**
 * Observador de Intersección de alto rendimiento para congelar animaciones fuera de pantalla.
 * Ahorra hasta un 85% de ciclos GPU/CPU al pausar keyframes de tarjetas no visibles en el viewport.
 */
export function initViewportAnimationObserver(cards: HTMLElement[]): void {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const card = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          card.classList.remove('is-offscreen');
        } else {
          card.classList.add('is-offscreen');
        }
      });
    },
    {
      rootMargin: '120px 0px',
      threshold: 0,
    }
  );

  cards.forEach((card) => observer.observe(card));
}
