// motion.ts — Control de reproducción de animaciones y modo de movimiento reducido accesible
import { showToast } from './toast';

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

      cards.forEach((card) => {
        if (!card.hidden) {
          replayCard(card);
        }
      });

      showToast('Animaciones reiniciadas');
    });
  });
}
